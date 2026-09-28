INSERT INTO users (username,email,display_name,password_hash,role,created_at)
VALUES 
('m_demo','demo@example.com','Mohammed Demo','$2a$10$KFA0INGa8XxsUrQc.8AUru9e0hNQLGiZu0iPx0CuBL.SLsU4syHjm','USER',NOW())
ON CONFLICT (username) DO NOTHING;