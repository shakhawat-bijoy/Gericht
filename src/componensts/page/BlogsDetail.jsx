import React, { useEffect, useState } from 'react';
import AboutBanner from '../about/AboutBanner';
import BlogInside from '../blog/BlogInside';

const BlogsDetail = () => {
  let [breadcrumbText, setBreadcrumbText] = useState('With-Sidebar');

  useEffect(() => {
    
    let newText = 'Single-Column';
    setBreadcrumbText(newText);
  }, []);

  return (
    <div className='bg-home-bg bg-[#070707]'>
      <AboutBanner text={`Our Blogs - ${breadcrumbText}`} />
      <BlogInside/>
    </div>
  );
}

export default BlogsDetail;
