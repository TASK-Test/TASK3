-- create TABLE
CREATE TABLE task_scratch (id bigserial primary key, title varchar(200) not null, priority varchar(10), target_date date, done boolean default false);

-- insert 5 rows 
INSERT INTO task_scratch(title, priority, target_date)
VALUES ('Fix login','HIGH','2026-09-05'),
    ('Add dashboard','LOW','2026-09-02'),
    ('Update profile','HIGH','2026-09-01'),
    ('Write tests','MEDIUM','2026-09-10'),
    ('Fix database','HIGH','2026-09-07');

--selects all tasks ordered by target date
SELECT * FROM task_scratch
ORDER BY target_date;

--selects only tasks with HIGH priority and return all rows where priority is HIGH
SELECT * FROM task_scratch
WHERE priority = 'HIGH';

--updates task 1 as completed
UPDATE task_scratch
SET done = true
WHERE id = 1;

--deletes task 2
DELETE FROM task_scratch
WHERE id = 2;

--counts the number of tasks for each priority and returns one row for each priority with its task count.
SELECT priority, COUNT(*) FROM task_scratch
GROUP BY priority;