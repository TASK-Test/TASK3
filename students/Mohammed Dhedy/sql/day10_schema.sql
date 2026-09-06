CREATE TABLE users(
    id bigserial primary key ,
    username varchar(50) not null unique,
    email varchar(255) unique not null,
    display_name varchar(100),
    password_hash varchar(100) not null,
    role varchar(10),
    created_at timestamptz
);

CREATE TABLE statuses(
id bigserial primary key,
name varchar not null unique,
position int not null,
color varchar
);

CREATE TABLE tasks(
    id bigserial primary key,
    title varchar(200) not null,
    description text,
    status_id bigint references statuses(id),
    created_by bigint references users(id),
    priority varchar(10) CHECK (priority in ('LOW','MEDIUM','HIGH')),
    target_date date,
    created_at timestamptz,
    updated_at timestamptz
);