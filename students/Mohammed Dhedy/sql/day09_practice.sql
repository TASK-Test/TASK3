-- this line will delete the table when run the file
DROP TABLE IF EXISTS task_scratch;

-- this block of code will create new table with the specified columns and types
CREATE TABLE task_scratch(
id bigserial PRIMARY KEY,
title varchar(200) NOT NULL,
priority varchar(10),
target_date date,
done boolean DEFAULT false
);

-- this block will insert 5 records(rows) to the task_scratch table
INSERT INTO task_scratch (title,priority,target_date) VALUES ('breakfast','HIGH','2026-09-03'),
('Gym','LOW','2026-09-05'),
('learn','MEDIUM','2026-09-7'),
('java','LOW','2026-09-02'),
('friend','HIGH','2026-09-09');

-- this line will select only the tasks with high priority
SELECT * from task_scratch WHERE priority='HIGH';

-- this line will returns all tasks orderd by its target date DESCENDING
SELECT * FROM task_scratch ORDER BY target_date DESC;


-- this line will update the row with id=2 done status to true,
UPDATE task_scratch SET done=true WHERE id=2;

-- this line will delete the row with id =5,
DELETE FROM task_scratch WHERE id=5;

-- Return the number of tasks for each priority.
SELECT priority ,COUNT(*) FROM task_scratch GROUP BY priority;