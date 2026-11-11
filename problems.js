const phases = [
  { id: 1, name: "Arrays & hashing" },
  { id: 2, name: "Strings & parsing" },
  { id: 3, name: "Pointers & windows" },
  { id: 4, name: "Prefix sums & matrices" },
  { id: 5, name: "Stacks & monotonic" },
  { id: 6, name: "Linked lists" },
  { id: 7, name: "Binary search" },
  { id: 8, name: "Sorting, intervals & greedy" },
  { id: 9, name: "Trees & BST" },
  { id: 10, name: "Heaps, tries & design" },
  { id: 11, name: "Graph fundamentals" },
  { id: 12, name: "Advanced graphs" },
  { id: 13, name: "Backtracking & recursion" },
  { id: 14, name: "DP foundations" },
  { id: 15, name: "Advanced DP" },
  { id: 16, name: "Bits, math & geometry" }
];

const patternGuides = {
  "Hash map": "Use direct lookup to replace repeated searching.",
  "Hash set": "Model membership and uniqueness in constant average time.",
  "Frequency map": "Turn counts into a compact invariant.",
  "Bucket counting": "Exploit a bounded key space instead of fully sorting.",
  "Prefix / suffix": "Combine information from both directions without nested work.",
  "Array marking": "Reuse input positions as constant-space state.",
  "String mapping": "Preserve a consistent relationship between symbols.",
  "Parsing": "Translate a character stream into explicit states and rules.",
  "Simulation": "Implement the specification carefully and test edge cases.",
  "Two pointers": "Move boundaries only when an invariant proves it is safe.",
  "Sliding window": "Maintain exactly the state needed for a moving range.",
  "Monotonic deque": "Keep only candidates that can still become optimal.",
  "Prefix sum": "Convert range totals into differences of cumulative state.",
  "Prefix sum + hash": "Match current cumulative state with an earlier target state.",
  "Fenwick / segment tree": "Support range queries and point updates in logarithmic time.",
  "Matrix traversal": "Control boundaries and visit each cell exactly as intended.",
  "Stack": "Use last-in, first-out state for nested or deferred work.",
  "Monotonic stack": "Resolve elements when the next better boundary appears.",
  "Linked list": "Change links safely while preserving access to the remaining nodes.",
  "Fast / slow pointers": "Use relative pointer speed to reveal structure without extra memory.",
  "Binary search": "State the invariant, then discard half the search space.",
  "Search on answer": "Binary-search a monotonic feasibility condition.",
  "Intervals": "Sort endpoints so overlap and coverage become local decisions.",
  "Greedy": "Prove the locally best choice preserves a global optimum.",
  "Sorting": "Create useful order before making decisions.",
  "Tree DFS": "Define each answer from child subproblems.",
  "Tree BFS": "Use a queue to preserve levels or shortest unweighted distance.",
  "BST": "Exploit ordered subtrees and inorder traversal.",
  "Tree DP": "Return one state upward while tracking the complete answer.",
  "Heap": "Maintain the best candidates without ordering everything.",
  "Trie": "Represent prefixes as shared paths.",
  "Data structure design": "Combine structures so every required operation meets its target complexity.",
  "Grid DFS / BFS": "Treat cells as graph nodes and mark them at discovery time.",
  "Graph DFS / BFS": "Model nodes, edges, visited state, and traversal order explicitly.",
  "Multi-source BFS": "Start every source together to model simultaneous expansion.",
  "Topological sort": "Resolve dependencies with indegrees or DFS states.",
  "Union find": "Maintain connected components under incremental unions.",
  "Shortest path": "Choose BFS or Dijkstra from the edge-cost model.",
  "Minimum spanning tree": "Connect every node with minimum total edge cost.",
  "Backtracking": "Choose, explore, undo, and prune the search tree.",
  "Recursion": "Define a smaller instance and a precise base case.",
  "1D dynamic programming": "Define state, transition, base cases, and evaluation order.",
  "Knapsack DP": "Track how choices change a bounded total or capacity.",
  "Sequence DP": "Express the best sequence ending at or starting from a position.",
  "2D dynamic programming": "Model two changing dimensions in one state.",
  "String DP": "Use prefix states to align, edit, split, or match strings.",
  "Interval DP": "Solve ranges by choosing the final split or action.",
  "Bit manipulation": "Use bit identities to compress state or remove paired values.",
  "Math": "Derive the arithmetic invariant before writing code.",
  "Geometry": "Normalize slopes, distances, or coordinates without precision errors."
};

