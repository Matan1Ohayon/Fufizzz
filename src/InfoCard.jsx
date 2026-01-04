import React from 'react';

function InfoCard({ color, borderType, title, text, icon: Icon, textStyle = {} }) {
  const getCardClassName = () => {
    if (color === 'purple') {
      return 'card-purple';
    } else if (color === 'white') {
      return 'card-white';
    }
    return '';
  };

  const getBorderStyle = () => {
    if (borderType === 'none') {
      return {
        border: 'none'
      };
    } else if (borderType) {
      return {
        borderStyle: borderType,
        borderWidth: '2px',
        borderColor: 'var(--brand-purple)'
      };
    }
    return {};
  };

  const defaultTextStyle = {
    fontSize: '14px',
    margin: 0,
    opacity: 0.9,
    ...textStyle
  };

  return (
    <div className={getCardClassName()} style={getBorderStyle()}>
      <div className="card-title">
        {Icon && <Icon size={20} />}
        {title}
      </div>
      <p style={defaultTextStyle} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

export default InfoCard;

