"use client";

import { useEffect, useRef, useState } from "react";
import RoomColorCanvas from "./RoomColorCanvas";
import { ArrowUpRight } from "lucide-react";

const colors = [
  { name: "Royal Navy", value: "#022b5c" },
  { name: "Slate Blue", value: "#3b82f6" },
  { name: "Coral Rose", value: "#fb5474" },
  { name: "Warm Tangerine", value: "#ff7a32" },
  { name: "Sunshine Yellow", value: "#f5c842" },
  { name: "Sage Green", value: "#35b978" },
  { name: "Soft Aqua", value: "#32bfd0" },
  { name: "Deep Violet", value: "#7c3aed" },
];

export default function VisualizeRoomColor() {
  const [wallColor, setWallColor] = useState(colors[0].value);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    let nextColorIndex = 1;

    intervalIdRef.current = window.setInterval(() => {
      setWallColor(colors[nextColorIndex].value);
      nextColorIndex = (nextColorIndex + 1) % colors.length;
    }, 2800);

    return () => {
      window.clearInterval(intervalIdRef.current);
    };
  }, []);

  function handleColorSelect(color) {
    window.clearInterval(intervalIdRef.current);
    setWallColor(color);
  }

  return (
    <section
      id="visualize-color"
      className="bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-200"
    >
      <div className="mx-auto grid max-w-8xl items-center gap-8 px-5 sm:px-8 lg:px-12 lg:grid-cols-12 lg:gap-12">
        
        {/* Left Side: Room Canvas */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 shadow-lg lg:col-span-7">
          <RoomColorCanvas
            imageSrc="/images/room-color-visualizer.webp"
            wallMaskSrc="/images/room-color-visualizer-wall.svg"
            color={wallColor}
            roomLabel="Bedroom"
          />
          <span className="absolute left-4 top-4 rounded-md bg-[#022b5c] px-3 py-1.5 text-xs font-bold text-white shadow-md">
            Interactive Wall Preview
          </span>
        </div>

        {/* Right Side: Clean Solid Controls */}
        <div className="lg:col-span-5">
          <p className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#022b5c]">
            <span className="h-px w-6 bg-[#022b5c]" />
            Color Exploration
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Visualize Your Room Color
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Test different shades on feature walls before making a decision. Click any swatch below to see immediate live wall results.
          </p>

          <fieldset className="mt-7">
            <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-700">
              Select Wall Color
            </legend>
            <div className="flex flex-wrap gap-2.5">
              {colors.map(({ name, value }) => (
                <button
                  key={value}
                  type="button"
                  aria-label={name}
                  aria-pressed={wallColor === value}
                  onClick={() => handleColorSelect(value)}
                  className={`h-9 w-9 rounded-lg border transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#022b5c] ${
                    wallColor === value
                      ? "border-[#022b5c] ring-2 ring-[#022b5c] ring-offset-2 scale-105"
                      : "border-slate-300 shadow-sm"
                  }`}
                  style={{ backgroundColor: value }}
                />
              ))}
            </div>
          </fieldset>

          <div className="mt-8">
            <a
              href="https://homeglazer.com/colour-visualiser"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#022b5c] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#011d3f]"
            >
              <span>Explore Full Color Visualizer</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
