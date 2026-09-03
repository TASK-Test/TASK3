--create user table
CREATE TABLE users (id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(100),
    password_hash VARCHAR(100) NOT NULL,
    role VARCHAR(20),
    created_at TIMESTAMPTZ);


--create statuses table
CREATE TABLE statuses (id BIGSERIAL PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE,
    position INT NOT NULL,
    color VARCHAR);


--create tasks table
CREATE TABLE tasks (id BIGSERIAL PRIMARY KEY,
    status_id BIGINT REFERENCES statuses(id),
    created_by BIGINT REFERENCES users(id),
    priority VARCHAR(10) CHECK (priority IN ('LOW', 'MEDIUM', 'HIGH')),
    target_date DATE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ);
