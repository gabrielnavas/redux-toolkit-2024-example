import { useAppSelector } from "../store/store";

const List = () => {
  const posts = useAppSelector(state => state.posts);

  return (
    <ul>
      {posts.items.map(post => (
        <li key={post.id}>{post.description}</li>
      ))}
    </ul>
  )
}

export default List;