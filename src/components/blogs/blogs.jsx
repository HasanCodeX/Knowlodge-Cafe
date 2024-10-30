import { useEffect, useState } from "react";

const Blogs = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data));  // Assuming you want to store data in `blog` state
    }, []);

    return (
        <div>
            {/* Render blogs here if needed */}
        </div>
    );
};

export default Blogs;
