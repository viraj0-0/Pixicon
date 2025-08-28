
import React from "react";
import ExcalidrawFrame from "../components/ExcalidrawFrame";
import AIGuide from "../components/AIGuide";

export default function Create() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] mt-[88px]">
      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Excalidraw Section */}
        <div className="flex-1 p-3">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-neutral-800">
            <ExcalidrawFrame />
          </div>
        </div>

        {/* AI Guide Section (sidebar) */}
        <div className="w-[380px] border-l border-neutral-800 hidden lg:flex">
          <AIGuide />
        </div>
      </div>

      {/* Mobile: AI Guide below */}
      <div className="lg:hidden h-[400px] border-t border-neutral-800">
        <AIGuide />
      </div>
    </div>
  );
}
