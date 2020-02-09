CREATE TABLE user
(
	id serial PRIMARY KEY,										--学校主键
    name varchar(32),
    gender int default 0,
    sign varchar(64),
    bonus varchar(256),
    region_type int default 0,
    region varchar(32),
    register_type int default 0,
 	create_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);
comment on column user.id is '用户id';

create index name on user(name);

CREATE TABLE tag
(
	id serial PRIMARY KEY,
	type int default 0,
    name varchar(32),
    bonus varchar(256),
 	create_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);
comment on column tag.id is '用户id';

CREATE TABLE usertag
(
	id serial PRIMARY KEY,
	userid int,
    tagid int
);
comment on column usertag.id is '用户id';

CREATE TABLE blog
(
	id serial PRIMARY KEY,
	type int default 0,
	title varchar(256),
    name varchar(32),
    bonus varchar(256),
 	create_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_time timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);
comment on column blog.id is '用户id';


CREATE TABLE blogtag
(
	id serial PRIMARY KEY,
	blogid int,
    tagid int
);
comment on column blogtag.id is '用户id';