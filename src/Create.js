import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState(``);
  const [body, setBody] = useState(``);
  const [author, setAuthor] = useState(`Mario`);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/", {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(history.push(`/`));
  }
  return (
    <div>
      <h1 className="CreateTitle">New Blogs!</h1>
      <form onSubmit={handleSubmit}>
        <label className="FormTitle">Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Author</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Mario">Mario </option>
          <option value="Rosa">Rosa </option>
        </select>
        <button> Add Blog</button>
      </form>
    </div>
  );
}
