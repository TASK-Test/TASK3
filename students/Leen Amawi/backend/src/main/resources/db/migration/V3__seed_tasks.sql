INSERT INTO task
    (title, description, status_id, priority, target_date, created_by, created_at, updated_at)
VALUES
    ('Fix login', 'Fix the login issue', 1, 'HIGH', '2026-09-05', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Add dashboard', 'Add the main dashboard', 2, 'LOW', '2026-09-02', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Update profile', 'Update the profile page', 3, 'HIGH', '2026-09-01', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Write tests', 'Write unit tests', 2, 'MEDIUM', '2026-09-10', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Fix database', 'Fix database issues', 1, 'HIGH', '2026-09-07', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);