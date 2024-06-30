import React from 'react';
import Navbar from './Navbar'; // Assuming './Navbar' is the correct path to your Navbar component
import saImage from './sa.jpg'; // Import the image using relative path

function Creater() {
  return (
    <div>
      <Navbar />
      <div className='imK'>
        <img src={saImage} alt='Creator' /> {/* Use the imported image */}
        <h1 className='Cte'>Created by</h1>
        <h2 className='Samn'>Laitonjam Sanalemba Meitei (MCA)</h2>
        <h2 className='Nie'>NIELIT IMPHAL</h2>
      </div>
    </div>
  );
}

export default Creater;
