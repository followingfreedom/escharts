SELECT now()::timestamp;
SELECT now()::timestamp(0);

create table esinfos(
	id serial PRIMARY KEY,
	aggs json,
	query varchar(8000),
	esurl varchar(1000),
	ctime timestamp(0),
	mtime timestamp(0)
)