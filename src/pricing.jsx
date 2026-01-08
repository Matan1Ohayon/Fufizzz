import React from 'react';

function Pricing() {

    const pricing_tag = [
        {
            id: 1,
            title: "4 עוגיות",
            price: "50₪",
            text: "המינימום הנדרש לשמירה על השפיות."
        },
        {
            id: 2,
            title: "8 עוגיות",
            price: "90₪",
            text: "חברו הטוב ביותר של המארח.ת."
        },
        {
            id: 3,
            title: "16 עוגיות",
            price: "170₪",
            text: "זו השקעה לטווח הארוך, סמכו עלינו."
        },
    ]

  return (
    <div >
        <h2>מחירון :</h2>
        <div className='pricing-container'>
            {pricing_tag.map( (item) => (
                <div className='pricing-card'>
                    <h3>{item.title}</h3>
                    <h2>{item.price}</h2>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Pricing;

