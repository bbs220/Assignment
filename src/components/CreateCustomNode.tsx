/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { initialNodes } from "./defaultNodes";

interface CustomNodeProps {
  data: { [key: string]: any };
  isConnectable: boolean;
  id: string;
}

function CustomNode({ data, id, isConnectable }: CustomNodeProps) {
  const onChange = useCallback((event: { target: { value: any } }) => {
    // should probably remove this log later on
    console.log(event.target.value);
  }, []);

  // custom node props dont give access to background color
  // so setting it off by node id
  const getBackgroundColor = (id: string) => {
    const node = initialNodes.find((node) => node.id === id);
    if (node) {
      switch (node.id) {
        case "000":
          return "#ff0000"; // red
        case "001":
          return "#4361ee"; // cool blue
        case "002":
          return "#00ff00"; // green
        case "003":
          return "#ffff00"; // yellow
        case "004":
          return "#ffa500"; // orange
        case "005":
          return "#2ec4b6"; // off green
        case "006":
          return "#4361ee";
        case "007":
          return "#4361ee";
        case "008":
          return "#00ff00";
        case "009":
          return "#00ff00";
        case "010":
          return "#ffff00";
        case "011":
          return "#ffff00";
        case "012":
          return "#ffa500";
        case "013":
          return "#ffa500";
        case "014":
          return "#2ec4b6";
        case "015":
          return "#2ec4b6";
        case "016":
          return "#4361ee";
        case "017":
          return "#4361ee";
        case "018":
          return "#4361ee";
        case "019":
          return "#4361ee";
        case "020":
          return "#4361ee";
        case "021":
          return "#4361ee";
        case "022":
          return "#ff0000";
      }
    }
    return "rgb(224 225 221)"; // this is just bg-p01
  };

  const backgroundColor = getBackgroundColor(id);

  return (
    <div
      className="w-36 h-10 border border-solid p-1 rounded bg-p01 flex justify-center items-center text-center"
      style={{ backgroundColor }}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className="w-4 h-4 rounded hover:animate-slightBounce"
      />
      <div>
        {/* conditional logic to show only the input text box */}
        {/* for the newly created nodes since they dont have */}
        {/* a default label */}
        {id >= "000" && id <= "022" ? (
          <div>{data.label}</div>
        ) : (
          <input
            id="text"
            name="text"
            onChange={onChange}
            className="nodrag bg-offWhite text-p05 w-28 h-5 text-center text-sm rounded-sm"
            placeholder="Enter Label"
          />
        )}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="000"
        isConnectable={isConnectable}
        className="w-4 h-4 rounded hover:animate-slightBounce"
      />
    </div>
  );
}

export default CustomNode;
