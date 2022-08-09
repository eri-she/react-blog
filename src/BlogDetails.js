import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
export default function BlogDetails() {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {data && (
        <div className="Article">
          <h2 className="TitleArticle">{data.title}</h2>
          <p className="BodyArticle">{data.body}</p>
          <p className="AuthorArticle">Written by {data.author}</p>
        </div>
      )}
    </div>
  );
}
