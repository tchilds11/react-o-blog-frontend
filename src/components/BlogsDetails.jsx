import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogsDetails = () => {
    const { blog_slug } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        (async () => {
            const blogData = await fetch(
                `http://127.0.0.1:3001/blogs/${blog_slug}`
            ).then((response) => response.json());
            setBlog(blogData);
        })();
    }, [setBlog, blog_slug]);

    return (
        <p>
             {blog.comment}
        </p>
    );
};

export default BlogsDetails;