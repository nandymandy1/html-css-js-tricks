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
console.log("___________________________________");

// GRAPH SEARCH OR TRAVERSAL
function bfs(start) {
  const queue = [start];

  // Track the value of visited airports
  const visited = new Set();

  while (queue.length > 0) {
    // Mutates the queue
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "HYD") {
        console.log(`FOUND ${start}`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

bfs("LKO");
