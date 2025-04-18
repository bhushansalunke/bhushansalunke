import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.main`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Blog = () => {
  return (
    <BlogContainer>
      <h1>Blog & Insights</h1>
      <p>Thoughts and insights on cybersecurity, infrastructure, and technology.</p>
    </BlogContainer>
  );
};

export default Blog;