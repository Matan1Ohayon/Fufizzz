import React, { useState, useEffect } from 'react';
import { Info, ChevronDown, AlertTriangle, Cookie } from 'lucide-react';
import InstructionsSection from './InstructionsSection';
import InfoCard from './InfoCard';
import './App.css'
import NavBar from './NavBar';
import OrderLabel from './OrderLabel';
import Pricing from './pricing';



function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      id: 1,
      text: `מחממים תנור ל-200°C, (חום עליון ותחתון, <strong>לא טורבו</strong>).`,
      icon: "cookie-1.png"
    },
    {
      id: 2,
      text: 'מסדרים את <strong>הכדורים הקפואים</strong> על תבנית מרופדת בנייר אפייה, במרווחים גדולים.',
      icon: "cookie-2.png"
    },
    {
      id: 3,
      text: "<strong>רק כשהתנור חם</strong>, מכניסים לאפייה של 13-16 דקות, כשהשוליים זהובים והאמצע עדיין רך – זה בול.",
      icon: "cookie-3.png"
    },
    {
      id: 4,
      text: "קשה, אבל מחכים 4-6 דקות לפני ההגשה. מגישים עם הגלידה שנשארה לכם במקפיא מהערב ההוא.",
      icon: "cookie-4.png"
    }
  ];

  const year = new Date().getFullYear();

  return (
    <div className="app-wrapper">
      
      <img className="background-cookie1" src="/cookie.png" alt="Just a cookie" />

      <img className="background-cookie2" src="/cookie.png" alt="Just a cookie" />

      <NavBar />


      <div className="content-container">
        
        <OrderLabel isVisible={isVisible} isScrolled={isScrolled} />

        {/* Hero */}
        <header className={`hero ${isVisible ? 'visible' : ''}`}>
          <div className="logo-main">
              <div className="logo-box">
                <img 
                  src="/logo.png" alt="" />
              </div>
          </div>

          <h1 className="main-title">
            עוגיות טריפל שוקולד צ'יפס <br/>
            <span className="main-title">ומלח ים אטלנטי</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 'bold', opacity: 0.8 }}>
            מוכנות לאפייה
          </div>

          <div className='cat-talking'>
            <img src="/cat_talking.png" alt="" />
          </div>

          <div className='arrow-down-container'>
            <a href="#instructions">
              <ChevronDown size={40} color='#431e6c' className='arrow-down'/>
            </a>
          </div>

        </header>

       

        <div id='instructions'>
          <InstructionsSection steps={steps} isVisible={isVisible} />
        </div>       

        <img className="cat-head" src="/head_cat.png" alt="" />

        <div id='pricing'>
          <Pricing />
        </div>
        
        <div id='ingredients' className={`info-grid ${isVisible ? 'visible' : ''}`}>
          
          <InfoCard
            color="purple"
            borderType="none"
            title="הוראות אחסון"
            text="שמירה בהקפאה בלבד. אין להפשיר לפני השימוש."
            icon={Info}
          />

          <InfoCard
            color="white"
            borderType="none"
            title="מרכיבים"
            text="קמח חיטה לבן, חמאה, סוכר חום, ביצים, שוקולד מריר, שוקולד חלב, שוקולד לבן, סוכר לבן, אבקת חלב, קורנפלור, מלח, סודה לשתייה, אבקת אפייה, תמצית וניל, מלח ים אטלנטי."
            icon={Cookie}
          />

          <InfoCard
            color="white"
            borderType="dashed"
            title="אלרגנים"
            text="<strong>מכיל:</strong> גלוטן (חיטה), חלב, ביצים, סויה. <br/><strong>עלול להכיל:</strong> אגוזים, שקדים, בוטנים, שומשום וקוקוס."
            icon={AlertTriangle}
          />

        </div>

        {/* Footer Mascot */}
        <footer className="mascot-footer">
          <p style={{ marginTop: '20px', fontSize: '12px', fontWeight: 900, opacity: 0.4, direction: 'ltr' }}>
             FUFI'ZZZ BY YOTAM DAHAN © {year}
          </p>
        </footer>
      </div>
    
    </div>
  )
}

export default App
