import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Book from './pages/book/Book';
import SingleBlogPage from './pages/blog/SingleBlogPage';
import SingleBookPage from './pages/book/SingleBookPage';
import NotFound from './pages/NotFound';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/books" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/login" />} />
            <Route path="/books" element={!user ? <Navigate to="/login" /> : <Book />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<SingleBlogPage />} />
            <Route path="/books/:bookId" element={<SingleBookPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


