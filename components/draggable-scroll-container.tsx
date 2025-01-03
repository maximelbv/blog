"use client";

import React, { useRef, useState, useCallback } from "react";

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

  const touchStartHandler = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);

    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);

    setDistance(0);
  }, []);

  const touchMoveHandler = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      containerRef.current.scrollLeft = scrollLeft - walk;
      setDistance(Math.abs(walk));
    },
    [isDragging, startX, scrollLeft]
  );

  const touchEndHandler = useCallback(() => {
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

  return (
    <div
      ref={containerRef}
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
      onMouseLeave={mouseLeaveHandler}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
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
