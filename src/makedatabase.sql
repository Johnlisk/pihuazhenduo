CREATE TABLE user
(
	id serial PRIMARY KEY,										--学校主键
    name character varying(32),
	create_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);
comment on column user.id is '用户id';