import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState(``);
  const [body, setBody] = useState(``);
  const [author, setAuthor] = useState(``);
  return (
    <div>
      <h1 className="CreateTitle">New Blogs!</h1>
      <form>
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
        <button> Create New Blog</button>
      </form>
    </div>
  );
}
