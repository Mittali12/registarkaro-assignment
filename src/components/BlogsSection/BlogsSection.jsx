import React from 'react';
import './BlogsSection.css';
import { FaArrowRight } from "react-icons/fa";

const BlogsSection = () => {
    const blogs = [
        {
            id: 1,
            blogImg: 'images/blog1.jpg',
            name: 'Prabhash Mishra',
            date: '1 Jan 2023',
            time: 'Today',
            heading: 'Small Business & Startup',
            description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            blogFirstkeyPoint: 'Tax & Audit',
            blogSecondKeyPoint: 'Management'
        },
        {
            id: 2,
            blogImg: 'images/blog2.jpg',
            name: 'Mahesh Kumar',
            date: '1 Jan 2023',
            heading: 'Scale-Up Company Offer',
            description: 'Mental models are simple expressions of complex processes or relationships.',
            blogFirstkeyPoint: 'Tax',
            blogSecondKeyPoint: 'Research',
            blogThirdPoint: 'Complience'
        },
        {
            id: 3,
            blogImg: 'images/blog4.jpg',
            name: 'Rakhi Verma',
            date: '1 Jan 2023',
            heading: 'Growing Business Package',
            description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
            blogFirstkeyPoint: 'Audit',
            blogSecondKeyPoint: 'Money Back'
        },
        {
            id: 4,
            blogImg: 'images/blog1.jpg',
            name: 'Prabhash Mishra',
            date: '1 Jan 2023',
            time: 'Today',
            heading: 'Small Business & Startup',
            description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            blogFirstkeyPoint: 'Tax & Audit',
            blogSecondKeyPoint: 'Management'
        },
        {
            id: 5,
            blogImg: 'images/blog5.jpg',
            name: 'Prabhash Mishra',
            date: '1 Jan 2023',
            time: 'Today',
            heading: 'Small Business & Startup',
            description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            blogFirstkeyPoint: 'Tax & Audit',
            blogSecondKeyPoint: 'Management'
        },
        {
            id: 6,
            blogImg: 'images/blog6.jpg',
            name: 'Prabhash Mishra',
            date: '1 Jan 2023',
            time: 'Today',
            heading: 'Small Business & Startup',
            description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            blogFirstkeyPoint: 'Tax & Audit',
            blogSecondKeyPoint: 'Management'
        },
    ];

    return (
        <div className="blogs-container">
            <h3 className="blogs-heading">EXPLORE OUR BLOGS</h3>
            <h5 className="blogs-subheading">Accelerate Digital Transformation</h5>
            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <img src={blog.blogImg} alt="blog" className="blog-img" />
                        <ul className="blog-info">
                            <li>{blog.name}</li>
                            <li>{blog.date}</li>
                            {blog.time && <li>{blog.time}</li>}
                        </ul>
                        <h3 className="blog-title">{blog.heading}</h3>
                        <p className="blog-descriptopn">{blog.description}</p>
                        <div className='blog-points'>
                            {blog.blogFirstkeyPoint && <div className='purple-point'>{blog.blogFirstkeyPoint}</div>}
                            {blog.blogSecondKeyPoint && <div className='blue-point'>{blog.blogSecondKeyPoint}</div>}
                            {blog.blogThirdPoint && <div className='orange-point'>{blog.blogThirdPoint}</div>}
                        </div>
                    </div>
                ))}
            </div>
            <button className='themeButton'>Show more blogs <FaArrowRight /></button>
        </div>
    );
};

export default BlogsSection;
