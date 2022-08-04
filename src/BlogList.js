export default function BlogList(props) {
  const blogs = props.blogs;
  return (
    <div>
      {blogs.map((blogs) => {
        return (
          <div className="Blogs" key={blogs.id}>
            <p>{blogs.title}</p>
            <p>written by {blogs.author}</p>
          </div>
        );
      })}
    </div>
  );
}
