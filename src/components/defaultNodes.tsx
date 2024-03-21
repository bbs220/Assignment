// setting up unique id for each node and their corresponding edges
export const initialEdges = [
  {
    id: "000-001",
    source: "000",
    target: "001",
  },
  {
    id: "000-002",
    source: "000",
    target: "002",
  },
  {
    id: "000-003",
    source: "000",
    target: "003",
  },
  {
    id: "000-004",
    source: "000",
    target: "004",
  },
  {
    id: "000-005",
    source: "000",
    target: "005",
  },
  {
    id: "001-006",
    source: "001",
    target: "006",
  },
  {
    id: "001-007",
    source: "001",
    target: "007",
  },
  {
    id: "002-008",
    source: "002",
    target: "008",
  },
  {
    id: "002-009",
    source: "002",
    target: "009",
  },
  {
    id: "003-010",
    source: "003",
    target: "010",
  },
  {
    id: "003-011",
    source: "003",
    target: "011",
  },
  {
    id: "004-012",
    source: "004",
    target: "012",
  },
  {
    id: "004-013",
    source: "004",
    target: "013",
  },
  {
    id: "005-014",
    source: "005",
    target: "014",
  },
  {
    id: "005-015",
    source: "005",
    target: "015",
  },
  {
    id: "006-016",
    source: "006",
    target: "016",
  },
  {
    id: "006-017",
    source: "006",
    target: "017",
  },
  {
    id: "016-018",
    source: "016",
    target: "018",
  },
  {
    id: "016-019",
    source: "016",
    target: "019",
  },
  {
    id: "016-020",
    source: "016",
    target: "020",
  },
  {
    id: "016-021",
    source: "016",
    target: "021",
  },
  {
    id: "018-022",
    source: "018",
    target: "022",
  },
  {
    id: "021-022",
    source: "021",
    target: "022",
  },
];

export const initialNodes = [
  {
    id: "000",
    data: { label: "Root" },
    position: { x: -200, y: 0 },
    type: "customDefault",
  },
  {
    id: "001",
    data: { label: "Research" },
    position: { x: 0, y: -200 },
    type: "customDefault",
  },
  {
    id: "002",
    data: { label: "Planning" },
    position: { x: 0, y: -100 },
    type: "customDefault",
  },
  {
    id: "003",
    data: { label: "Designing" },
    position: { x: 0, y: 0 },
    type: "customDefault",
  },
  {
    id: "004",
    data: { label: "Manufacturing" },
    position: { x: 0, y: 100 },
    type: "customDefault",
  },
  {
    id: "005",
    data: { label: "Sales/Marketing" },
    position: { x: 0, y: 200 },
    type: "customDefault",
  },
  {
    id: "006",
    data: { label: "External" },
    position: { x: 200, y: -225 },
    type: "customDefault",
  },
  {
    id: "007",
    data: { label: "Internal" },
    position: { x: 200, y: -175 },
    type: "customDefault",
  },
  {
    id: "008",
    data: { label: "PRD" },
    position: { x: 200, y: -125 },
    type: "customDefault",
  },
  {
    id: "009",
    data: { label: "Specs" },
    position: { x: 200, y: -75 },
    type: "customDefault",
  },
  {
    id: "010",
    data: { label: "Hardware" },
    position: { x: 200, y: -25 },
    type: "customDefault",
  },
  {
    id: "011",
    data: { label: "Software" },
    position: { x: 200, y: 25 },
    type: "customDefault",
  },
  {
    id: "012",
    data: { label: "Material" },
    position: { x: 200, y: 75 },
    type: "customDefault",
  },
  {
    id: "013",
    data: { label: "Production" },
    position: { x: 200, y: 125 },
    type: "customDefault",
  },
  {
    id: "014",
    data: { label: "Online" },
    position: { x: 200, y: 175 },
    type: "customDefault",
  },
  {
    id: "015",
    data: { label: "Dealership" },
    position: { x: 200, y: 225 },
    type: "customDefault",
  },
  {
    id: "016",
    data: { label: "B2C" },
    position: { x: 400, y: -255 },
    type: "customDefault",
  },
  {
    id: "017",
    data: { label: "B2C" },
    position: { x: 400, y: -195 },
    type: "customDefault",
  },
  {
    id: "018",
    data: { label: "Online" },
    position: { x: 600, y: -315 },
    type: "customDefault",
  },
  {
    id: "019",
    data: { label: "Interview" },
    position: { x: 600, y: -275 },
    type: "customDefault",
  },
  {
    id: "020",
    data: { label: "Public Data" },
    position: { x: 600, y: -235 },
    type: "customDefault",
  },
  {
    id: "021",
    data: { label: "Health" },
    position: { x: 600, y: -195 },
    type: "customDefault",
  },
  {
    id: "022",
    data: { label: "End" },
    position: { x: 800, y: -255 },
    type: "customDefault",
  },
];
