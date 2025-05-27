CREATE DATABASE node_mysql_ts;

CREATE TABLE posts(
   id int not null auto_increment primary key,
   title varchar(50) not null,
   descripcion text not null,
   image_url text,
   created_at TIMESTAMP DEFAULT CURRENT_TIME
);

DESCRIBE posts;