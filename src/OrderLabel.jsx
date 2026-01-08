import React from 'react';

function OrderLabel({ isVisible, isScrolled }) {
  
  return (
    <div className={`top-nav ${isVisible ? 'visible' : ''}`}>
      <a href="http://wa.me/972525565860" target='_blank' className={`phone-btn ${isScrolled ? 'scrolled' : ''}`}>
        <h3>להזמנות</h3>
        <img src="WhatsApp_icon_w.png" alt="WhatsApp icon" />
      </a>
    </div>
  );
}

export default OrderLabel;

