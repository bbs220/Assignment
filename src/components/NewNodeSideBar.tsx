// NewNodeSidebar.tsx
import React from "react";

interface NewNodeSidebarProps {
  isOpen: boolean;
}

function NewNodeSidebar({ isOpen }: NewNodeSidebarProps) {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`relative flex flex-col w-40 h-30 top-[0.5rem] left-0 rounded-lg p-1 gap-1 bg-p01 border border-solid border-cyan-950 transition-all duration-300 ${
        isOpen
          ? "transform translate-x-0 left-1"
          : "transform -translate-x-full left-0"
      }`}
    >
      <div className="h-16 flex justify-center items-center text-center text-p05 text-sm font-mono">
        Drag / Add new Nodes from here.
      </div>
      <div
        className="bg-p03 cursor-pointer flex items-center justify-center rounded-md text-p01 text-base"
        onDragStart={(event) => onDragStart(event, "customDefault")}
        draggable
      >
        New Node
      </div>
    </div>
  );
}

export default NewNodeSidebar;
