DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);


CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  follower_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  FOREIGN KEY (follower_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  author_id INTEGER,
  parent_reply_id INTEGER,
  body TEXT,
  FOREIGN KEY (author_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  likes INTEGER,
  question_id INTEGER,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO users (fname, lname)
VALUES ('Bob', 'Bob'), ('John', 'John'), ('Katty', 'Purry');

INSERT INTO questions (title, body, author_id)
VALUES ('Is math related to science?', 'Is math related to science?', (
  SELECT users.id
  FROM users
  WHERE users.fname = 'Katty' AND users.lname = 'Purry')
);

INSERT INTO question_follows (follower_id, question_id)
VALUES (
  (
    SELECT users.id
    FROM users
    WHERE users.fname = 'Bob' AND users.lname = 'Bob'
  ),(
    SELECT questions.id
    FROM questions
    WHERE questions.title = 'Is math related to science?'
  )
);

INSERT INTO replies (question_id, parent_reply_id, author_id, body)
VALUES (
  (
    SELECT questions.id
    FROM questions
    WHERE questions.title = 'Is math related to science?'
  ), NULL,(
    SELECT users.id
    FROM users
    WHERE users.fname = 'John' AND users.lname = 'John'
  ) , 'What kind of stupid question is that?');

INSERT INTO question_likes (likes,question_id,user_id)
VALUES (
  1,(
    SELECT questions.id
    FROM questions
    WHERE questions.title = 'Is math related to science?'
  ),(
    SELECT users.id
    FROM users
    WHERE users.fname = 'Bob' AND users.lname = 'Bob'
  )
);
