// blog.js
import React from "react";
import "./BlogCarousel.css";

// Sample blog data (3 blogs)
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

// Duplicate the blogs array for a seamless scrolling effect
const repeatedBlogs = blogs.concat(blogs);

function Blog() {
  return (
    <section className="marquee-container">
      <h2 className="blog-title">My Blogs</h2>
      <div className="marquee">
        <div className="marquee-track">
          {repeatedBlogs.map((blog, idx) => (
            <a
              key={idx}
              href={blog.link}
              className="blog-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{blog.title}</h3>
              <p>{blog.date}</p>
              <p>{blog.content}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
