import { useState } from 'react';

const AddBlog = ({handleReload}) => {
    const [blogTopic, setBlogTopic] = useState('');
    const [blogComment, setBlogComment] = useState('');

    const _handleTopicChange = (e) => {
        setBlogTopic(e.target.value);
    }

    const _handleCommentChange = (e) => {
        setBlogComment(e.target.value);
    }

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const submitResponse = await fetch('http://127.0.0.1:3001/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ blog_topic: blogTopic, blog_comment: blogComment })
        }).then((response) => response
        );
        console.log("SUBMIT RESPONSE IS", submitResponse);
        setBlogTopic('');
        setBlogComment('');

        if (submitResponse.status === 200) {
            handleReload(true);
        }
    };

    return (
        <form onSubmit={_handleSubmit}>
            <label>
                Blog Topic
                <input type='text' name='blog_topic' value={blogTopic} onChange={_handleTopicChange} />
            </label>
            <label>
                Blog Comment
                <input type='text' name='blog_comment' value={blogComment} onChange={_handleCommentChange} />
            </label>
            <button type="submit">Add Blog</button>
        </form>
    );
};

export default AddBlog;