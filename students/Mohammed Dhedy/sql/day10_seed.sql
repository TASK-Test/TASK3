INSERT INTO statuses (name,position,color) VALUES 
('Backlog', 1, '#ee7c7c'),
('In Progress', 2, '#3B82F6'),
('Done', 3, '#22C55E');

INSERT INTO users (username, email, display_name, password_hash, role, created_at) VALUES
('mhmd04', 'mhmddhedy1234@gmail.com', 'Mohammed', 'dummy_hash1_123', 'USER', NOW()),
('yass04', 'yasser@gmail.com', 'yasser', 'dummy_hash2_123', 'ADMIN', NOW());

INSERT INTO tasks (status_id, created_by, priority, target_date, title, description, created_at, updated_at) VALUES
(1, 1, 'HIGH', '2026-09-03', 'study sql', 'study sql and its related common comands', NOW(), NOW()),
(2, 2, 'MEDIUM', '2026-09-07', 'work on project', 'work in my personal project and complete issues', NOW(), NOW()),
(3, 1, 'LOW', '2026-09-10', 'meeting with group', 'meet with group and exchange updates and advices', NOW(), NOW());

SELECT t.id, t.title, t.priority,t.target_date, s.name, u.display_name
FROM tasks t JOIN statuses s ON t.status_id=s.id
JOIN users u ON t.created_by=u.id;


SELECT s.name ,COUNT(t.id) FROM statuses s LEFT JOIN tasks t ON s.id=t.status_id GROUP BY s.name;


