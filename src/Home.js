import { useState } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "My website",
      body: "a website is the...",
      author: "mario",
      id: 1,
    },
    {
      title: "My laptop",
      body: "a laptop is the...",
      author: "rosa",
      id: 2,
    },
    {
      title: "My coffee",
      body: "a coffee is the...",
      author: "julio",
      id: 3,
    },
  ]);
  return <BlogList blogs={blogs} title="All blogs!" />;
}
