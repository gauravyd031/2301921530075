## Vehicle Scheduler Backend
The Vehicle Scheduler Backend is a Node.js and Express.js application that optimizes vehicle maintenance scheduling for multiple depots. It fetches depot and vehicle task data from the evaluation service, applies the **0/1 Knapsack Algorithm** to maximize total maintenance impact within each depot's available mechanic hours, and returns the optimized schedule. The application also integrates the reusable logging middleware to record backend operations.

### Features

- Fetch depots and vehicle tasks from the evaluation service.

- Optimize task allocation using the 0/1 Knapsack Algorithm.

- Maximize total maintenance impact within available mechanic hours.

- Reusable logging middleware integration.

- Structured Express.js project architecture.

- Error handling for API requests.

### Tech Stack

- Node.js

- Express.js

- Axios

- Dotenv

- Dynamic Programming (0/1 Knapsack)