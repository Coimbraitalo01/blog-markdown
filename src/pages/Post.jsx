import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";

export default function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/src/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(marked(text)));
  }, [slug]);

  return (
    <div>
      <h1>{slug.replaceAll("-", " ")}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
