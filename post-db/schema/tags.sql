CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO tags (name) VALUES
    ('tutorial'),
    ('research'),
    ('update')
ON CONFLICT (name) DO NOTHING; -- Prevents duplicates if re-run
