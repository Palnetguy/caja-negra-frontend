// // import { Link } from "react-router-dom";
import NavBar from "../componets/nav_bar";
// import "../styles/data_services_page.css";
import "../styles/category_page.css";
import { useState, useEffect, useRef } from "react";
import config from "./config";
import axios from "axios";
import { Link } from "react-router-dom";
     

const CategoryPage = () => {
  return (
    <div className="data_services" >
      <div className="top" >
        <NavBar />
        <div className="info">
          <h1>CATEGORIAS</h1>
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
      <div className="category_solicitar">
      <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" >Solicitar</button>
          </Link>
      </div>
    </div>
    
  );
};




const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const categoryRefs = useRef([]);

  useEffect(() => {
    axios.get(`${config.apiEndpoint}/categories`, {
      headers: { Authorization: `API-Key ${config.apiKey}` },
    })
    .then((response) => {
      const data = response.data || [];
      setCategories(data);
      setSelectedCategory(data[0] || null);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching categories:', error);
      setIsLoading(false);
    });
  }, []);

  const handleCategorySelect = (category, index) => {
    setSelectedCategory(category);

    const vhToPx = window.innerHeight;
  
    const emToPx = parseFloat(getComputedStyle(document.documentElement).fontSize) * 2;
    
    window.scrollTo({ top: vhToPx + emToPx, behavior: 'smooth' });
  
    setTimeout(() => {
      if (categoryRefs.current[index]) {
        categoryRefs.current[index].focus();
      }
    }, 0);
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  const defaultImage = 'https://via.placeholder.com/150';

  return (
    <div className="category-page">
      <div className="category-content">
        <div className="category-navbar">
        <div>
         {selectedCategory && (
          <img src={selectedCategory.image || defaultImage} alt={selectedCategory.name} />
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
          {/* {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-item ${selectedCategory?.id === category.id ? 'active' : ''}`}
              onClick={() => handleCategorySelect(category, index)}
              ref={(el) => (categoryRefs.current[index] = el)}
              tabIndex="0" // Makes it focusable
            >
              <div className="category-image">
                <img src={category.image || defaultImage} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
              {selectedCategory?.id === category.id && (
                <div className="subcategories">
                  {category.services?.map((service) => (
                    <div key={service.id} className="subcategory">
                      {service.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))} */}
          </ul>
        </div>
        
        <div className="services-grid">
          {selectedCategory?.services?.map((service) => (
            <CategoryCard
              key={service.id}
              image={service.image}
              title={service.name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


// CategoryCard.jsx

const CategoryCard = ({ image, title, description }) => {
  const defaultImage = 'https://via.placeholder.com/150';

  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image || defaultImage} alt={title} />

      </div>
      <h4>{title}</h4>
      <div 
        className="service-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default CategoryPage;
