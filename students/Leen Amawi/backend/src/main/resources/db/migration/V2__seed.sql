INSERT INTO status (id, name, position, color)
VALUES
    (1, 'Backlog', 0, '#6B7280'),
    (2, 'In Progress', 1, '#3B82F6'),
    (3, 'Done', 2, '#22C55E');

INSERT INTO app_user ( id,username,email,display_name,password_hash,role,created_at)
VALUES (1,'seed-user','seed@example.com','Seed User','not-a-real-password-hash','USER',CURRENT_TIMESTAMP);

SELECT setval(pg_get_serial_sequence('status', 'id'), 3);
SELECT setval(pg_get_serial_sequence('app_user', 'id'), 1);