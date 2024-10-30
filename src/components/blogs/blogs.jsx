import { useEffect, useState } from "react";
import BlogsList from './blogs'; // Renamed the import to `BlogsList`

// Changed the component name from `Blogs` to `BlogsPage`
const BlogsPage = () => {  
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {/* Render fetched blogs */}
            {blogs.map((blog, index) => (
                <div key={index}>{blog.title}</div>
            ))}
        </div>
    );
};
export default BlogsPage;