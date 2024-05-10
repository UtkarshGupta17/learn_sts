const questions = [
  {
    question:
      "What is the primary purpose of recovering a Binary Search Tree (BST)?",
    answeers: [
      { text: "To optimize its search operation", correct: false },
      {
        text: "To ensure its structural integrity after modifications",
        correct: true,
      },
      { text: "To reduce its memory consumption", correct: false },
      { text: "To increase its traversal speed", correct: false },
    ],
  },
  {
    question:
      "Which of the following operations can lead to the need for recovering a BST?",
    answeers: [
      { text: "Insertion", correct: false },
      { text: "Deletion", correct: true },
      { text: "Searching", correct: false },
      { text: "Traversal", correct: false },
    ],
  },
  {
    question:
      "In a Binary Search Tree, what property must be maintained after a node deletion?",
    answeers: [
      { text: "In-order traversal property", correct: false },
      { text: "Pre-order traversal property", correct: false },
      { text: "Post-order traversal property", correct: false },
      { text: "Binary search property", correct: true },
    ],
  },
  {
    question:
      "Which of the following algorithms can be used for recovering a BST after a deletion?",
    answeers: [
      { text: "Breadth-first search (BFS)", correct: false },
      { text: "Depth-first search (DFS)", correct: false },
      { text: "In-order traversal", correct: true },
      { text: "Dijkstra's algorithm", correct: false },
    ],
  },
  {
    question: "What does the in-order traversal of a BST produce?",
    answeers: [
      { text: "Nodes in sorted order", correct: true },
      { text: "Nodes in reverse sorted order", correct: false },
      { text: "Nodes in random order", correct: false },
      { text: "Nodes in the order they were inserted", correct: false },
    ],
  },
  {
    question:
      "When recovering a BST after a deletion, which of the following cases is the simplest to handle?",
    answeers: [
      { text: "Node with no children", correct: true },
      { text: "Node with one child", correct: false },
      { text: "Node with two children", correct: false },
      { text: "Node with three children", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a step in recovering a BST after a deletion?",
    answeers: [
      { text: "Finding the node to be deleted", correct: false },
      { text: "Deleting the node", correct: false },
      { text: "Rebalancing the tree", correct: true },
      {
        text: "Reorganizing the tree to maintain the binary search property",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which data structure is commonly used for tracking parent nodes during BST recovery?",
    answeers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Linked list", correct: false },
      { text: "Array", correct: false },
    ],
  },
  {
    question:
      "In the case of a node with two children being deleted from a BST, which node is typically chosen as its replacement?",
    answeers: [
      { text: "The node's left child", correct: false },
      { text: "The node's right child", correct: true },
      { text: "The node's parent", correct: false },
      { text: "A random node from the tree", correct: false },
    ],
  },
  {
    question:
      "After recovering a BST following a deletion, what operation should be performed to ensure the tree is balanced?",
    answeers: [
      { text: "Rotate the tree", correct: false },
      { text: "Reorder the nodes", correct: false },
      { text: "Recalculate the heights of all nodes", correct: false },
      {
        text: "Perform a rebalancing operation like AVL or Red-Black tree rotations",
        correct: true,
      },
    ],
  },
  {
    question: "What is the view of a tree?",
    answeers: [
      { text: "The way the tree is displayed on the screen", correct: false },
      { text: "The total number of nodes in the tree", correct: false },
      {
        text: "The representation of the tree from a particular direction",
        correct: true,
      },
      { text: "The height of the tree", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a type of tree view?",
    answeers: [
      { text: "Level order view", correct: false },
      { text: "Pre-order view", correct: true },
      { text: "In-order view", correct: false },
      { text: "Post-order view", correct: false },
    ],
  },
  {
    question: "What does the level order view of a tree display?",
    answeers: [
      { text: "Nodes at odd levels", correct: false },
      { text: "Nodes at even levels", correct: false },
      { text: "Nodes at every level, from left to right", correct: true },
      { text: "Nodes at the root level only", correct: false },
    ],
  },
  {
    question:
      "Which view of a tree displays nodes as they are encountered during a depth-first traversal?",
    answeers: [
      { text: "In-order view", correct: false },
      { text: "Pre-order view", correct: true },
      { text: "Post-order view", correct: false },
      { text: "Level order view", correct: false },
    ],
  },
  {
    question:
      "In the post-order view of a binary tree, when is a node visited?",
    answeers: [
      { text: "Before visiting its left child", correct: false },
      { text: "After visiting its left child", correct: false },
      { text: "Before visiting its right child", correct: false },
      { text: "After visiting its right child", correct: true },
    ],
  },
  {
    question:
      "Which view of a tree is also known as the breadth-first traversal?",
    answeers: [
      { text: "Pre-order view", correct: false },
      { text: "In-order view", correct: false },
      { text: "Level order view", correct: true },
      { text: "Post-order view", correct: false },
    ],
  },
  {
    question:
      "Which view of a binary tree is used in the expression tree evaluation?",
    answeers: [
      { text: "Pre-order view", correct: false },
      { text: "In-order view", correct: true },
      { text: "Post-order view", correct: false },
      { text: "Level order view", correct: false },
    ],
  },
  {
    question: "What is the main advantage of the level order view of a tree?",
    answeers: [
      { text: "It requires less memory", correct: false },
      { text: "It is faster than other views", correct: false },
      { text: "It displays the structure of the tree clearly", correct: true },
      { text: "It is easier to implement", correct: false },
    ],
  },
  {
    question:
      "Which view of a binary tree is used to create a copy of the tree?",
    answeers: [
      { text: "Pre-order view", correct: true },
      { text: "In-order view", correct: false },
      { text: "Post-order view", correct: false },
      { text: "Level order view", correct: false },
    ],
  },
  {
    question:
      "In a binary tree, which view provides nodes in non-decreasing order when the tree is a binary search tree (BST)?",
    answeers: [
      { text: "Pre-order view", correct: false },
      { text: "In-order view", correct: true },
      { text: "Post-order view", correct: false },
      { text: "Level order view", correct: false },
    ],
  },

  {
    question: "What is Breadth-First Search (BFS) primarily used for?",
    answeers: [
      { text: "Finding the shortest path in a weighted graph", correct: false },
      {
        text: "Traversing and searching tree or graph data structures",
        correct: true,
      },
      { text: "Sorting elements in an array", correct: false },
      {
        text: "Determining the longest path in a directed acyclic graph (DAG)",
        correct: false,
      },
    ],
  },
  {
    question:
      "In BFS, which data structure is typically used to store the vertices of the graph or tree?",
    answeers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Priority queue", correct: false },
      { text: "Linked list", correct: false },
    ],
  },
  {
    question:
      "What is the time complexity of BFS when applied to an adjacency matrix representation of a graph with ( V ) vertices and ( E ) edges?",
    answeers: [
      { text: "O(V)", correct: false },
      { text: "O(E)", correct: false },
      { text: "O(V + E)", correct: true },
      { text: "O(V log V)", correct: false },
    ],
  },
  {
    question: "In BFS, which vertices are explored first?",
    answeers: [
      { text: "Vertices with lower degree", correct: false },
      { text: "Vertices with higher degree", correct: false },
      { text: "Vertices with the lowest value", correct: true },
      { text: "Vertices with the highest value", correct: false },
    ],
  },
  {
    question: "What is the order of traversal in BFS?",
    answeers: [
      { text: "Depth-first", correct: false },
      { text: "Pre-order", correct: false },
      { text: "Post-order", correct: false },
      { text: "Level-order", correct: true },
    ],
  },
  {
    question:
      "In BFS, which traversal strategy is employed to visit neighboring vertices of a vertex?",
    answeers: [
      { text: "Depth-first traversal", correct: false },
      { text: "In-order traversal", correct: false },
      { text: "Level-order traversal", correct: true },
      { text: "Post-order traversal", correct: false },
    ],
  },
  {
    question: "Which of the following statements about BFS is true?",
    answeers: [
      {
        text: "BFS can be used to find the topological sorting of a graph.",
        correct: false,
      },
      { text: "BFS cannot handle graphs with cycles.", correct: false },
      {
        text: "BFS is not optimal for finding the shortest path in an unweighted graph.",
        correct: false,
      },
      {
        text: "BFS explores vertices in the order they are discovered.",
        correct: true,
      },
    ],
  },
  {
    question: "Which of the following is NOT a step in BFS?",
    answeers: [
      { text: "Enqueue the starting vertex", correct: false },
      { text: "Dequeue the starting vertex", correct: true },
      { text: "Enqueue neighboring vertices", correct: false },
      { text: "Dequeue neighboring vertices", correct: false },
    ],
  },
  {
    question: "In BFS, when should a visited vertex be enqueued?",
    answeers: [
      { text: "Before exploring its neighbors", correct: true },
      { text: "After exploring its neighbors", correct: false },
      { text: "Before dequeueing its neighbors", correct: false },
      { text: "After dequeueing its neighbors", correct: false },
    ],
  },
  {
    question: "What is the space complexity of BFS?",
    answeers: [
      { text: "O(V)", correct: true },
      { text: "O(E)", correct: false },
      { text: "O(V + E)", correct: false },
      { text: "O(V log V)", correct: false },
    ],
  },
  {
    question: "What is Depth-First Search (DFS) primarily used for?",
    answeers: [
      { text: "Finding the shortest path in a weighted graph", correct: false },
      {
        text: "Traversing and searching tree or graph data structures",
        correct: true,
      },
      { text: "Sorting elements in an array", correct: false },
      {
        text: "Determining the longest path in a directed acyclic graph (DAG)",
        correct: false,
      },
    ],
  },
  {
    question: "Which data structure is typically used for implementing DFS?",
    answeers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Priority queue", correct: false },
      { text: "Linked list", correct: false },
    ],
  },
  {
    question:
      "What is the time complexity of DFS when applied to an adjacency list representation of a graph with ( V ) vertices and ( E ) edges?",
    answeers: [
      { text: "O(V)", correct: false },
      { text: "O(E)", correct: false },
      { text: "O(V + E)", correct: true },
      { text: "O(V log V)", correct: false },
    ],
  },
  {
    question:
      "In DFS, which traversal strategy is employed to explore neighboring vertices?",
    answeers: [
      { text: "Depth-first traversal", correct: true },
      { text: "In-order traversal", correct: false },
      { text: "Level-order traversal", correct: false },
      { text: "Post-order traversal", correct: false },
    ],
  },
  {
    question: "What is the order of traversal in DFS?",
    answeers: [
      { text: "Depth-first", correct: true },
      { text: "Pre-order", correct: false },
      { text: "Post-order", correct: false },
      { text: "Level-order", correct: false },
    ],
  },
  {
    question: "Which of the following statements about DFS is true?",
    answeers: [
      {
        text: "DFS always finds the shortest path in a graph.",
        correct: false,
      },
      {
        text: "DFS uses a FIFO strategy for exploring vertices.",
        correct: false,
      },
      { text: "DFS may result in a disconnected graph.", correct: true },
      {
        text: "DFS explores vertices in the order they are discovered.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the main disadvantage of using recursion for implementing DFS?",
    answeers: [
      {
        text: "Recursion has higher space complexity compared to iterative methods.",
        correct: false,
      },
      { text: "Recursion is slower than iterative methods.", correct: false },
      {
        text: "Recursion may lead to stack overflow for large graphs.",
        correct: true,
      },
      { text: "Recursion cannot handle graphs with cycles.", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a step in DFS?",
    answeers: [
      { text: "Enqueue the starting vertex", correct: true },
      { text: "Process the current vertex", correct: false },
      { text: "Recursively explore neighboring vertices", correct: false },
      { text: "Backtrack to the previous vertex", correct: false },
    ],
  },
  {
    question: "In DFS, when should a visited vertex be marked?",
    answeers: [
      { text: "Before exploring its neighbors", correct: false },
      { text: "After exploring its neighbors", correct: true },
      {
        text: "Before recursively calling DFS on its neighbors",
        correct: false,
      },
      {
        text: "After recursively calling DFS on its neighbors",
        correct: false,
      },
    ],
  },
  {
    question: "What is the space complexity of DFS?",
    answeers: [
      { text: "O(V)", correct: true },
      { text: "O(E)", correct: false },
      { text: "O(V + E)", correct: false },
      { text: "O(V log V)", correct: false },
    ],
  },
  {
    question: "What is a binomial tree?",
    answeers: [
      {
        text: "A tree where each node has at most two children",
        correct: false,
      },
      {
        text: "A tree where each node has exactly two children",
        correct: true,
      },
      { text: "A tree with a specific ordering of nodes", correct: false },
      { text: "A tree used in binary search algorithms", correct: false },
    ],
  },
  {
    question:
      "Which operation is NOT supported efficiently by a binomial heap?",
    answeers: [
      { text: "Insertion", correct: false },
      { text: "Deletion", correct: false },
      { text: "Union", correct: false },
      { text: "Search", correct: true },
    ],
  },
  {
    question:
      "In a binomial heap, what is the time complexity of inserting a new element?",
    answeers: [
      { text: "O(log n)", correct: true },
      { text: "O(n)", correct: false },
      { text: "O(log^2 n)", correct: false },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question: "What is the maximum height of a binomial tree with n nodes?",
    answeers: [
      { text: "n", correct: false },
      { text: "2n", correct: false },
      { text: "log_2 n", correct: false },
      { text: "log_2 (n+1)", correct: true },
    ],
  },
  {
    question:
      "Which of the following is a property of a binomial tree of order k?",
    answeers: [
      { text: "It has k children", correct: false },
      { text: "It has 2^k nodes", correct: true },
      { text: "It has k+1 nodes", correct: false },
      { text: "It has 2^(k+1) - 1 nodes", correct: false },
    ],
  },
  {
    question: "What operation is typically used to merge two binomial heaps?",
    answeers: [
      { text: "Union", correct: true },
      { text: "Intersection", correct: false },
      { text: "Difference", correct: false },
      { text: "Addition", correct: false },
    ],
  },
  {
    question: "Which of the following statements about binomial heaps is true?",
    answeers: [
      { text: "They are always balanced binary trees", correct: false },
      {
        text: "They support constant time insertion and deletion",
        correct: false,
      },
      { text: "They are typically implemented using arrays", correct: false },
      {
        text: "They have a worst-case time complexity of O(log n) for most operations",
        correct: true,
      },
    ],
  },
  {
    question:
      "In a binomial heap, what is the purpose of the 'merge' operation?",
    answeers: [
      {
        text: "Combining two trees of the same order into one tree of the next order",
        correct: true,
      },
      { text: "Splitting a tree into smaller trees", correct: false },
      { text: "Finding the minimum element in the heap", correct: false },
      { text: "Deleting an element from the heap", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a common application of binomial heaps?",
    answeers: [
      { text: "Priority queue", correct: false },
      { text: "Sorting algorithms", correct: true },
      { text: "Dijkstra's shortest path algorithm", correct: false },
      { text: "Prim's minimum spanning tree algorithm", correct: false },
    ],
  },
  {
    question:
      "What is the advantage of using a binomial heap over a binary heap?",
    answeers: [
      {
        text: "Binomial heaps have better worst-case time complexity for most operations",
        correct: true,
      },
      { text: "Binary heaps are more space efficient", correct: false },
      { text: "Binomial heaps support more operations", correct: false },
      { text: "Binary heaps are easier to implement", correct: false },
    ],
  },
  {
    question: "What is the purpose of a winner tree?",
    answeers: [
      { text: "To store elements in a sorted order", correct: false },
      {
        text: "To efficiently find the maximum (or minimum) element among a set of elements",
        correct: true,
      },
      { text: "To balance binary search trees", correct: false },
      { text: "To implement priority queues", correct: false },
    ],
  },
  {
    question: "In a winner tree, what do the leaves represent?",
    answeers: [
      { text: "Internal nodes", correct: false },
      { text: "The maximum element", correct: false },
      { text: "The elements themselves", correct: true },
      { text: "The minimum element", correct: false },
    ],
  },
  {
    question: "How are winner trees commonly used in algorithms?",
    answeers: [
      { text: "For graph traversal", correct: false },
      { text: "For heap sort", correct: false },
      { text: "For tournament-style algorithms", correct: true },
      { text: "For binary search", correct: false },
    ],
  },
  {
    question: "Which node of a winner tree contains the overall winner?",
    answeers: [
      { text: "Root node", correct: true },
      { text: "Leaf nodes", correct: false },
      { text: "Internal nodes", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What operation is performed to construct a winner tree?",
    answeers: [
      { text: "Merge", correct: false },
      { text: "Compare", correct: true },
      { text: "Split", correct: false },
      { text: "Rotate", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a step in using a winner tree to find the maximum element?",
    answeers: [
      { text: "Initialize the winner tree", correct: false },
      { text: "Insert elements in random order", correct: true },
      { text: "Construct the winner tree", correct: false },
      { text: "Access the root node", correct: false },
    ],
  },
  {
    question: "What type of elements can be compared using a winner tree?",
    answeers: [
      { text: "Numbers only", correct: false },
      { text: "Strings only", correct: false },
      { text: "Any comparable elements", correct: true },
      { text: "Only elements of the same type", correct: false },
    ],
  },
  {
    question: "How does a winner tree compare elements?",
    answeers: [
      { text: "Using hashing", correct: false },
      { text: "By iterating through all elements", correct: false },
      { text: "By comparing pairs of elements recursively", correct: true },
      { text: "By performing binary search", correct: false },
    ],
  },
  {
    question:
      "Which data structure is NOT commonly implemented using winner trees?",
    answeers: [
      { text: "Priority queue", correct: false },
      { text: "Heap", correct: false },
      { text: "Hash table", correct: true },
      { text: "Tournament bracket", correct: false },
    ],
  },
  {
    question:
      "In a winner tree with n elements, how many comparisons are needed to find the maximum element?",
    answeers: [
      { text: "n", correct: false },
      { text: "log n", correct: false },
      { text: "2n - 1", correct: true },
      { text: "n - 1", correct: false },
    ],
  },
  {
    question: "What is the Bellman-Ford algorithm used for?",
    answeers: [
      {
        text: "Finding the shortest path in a weighted directed graph with negative edge weights",
        correct: true,
      },
      { text: "Sorting elements in an array", correct: false },
      { text: "Implementing a priority queue", correct: false },
      {
        text: "Searching for an element in a binary search tree",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which data structure is commonly used to represent graphs in the Bellman-Ford algorithm?",
    answeers: [
      { text: "Arrays", correct: false },
      { text: "Linked lists", correct: false },
      { text: "Hash tables", correct: false },
      { text: "Adjacency matrices or adjacency lists", correct: true },
    ],
  },
  {
    question: "What is the time complexity of the Bellman-Ford algorithm?",
    answeers: [
      { text: "O(V)", correct: false },
      { text: "O(V log V)", correct: false },
      { text: "O(V + E)", correct: true },
      { text: "O(V^2)", correct: false },
    ],
  },
  {
    question:
      "In the context of the Bellman-Ford algorithm, what does 'V' represent?",
    answeers: [
      { text: "The number of vertices in the graph", correct: true },
      { text: "The number of edges in the graph", correct: false },
      { text: "The maximum possible weight of an edge", correct: false },
      { text: "The source vertex", correct: false },
    ],
  },
  {
    question:
      "What does the Bellman-Ford algorithm initialize the shortest distance to each vertex with?",
    answeers: [
      { text: "Positive infinity", correct: true },
      { text: "Negative infinity", correct: false },
      { text: "Zero", correct: false },
      { text: "The weight of the source vertex to itself", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the relaxation step in the Bellman-Ford algorithm?",
    answeers: [
      { text: "To initialize the shortest distances", correct: false },
      {
        text: "To update the shortest distances if a shorter path is found",
        correct: true,
      },
      { text: "To remove edges with negative weights", correct: false },
      {
        text: "To reverse the direction of edges in the graph",
        correct: false,
      },
    ],
  },
  {
    question:
      "What does a negative cycle in a graph indicate in the context of the Bellman-Ford algorithm?",
    answeers: [
      { text: "The graph has no shortest paths", correct: false },
      {
        text: "The graph contains edges with negative weights",
        correct: false,
      },
      {
        text: "The graph has multiple shortest paths between some pairs of vertices",
        correct: false,
      },
      {
        text: "The graph has a cycle whose total weight is negative",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which step in the Bellman-Ford algorithm detects negative cycles?",
    answeers: [
      { text: "Initialization", correct: false },
      { text: "Relaxation", correct: false },
      { text: "Shortest path determination", correct: false },
      { text: "Negative cycle detection", correct: true },
    ],
  },
  {
    question: "When does the Bellman-Ford algorithm terminate?",
    answeers: [
      { text: "After a fixed number of iterations", correct: false },
      { text: "When all vertices have been visited", correct: false },
      { text: "When no more relaxation can be performed", correct: true },
      { text: "When a negative cycle is detected", correct: false },
    ],
  },
  {
    question:
      "What does the Bellman-Ford algorithm return if a negative cycle is detected?",
    answeers: [
      { text: "The shortest paths to all vertices", correct: false },
      {
        text: "The shortest path from the source vertex to a specific target vertex",
        correct: false,
      },
      {
        text: "An error indicating the presence of a negative cycle",
        correct: true,
      },
      { text: "The length of the shortest path", correct: false },
    ],
  },
  {
    question: "What is the Dial's Algorithm used for?",
    answeers: [
      { text: "Finding the maximum flow in a network", correct: false },
      { text: "Sorting elements in an array", correct: false },
      {
        text: "Finding the shortest path in a graph with non-negative edge weights",
        correct: true,
      },
      { text: "Detecting negative cycles in a graph", correct: false },
    ],
  },
  {
    question: "Which data structure does the Dial's Algorithm utilize?",
    answeers: [
      { text: "Arrays", correct: true },
      { text: "Linked lists", correct: false },
      { text: "Priority queues", correct: false },
      { text: "Stacks", correct: false },
    ],
  },
  {
    question: "What does each bucket in the Dial's Algorithm contain?",
    answeers: [
      { text: "Vertices", correct: true },
      { text: "Edges", correct: false },
      { text: "Distances from the source vertex", correct: false },
      { text: "Paths", correct: false },
    ],
  },
  {
    question: "How are the buckets indexed in the Dial's Algorithm?",
    answeers: [
      { text: "By vertex IDs", correct: false },
      { text: "By vertex distances from the source", correct: true },
      { text: "By edge weights", correct: false },
      { text: "By vertex degrees", correct: false },
    ],
  },
  {
    question: "What is the time complexity of the Dial's Algorithm?",
    answeers: [
      { text: "O(V)", correct: false },
      { text: "O(V log V)", correct: false },
      { text: "O(V + E)", correct: true },
      { text: "O(E log V)", correct: false },
    ],
  },
  {
    question: "When does the Dial's Algorithm terminate?",
    answeers: [
      { text: "When all vertices are visited", correct: false },
      { text: "When all buckets are empty", correct: true },
      { text: "When a negative cycle is detected", correct: false },
      { text: "When the maximum flow is reached", correct: false },
    ],
  },
  {
    question:
      "What operation is performed during each iteration of the Dial's Algorithm?",
    answeers: [
      { text: "Vertex relaxation", correct: true },
      { text: "Edge relaxation", correct: false },
      { text: "Bucket selection", correct: false },
      { text: "Bucket sort", correct: false },
    ],
  },
  {
    question:
      "What does the Dial's Algorithm prioritize during bucket selection?",
    answeers: [
      { text: "Buckets with the most vertices", correct: false },
      { text: "Buckets with the fewest vertices", correct: true },
      { text: "Buckets with the highest distances", correct: false },
      { text: "Buckets with the lowest distances", correct: false },
    ],
  },
  {
    question: "Which type of graphs is the Dial's Algorithm most suitable for?",
    answeers: [
      { text: "Graphs with negative edge weights", correct: false },
      { text: "Graphs with positive edge weights", correct: false },
      {
        text: "Graphs with non-negative edge weights and a limited range of weights",
        correct: true,
      },
      { text: "Graphs with arbitrary edge weights", correct: false },
    ],
  },
  {
    question: "What does the Dial's Algorithm return as output?",
    answeers: [
      { text: "The maximum flow in the network", correct: false },
      {
        text: "The shortest paths from the source vertex to all other vertices",
        correct: true,
      },
      { text: "An error if a negative cycle is detected", correct: false },
      { text: "The vertices visited during the traversal", correct: false },
    ],
  },

  {
    question: "What is topological sorting used for?",
    answeers: [
      { text: "Finding shortest paths in a graph", correct: false },
      { text: "Detecting cycles in a graph", correct: false },
      { text: "Ordering tasks with dependencies", correct: true },
      { text: "Generating minimum spanning trees", correct: false },
    ],
  },
  {
    question:
      "Which of the following data structures is commonly used to implement topological sorting?",
    answeers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Array", correct: false },
      { text: "Heap", correct: false },
    ],
  },
  {
    question:
      "In a directed acyclic graph (DAG), topological sorting results in:",
    answeers: [
      { text: "A linear ordering of vertices", correct: true },
      { text: "A minimum spanning tree", correct: false },
      { text: "A cyclic dependency graph", correct: false },
      { text: "A binary search tree", correct: false },
    ],
  },
  {
    question:
      "Which algorithm is commonly used to perform topological sorting?",
    answeers: [
      { text: "Breadth-first search (BFS)", correct: false },
      { text: "Depth-first search (DFS)", correct: true },
      { text: "Dijkstra's algorithm", correct: false },
      { text: "Prim's algorithm", correct: false },
    ],
  },
  {
    question:
      "In topological sorting, vertices with no incoming edges are processed:",
    answeers: [
      { text: "First", correct: true },
      { text: "Last", correct: false },
      { text: "Randomly", correct: false },
      { text: "In any order", correct: false },
    ],
  },
  {
    question:
      "If a graph has a cycle, what happens during topological sorting?",
    answeers: [
      { text: "The algorithm fails", correct: true },
      { text: "The cycle is ignored", correct: false },
      { text: "The cycle is broken", correct: false },
      { text: "The algorithm continues indefinitely", correct: false },
    ],
  },
  {
    question: "Topological sorting can be applied to which type of graphs?",
    answeers: [
      { text: "Directed graphs", correct: true },
      { text: "Undirected graphs", correct: false },
      { text: "Weighted graphs", correct: false },
      { text: "Bipartite graphs", correct: false },
    ],
  },
  {
    question:
      "Which of the following statements is true about topological sorting?",
    answeers: [
      {
        text: "It always produces a unique ordering of vertices.",
        correct: false,
      },
      {
        text: "It can only be applied to graphs with a single source and sink.",
        correct: false,
      },
      {
        text: "It can have multiple valid orderings for a given graph.",
        correct: true,
      },
      { text: "It has a time complexity of O(nlogn).", correct: false },
    ],
  },
  {
    question:
      "In a directed acyclic graph (DAG), if there are multiple vertices with no incoming edges, which one is processed first during topological sorting?",
    answeers: [
      { text: "The vertex with the highest index", correct: false },
      { text: "The vertex with the lowest index", correct: false },
      { text: "Any of the vertices with no incoming edges", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "In a directed acyclic graph (DAG) with vertices a, b, c, d, and e and edges ab, bc, cd, and de, what would be the topological sorting order?",
    answeers: [
      { text: "a, b, c, d, e", correct: false },
      { text: "e, d, c, b, a", correct: false },
      { text: "a, e, b, c, d", correct: false },
      { text: "a, b, c, e, d", correct: true },
    ],
  },
  {
    question: "What does vertical order traversal of a binary tree involve?",
    answeers: [
      { text: "Traversing the tree level by level", correct: false },
      { text: "Visiting nodes from left to right", correct: false },
      { text: "Exploring nodes from top to bottom", correct: false },
      {
        text: "Grouping nodes based on their horizontal distance from the root",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which data structure is commonly used to perform vertical order traversal?",
    answeers: [
      { text: "Array", correct: false },
      { text: "Queue", correct: true },
      { text: "Stack", correct: false },
      { text: "Linked list", correct: false },
    ],
  },
  {
    question:
      "In vertical order traversal, nodes at the same horizontal distance are visited in which order?",
    answeers: [
      { text: "Random", correct: false },
      { text: "Pre-order", correct: false },
      { text: "Level-order", correct: true },
      { text: "Post-order", correct: false },
    ],
  },
  {
    question:
      "What is the time complexity of vertical order traversal in a binary tree with n nodes?",
    answeers: [
      { text: "O(n)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(n^2)", correct: false },
      { text: "O(2^n)", correct: false },
    ],
  },
  {
    question:
      "Which traversal technique is typically used to implement vertical order traversal?",
    answeers: [
      { text: "Depth-first traversal", correct: false },
      { text: "Breadth-first traversal", correct: true },
      { text: "In-order traversal", correct: false },
      { text: "Pre-order traversal", correct: false },
    ],
  },
  {
    question:
      "In vertical order traversal, which node is visited first at a particular horizontal distance?",
    answeers: [
      { text: "Left child", correct: false },
      { text: "Right child", correct: false },
      { text: "Root node", correct: true },
      { text: "Parent node", correct: false },
    ],
  },
  {
    question:
      "If two nodes in a binary tree have the same horizontal distance from the root, which one is visited first in vertical order traversal?",
    answeers: [
      { text: "Left node", correct: true },
      { text: "Right node", correct: false },
      { text: "It depends on the tree structure", correct: false },
      { text: "Both nodes are visited simultaneously", correct: false },
    ],
  },
  {
    question:
      "Which of the following statements is true about vertical order traversal?",
    answeers: [
      { text: "It only works for balanced binary trees", correct: false },
      {
        text: "It doesn't guarantee the nodes will be visited in sorted order",
        correct: true,
      },
      { text: "It preserves the original tree structure", correct: false },
      {
        text: "It cannot handle binary trees with more than two children per node",
        correct: false,
      },
    ],
  },
  {
    question: "What is the space complexity of vertical order traversal?",
    answeers: [
      { text: "O(n)", correct: true },
      { text: "O(log n)", correct: false },
      { text: "O(1)", correct: false },
      { text: "O(n^2)", correct: false },
    ],
  },
  {
    question:
      "Which of the following scenarios might require additional techniques to handle during vertical order traversal?",
    answeers: [
      { text: "Binary tree with only one child per node", correct: false },
      {
        text: "Binary tree with multiple nodes at the same horizontal distance",
        correct: true,
      },
      { text: "Binary tree with unbalanced branches", correct: false },
      { text: "Binary tree with a height less than two", correct: false },
    ],
  },
  {
    question: "What does boundary traversal of a binary tree involve?",
    answeers: [
      { text: "Visiting all nodes in a left-to-right order", correct: false },
      { text: "Exploring nodes from top to bottom", correct: false },
      {
        text: "Traversing only the nodes on the boundary of the tree",
        correct: true,
      },
      { text: "Processing nodes in a bottom-up manner", correct: false },
    ],
  },
  {
    question:
      "Which of the following nodes is included in the boundary traversal of a binary tree?",
    answeers: [
      { text: "Only leaf nodes", correct: false },
      { text: "Only internal nodes", correct: false },
      { text: "Both leaf and internal nodes", correct: true },
      { text: "Neither leaf nor internal nodes", correct: false },
    ],
  },
  {
    question: "In boundary traversal, in what order are the nodes visited?",
    answeers: [
      { text: "Pre-order", correct: true },
      { text: "In-order", correct: false },
      { text: "Post-order", correct: false },
      { text: "Level-order", correct: false },
    ],
  },
  {
    question:
      "What is the time complexity of boundary traversal in a binary tree with n nodes?",
    answeers: [
      { text: "O(n)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(n^2)", correct: false },
      { text: "O(2^n)", correct: false },
    ],
  },
  {
    question:
      "Which traversal technique is typically used to implement boundary traversal?",
    answeers: [
      { text: "Depth-first traversal", correct: true },
      { text: "Breadth-first traversal", correct: false },
      { text: "In-order traversal", correct: false },
      { text: "Pre-order traversal", correct: false },
    ],
  },
  {
    question: "In boundary traversal, which node is visited first?",
    answeers: [
      { text: "Left child", correct: false },
      { text: "Right child", correct: false },
      { text: "Root node", correct: true },
      { text: "Leaf node", correct: false },
    ],
  },
  {
    question:
      "If a binary tree has only one node, how many nodes will be included in its boundary traversal?",
    answeers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "Depends on the value of the node", correct: false },
    ],
  },
  {
    question:
      "Which of the following statements is true about boundary traversal?",
    answeers: [
      { text: "It always starts from the leftmost leaf node", correct: false },
      {
        text: "It includes all nodes except for the leaf nodes",
        correct: false,
      },
      { text: "It preserves the original tree structure", correct: false },
      {
        text: "It guarantees that nodes are visited in a Anti clock",
        correct: true,
      },
    ],
  },
  {
    question: "What is the space complexity of boundary traversal?",
    answeers: [
      { text: "O(n)", correct: true },
      { text: "O(log n)", correct: false },
      { text: "O(1)", correct: false },
      { text: "O(n^2)", correct: false },
    ],
  },
  {
    question:
      "Which of the following scenarios might require additional techniques to handle during boundary traversal?",
    answeers: [
      { text: "Binary tree with only one child per node", correct: false },
      {
        text: "Binary tree with multiple nodes at the same level",
        correct: false,
      },
      { text: "Binary tree with unbalanced branches", correct: true },
      { text: "Binary tree with a height less than two", correct: false },
    ],
  },

  {
    question: "What is heap sort primarily used for?",
    answeers: [
      { text: "Sorting linked lists", correct: false },
      { text: "Sorting arrays", correct: true },
      { text: "Searching in trees", correct: false },
      { text: "Graph traversal", correct: false },
    ],
  },
  {
    question: "Which data structure is used to implement heap sort?",
    answeers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: false },
      { text: "Heap", correct: true },
      { text: "Linked list", correct: false },
    ],
  },
  {
    question: "What type of heap is typically used in heap sort?",
    answeers: [
      { text: "Max heap", correct: true },
      { text: "Min heap", correct: false },
      { text: "Binary tree", correct: false },
      { text: "AVL tree", correct: false },
    ],
  },
  {
    question:
      "What is the time complexity of heap sort in the worst-case scenario?",
    answeers: [
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: true },
      { text: "O(n^2)", correct: false },
      { text: "O(2^n)", correct: false },
    ],
  },
  {
    question:
      "In heap sort, which operation is used to ensure that the heap property is maintained?",
    answeers: [
      { text: "Insertion", correct: false },
      { text: "Deletion", correct: false },
      { text: "Heapify", correct: true },
      { text: "Merge", correct: false },
    ],
  },
  {
    question: "Which of the following statements is true about heap sort?",
    answeers: [
      { text: "It is a stable sorting algorithm", correct: false },
      {
        text: "It requires additional storage space proportional to the size of the input",
        correct: false,
      },
      {
        text: "It performs better than quicksort in most cases",
        correct: false,
      },
      { text: "It is an in-place sorting algorithm", correct: true },
    ],
  },
  {
    question:
      "In heap sort, after building the heap, what is the root element of the heap?",
    answeers: [
      { text: "Maximum element", correct: true },
      { text: "Minimum element", correct: false },
      { text: "Median element", correct: false },
      { text: "Random element", correct: false },
    ],
  },
  {
    question: "Which of the following is a drawback of heap sort?",
    answeers: [
      { text: "It is not a stable sorting algorithm", correct: true },
      { text: "It cannot handle large datasets", correct: false },
      {
        text: "It is not a comparison-based sorting algorithm",
        correct: false,
      },
      { text: "It is not suitable for parallel processing", correct: false },
    ],
  },
  {
    question: "What is the space complexity of heap sort?",
    answeers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(1)", correct: true },
      { text: "O(n^2)", correct: false },
    ],
  },
  {
    question:
      "Which sorting algorithm does heap sort share similarities with in terms of its underlying data structure?",
    answeers: [
      { text: "Bubble sort", correct: false },
      { text: "Merge sort", correct: true },
      { text: "Quick sort", correct: false },
      { text: "Selection sort", correct: false },
    ],
  },
  {
    question: "What is a K-ary heap?",
    answeers: [
      {
        text: "A binary tree where each node has at most K children",
        correct: true,
      },
      { text: "A heap with K elements in each level", correct: false },
      { text: "A tree where each node has exactly K children", correct: false },
      { text: "A heap with K elements in total", correct: false },
    ],
  },
  {
    question:
      "In a K-ary heap, what is the maximum number of elements in the last level if there are N elements in total?",
    answeers: [
      { text: "K", correct: false },
      { text: "K - 1", correct: false },
      { text: "N % K", correct: true },
      { text: "K^2", correct: false },
    ],
  },
  {
    question:
      "Which operation has a time complexity of O(log K) in a K-ary heap?",
    answeers: [
      { text: "Insertion", correct: true },
      { text: "Deletion", correct: false },
      { text: "Building a heap", correct: false },
      { text: "Finding the minimum element", correct: false },
    ],
  },
  {
    question: "How is a K-ary heap represented in memory?",
    answeers: [
      { text: "As a binary tree", correct: false },
      { text: "As an array", correct: true },
      { text: "As a linked list", correct: false },
      { text: "As a balanced tree", correct: false },
    ],
  },
  {
    question: "What is the height of a K-ary heap with N elements?",
    answeers: [
      { text: "log(N)", correct: false },
      { text: "log(K, N)", correct: true },
      { text: "N/K", correct: false },
      { text: "log(K) + log(N)", correct: false },
    ],
  },
  {
    question:
      "Which operation requires the most work in a K-ary heap when removing the root element?",
    answeers: [
      { text: "Finding the parent node", correct: false },
      { text: "Finding the children nodes", correct: false },
      { text: "Reorganizing the heap", correct: true },
      { text: "Deleting the root element", correct: false },
    ],
  },
  {
    question:
      "In a K-ary heap, what is the relationship between the index of a parent node and its children?",
    answeers: [
      {
        text: "The parent index is greater than its children indices",
        correct: false,
      },
      {
        text: "The parent index is equal to the sum of its children indices",
        correct: false,
      },
      {
        text: "The parent index is divisible by its children indices",
        correct: true,
      },
      {
        text: "The parent index is smaller than its children indices",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is true about a K-ary heap?",
    answeers: [
      {
        text: "It guarantees constant time for all operations",
        correct: false,
      },
      { text: "It is always a balanced tree", correct: false },
      { text: "It is a complete binary tree", correct: true },
      { text: "It does not support insertion operation", correct: false },
    ],
  },
  {
    question:
      "How many comparisons are needed in the worst-case scenario for finding the maximum element in a K-ary heap?",
    answeers: [
      { text: "K", correct: true },
      { text: "log(K)", correct: false },
      { text: "K log(K)", correct: false },
      { text: "N", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a disadvantage of using a large value of K in a K-ary heap?",
    answeers: [
      { text: "Faster insertion operation", correct: false },
      { text: "Increased space efficiency", correct: false },
      { text: "Slower heapification process", correct: true },
      { text: "Reduced number of comparisons", correct: false },
    ],
  },
];

const quesElement = document.getElementById("question");
const ansBtn = document.getElementById("ans-btn");
const nextBtn = document.getElementById("next-btn");

let crntQuesIdx = 0;
let score = 0;

function startQuiz() {
  crntQuesIdx = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQues();
}

function showQues() {
  resetState();
  let crntQues = questions[crntQuesIdx];
  let quesNo = crntQuesIdx + 1;
  quesElement.innerHTML = quesNo + ". " + crntQues.question;

  crntQues.answeers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansBtn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState() {
  nextBtn.style.display = "none";
  while (ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  let isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  Array.from(ansBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  quesElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again!";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  crntQuesIdx++;
  if (crntQuesIdx < questions.length) {
    showQues();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (crntQuesIdx < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
