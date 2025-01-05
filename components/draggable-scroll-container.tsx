"use client";

import { getDeviceType } from "@/lib/detect-device-type";
import React, { useRef, useState, useCallback, useEffect } from "react";

type DraggableScrollContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function DraggableScrollContainer({
  children,
  className = "",
}: DraggableScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [distance, setDistance] = useState(0);
  const deviceType = getDeviceType();

  const DRAG_THRESHOLD = 5;

  const mouseDownHandler = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setDistance(0);
  }, []);

  const mouseMoveHandler = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      containerRef.current.scrollLeft = scrollLeft - walk;
      setDistance(Math.abs(walk));
    },
    [isDragging, startX, scrollLeft]
  );

  const endDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const mouseUpHandler = useCallback(() => {
    endDrag();
  }, [endDrag]);

  const mouseLeaveHandler = useCallback(() => {
    endDrag();
  }, [endDrag]);

  const onClickCapture = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (distance > DRAG_THRESHOLD) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [distance]
  );

  if (deviceType === "mouse") {
    return (
      <div
        ref={containerRef}
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
        onMouseLeave={mouseLeaveHandler}
        onClickCapture={onClickCapture}
        className={`cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar ${className}`}
        style={{
          scrollBehavior: "auto",
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto no-scrollbar ${className}`}
      style={{
        scrollBehavior: "auto",
      }}
    >
      {children}
    </div>
  );
}
