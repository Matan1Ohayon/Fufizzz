import React, { useState, useEffect } from 'react';
import { Phone, Info, Zap, Flame, Clock, Cat, Cookie, AlertTriangle, Sparkles, Send, Loader2, X } from 'lucide-react';
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const steps = [
    {
      id: 1,
      text: "מחממים תנור ל-200°C, (חום עליון ותחתון, לא טורבו).",
      icon: "cookie-1.png"
    },
    {
      id: 2,
      text: "מסדרים את הכדורים הקפואים על תבנית מרופדת בנייר אפייה, במרווחים גדולים.",
      icon: "cookie-2.png"
    },
    {
      id: 3,
      text: "רק כשהתנור חם, מכניסים לאפייה של 13-16 דקות, כשהשוליים זהובים והאמצע עדיין רך – זה בול.",
      icon: "cookie-3.png"
    },
    {
      id: 4,
      text: "קשה, אבל מחכים 4-6 דקות לפני ההגשה. מגישים עם הגלידה שנשארה לכם במקפיא מהערב ההוא.",
      icon: "cookie-4.png"
    }
  ];

  return (
    <div className="app-wrapper">
    
      <div className="bg-decor">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>

      <div className="content-container">
        <div className={`top-nav ${isVisible ? 'visible' : ''}`}>
          <a href="tel:0525565860" className="phone-btn">
            <Phone size={18} />
            <span>052-5565860</span>
          </a>
          
        </div>

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
            <span className="title-highlight">ומלח ים אטלנטי</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 'bold', opacity: 0.8 }}>
            <Flame size={18} color="#f97316" />
            מוכנות לאפייה
          </div>
        </header>

        {/* שלבי הכנה */}
        <section className="instructions-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="q-mark">?</span>
              איך עושים את זה נכון?
            </h2>
            
          </div>

        
          <div className="step-list">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`step-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="step-icon-wrapper">
                  <img src={`/${step.icon}`} alt={`Step ${step.id}`} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
                <div className="step-text">{step.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* מידע נוסף */}
        <div className={`info-grid ${isVisible ? 'visible' : ''}`}>
          <div className="card-purple">
            <div className="card-title">
              <Info size={20} />
              הוראות אחסון
            </div>
            <p style={{ fontSize: '14px', margin: 0, opacity: 0.9 }}>
              שמירה בהקפאה בלבד. אין להפשיר לפני השימוש. העוגיות שלכם אוהבות קור עד המפגש עם התנור.
            </p>
          </div>

          <div className="card-white">
            <div className="card-title">
              <AlertTriangle size={20} />
              אלרגנים
            </div>
            <p style={{ fontSize: '13px', margin: 0, fontWeight: 'bold' }}>
              מכיל: גלוטן (חיטה), חלב, ביצים, סויה. <br/>
              עלול להכיל: אגוזים, שקדים, בוטנים, שומשום וקוקוס.
            </p>
          </div>
        </div>

        {/* Footer Mascot */}
        <footer className="mascot-footer">
          <p style={{ marginTop: '20px', fontSize: '12px', fontWeight: 900, opacity: 0.4, direction: 'ltr' }}>
             FUFI'ZZZ BY YOTAM DAHAN © 2026
          </p>
        </footer>
      </div>
    
    </div>
  )
}

export default App
