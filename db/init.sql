CREATE DATABASE bookshelf;
USE bookshelf;
CREATE TABLE Books (
  book_id varchar(36) NOT NULL DEFAULT (UUID()),
  title varchar(100) NOT NULL,
  description varchar(255) DEFAULT NULL,
  price decimal(5,2) NOT NULL,
  img text,
  create_time varchar(25) NOT NULL,
  PRIMARY KEY (book_id)
);