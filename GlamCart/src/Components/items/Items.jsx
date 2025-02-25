
import React from 'react';
import PropTypes from 'prop-types';
import "./item.css";

function Items({ image, name, new_price, old_price }) {
  return (
    <div className='item'>
      <img src={image} alt={name} />
      <p>{name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>{new_price}</div>
        <div className='item-price-old'>{old_price}</div>
      </div>
    </div>
  );
}

// Prop Types Validation
Items.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
};

export default Items;

