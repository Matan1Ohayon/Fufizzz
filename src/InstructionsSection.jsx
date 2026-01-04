import React from 'react';

function InstructionsSection({ steps, isVisible }) {
  return (
    <section className="instructions-section">
      <div className="section-header">
        <h2 className="section-title">
          הוראות הכנה :
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
              <img src={`/${step.icon}`} alt={`Step ${step.id}`} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            </div>
            <div className="step-text" dangerouslySetInnerHTML={{ __html: step.text }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstructionsSection;

