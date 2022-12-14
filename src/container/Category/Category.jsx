import React from 'react';

import { images } from '../../constants'
import './Category.css';

const Category = () => (
  <div className='app_market-container'>
    <h3>Qraft Market place Makes it Easy For you to Get Artists of your Choice.</h3>
    <p>We have a variety of artists such as musicians, poets, photographers, and painters.</p>
    <div className='app_market-cards'>
      <div className='cards'>
        <img src={images.card1} alt='card one' />
        <div className='layer'>
          <p>Photographer</p>
        </div>
      </div>
      <div className='cards'>
        <img src={images.card2} alt='card two' />
        <div className='layer'>
          <p>Musician</p>
        </div>
      </div>
      <div className='cards'>
        <img src={images.card3} alt='card three' />
        <div className='layer'>
          <p>Painter</p>
        </div>
      </div>
      <div className='cards'>
        <img src={images.card4} alt='card four' />
        <div className='layer'>
          <p>Literature</p>
        </div>
      </div>
    </div>
  </div>
);

export default Category;
