import React, { useEffect, useMemo, useRef, useState } from "react";

export function TriangleDivBottom({
  direction = "right",
  color = "#44a6e8",
  className = "",
  upDown = false,
}) {
  const containerRef = useRef(null);
  const [dimension, setDimension] = useState({ w: 20, h: 20 });

  const [isDark, setIsDark] = useState(false);

  const w = useMemo(() => dimension.w, [dimension.w]);
  const h = useMemo(() => dimension.h, [dimension.h]);

  const points = {
    right: upDown
      ? [`0,0`, `0,${h}`, `${w},${0}`]
      : [`0,0`, `0,${h}`, `${w},${h}`],
    left: upDown
      ? [`${w},0`, `${w},${h}`, `0,${0}`]
      : [`${w},0`, `${w},${h}`, `0,${h}`],
  };

  const initDimension = () => {
    setDimension({
      w: containerRef.current.clientWidth,
      h: containerRef.current.clientHeight,
    });
  };

  const handleChangedTheme = () => {
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  useEffect(() => {
    initDimension();
    // eslint-disable-next-line
  }, [containerRef.current]);

  useEffect(() => {
    window.addEventListener("resize", initDimension);

    const attrObserver = new MutationObserver((mutations) => {
      mutations.forEach((mu) => {
        if (mu.type !== "attributes" && mu.attributeName !== "class") return;
        handleChangedTheme();
      });
    });

    attrObserver.observe(window.document.documentElement, { attributes: true });

    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ overflow: "hidden" }}
    >
      <svg width={w} height={h}>
        <defs>
          <linearGradient id="CustomGradient" limitingConeAngle={35}>
            <stop offset="0%" stop-color="#1ee9a2" />
            <stop offset="100%" stop-color="#75aefc" />
            {/* <stop offset="0%" stop-color="#19F18F" />
            <stop offset="50%" stop-color="#4EC1F6" />
            <stop offset="100%" stop-color="#E582FC" /> */}
          </linearGradient>
        </defs>
        <polygon
          points={points[direction].join(" ")}
          fill={isDark ? "#0f172a" : "#ffffff"}
        />
      </svg>
    </div>
  );
}
