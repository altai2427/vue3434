import React from 'react';
import Card from "./components/Card";
import './App.css';

function App() {

  const cardsData = [
    {
      id: 1,
      title: "горный пейзаж",
      description: "прекрасный вид заснеженные вершины и озеро.",
      image: "https://img.magnific.com/free-photo/beautiful-landscape-with-mountains-cloudy-sky_181624-19587.jpg?"
    },
    {
      id: 2,
      title: "морской бриз",
      description: "солнечный пляж с золотистым песком и бирюзовой водой.",
      image: "https://art-most.com/wp-content/uploads/2017/07/IMG_1370.jpg"
    },
    {
      id: 3,
      title: "осенний лес",
      description: "яркие золотые и красные листья на деревьях в парке.",
      image: "https://artworld.ru/images/cms/content/catalog2/romm_kartina_maslom_osennij_les_v_luchah_solnca_ar190706.jpg"
    }
  ];

  return (
    <div className="app-container">
      <h1>карточки</h1>
      <div className="cards-list">
        {cardsData.map(card => (
          <Card 
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
