import React from 'react';

function OrderLabel({ isVisible, isScrolled }) {
  
  return (
    <div className={`top-nav ${isVisible ? 'visible' : ''}`}>
      <a 
        href={`https://wa.me/972525565860?text=${encodeURIComponent('היי יותם! אשמח לבצע הזמנה של פופיז! 🍪🐈‍⬛')}`} 
        target='_blank' 
        className={`phone-btn ${isScrolled ? 'scrolled' : ''}`}
        rel="noopener noreferrer"
      >
        <h3>להזמנות</h3>
        <img src="WhatsApp_icon_w.png" alt="WhatsApp icon" />
      </a>
    </div>
  );
}

export default OrderLabel;

