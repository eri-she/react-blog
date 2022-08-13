export default function Create() {
  return (
    <div>
      <h1 className="CreateTitle">New Blogs!</h1>
      <form>
        <label className="FormTitle">Blog Title</label>
        <input type="text" required />
        <label>Blog Body</label>
        <textarea required></textarea>
        <label>Author</label>
        <select>
          <option value="Mario">Mario </option>
          <option value="Rosa">Rosa </option>
        </select>
        <button> Create New Blog</button>
      </form>
    </div>
  );
}
