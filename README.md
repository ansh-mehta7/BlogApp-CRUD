# BlogApp

BlogApp is a CRUD (Create, Read, Update, Delete) application for managing blog posts and comments.

## Models

- **Post**: Represents a blog post with fields for title, body, likes, and comments.
- **Comment**: Represents a comment on a blog post with fields for the post it belongs to, user, and body.
- **Like**: Represents a like on a blog post with fields for the post it belongs to and the user who liked it.

## Controllers

- **postController**: Handles operations related to blog posts, such as creating, reading, updating, and deleting posts.
- **commentController**: Handles operations related to comments, such as adding and deleting comments on posts.
- **likeController**: Handles operations related to likes, such as liking and unliking posts.

## Routes

- `GET /api/posts`: Get all blog posts.
- `POST /api/posts`: Create a new blog post.
- `GET /api/posts/:id`: Get a single blog post by ID.
- `PUT /api/posts/:id`: Update a blog post by ID.
- `DELETE /api/posts/:id`: Delete a blog post by ID.
- `POST /api/posts/:id/comment`: Add a comment to a blog post.
- `DELETE /api/posts/:postId/comment/:commentId`: Delete a comment from a blog post.
- `POST /api/posts/:id/like`: Like a blog post.
- `POST /api/posts/:id/unlike`: Unlike a blog post.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/BlogApp.git
   ```

2. Navigate to the project directory:

   ```
   cd BlogApp
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_mongodb_uri` with your MongoDB connection URI and `your_jwt_secret` with your preferred JWT secret.

5. Run the application:

   ```
   npm start
   ```

6. Access the application:

   Open your web browser and navigate to `http://localhost:3000` to access the application.


