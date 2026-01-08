import React from 'react';

function NavBar() {
  
  return (
    <div className="navbar">
        <div className="navbar-item">
            <a href="#instructions" style={{ color: 'inherit', textDecoration: 'none' }}>הוראות הכנה</a>
        </div>
        <div className="navbar-item">
            <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>מחירון</a>
        </div>
        <div className="navbar-item">
            <a href="#ingredients" style={{ color: 'inherit', textDecoration: 'none' }}>רכיבים</a>
        </div>
    </div>
  );
}

export default NavBar;

