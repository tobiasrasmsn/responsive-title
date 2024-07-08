"use client";
import React, { useState, useEffect, useRef, HTMLAttributes } from "react";

interface ResponsiveTextProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
    text: string;
    containerStyle?: React.CSSProperties;
}

const ResponsiveTitle: React.FC<ResponsiveTextProps> = ({
    text,
    containerStyle,
    ...props
}) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const textMeasureRef = useRef<HTMLSpanElement>(null);
    const [fontSize, setFontSize] = useState<string>("calc(5vw + 1vh)");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

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

    return (
        <div
            ref={parentRef}
            style={{
                width: "100%",
                border: "1px solid transparent",
                ...containerStyle,
            }}
            {...props}
        >
            <span
                ref={textMeasureRef}
                style={{
                    fontSize: "16px",
                    visibility: "hidden",
                    whiteSpace: "nowrap",
                    position: "absolute",
                }}
            >
                {text}
            </span>
            <p
                style={{
                    fontSize,
                    margin: 0,
                    whiteSpace: "nowrap",
                    transition: "font-size 0.1s ease",
                    lineHeight: 1,
                }}
            >
                {text}
            </p>
        </div>
    );
};

function throttle<T extends (...args: any[]) => void>(
    func: T,
    limit: number
): T {
    let lastFunc: ReturnType<typeof setTimeout>;
    let lastRan: number;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
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
    } as T;
}

export default ResponsiveTitle;
