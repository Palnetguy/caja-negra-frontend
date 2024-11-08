import React from 'react';

const CategoryCard = ({ image, title = 'Placeholder Title', description, isSelected }) => {
  const defaultImage = 'https://via.placeholder.com/150';

  // Parse the description string and render it as React elements
  const descriptionElements = description
    ? description.split('<p>').filter(p => p.trim() !== '').map((p, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: p + '</p>' }} />
      ))
    : null;

  return (
    <div className={`category-card ${isSelected ? 'selected' : ''}`}>
      <div className='image'>
        <img className='img' src={image || defaultImage} alt={title} />
      </div>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        {descriptionElements}
      </div>
      </div>
  );
};

export default CategoryCard;