import React from 'react';

const Map = () => {
  return (
    <div className='flex justify-center items-center py-[152px] bg-[#070707] bg-home-bg'>
      <div className='relative'>
        <iframe
          className="w-[1300px] h-[500px] border-2 border-[#DCCA87]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4586.811369079548!2d90.41843259999997!3d23.8233723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1718552107218!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="absolute inset-0 flex justify-center items-center bg-[#1d1d1d] bg-opacity-40 transition-all duration-300 group pointer-events-none">
          
        </p>
      </div>
    </div>
  );
}

export default Map;
