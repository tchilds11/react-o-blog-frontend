import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogsList from './components/BlogsList';
import AddBlog from './components/AddBlog';

function App() {
    const [reloadList, setReloadList] = useState(false);

    const handleReload = (status) => {
        setReloadList(status);
    }

    return (
        <div className='App'>
            <h1>Blog Posts</h1>
            <AddBlog handleReload={handleReload} />
            <Router>
                <BlogsList reload={reloadList} />
            </Router>
        </div>
    );
}

export default App;