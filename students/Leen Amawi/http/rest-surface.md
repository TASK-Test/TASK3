## Statuses
## Get all statuses

Method:GET
Path: /api/statuses
Purpose: Retrieve all available task statuses.
Request JSON: N/A
Response JSON:
json
[
  {
    "id": 1,
    "name": "BACKLOG"
  },
  {
    "id": 2,
    "name": "IN_PROGRESS"
  },
  {
    "id": 3,
    "name": "DONE"
  }
]
Expected status code: 200 OK

## Get a status by ID
Method: GET
Path: /api/statuses/{id}
Purpose: Retrieve one status by its ID.
Request JSON: N/A
Response JSON:
{
  "id": 1,
  "name": "BACKLOG"
}
Expected status code: 200 OK
## Create a status
Method: POST
Path: /api/statuses
Purpose: Create a new task status.
Request JSON:
{
  "name": "IN_REVIEW"
}
Response JSON:
{
  "id": 4,
  "name": "IN_REVIEW"
}
Expected status code: 201 Created

## Update a status
Method: PUT
Path: /api/statuses/{id}
Purpose: Update an existing status.
Request JSON:
{
  "name": "IN_PROGRESS"
}
Response JSON:
{
  "id": 2,
  "name": "IN_PROGRESS"
}
Expected status code: 200 OK
## Delete a status
Method: DELETE
Path: /api/statuses/{id}
Purpose: Delete a status.
Request JSON: N/A
Response JSON: N/A
Expected status code: 204 No Content

## TASKS
## Get all tasks
Method: GET
Path: /api/tasks
Purpose: Retrieve all tasks.
Request JSON: N/A
Response JSON:
[
  {
    "id": 1,
    "title": "Fix login",
    "status": "BACKLOG",
    "priority": "HIGH",
    "targetDate": "2026-09-05"
  },
  {
    "id": 2,
    "title": "Add dashboard",
    "status": "IN_PROGRESS",
    "priority": "LOW",
    "targetDate": "2026-09-10"
  }
]
Expected status code: 200 OK
## Get a task by ID
Method: GET
Path: /api/tasks/{id}
Purpose: Retrieve one task by its ID.
Request JSON: N/A
Response JSON:
{
  "id": 1,
  "title": "Fix login",
  "status": "BACKLOG",
  "priority": "HIGH",
  "targetDate": "2026-09-05"
}
Expected status code: 200 OK
## Create a task
Method: POST
Path: /api/tasks
Purpose: Create a new task.
Request JSON:
{
  "title": "Write tests",
  "status": "BACKLOG",
  "priority": "MEDIUM",
  "targetDate": "2026-09-10"
}
Response JSON:
{
  "id": 3,
  "title": "Write tests",
  "status": "BACKLOG",
  "priority": "MEDIUM",
  "targetDate": "2026-09-10"
}
Expected status code: 201 Created
## Update a task
Method: PUT
Path: /api/tasks/{id}
Purpose: Update an existing task.
Request JSON:
{
  "title": "Write unit tests",
  "status": "IN_PROGRESS",
  "priority": "HIGH",
  "targetDate": "2026-09-12"
}
Response JSON:
{
  "id": 3,
  "title": "Write unit tests",
  "status": "IN_PROGRESS",
  "priority": "HIGH",
  "targetDate": "2026-09-12"
}
Expected status code: 200 OK
## Partially update a task
Method: PATCH
Path: /api/tasks/{id}
Purpose: Update specific fields of an existing task.
Request JSON:
{
  "priority": "HIGH"
}
Response JSON:
{
  "id": 3,
  "title": "Write tests",
  "status": "BACKLOG",
  "priority": "HIGH",
  "targetDate": "2026-09-10"
}
Expected status code: 200 OK

## Delete a task
Method: DELETE
Path: /api/tasks/{id}
Purpose: Delete a task by its ID.
Request JSON: N/A
Response JSON: N/A
Expected status code: 204 No Content



## Week 5:
 blank title -> 400.
 unknown id -> 404.
  delete a status still in use -> 409.