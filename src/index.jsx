import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import images from './assets/images.json';

const UserAvatart = ({ src, alt = 'test' }) => {
  // console.log(alt)
  return (
    <div>
     {src ?  <img width='150px' src={src} alt={alt} /> : <p>No image</p> }
    </div>
  )
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserAvatart src={images[0]} alt="hello" />);

 



// // root.render(<UserCard images={images} />);
// root.render(
//   <React.StrictMode>
//     <UserCard users={users} />
//     <UserCard2 users={users} />
//   </React.StrictMode>,
// );
