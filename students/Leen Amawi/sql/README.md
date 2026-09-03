# Day 10 — Tracker Schema

This schema has three tables:
- users — stores users
- statuses — stores task statuses
- tasks — stores tasks

## Relationships
- tasks.status_id references statuses.id
- tasks.created_by references users.id

The tables use primary keys, foreign keys, unique fields, and constraints.