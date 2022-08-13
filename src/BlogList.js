import { Link } from "react-router-dom";

export default function BlogList(props) {
  const blogs = props.blogs;
  return (
    <div>
      {blogs.map((blogs) => {
        return (
          <div className="Blogs" key={blogs.id}>
            <Link className="BlogsList" to={`/blogs/${blogs.id}`}>
              <p className="BlogsListTitle">{blogs.title}</p>
              <p>Written by {blogs.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
