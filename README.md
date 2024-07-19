# TASK MANAGER API

This an API where users can be make request to create task, get all tasks, get task by an id, update task, mark task as completed, delete all tasks and delete task by an id

## features
- **Task Management**
  - create, read, update and delete task
  - make task as completed

## Installation

### System Requirements
- **Operating System**: Any OS with Node.js 14+ and npm 6+ support.
- **Dependencies**: Listed in the `package.json` file.

### Steps to Install
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ACAZUMAH/TASK-MANAGER-API


2. **Install Dependencies**:
   ```bash
   npm install
   ```


3. **Set Up the Database**:
   - Make sure you are connected to mongodb atlas.
   - Create a new database for the project.
   - Set up your database URL in the environment variables. Create a `.env` file in the root directory and add the following:
     ```
     DATABASE_URL=your-database-url
     ```


4. **Run Migrations**:
   - If you are using a migration tool like `sequelize` or `typeorm`, run the necessary migration command. For example, with `typeorm`:
     ```bash
     npm run typeorm migration:run
     ```


6. **Start the Server**:
   ```bash
   npm start
   ```

## Usage

### Post management
  - **Create Task**:
    - Endpoint: `POST api/vi/tasks`
    - Request body: 
      ```json
      {
        "name": "your task name"
      }
      ```


  - **Get all Tasks**:
    - Endpoint: `GET api/v1/tasks`

  - **Get Task by id**:
    - Endpoint: `GET api/v1/tasks/:id`

  - **Update a Task**:
    - Endpoint: `PATCH api/v1/tasks/:id`
    - Request body:
      ```json
      {
        "name": "new udpdate"
      }
      ```

  - **Mark a Task as Completed**:
    - Endpoint: `PATCH api/v1/tasks/:id`
    - Request body:
      ```json
      {
        "completed": true
      }
      ```
    
  - **Delete a task**:
    - Endpoint: `DELETE api/vi/tasks/:id`

## Examples

### Creating a new task
To create a new task, send a `POST` request to  the `POST api/vi/tasks` api endpoint.
```json
{
    "name": "Today i will a new song"
}
```

### Updating a task
To update a task,, send a `PATCH` request to the `PATCH api/v1/tasks/:id` api endpoint.
```json
{
    "name": "i have changed my mind"
    "completed": true
}
```

## Contributing

I welcome contributions! Please follow these guidelines to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
6. Merge all pull request

### Reporting Issues
Please use the GitHub issue tracker to report any bugs or request new features.

## Additional Information

For any further questions or assistance, please contact me at calebazumah9@gmail.com