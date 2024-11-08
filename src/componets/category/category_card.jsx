import React from 'react';

const CategoryCard = ({ image, title = 'Placeholder Title', description, isSelected }) => {
  const defaultImage = 'https://via.placeholder.com/150'; 
  return (
    <div className={`category-card ${isSelected ? 'selected' : ''}`}>
      <div className="inner-div">
      <div className='image'>
        <img src={image || defaultImage} alt={title} />
      </div>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <p className='description'>{description}</p>
        {/* <ul className='list'>
          {listItem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
      </div>
      </div>
    </div>
  );
};



//  const CategoryComponent = ({title, itemInfo}) => {
//   return (
//     <div className='category-component'>
//       <h1>{title}</h1>
//       {itemInfo.map((item, index) => (
//         <CategoryCard key={index} {...item} />
//       ))}
//     </div>
//   );
// }

export default CategoryCard;