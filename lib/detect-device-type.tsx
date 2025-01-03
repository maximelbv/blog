export type DeviceType = "touch" | "mouse" | "unknown";

export const detectDeviceType = (): DeviceType => {
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

  if (isTouchDevice) {
    return "touch";
  } else if (hasFinePointer) {
    return "mouse";
  } else {
    return "unknown";
  }
};
