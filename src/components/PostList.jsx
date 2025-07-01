import { Link } from "react-router-dom";

const posts = [
  { slug: "primeiro-post", title: "Meu Primeiro Post" },
  { slug: "segundo-post", title: "Outro Post Legal" }
];

export default function PostList() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
