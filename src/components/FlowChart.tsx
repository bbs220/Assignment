/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  addEdge,
  Connection,
  Edge,
  useEdgesState,
  BackgroundVariant,
  MarkerType,
  ReactFlowProvider,
  ReactFlowInstance,
  XYPosition,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes, initialEdges } from "./defaultNodes";
import plusIcon from "../resources/plus.png";
import NewNodeSidebar from "./NewNodeSideBar";
import NodeModal from "./NodeModal";
import CustomNode from "./CreateCustomNode";

// setting a custom node id counter that starts for single digit zero
// instead of triple digit 000 for initial nodes
let id = 0;
const getId = () => `${id++}`;

function FlowChart() {
  // initializing default nodes and edges 
  // along with their custom node
  const nodeTypes = useMemo(() => ({ customDefault: CustomNode }), []);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // wrapper since using a custom node and flow
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  // this for the modal selected node
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  // sidebar and its icon stuff
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isImageRotated, setIsImageRotated] = useState(false);

  const toggleImageRotation = () => {
    setIsImageRotated(!isImageRotated);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onNodeDoubleClick = (_event: any, node: any) => {
    setSelectedNode(node);
    setIsModalOpen(true);
  };

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((els: Edge[]) => addEdge(params, els)),
    [setEdges]
  );

  const onDragOver = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { dropEffect: string };
    }) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    []
  );

  const onDrop = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { getData: (arg0: string) => any };
      clientX: any;
      clientY: any;
    }) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      let newNode: {
        id: string;
        type: "";
        position: XYPosition;
        data: { label: string };
      };
      if (reactFlowInstance) {
        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });
        newNode = {
          id: getId(),
          type,
          position,
          data: { label: `${type}` },
        };
      }
      setNodes((nds: any[]) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <div>
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper absolute w-screen h-[94.5vh] top-10 left-0"
          ref={reactFlowWrapper}
        >
          <ReactFlow
            defaultEdgeOptions={{
              animated: false,
              type: "smoothstep",
              markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 15,
                height: 15,
                color: "#00ff00",
              },
              style: {
                strokeWidth: 2,
              },
            }}
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeDoubleClick={onNodeDoubleClick}
            fitView
            attributionPosition="top-right"
          >
            <Background variant={BackgroundVariant.Cross} />
            <Controls showZoom={false} position="top-right" />
          </ReactFlow>
        </div>
        <NodeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          nodeData={selectedNode}
        />
        <div>
          <img
            draggable={false}
            src={plusIcon}
            alt="plus icon"
            onClick={() => {
              toggleSidebar();
              toggleImageRotation();
            }}
            className={`w-10 h-10 left-1 top-1 z-10 relative rounded-lg flex items-center justify-center object-cover cursor-pointer ${
              isImageRotated ? "rotate-45" : "rotate-0"
            }`}
          ></img>
          <NewNodeSidebar isOpen={isSidebarOpen} />
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default FlowChart;
