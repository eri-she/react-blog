import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>hi {id}</h1>
    </div>
  );
}
