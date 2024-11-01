import React from 'react';
import Post from './Post';

 function Blog(){
  const posts = [
    { title: 'Post 1 Title', body: 'Welcome to Ameerpet World' },
    { title: 'Post 2 Title', body: 'About React' },
    { title: 'Post 3 Title', body: 'Ratan Sir is Very Nice' },
  ];

  return (
    <>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} body={post.body} />
      ))}
    </>
  );
};

export default Blog;