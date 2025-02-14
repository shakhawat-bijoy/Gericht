import React, { useState, useEffect } from 'react';
import AboutBanner from '../about/AboutBanner';
import LeftBlog from '../blog/LeftBlog';
import Sidebar from '../blog/Sidebar';
import Newsletter from '../Newsletter';
import BlogTwo from '../blog/BlogTwo';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('With-Sidebar');
  const [breadcrumbText, setBreadcrumbText] = useState('With-Sidebar');

  useEffect(() => {
    setBreadcrumbText(activeTab);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'With-Sidebar':
        return (
          <div className="flex justify-center gap-x-8 pt-16">
            <LeftBlog />
            <Sidebar />
          </div>
        );
      case 'Single-Column':
        return (
          <div className="flex justify-center gap-x-8 pt-16">
            <BlogTwo />
            <Sidebar />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-home-bg bg-[#070707]">
      <AboutBanner text={`Our Blogs ${breadcrumbText}`} />

      <div className="flex flex-col items-center">
        <ul className="flex gap-x-10 max-w-[500px] mt-10">
          {['With-Sidebar', 'Single-Column'].map((tab) => (
            <li
              key={tab}
              className={`text-base leading-7 font-normal ${activeTab === tab ? 'font-extrabold text-xl transition-all duration-150 text-[#DCCA87]' : 'text-[#aaa]'}`}
            >
              <Link to="#" onClick={() => setActiveTab(tab)}>{tab}</Link>
            </li>
          ))}
        </ul>
        {renderContent()}
      </div>

      <Newsletter />
    </div>
  );
};

export default Blog;
