// NotFound.jsx
// import React from 'react';
import { Link } from "react-router-dom";
import "../index.css";

export default function NotFound() {
  return (
    <div className="not-found ">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </div>
  );
}
