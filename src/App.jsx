import { useState } from 'react';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Header from './components/header/Header';
import Bookmarks from './components/bookmarks/Bookmarks';  // Corrected import to match component name

function App() {
    const [count, setCount] = useState(0);

    return (
      <>
        <Header />   {/* Render the Header with "Knowledge Cafe" */}

        <div className='md:flex'>
        <Blogs />    {/* Render the Blogs component */}
        <Bookmarks />  {/* Render the Bookmarks component */}
        </div>
      </>
    );
}

export default App;
