# Lab 2: SQLite Database and CRUD Routes

**Name:** Tejas R   
**Registration Number:** 252U1R8093   
**Class:** B.Tech CSE (Quantum Engineering) – 2B  
**Section:** S-13 204

**Local Server:** `http://localhost:3000`

**Deployed Link:** [https://bdf-lab-02-ik84.onrender.com](https://bdf-lab-02-ik84.onrender.com)

**API Endpoint:** [https://bdf-lab-02-ik84.onrender.com/books/](https://bdf-lab-02-ik84.onrender.com/books/)

## Objective

Connect an Express server to a SQLite database and expose CRUD (Create, Read, Update, Delete) operations over HTTP.

## Technologies Used

- Node.js
- Express.js
- SQLite
- `sqlite` and `sqlite3`
- Nodemon
- Postman

## Project Setup and Execution

1. Open a terminal inside the `lab-02` folder.
2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The server runs at:

   ```text
   http://localhost:3000
   ```

## Database

The SQLite database is located at `database/books.db`.

The `book` table contains the following columns:

| Column | Data Type | Description |
|---|---|---|
| `id` | INTEGER | Primary key |
| `title` | TEXT | Book title |
| `author` | TEXT | Book author |
| `price` | INTEGER | Book price |
| `pages` | INTEGER | Number of pages |

The database was populated with 10 sample book records using the SQLite CLI.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Retrieve all books |
| GET | `/books/:bookId/` | Retrieve a book by its ID |
| POST | `/books/` | Add a new book |
| PUT | `/books/:bookId/` | Update a book by its ID |
| DELETE | `/books/:bookId/` | Delete a book by its ID |

For POST and PUT requests, send a JSON body containing `title`, `author`, `price`, and `pages`.

## Screenshots

### 1. Get All Books

![GET all books](screenshots/get-all-books.png)

### 2. Get a Book by ID

![GET book by ID](screenshots/get-book-by-id.png)

### 3. Add a Book

![POST add a book](screenshots/post-book.png)

### 4. Update a Book

![PUT update a book](screenshots/put-book.png)

### 5. Delete a Book

![DELETE a book](screenshots/delete-book.png)

### 6. SQLite Database Records

![SQLite database records](screenshots/sqlite-database.png)

## Problems Faced and Solutions

- **SQLite command-line tool unavailable:** Installed SQLite tools and verified the `sqlite3` command.
- **Database creation:** Created the database folder and initialized the `books.db` database.
- **Dependency installation:** Installed the required Express, SQLite, and SQLite3 packages using npm.
- **API testing:** Used Postman to test all five API endpoints and verify their responses.

## Notes

- SQL queries use `?` placeholders for user-provided values.
- The database connection is established before the Express server starts.
- `node_modules` is excluded from GitHub using `.gitignore`.
- The SQLite database and API testing screenshots are included in the project.

## Deployment

The application is deployed on Render.

Live URL: https://bdf-lab-02-ik84.onrender.com

API Endpoint: https://bdf-lab-02-ik84.onrender.com/books/