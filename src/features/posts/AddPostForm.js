import React, {useState} from 'react'

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)

    return (
        <section>
            <h2>Add a New Post</h2>
            <form action="">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onInput={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onInput={onContentChanged}
                />
            </form>
        </section>
    )
}

export default AddPostForm
