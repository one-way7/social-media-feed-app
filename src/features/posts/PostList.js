import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostList = () => {
    const posts = useSelector((state) => state.posts);

    const renderPosts = posts.map(({ id, title, content, user }) => (
        <article className="post-excerpt" key={id}>
            <h3>{title}</h3>
            <p className="post-content">{content.substring(0, 100)}</p>
            <p><PostAuthor userId={user}/></p>
            <Link to={`/posts/${id}`}>View Post</Link>
        </article>
    ));

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderPosts}
        </section>
    );
};

export default PostList;
