"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface PerlinNoiseGeneratorProps {
  width?: number;
  height?: number;
  scale?: number;
  seed?: number;
  octaves?: number;
  persistence?: number;
}

const GRADIENTS: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
];

const PIXEL_SIZE = 20;
const GRID_SIZE = 15;
const DEFAULT_SCALE = 0.05;
const DEFAULT_SEED = 42;

const generateCustomCursor = () =>
  `data:image/svg+xml;base64,${btoa(
    `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="10.5" stroke="#ED3039" stroke-width="4"/>
    </svg>`
  )}`;

/* Utility Functions */

function randomGradient(x: number, y: number, seed: number): [number, number] {
  const hash = Math.sin(x * 127.1 + y * 311.7 + seed) * 43758.5453123;
  const gradientIndex = Math.abs(Math.floor(hash) % GRADIENTS.length);
  return GRADIENTS[gradientIndex];
}

function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function dotGridGradient(
  ix: number,
  iy: number,
  x: number,
  y: number,
  seed: number
): number {
  const gradient = randomGradient(ix, iy, seed);
  const dx = x - ix;
  const dy = y - iy;
  return dx * gradient[0] + dy * gradient[1];
}

function perlin(x: number, y: number, seed: number): number {
  const x0 = Math.floor(x);
  const x1 = x0 + 1;
  const y0 = Math.floor(y);
  const y1 = y0 + 1;

  const sx = fade(x - x0);
  const sy = fade(y - y0);

  const n0 = dotGridGradient(x0, y0, x, y, seed);
  const n1 = dotGridGradient(x1, y0, x, y, seed);
  const ix0 = (1 - sx) * n0 + sx * n1;

  const n2 = dotGridGradient(x0, y1, x, y, seed);
  const n3 = dotGridGradient(x1, y1, x, y, seed);
  const ix1 = (1 - sx) * n2 + sx * n3;

  return (1 - sy) * ix0 + sy * ix1;
}

function perlinWithOctaves(
  x: number,
  y: number,
  seed: number,
  octaves: number,
  persistence: number
): number {
  let total = 0;
  let frequency = 1;
  let amplitude = 1;
  let maxValue = 0;

  for (let i = 0; i < octaves; i++) {
    total += perlin(x * frequency, y * frequency, seed) * amplitude;
    maxValue += amplitude;
    amplitude *= persistence;
    frequency *= 2;
  }

  return total / maxValue;
}

/* Main Component */

const PerlinNoiseGenerator: React.FC<PerlinNoiseGeneratorProps> = ({
  width = 700,
  height = 520,
  scale = DEFAULT_SCALE,
  seed = DEFAULT_SEED,
  octaves = 1,
  persistence = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const zoomCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentScale, setCurrentScale] = useState(scale);
  const [currentSeed, setCurrentSeed] = useState(seed);
  const [isHovering, setIsHovering] = useState(false);

  const drawNoise = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const noiseValue = perlinWithOctaves(
          x * currentScale,
          y * currentScale,
          currentSeed,
          octaves,
          persistence
        );
        const brightness = Math.floor((noiseValue + 1) * 127.5);
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, [currentScale, currentSeed, octaves, persistence, width, height]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      setIsHovering(true);

      const canvas = canvasRef.current;
      const zoomCanvas = zoomCanvasRef.current;
      if (!canvas || !zoomCanvas) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * canvas.width;
      const mouseY = ((event.clientY - rect.top) / rect.height) * canvas.height;

      const zoomCtx = zoomCanvas.getContext("2d");
      if (!zoomCtx) return;

      zoomCtx.clearRect(0, 0, zoomCanvas.width, zoomCanvas.height);

      for (let dx = -GRID_SIZE / 2; dx < GRID_SIZE / 2; dx++) {
        for (let dy = -GRID_SIZE / 2; dy < GRID_SIZE / 2; dy++) {
          const pixelData = canvas
            .getContext("2d")
            ?.getImageData(mouseX + dx, mouseY + dy, 1, 1).data;
          if (pixelData) {
            const brightness = pixelData[0];
            zoomCtx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
            zoomCtx.fillRect(
              (dx + GRID_SIZE / 2) * PIXEL_SIZE,
              (dy + GRID_SIZE / 2) * PIXEL_SIZE,
              PIXEL_SIZE,
              PIXEL_SIZE
            );

            // Draw brightness value as text
            zoomCtx.fillStyle = brightness > 128 ? "black" : "white";
            zoomCtx.font = "12px Arial";
            zoomCtx.textAlign = "center";
            zoomCtx.textBaseline = "middle";
            zoomCtx.fillText(
              `${Math.floor((brightness / 255) * 100)}`,
              (dx + GRID_SIZE / 2) * PIXEL_SIZE + PIXEL_SIZE / 2,
              (dy + GRID_SIZE / 2) * PIXEL_SIZE + PIXEL_SIZE / 2
            );
          }
        }
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    const zoomCanvas = zoomCanvasRef.current;
    if (!zoomCanvas) return;

    const zoomCtx = zoomCanvas.getContext("2d");
    if (!zoomCtx) return;

    // Add the background color and the message
    zoomCtx.fillStyle = "hsl(252, 97%, 69%)";
    zoomCtx.fillRect(0, 0, zoomCanvas.width, zoomCanvas.height);

    zoomCtx.font = "16px Arial";
    zoomCtx.fillStyle = "white";
    zoomCtx.textAlign = "center";
    zoomCtx.textBaseline = "middle";
    zoomCtx.fillText(
      "Hover over the noise to zoom",
      zoomCanvas.width / 2,
      zoomCanvas.height / 2
    );
  }, []);

  useEffect(() => {
    drawNoise();
    handleMouseLeave();
  }, [drawNoise, handleMouseLeave]);

  return (
    <div className="grid lg:grid-cols-3 gap-4 p-4 bg-secondary rounded-xl">
      <div className="lg:col-span-2">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="flex flex-col items-center lg:col-span-1">
        <canvas
          ref={zoomCanvasRef}
          width={PIXEL_SIZE * GRID_SIZE}
          height={PIXEL_SIZE * GRID_SIZE}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
        <ControlPanel
          scale={currentScale}
          setScale={setCurrentScale}
          seed={currentSeed}
          setSeed={setCurrentSeed}
        />
      </div>
    </div>
  );
};

/* Control Panel Component */

const ControlPanel: React.FC<{
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  seed: number;
  setSeed: React.Dispatch<React.SetStateAction<number>>;
}> = ({ scale, setScale, seed, setSeed }) => (
  <div className="mt-4 space-y-4 w-full">
    <label className="block text-foreground font-medium">
      Scale:
      <input
        type="range"
        min="0.001"
        max="0.2"
        step="0.005"
        value={0.2 - scale + 0.001}
        onChange={(e) => setScale(0.2 - parseFloat(e.target.value) + 0.001)}
        className="mt-1 w-full h-2 rounded-lg"
      />
    </label>
    <label className="block text-foreground">
      Seed:
      <input
        type="number"
        value={seed}
        onChange={(e) => {
          const newSeed =
            e.target.value === "" ? 0 : parseInt(e.target.value, 10);
          setSeed(newSeed);
        }}
        className="border p-2 w-full rounded-md shadow-sm"
      />
    </label>
  </div>
);

export default PerlinNoiseGenerator;
