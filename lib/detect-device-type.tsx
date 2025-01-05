import { useEffect, useState, useCallback } from "react";

/**
 * A senior-level React hook that detects whether the user is primarily
 * using a mouse or a touch-based pointer. It also updates automatically
 * if the input method changes during the session (e.g., 2-in-1 laptops).
 *
 * Features:
 * - Initial detection via matchMedia to see if we have a fine or coarse pointer.
 * - Listens to pointer events to handle dynamic changes in pointer type.
 * - Provides a flexible API for building additional logic based on the current pointer type.
 */

type DeviceType = "mouse" | "touch";

export function useDeviceType(): {
  deviceType: DeviceType;
  isTouchDevice: boolean;
  isMouseDevice: boolean;
} {
  const getInitialDeviceType = useCallback((): DeviceType => {
    // If you only need to do server-side rendering safe checks, you can do:
    if (typeof window === "undefined") {
      // Default assumption on SSR
      return "mouse";
    }

    // 1. Try to detect "fine pointer" (mouse, trackpad) via media query
    //    If it matches `(pointer: fine)`, assume 'mouse'.
    // 2. Otherwise, assume 'touch'.
    // For more advanced usage, you could also check `(any-pointer: fine)`
    // or `(any-pointer: coarse)`.

    const finePointerMq = window.matchMedia("(pointer: fine)");
    return finePointerMq.matches ? "mouse" : "touch";
  }, []);

  const [deviceType, setDeviceType] =
    useState<DeviceType>(getInitialDeviceType);

  useEffect(() => {
    if (typeof window === "undefined") return;

    /**
     * Handler for pointermove events. We rely on e.pointerType:
     * - "mouse"
     * - "touch"
     * - "pen"
     * You could filter out "pen" or treat it separately, but for simplicity,
     * we classify "pen" as a "touch" device in many UI contexts. This is optional
     * depending on your app's needs.
     */
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        setDeviceType("mouse");
      } else {
        // "touch" or "pen"
        setDeviceType("touch");
      }
    };

    // Listen to pointermove to dynamically switch device types if needed
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    // Also respond to changes in the pointer media query:
    //    e.g. convertible devices might toggle from "fine" to "coarse".
    const finePointerMq = window.matchMedia("(pointer: fine)");
    const onMediaChange = (event: MediaQueryListEvent) => {
      setDeviceType(event.matches ? "mouse" : "touch");
    };

    finePointerMq.addEventListener("change", onMediaChange);

    // Cleanup
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      finePointerMq.removeEventListener("change", onMediaChange);
    };
  }, [getInitialDeviceType]);

  return {
    deviceType,
    isTouchDevice: deviceType === "touch",
    isMouseDevice: deviceType === "mouse",
  };
}
