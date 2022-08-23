import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
export default function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();

  const { data, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  function handleClick() {
    fetch("http://localhost:8000/blogs/" + id, { method: `Delete` }).then(
      history.push(`/`)
    );
  }
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {data && (
        <div className="Article">
          <h2 className="TitleArticle">{data.title}</h2>
          <p className="BodyArticle">{data.body}</p>
          <p className="AuthorArticle">Written by {data.author}</p>
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </div>
  );
}
