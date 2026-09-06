# Day 10 - Tracker Schema

The tracker schema contains three tables:

- `users`: stores user accounts and profile information.
- `statuses`: stores task statuses : Backlog, In Progress, and Done.
- `tasks`: stores tasks and references both the status and the user who created the task.

## Relationships

- `tasks.status_id` -> `statuses.id`
- `tasks.created_by`-> `users.id`

Each status can have many tasks, and each user can create many tasks.