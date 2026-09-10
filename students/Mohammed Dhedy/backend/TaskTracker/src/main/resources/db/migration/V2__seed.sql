INSERT INTO statuses (name , position , color) VALUES
('Backlog', 0, '#ee7c7c'),
('In Progress', 1, '#3B82F6'),
('Done', 2, '#22C55E');

INSERT INTO users (username,email,display_name,password_hash,role,created_at) Values
('mhmd04', 'mhmddhedy1234@gmail.com', 'Mohammed', 'dummy_hash1_123', 'USER', NOW())
