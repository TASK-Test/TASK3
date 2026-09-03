--insert task statuses
INSERT INTO statuses (name, position, color)
VALUES('Backlog', 1, '#808080'),
    ('In Progress', 2, '#FFA500'),
    ('Done', 3, '#008000');


--insert users
INSERT INTO users(username, email, display_name, password_hash, role, created_at)
VALUES ('leen', 'leen@gmail.com', 'Leen Amawi', 'password123', 'USER', NOW()),
    ('dana', 'dana@gmail.com', 'Dana Eisa', 'password456', 'USER', NOW());


--insert tasks
INSERT INTO tasks(status_id, created_by, priority, target_date, title, description, created_at, updated_at)
VALUES (1, 1, 'HIGH', '2026-09-05', 'Fix login', 'Fix the login page', NOW(), NOW()),
    (2, 2, 'MEDIUM', '2026-09-07', 'Add dashboard', 'Create the dashboard', NOW(), NOW()),
    (3, 1, 'LOW', '2026-09-10', 'Write tests', 'Add unit tests', NOW(), NOW());


--show each task with its status and creator
SELECT tasks.title, statuses.name AS status, users.display_name AS "Full Name"
FROM tasks
INNER JOIN statuses
ON tasks.status_id = statuses.id
INNER JOIN users
ON tasks.created_by = users.id;


--count tasks for each status
SELECT statuses.name AS status,COUNT(tasks.id) AS task_count
FROM statuses
LEFT JOIN tasks
ON tasks.status_id = statuses.id
GROUP BY statuses.id, statuses.name;