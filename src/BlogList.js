export default function BlogList(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.blogs.map(function (blogs, index) {
        return (
          <div key={index}>
            <h2>{blogs.title}</h2>
            <p>written by {blogs.author}</p>
            <button onClick={() => props.handleDelete(blogs.id)}>
              Delete blog
            </button>
          </div>
        );
      })}
    </div>
  );
}
