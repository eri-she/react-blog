import { Link } from "react-router-dom";

export default function BlogList(props) {
  const blogs = props.blogs;
  return (
    <div>
      {blogs.map((blogs) => {
        return (
          <div className="Blogs" key={blogs.id}>
            <Link to={`/blogs/${blogs.id}`}>
              <p>{blogs.title}</p>
              <p>written by {blogs.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
