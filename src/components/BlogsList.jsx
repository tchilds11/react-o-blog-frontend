import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import BlogsDetails from './BlogsDetails';

const BlogsList = ({ reload }) => {
    const [blogs, setBlogs] = useState([]);
    const history = useHistory();

    useEffect (() => {
        (async () => {
            const blogData = await fetch('http://127.0.0.1:3001/blogs').then((response) => response.json());
            setBlogs(blogData);
        })();
    }, [reload]);

    return (
        <>
            {!!blogs.length ? (
                <>
                    <Route exact path='/'>
                        <ul>
                            {blogs.map((blog, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/blog/${blog.slug}`}>
                                            {blog.topic}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Route>
                    <Route path='/blog/:blog_slug'>
                        <BlogsDetails />
                        <button type='button' onClick={() => history.goBack()}>
                            Go Back
                        </button>
                    </Route>
                </>
            ) : (
                <p>Loading Blogs...</p>
            )}
        </>
    );
};

export default BlogsList;