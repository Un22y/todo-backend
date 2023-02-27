create TABLE boards(
    id SERIAL PRIMARY KEY NOT NULL,
    order_id SERIAL NOT NULL,
    name VARCHAR(255)
);

create TABLE tasks(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    description VARCHAR(255),
    board_id INTEGER NOT NULL, 
    is_done BOOLEAN,
    created_time TIMESTAMPTZ,
    FOREIGN KEY (board_id) REFERENCES board(id)
);