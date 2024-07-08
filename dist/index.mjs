// src/ResponsiveTitle.tsx
import React, { useState, useEffect, useRef } from "react";
var ResponsiveTitle = ({
  text,
  containerStyle,
  ...props
}) => {
  const parentRef = useRef(null);
  const textMeasureRef = useRef(null);
  const [fontSize, setFontSize] = useState("calc(5vw + 1vh)");
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (!isMounted)
      return;
    const updateFontSize = () => {
      if (parentRef.current && textMeasureRef.current) {
        const containerWidth = parentRef.current.offsetWidth;
        const textWidth = textMeasureRef.current.offsetWidth;
        if (textWidth > 0) {
          const scaleFactor = containerWidth / textWidth;
          const newFontSize = Math.max(
            10,
            Math.min(400, 16 * scaleFactor)
          );
          setFontSize(`${newFontSize}px`);
        }
      }
    };
    updateFontSize();
    const throttledUpdateFontSize = throttle(updateFontSize, 50);
    window.addEventListener("resize", throttledUpdateFontSize);
    return () => {
      window.removeEventListener("resize", throttledUpdateFontSize);
    };
  }, [text, isMounted]);
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: parentRef,
      style: {
        width: "100%",
        border: "1px solid transparent",
        ...containerStyle
      },
      ...props
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        ref: textMeasureRef,
        style: {
          fontSize: "16px",
          visibility: "hidden",
          whiteSpace: "nowrap",
          position: "absolute"
        }
      },
      text
    ),
    /* @__PURE__ */ React.createElement(
      "p",
      {
        style: {
          fontSize,
          margin: 0,
          whiteSpace: "nowrap",
          transition: "font-size 0.1s ease",
          lineHeight: 1
        }
      },
      text
    )
  );
};
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    const now = Date.now();
    if (!lastRan) {
      func.apply(context, args);
      lastRan = now;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (now - lastRan >= limit) {
          func.apply(context, args);
          lastRan = now;
        }
      }, limit - (now - lastRan));
    }
  };
}
var ResponsiveTitle_default = ResponsiveTitle;
export {
  ResponsiveTitle_default as ResponsiveTitle
};
