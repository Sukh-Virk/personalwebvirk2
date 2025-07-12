// Blog.js
import React from "react";
import "./BlogCarousel.css";

const blogs = [
  {
    title: "My Journey With Math",
    date: "March 2022",
    content: "Bet on Yourself",
    link: "https://sukhblogs.github.io/Blog1/",
  },
  {
    title: "Web Dev Adventures",
    date: "Feb 2024",
    content: "My love for Programming",
    link: "https://sukhblogs.github.io/Blog2/",
  },
  {
    title: "Data Science & AI",
    date: "May 2025",
    content: "A New Passion",
    link: "https://sukhblogs.github.io/blog3forw/",
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-title">My Blogs!</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <a
            href={blog.link}
            key={index}
            className="blog-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{blog.title}</h3>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-content"><strong>{blog.content}</strong></p>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Blog;