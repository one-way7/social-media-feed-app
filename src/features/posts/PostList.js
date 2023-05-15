import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PostList = () => {
  const posts = useSelector((state) => state.posts)

  const renderPosts = posts.map(({ id, title, content }) => (
      <article className="post-excerpt" key={id}>
        <h3>{title}</h3>
        <p className="post-content">{content.substring(0, 100)}</p>
      </article>
  ))

  return (
    <section className="posts-list">
        <h2>Posts</h2>
        {renderPosts}
    </section>
  )
}

export default PostList