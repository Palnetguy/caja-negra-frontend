// import { Link } from "react-router-dom";
import NavBar from "../componets/nav_bar";
import CategoryCard from "../componets/category/category_card";
import "../styles/data_services_page.css";
import "../styles/category_page.css";
import { useState, useEffect, useRef } from "react";
import config from "./config";
import axios from "axios";
// import CategoryComponent from "../componets/category/category_card";
     

const CategoryPage = () => {
  return (
    <div className="data_services" >
      <div className="top" >
        <NavBar />
        <div className="info">
          <h1>CATEGORY </h1>
          <p>
            En Caja Negra, comprendemos la importancia de los datos en el mundo
            digital actual. Ofrecemos soluciones avanzadas de análisis y gestión
            de datos para ayudarte a aprovechar al máximo la información
            disponible. Ya sea que busques optimizar tus operaciones, entender
            mejor a tus clientes o descubrir nuevas oportunidades de
            crecimiento, nuestros servicios de datos están diseñados para
            brindarte las herramientas y conocimientos necesarios.
          </p>
        </div>
      </div>
      <div className="more" >
        <Category/>
      </div>
    </div>
  );
};



// const Category = () => {
//     const categories = [
//       { id: 1, name: 'Technology', description: 'Latest trends and news in tech' },
//       { id: 2, name: 'Health', description: 'Tips for a healthy lifestyle' },
//       { id: 3, name: 'Sports', description: 'Updates and news from the sports world' },
//       { id: 4, name: 'Finance', description: 'All things finance and investments' },
//       { id: 5, name: 'Travel', description: 'Explore the best travel destinations' },
//     ];
  
//     // State to track the selected category
//     const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  
//     // Handle category select
//     const handleCategorySelect = (category) => {
//       setSelectedCategory(category);
//     };
  
//     return (
//       <div className="category_container">
//         <div className="category_left">
//           <ul>
//             {categories.map((category) => (
//               <li
//                 key={category.id}
//                 onClick={() => handleCategorySelect(category)}
//                 className={selectedCategory.id === category.id ? 'active' : ''}
//               >
//                 {category.name}
//               </li>
//             ))}
//           </ul>
//         </div>
  
//         <div className="category_right">
//           <CategoryCard
//           tit
//             // category={selectedCategory}
//             isSelected={selectedCategory}

//           />
//         </div>
//       </div>
//     );
//   };
  

// const Category = () => {
    
//     const categories = [
//       { 
//         id: 1, 
//         name: 'Technology', 
//         description: 'Latest trends and news in tech',
//         image: 'https://via.placeholder.com/150?text=Tech',  // Add a mock image or URL
//         listItems: [
//           { title: 'AI', description: 'Artificial Intelligence' },
//           { title: 'VR', description: 'Virtual Reality' },
//           { title: '5G', description: 'Next generation mobile networks' }
//         ]
//       },
//       { 
//         id: 2, 
//         name: 'Health', 
//         description: 'Tips for a healthy lifestyle',
//         image: 'https://via.placeholder.com/150?text=Health',
//         listItems: [
//           { title: 'Fitness', description: 'Exercises to stay fit' },
//           { title: 'Nutrition', description: 'Healthy food and diets' },
//           { title: 'Mental Health', description: 'Mindfulness and relaxation' }
//         ]
//       },
//       { 
//         id: 3, 
//         name: 'Sports', 
//         description: 'Updates and news from the sports world',
//         image: 'https://via.placeholder.com/150?text=Sports',
//         listItems: [
//           { title: 'Football', description: 'The beautiful game' },
//           { title: 'Basketball', description: 'Fast-paced sport' },
//           { title: 'Tennis', description: 'Racket sports' }
//         ]
//       },
//       { 
//         id: 4, 
//         name: 'Finance', 
//         description: 'All things finance and investments',
//         image: 'https://via.placeholder.com/150?text=Finance',
//         listItems: [
//           { title: 'Stocks', description: 'Investing in companies' },
//           { title: 'Bonds', description: 'Fixed income securities' },
//           { title: 'Crypto', description: 'Digital currencies' }
//         ]
//       },
//       { 
//         id: 5, 
//         name: 'Travel', 
//         description: 'Explore the best travel destinations',
//         image: 'https://via.placeholder.com/150?text=Travel',
//         listItems: [
//           { title: 'Beaches', description: 'Relax by the sea' },
//           { title: 'Mountains', description: 'Hiking and adventure' },
//           { title: 'Cities', description: 'Urban exploration' }
//         ]
//       },
//     ];
  
//     const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//     const [isLoadingSelectCategory, setisLoadingSelectCategory] = useState(true);
  
//     const handleCategorySelect = (category) => {
//       setSelectedCategory(category);
//     };
//     axios
//     .get(config.apiEndpoint + "/category/", {
//       headers: {
//         Authorization: `API-Key ${config.apiKey}`,
//         // Authorization: `Bearer ${apiKey}`, 
//       },
//     })
//     .then((response) => {
//       setSelectedCategory(response.data);
//       setisLoadingSelectCategory(false);
//       console.log('why choose us data', response.data);
//     })
//     .catch((error) => {
//       // setError(error.message);
//       setisLoadingSelectCategory(false);
//       console.log(error.message);
//     });
//     return (
//       <div className="category_container">
//         <div className="category_left">
//         <div>
//         <img src={selectedCategory.image} alt={selectedCategory.name} />     
//         </div>
//           <ul>
//             {categories.map((category) => (
                
//               <li
//                 key={category.id}
//                 onClick={() => handleCategorySelect(category)}
//                 className={selectedCategory.id === category.id ? 'active' : ''}
//               >
//                 {category.name}
//               </li>
//             ))}
//           </ul>
//         </div>
  
//         <div className="category_right">
//           {selectedCategory.listItems.map((item, index) => (
//             <CategoryCard
//               key={index}
//               image={selectedCategory.image} 
//               title={item.title} 
//               description={item.description} 
//               isSelected={selectedCategory.id === selectedCategory.id}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const categoryRefs = useRef({}); // store refs for each category

  useEffect(() => {
    axios.get(`${config.apiEndpoint}/categories`, {
      headers: { Authorization: `API-Key ${config.apiKey}` },
    })
    .then((response) => {
      const data = response.data || [];
      setCategories(data);
      setSelectedCategory(data[0] || null);
      setIsLoading(false);
      console.log('Fetched category data:', data);
    })
    .catch((error) => {
      console.error('Error fetching category data:', error.message);
      setIsLoading(false);
    });
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (categoryRefs.current[category.id]) {
      categoryRefs.current[category.id].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="category-container">
      {/* Category Navbar */}
      <div className="category-navbar">
      <div>
        {selectedCategory && (
          <img src={selectedCategory.image} alt={selectedCategory.name} />
        )}
      </div>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategorySelect(category)}
              className={selectedCategory?.id === category.id ? 'active' : ''}
            >
              {category.name}
              <span style={{marginRight: 0}}>{selectedCategory?.id === category.id ? '→' : ''}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* All Categories and Items */}
      <div className="all-categories">
        {categories.map((category) => (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)}
            className={`category-content ${selectedCategory?.id === category.id ? 'highlight' : ''}`}
          >
            <div className="category-details">
              {category.image && (
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              )}
              <p>{category.description}</p>
            </div>

            {/* Render Services if Available */}
            <div className="category-items">
              <h1>{category.name}</h1>
              <div className="category-item-container">
                {category.services && category.services.map((service, index) => (
                  <CategoryCard
                    key={service.id || index}
                    title={service.name}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;