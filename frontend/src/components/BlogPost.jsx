import React from 'react';

const BlogPost = ({ post }) => {
    return (
        <div className="blog-post">
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-post-author">Author: {post.author}</p>
            <p className="blog-post-content">{post.content}</p>
        </div>
    );
};
export default BlogPost;
