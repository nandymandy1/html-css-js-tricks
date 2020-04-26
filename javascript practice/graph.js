// LIST OF AIRPORTS
const airports = "LKO HYD BLR DEL JPR JDR BOM CDG BHP MAD CAL".split(" ");

// AIRPORT ROUTES
const routes = [
  ["LKO", "JPR"],
  ["LKO", "DEL"],
  ["DEL", "BLR"],
  ["DEL", "CDG"],
  ["DEL", "BHP"],
  ["JDR", "JPR"],
  ["JDR", "HYD"],
  ["JDR", "CAL"],
  ["JDR", "BOM"],
  ["CAL", "HYD"],
];

// THE GRAPH
const adjacencyList = new Map();

// ADDING THE NODES
const addNode = (airport) => adjacencyList.set(airport, []);

// ADDING EDEGE, UNDIRECTED
const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
};

// CREATE THE GRAPH
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log("FIRST_ADJACENCY_LIST", adjacencyList);
console.log(`____________________________________________ \n`);

// GRAPH SEARCH OR TRAVERSAL

/**
 * @CASE TO TRACK WHICH ONE IS MORE EFFICIENT ROUTE
 * @DESC ALL THE POSSIBLE ROUTE BETWEEN TWO POINTS
 * @PARAMS STARTING POINT and ENDING POINT
 * @FX BREADTH FIRST SEARCH FUNCTION
 */
const bfs = (start, end) => {
  const queue = [start];

  // Track the value of visited airports
  const visited = new Set();

  while (queue.length > 0) {
    // Mutates the queue
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === end) {
        console.log(`FOUND ${start}`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(`DESTINATION ${destination}`);
      }
    }
  }
};

bfs("LKO", "CAL");
console.log(`____________________________________________ \n`);

/**
 * @CASE TO TRACK WHICH ONE IS MORE QUICKEST ROUTE EXISTS OR NOT
 * @DESC ALL THE POSSIBLE ROUTE BETWEEN TWO POINTS
 * @PARAMS STARTING POINT and ENDING POINT
 * @FX DEPTH FIRST SEARCH FUNCTION
 */

let steps = 0;
const dfs = (start, end, visited = new Set()) => {
  console.log("START ", start);
  visited.add(start);
  steps = steps + 1;

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === end) {
      console.log(`FOUND ${end} in ${steps} steps`);
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, end, visited);
    }
  }
};

dfs("LKO", "HYD");
