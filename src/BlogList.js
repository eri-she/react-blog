export default function BlogList(props) {
  return (
    <div>
      {props.blogs.map(function (blogs, index) {
        return (
          <div key={index}>
            <p>{blogs.title}</p>
            <p>written by {blogs.author}</p>
          </div>
        );
      })}
    </div>
  );
}
