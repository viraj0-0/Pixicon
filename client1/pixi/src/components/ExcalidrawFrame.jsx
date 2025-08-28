// src/components/ExcalidrawFrame.jsx
import React from 'react';

export default function ExcalidrawFrame() {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://excalidraw.com/#theme=dark"
        title="Excalidraw"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
}