const rawProblems = `
1|Two Sum|two-sum|Easy|Hash map|1
217|Contains Duplicate|contains-duplicate|Easy|Hash set|1
242|Valid Anagram|valid-anagram|Easy|Frequency map|1
49|Group Anagrams|group-anagrams|Medium|Hash map|1
347|Top K Frequent Elements|top-k-frequent-elements|Medium|Bucket counting|1
238|Product of Array Except Self|product-of-array-except-self|Medium|Prefix / suffix|1
36|Valid Sudoku|valid-sudoku|Medium|Hash set|1
128|Longest Consecutive Sequence|longest-consecutive-sequence|Medium|Hash set|1
169|Majority Element|majority-element|Easy|Greedy|1
205|Isomorphic Strings|isomorphic-strings|Easy|String mapping|1
290|Word Pattern|word-pattern|Easy|String mapping|1
349|Intersection of Two Arrays|intersection-of-two-arrays|Easy|Hash set|1
350|Intersection of Two Arrays II|intersection-of-two-arrays-ii|Easy|Frequency map|1
219|Contains Duplicate II|contains-duplicate-ii|Easy|Hash map|1
560|Subarray Sum Equals K|subarray-sum-equals-k|Medium|Prefix sum + hash|1
523|Continuous Subarray Sum|continuous-subarray-sum|Medium|Prefix sum + hash|1
974|Subarray Sums Divisible by K|subarray-sums-divisible-by-k|Medium|Prefix sum + hash|1
380|Insert Delete GetRandom O(1)|insert-delete-getrandom-o1|Medium|Data structure design|1
706|Design HashMap|design-hashmap|Easy|Data structure design|1
705|Design HashSet|design-hashset|Easy|Data structure design|1
41|First Missing Positive|first-missing-positive|Hard|Array marking|1
442|Find All Duplicates in an Array|find-all-duplicates-in-an-array|Medium|Array marking|1
448|Find All Numbers Disappeared in an Array|find-all-numbers-disappeared-in-an-array|Easy|Array marking|1
287|Find the Duplicate Number|find-the-duplicate-number|Medium|Fast / slow pointers|1

125|Valid Palindrome|valid-palindrome|Easy|Two pointers|2
13|Roman to Integer|roman-to-integer|Easy|Parsing|2
14|Longest Common Prefix|longest-common-prefix|Easy|String mapping|2
28|Find the Index of the First Occurrence in a String|find-the-index-of-the-first-occurrence-in-a-string|Easy|Two pointers|2
58|Length of Last Word|length-of-last-word|Easy|Parsing|2
67|Add Binary|add-binary|Easy|Simulation|2
415|Add Strings|add-strings|Easy|Simulation|2
43|Multiply Strings|multiply-strings|Medium|Simulation|2
8|String to Integer (atoi)|string-to-integer-atoi|Medium|Parsing|2
12|Integer to Roman|integer-to-roman|Medium|Greedy|2
6|Zigzag Conversion|zigzag-conversion|Medium|Simulation|2
151|Reverse Words in a String|reverse-words-in-a-string|Medium|Two pointers|2
394|Decode String|decode-string|Medium|Stack|2
227|Basic Calculator II|basic-calculator-ii|Medium|Stack|2
224|Basic Calculator|basic-calculator|Hard|Stack|2
65|Valid Number|valid-number|Hard|Parsing|2
71|Simplify Path|simplify-path|Medium|Stack|2
443|String Compression|string-compression|Medium|Two pointers|2

121|Best Time to Buy and Sell Stock|best-time-to-buy-and-sell-stock|Easy|Two pointers|3
167|Two Sum II|two-sum-ii-input-array-is-sorted|Medium|Two pointers|3
15|3Sum|3sum|Medium|Two pointers|3
18|4Sum|4sum|Medium|Two pointers|3
11|Container With Most Water|container-with-most-water|Medium|Two pointers|3
42|Trapping Rain Water|trapping-rain-water|Hard|Two pointers|3
26|Remove Duplicates from Sorted Array|remove-duplicates-from-sorted-array|Easy|Two pointers|3
27|Remove Element|remove-element|Easy|Two pointers|3
283|Move Zeroes|move-zeroes|Easy|Two pointers|3
88|Merge Sorted Array|merge-sorted-array|Easy|Two pointers|3
977|Squares of a Sorted Array|squares-of-a-sorted-array|Easy|Two pointers|3
75|Sort Colors|sort-colors|Medium|Two pointers|3
3|Longest Substring Without Repeating Characters|longest-substring-without-repeating-characters|Medium|Sliding window|3
424|Longest Repeating Character Replacement|longest-repeating-character-replacement|Medium|Sliding window|3
567|Permutation in String|permutation-in-string|Medium|Sliding window|3
438|Find All Anagrams in a String|find-all-anagrams-in-a-string|Medium|Sliding window|3
76|Minimum Window Substring|minimum-window-substring|Hard|Sliding window|3
209|Minimum Size Subarray Sum|minimum-size-subarray-sum|Medium|Sliding window|3
713|Subarray Product Less Than K|subarray-product-less-than-k|Medium|Sliding window|3
1004|Max Consecutive Ones III|max-consecutive-ones-iii|Medium|Sliding window|3
904|Fruit Into Baskets|fruit-into-baskets|Medium|Sliding window|3
930|Binary Subarrays With Sum|binary-subarrays-with-sum|Medium|Sliding window|3
239|Sliding Window Maximum|sliding-window-maximum|Hard|Monotonic deque|3
480|Sliding Window Median|sliding-window-median|Hard|Heap|3

303|Range Sum Query - Immutable|range-sum-query-immutable|Easy|Prefix sum|4
304|Range Sum Query 2D - Immutable|range-sum-query-2d-immutable|Medium|Prefix sum|4
724|Find Pivot Index|find-pivot-index|Easy|Prefix sum|4
307|Range Sum Query - Mutable|range-sum-query-mutable|Medium|Fenwick / segment tree|4
1109|Corporate Flight Bookings|corporate-flight-bookings|Medium|Prefix sum|4
1094|Car Pooling|car-pooling|Medium|Prefix sum|4
1310|XOR Queries of a Subarray|xor-queries-of-a-subarray|Medium|Prefix sum|4
525|Contiguous Array|contiguous-array|Medium|Prefix sum + hash|4
1248|Count Number of Nice Subarrays|count-number-of-nice-subarrays|Medium|Prefix sum + hash|4
1074|Number of Submatrices That Sum to Target|number-of-submatrices-that-sum-to-target|Hard|Prefix sum + hash|4
54|Spiral Matrix|spiral-matrix|Medium|Matrix traversal|4
48|Rotate Image|rotate-image|Medium|Matrix traversal|4
73|Set Matrix Zeroes|set-matrix-zeroes|Medium|Matrix traversal|4
289|Game of Life|game-of-life|Medium|Simulation|4
498|Diagonal Traverse|diagonal-traverse|Medium|Matrix traversal|4
315|Count of Smaller Numbers After Self|count-of-smaller-numbers-after-self|Hard|Fenwick / segment tree|4

20|Valid Parentheses|valid-parentheses|Easy|Stack|5
155|Min Stack|min-stack|Medium|Stack|5
150|Evaluate Reverse Polish Notation|evaluate-reverse-polish-notation|Medium|Stack|5
739|Daily Temperatures|daily-temperatures|Medium|Monotonic stack|5
853|Car Fleet|car-fleet|Medium|Monotonic stack|5
84|Largest Rectangle in Histogram|largest-rectangle-in-histogram|Hard|Monotonic stack|5
232|Implement Queue using Stacks|implement-queue-using-stacks|Easy|Data structure design|5
225|Implement Stack using Queues|implement-stack-using-queues|Easy|Data structure design|5
496|Next Greater Element I|next-greater-element-i|Easy|Monotonic stack|5
503|Next Greater Element II|next-greater-element-ii|Medium|Monotonic stack|5
901|Online Stock Span|online-stock-span|Medium|Monotonic stack|5
402|Remove K Digits|remove-k-digits|Medium|Monotonic stack|5
735|Asteroid Collision|asteroid-collision|Medium|Stack|5
456|132 Pattern|132-pattern|Medium|Monotonic stack|5
316|Remove Duplicate Letters|remove-duplicate-letters|Medium|Monotonic stack|5
1047|Remove All Adjacent Duplicates In String|remove-all-adjacent-duplicates-in-string|Easy|Stack|5
921|Minimum Add to Make Parentheses Valid|minimum-add-to-make-parentheses-valid|Medium|Greedy|5
946|Validate Stack Sequences|validate-stack-sequences|Medium|Stack|5
907|Sum of Subarray Minimums|sum-of-subarray-minimums|Medium|Monotonic stack|5
1673|Find the Most Competitive Subsequence|find-the-most-competitive-subsequence|Medium|Monotonic stack|5

206|Reverse Linked List|reverse-linked-list|Easy|Linked list|6
21|Merge Two Sorted Lists|merge-two-sorted-lists|Easy|Linked list|6
141|Linked List Cycle|linked-list-cycle|Easy|Fast / slow pointers|6
142|Linked List Cycle II|linked-list-cycle-ii|Medium|Fast / slow pointers|6
19|Remove Nth Node From End of List|remove-nth-node-from-end-of-list|Medium|Linked list|6
143|Reorder List|reorder-list|Medium|Linked list|6
2|Add Two Numbers|add-two-numbers|Medium|Linked list|6
138|Copy List with Random Pointer|copy-list-with-random-pointer|Medium|Hash map|6
146|LRU Cache|lru-cache|Medium|Data structure design|6
234|Palindrome Linked List|palindrome-linked-list|Easy|Fast / slow pointers|6
876|Middle of the Linked List|middle-of-the-linked-list|Easy|Fast / slow pointers|6
160|Intersection of Two Linked Lists|intersection-of-two-linked-lists|Easy|Linked list|6
92|Reverse Linked List II|reverse-linked-list-ii|Medium|Linked list|6
25|Reverse Nodes in k-Group|reverse-nodes-in-k-group|Hard|Linked list|6
23|Merge k Sorted Lists|merge-k-sorted-lists|Hard|Heap|6
82|Remove Duplicates from Sorted List II|remove-duplicates-from-sorted-list-ii|Medium|Linked list|6
86|Partition List|partition-list|Medium|Linked list|6
148|Sort List|sort-list|Medium|Linked list|6

704|Binary Search|binary-search|Easy|Binary search|7
35|Search Insert Position|search-insert-position|Easy|Binary search|7
69|Sqrt(x)|sqrtx|Easy|Binary search|7
278|First Bad Version|first-bad-version|Easy|Binary search|7
374|Guess Number Higher or Lower|guess-number-higher-or-lower|Easy|Binary search|7
74|Search a 2D Matrix|search-a-2d-matrix|Medium|Binary search|7
33|Search in Rotated Sorted Array|search-in-rotated-sorted-array|Medium|Binary search|7
153|Find Minimum in Rotated Sorted Array|find-minimum-in-rotated-sorted-array|Medium|Binary search|7
81|Search in Rotated Sorted Array II|search-in-rotated-sorted-array-ii|Medium|Binary search|7
154|Find Minimum in Rotated Sorted Array II|find-minimum-in-rotated-sorted-array-ii|Hard|Binary search|7
875|Koko Eating Bananas|koko-eating-bananas|Medium|Search on answer|7
1011|Capacity To Ship Packages Within D Days|capacity-to-ship-packages-within-d-days|Medium|Search on answer|7
410|Split Array Largest Sum|split-array-largest-sum|Hard|Search on answer|7
162|Find Peak Element|find-peak-element|Medium|Binary search|7
34|Find First and Last Position of Element in Sorted Array|find-first-and-last-position-of-element-in-sorted-array|Medium|Binary search|7
658|Find K Closest Elements|find-k-closest-elements|Medium|Binary search|7
981|Time Based Key-Value Store|time-based-key-value-store|Medium|Binary search|7
4|Median of Two Sorted Arrays|median-of-two-sorted-arrays|Hard|Binary search|7
540|Single Element in a Sorted Array|single-element-in-a-sorted-array|Medium|Binary search|7
378|Kth Smallest Element in a Sorted Matrix|kth-smallest-element-in-a-sorted-matrix|Medium|Search on answer|7

56|Merge Intervals|merge-intervals|Medium|Intervals|8
57|Insert Interval|insert-interval|Medium|Intervals|8
435|Non-overlapping Intervals|non-overlapping-intervals|Medium|Greedy|8
452|Minimum Number of Arrows to Burst Balloons|minimum-number-of-arrows-to-burst-balloons|Medium|Greedy|8
763|Partition Labels|partition-labels|Medium|Greedy|8
134|Gas Station|gas-station|Medium|Greedy|8
55|Jump Game|jump-game|Medium|Greedy|8
45|Jump Game II|jump-game-ii|Medium|Greedy|8
135|Candy|candy|Hard|Greedy|8
406|Queue Reconstruction by Height|queue-reconstruction-by-height|Medium|Greedy|8
621|Task Scheduler|task-scheduler|Medium|Greedy|8
846|Hand of Straights|hand-of-straights|Medium|Greedy|8
1899|Merge Triplets to Form Target Triplet|merge-triplets-to-form-target-triplet|Medium|Greedy|8
678|Valid Parenthesis String|valid-parenthesis-string|Medium|Greedy|8
881|Boats to Save People|boats-to-save-people|Medium|Greedy|8
1029|Two City Scheduling|two-city-scheduling|Medium|Greedy|8
164|Maximum Gap|maximum-gap|Medium|Bucket counting|8
179|Largest Number|largest-number|Medium|Sorting|8
912|Sort an Array|sort-an-array|Medium|Sorting|8
1288|Remove Covered Intervals|remove-covered-intervals|Medium|Intervals|8
1024|Video Stitching|video-stitching|Medium|Greedy|8
1326|Minimum Number of Taps to Open to Water a Garden|minimum-number-of-taps-to-open-to-water-a-garden|Hard|Greedy|8

104|Maximum Depth of Binary Tree|maximum-depth-of-binary-tree|Easy|Tree DFS|9
226|Invert Binary Tree|invert-binary-tree|Easy|Tree DFS|9
543|Diameter of Binary Tree|diameter-of-binary-tree|Easy|Tree DP|9
110|Balanced Binary Tree|balanced-binary-tree|Easy|Tree DFS|9
100|Same Tree|same-tree|Easy|Tree DFS|9
572|Subtree of Another Tree|subtree-of-another-tree|Easy|Tree DFS|9
102|Binary Tree Level Order Traversal|binary-tree-level-order-traversal|Medium|Tree BFS|9
94|Binary Tree Inorder Traversal|binary-tree-inorder-traversal|Easy|Tree DFS|9
199|Binary Tree Right Side View|binary-tree-right-side-view|Medium|Tree BFS|9
1448|Count Good Nodes in Binary Tree|count-good-nodes-in-binary-tree|Medium|Tree DFS|9
98|Validate Binary Search Tree|validate-binary-search-tree|Medium|BST|9
230|Kth Smallest Element in a BST|kth-smallest-element-in-a-bst|Medium|BST|9
235|Lowest Common Ancestor of a Binary Search Tree|lowest-common-ancestor-of-a-binary-search-tree|Medium|BST|9
236|Lowest Common Ancestor of a Binary Tree|lowest-common-ancestor-of-a-binary-tree|Medium|Tree DFS|9
105|Construct Binary Tree from Preorder and Inorder Traversal|construct-binary-tree-from-preorder-and-inorder-traversal|Medium|Tree DFS|9
106|Construct Binary Tree from Inorder and Postorder Traversal|construct-binary-tree-from-inorder-and-postorder-traversal|Medium|Tree DFS|9
124|Binary Tree Maximum Path Sum|binary-tree-maximum-path-sum|Hard|Tree DP|9
297|Serialize and Deserialize Binary Tree|serialize-and-deserialize-binary-tree|Hard|Tree DFS|9
112|Path Sum|path-sum|Easy|Tree DFS|9
113|Path Sum II|path-sum-ii|Medium|Tree DFS|9
129|Sum Root to Leaf Numbers|sum-root-to-leaf-numbers|Medium|Tree DFS|9
437|Path Sum III|path-sum-iii|Medium|Prefix sum + hash|9
144|Binary Tree Preorder Traversal|binary-tree-preorder-traversal|Easy|Tree DFS|9
145|Binary Tree Postorder Traversal|binary-tree-postorder-traversal|Easy|Tree DFS|9
101|Symmetric Tree|symmetric-tree|Easy|Tree DFS|9
111|Minimum Depth of Binary Tree|minimum-depth-of-binary-tree|Easy|Tree BFS|9
103|Binary Tree Zigzag Level Order Traversal|binary-tree-zigzag-level-order-traversal|Medium|Tree BFS|9
116|Populating Next Right Pointers in Each Node|populating-next-right-pointers-in-each-node|Medium|Tree BFS|9
117|Populating Next Right Pointers in Each Node II|populating-next-right-pointers-in-each-node-ii|Medium|Tree BFS|9
662|Maximum Width of Binary Tree|maximum-width-of-binary-tree|Medium|Tree BFS|9
863|All Nodes Distance K in Binary Tree|all-nodes-distance-k-in-binary-tree|Medium|Graph DFS / BFS|9
958|Check Completeness of a Binary Tree|check-completeness-of-a-binary-tree|Medium|Tree BFS|9
222|Count Complete Tree Nodes|count-complete-tree-nodes|Easy|Binary search|9
114|Flatten Binary Tree to Linked List|flatten-binary-tree-to-linked-list|Medium|Tree DFS|9

703|Kth Largest Element in a Stream|kth-largest-element-in-a-stream|Easy|Heap|10
1046|Last Stone Weight|last-stone-weight|Easy|Heap|10
973|K Closest Points to Origin|k-closest-points-to-origin|Medium|Heap|10
215|Kth Largest Element in an Array|kth-largest-element-in-an-array|Medium|Heap|10
295|Find Median from Data Stream|find-median-from-data-stream|Hard|Heap|10
355|Design Twitter|design-twitter|Medium|Data structure design|10
208|Implement Trie (Prefix Tree)|implement-trie-prefix-tree|Medium|Trie|10
211|Design Add and Search Words Data Structure|design-add-and-search-words-data-structure|Medium|Trie|10
212|Word Search II|word-search-ii|Hard|Trie|10
648|Replace Words|replace-words|Medium|Trie|10
677|Map Sum Pairs|map-sum-pairs|Medium|Trie|10
1268|Search Suggestions System|search-suggestions-system|Medium|Trie|10
460|LFU Cache|lfu-cache|Hard|Data structure design|10
173|Binary Search Tree Iterator|binary-search-tree-iterator|Medium|Data structure design|10
284|Peeking Iterator|peeking-iterator|Medium|Data structure design|10
341|Flatten Nested List Iterator|flatten-nested-list-iterator|Medium|Data structure design|10
384|Shuffle an Array|shuffle-an-array|Medium|Data structure design|10
528|Random Pick with Weight|random-pick-with-weight|Medium|Prefix sum|10
1146|Snapshot Array|snapshot-array|Medium|Data structure design|10
1396|Design Underground System|design-underground-system|Medium|Data structure design|10
1472|Design Browser History|design-browser-history|Medium|Data structure design|10
432|All Oone Data Structure|all-oone-data-structure|Hard|Data structure design|10

200|Number of Islands|number-of-islands|Medium|Grid DFS / BFS|11
133|Clone Graph|clone-graph|Medium|Graph DFS / BFS|11
695|Max Area of Island|max-area-of-island|Medium|Grid DFS / BFS|11
733|Flood Fill|flood-fill|Easy|Grid DFS / BFS|11
994|Rotting Oranges|rotting-oranges|Medium|Multi-source BFS|11
417|Pacific Atlantic Water Flow|pacific-atlantic-water-flow|Medium|Grid DFS / BFS|11
130|Surrounded Regions|surrounded-regions|Medium|Grid DFS / BFS|11
542|01 Matrix|01-matrix|Medium|Multi-source BFS|11
1162|As Far from Land as Possible|as-far-from-land-as-possible|Medium|Multi-source BFS|11
1091|Shortest Path in Binary Matrix|shortest-path-in-binary-matrix|Medium|Grid DFS / BFS|11
934|Shortest Bridge|shortest-bridge|Medium|Multi-source BFS|11
463|Island Perimeter|island-perimeter|Easy|Grid DFS / BFS|11
1905|Count Sub Islands|count-sub-islands|Medium|Grid DFS / BFS|11
1020|Number of Enclaves|number-of-enclaves|Medium|Grid DFS / BFS|11
1254|Number of Closed Islands|number-of-closed-islands|Medium|Grid DFS / BFS|11
547|Number of Provinces|number-of-provinces|Medium|Graph DFS / BFS|11
785|Is Graph Bipartite?|is-graph-bipartite|Medium|Graph DFS / BFS|11
886|Possible Bipartition|possible-bipartition|Medium|Graph DFS / BFS|11
841|Keys and Rooms|keys-and-rooms|Medium|Graph DFS / BFS|11
797|All Paths From Source to Target|all-paths-from-source-to-target|Medium|Graph DFS / BFS|11
752|Open the Lock|open-the-lock|Medium|Graph DFS / BFS|11
127|Word Ladder|word-ladder|Hard|Graph DFS / BFS|11
433|Minimum Genetic Mutation|minimum-genetic-mutation|Medium|Graph DFS / BFS|11
1926|Nearest Exit from Entrance in Maze|nearest-exit-from-entrance-in-maze|Medium|Grid DFS / BFS|11
1971|Find if Path Exists in Graph|find-if-path-exists-in-graph|Easy|Graph DFS / BFS|11
2492|Minimum Score of a Path Between Two Cities|minimum-score-of-a-path-between-two-cities|Medium|Graph DFS / BFS|11
2368|Reachable Nodes With Restrictions|reachable-nodes-with-restrictions|Medium|Graph DFS / BFS|11
802|Find Eventual Safe States|find-eventual-safe-states|Medium|Graph DFS / BFS|11

207|Course Schedule|course-schedule|Medium|Topological sort|12
210|Course Schedule II|course-schedule-ii|Medium|Topological sort|12
684|Redundant Connection|redundant-connection|Medium|Union find|12
721|Accounts Merge|accounts-merge|Medium|Union find|12
1319|Number of Operations to Make Network Connected|number-of-operations-to-make-network-connected|Medium|Union find|12
959|Regions Cut By Slashes|regions-cut-by-slashes|Medium|Union find|12
947|Most Stones Removed with Same Row or Column|most-stones-removed-with-same-row-or-column|Medium|Union find|12
990|Satisfiability of Equality Equations|satisfiability-of-equality-equations|Medium|Union find|12
399|Evaluate Division|evaluate-division|Medium|Graph DFS / BFS|12
1584|Min Cost to Connect All Points|min-cost-to-connect-all-points|Medium|Minimum spanning tree|12
743|Network Delay Time|network-delay-time|Medium|Shortest path|12
787|Cheapest Flights Within K Stops|cheapest-flights-within-k-stops|Medium|Shortest path|12
1514|Path with Maximum Probability|path-with-maximum-probability|Medium|Shortest path|12
1631|Path With Minimum Effort|path-with-minimum-effort|Medium|Shortest path|12
778|Swim in Rising Water|swim-in-rising-water|Hard|Shortest path|12
332|Reconstruct Itinerary|reconstruct-itinerary|Hard|Graph DFS / BFS|12
2092|Find All People With Secret|find-all-people-with-secret|Hard|Graph DFS / BFS|12
310|Minimum Height Trees|minimum-height-trees|Medium|Topological sort|12
1462|Course Schedule IV|course-schedule-iv|Medium|Topological sort|12
1203|Sort Items by Groups Respecting Dependencies|sort-items-by-groups-respecting-dependencies|Hard|Topological sort|12
1192|Critical Connections in a Network|critical-connections-in-a-network|Hard|Graph DFS / BFS|12
847|Shortest Path Visiting All Nodes|shortest-path-visiting-all-nodes|Hard|Shortest path|12
815|Bus Routes|bus-routes|Hard|Graph DFS / BFS|12
1489|Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree|find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree|Hard|Minimum spanning tree|12

78|Subsets|subsets|Medium|Backtracking|13
90|Subsets II|subsets-ii|Medium|Backtracking|13
46|Permutations|permutations|Medium|Backtracking|13
47|Permutations II|permutations-ii|Medium|Backtracking|13
39|Combination Sum|combination-sum|Medium|Backtracking|13
40|Combination Sum II|combination-sum-ii|Medium|Backtracking|13
77|Combinations|combinations|Medium|Backtracking|13
17|Letter Combinations of a Phone Number|letter-combinations-of-a-phone-number|Medium|Backtracking|13
22|Generate Parentheses|generate-parentheses|Medium|Backtracking|13
79|Word Search|word-search|Medium|Backtracking|13
131|Palindrome Partitioning|palindrome-partitioning|Medium|Backtracking|13
51|N-Queens|n-queens|Hard|Backtracking|13
52|N-Queens II|n-queens-ii|Hard|Backtracking|13
37|Sudoku Solver|sudoku-solver|Hard|Backtracking|13
93|Restore IP Addresses|restore-ip-addresses|Medium|Backtracking|13
216|Combination Sum III|combination-sum-iii|Medium|Backtracking|13
491|Non-decreasing Subsequences|non-decreasing-subsequences|Medium|Backtracking|13
698|Partition to K Equal Sum Subsets|partition-to-k-equal-sum-subsets|Medium|Backtracking|13
1239|Maximum Length of a Concatenated String with Unique Characters|maximum-length-of-a-concatenated-string-with-unique-characters|Medium|Backtracking|13
473|Matchsticks to Square|matchsticks-to-square|Medium|Backtracking|13
301|Remove Invalid Parentheses|remove-invalid-parentheses|Hard|Backtracking|13
679|24 Game|24-game|Hard|Backtracking|13

70|Climbing Stairs|climbing-stairs|Easy|1D dynamic programming|14
746|Min Cost Climbing Stairs|min-cost-climbing-stairs|Easy|1D dynamic programming|14
198|House Robber|house-robber|Medium|1D dynamic programming|14
213|House Robber II|house-robber-ii|Medium|1D dynamic programming|14
740|Delete and Earn|delete-and-earn|Medium|1D dynamic programming|14
322|Coin Change|coin-change|Medium|Knapsack DP|14
518|Coin Change II|coin-change-ii|Medium|Knapsack DP|14
377|Combination Sum IV|combination-sum-iv|Medium|Knapsack DP|14
416|Partition Equal Subset Sum|partition-equal-subset-sum|Medium|Knapsack DP|14
494|Target Sum|target-sum|Medium|Knapsack DP|14
279|Perfect Squares|perfect-squares|Medium|1D dynamic programming|14
139|Word Break|word-break|Medium|1D dynamic programming|14
91|Decode Ways|decode-ways|Medium|1D dynamic programming|14
300|Longest Increasing Subsequence|longest-increasing-subsequence|Medium|Sequence DP|14
673|Number of Longest Increasing Subsequence|number-of-longest-increasing-subsequence|Medium|Sequence DP|14
53|Maximum Subarray|maximum-subarray|Medium|1D dynamic programming|14
152|Maximum Product Subarray|maximum-product-subarray|Medium|1D dynamic programming|14
918|Maximum Sum Circular Subarray|maximum-sum-circular-subarray|Medium|1D dynamic programming|14
309|Best Time to Buy and Sell Stock with Cooldown|best-time-to-buy-and-sell-stock-with-cooldown|Medium|1D dynamic programming|14
714|Best Time to Buy and Sell Stock with Transaction Fee|best-time-to-buy-and-sell-stock-with-transaction-fee|Medium|1D dynamic programming|14
123|Best Time to Buy and Sell Stock III|best-time-to-buy-and-sell-stock-iii|Hard|1D dynamic programming|14
188|Best Time to Buy and Sell Stock IV|best-time-to-buy-and-sell-stock-iv|Hard|1D dynamic programming|14
343|Integer Break|integer-break|Medium|1D dynamic programming|14
96|Unique Binary Search Trees|unique-binary-search-trees|Medium|1D dynamic programming|14

62|Unique Paths|unique-paths|Medium|2D dynamic programming|15
63|Unique Paths II|unique-paths-ii|Medium|2D dynamic programming|15
64|Minimum Path Sum|minimum-path-sum|Medium|2D dynamic programming|15
120|Triangle|triangle|Medium|2D dynamic programming|15
221|Maximal Square|maximal-square|Medium|2D dynamic programming|15
1143|Longest Common Subsequence|longest-common-subsequence|Medium|String DP|15
583|Delete Operation for Two Strings|delete-operation-for-two-strings|Medium|String DP|15
72|Edit Distance|edit-distance|Medium|String DP|15
97|Interleaving String|interleaving-string|Medium|String DP|15
115|Distinct Subsequences|distinct-subsequences|Hard|String DP|15
44|Wildcard Matching|wildcard-matching|Hard|String DP|15
10|Regular Expression Matching|regular-expression-matching|Hard|String DP|15
5|Longest Palindromic Substring|longest-palindromic-substring|Medium|String DP|15
647|Palindromic Substrings|palindromic-substrings|Medium|String DP|15
516|Longest Palindromic Subsequence|longest-palindromic-subsequence|Medium|String DP|15
312|Burst Balloons|burst-balloons|Hard|Interval DP|15
329|Longest Increasing Path in a Matrix|longest-increasing-path-in-a-matrix|Hard|2D dynamic programming|15
931|Minimum Falling Path Sum|minimum-falling-path-sum|Medium|2D dynamic programming|15
174|Dungeon Game|dungeon-game|Hard|2D dynamic programming|15
1547|Minimum Cost to Cut a Stick|minimum-cost-to-cut-a-stick|Hard|Interval DP|15
1043|Partition Array for Maximum Sum|partition-array-for-maximum-sum|Medium|1D dynamic programming|15
1187|Make Array Strictly Increasing|make-array-strictly-increasing|Hard|Sequence DP|15
879|Profitable Schemes|profitable-schemes|Hard|Knapsack DP|15
1262|Greatest Sum Divisible by Three|greatest-sum-divisible-by-three|Medium|1D dynamic programming|15

191|Number of 1 Bits|number-of-1-bits|Easy|Bit manipulation|16
338|Counting Bits|counting-bits|Easy|Bit manipulation|16
190|Reverse Bits|reverse-bits|Easy|Bit manipulation|16
371|Sum of Two Integers|sum-of-two-integers|Medium|Bit manipulation|16
7|Reverse Integer|reverse-integer|Medium|Math|16
50|Pow(x, n)|powx-n|Medium|Math|16
202|Happy Number|happy-number|Easy|Math|16
268|Missing Number|missing-number|Easy|Bit manipulation|16
136|Single Number|single-number|Easy|Bit manipulation|16
149|Max Points on a Line|max-points-on-a-line|Hard|Geometry|16
`;

const problems = rawProblems.trim().split("\n").filter(Boolean).map(line => {
  const [number, title, slug, difficulty, pattern, stage] = line.split("|");
  return {
    n: Number(number),
    t: title,
    slug,
    d: difficulty,
    p: pattern,
    s: Number(stage),
    m: difficulty === "Easy" ? 20 : difficulty === "Hard" ? 50 : 35,
    w: patternGuides[pattern] || "Practice a reusable interview pattern and explain its complexity."
  };
});
