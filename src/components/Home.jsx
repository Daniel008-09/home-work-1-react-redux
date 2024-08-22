import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page2">Page2</Link>
    </div>
  );
};

export default Home;