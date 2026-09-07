import React, { use, Suspense } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchData = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// 1. Create the promise instance OUTSIDE the render function
const postsPromise = fetchData();

const PostsList = () => {
  // 2. Pass the stable promise to use()
  const data = use(postsPromise);

  return (
    <div>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

const App = () => {
  return (
    // 3. Wrap components using use() with Suspense
    <Suspense fallback={<div>Loading posts...</div>}>
      <PostsList />
    </Suspense>
  );
};

export default App;