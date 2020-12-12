import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id :1,
    name:"BigMac",
    image:
    "https://dimg.donga.com/wps/NEWS/IMAGE/2020/07/31/102251437.1.jpg",
    rating:5
  },
  {
    id:2,
    name:"SangsChiCom",
    image:
    "https://pbs.twimg.com/media/DXcWN4lVwAA6nKm.jpg",
    rating:4.9
  },
  {
    id:3,
    name:"MacDhicken",
    image:
    "https://img.insight.co.kr/static/2019/10/09/700/y90e2dht297mz9vrd93c.jpg",
    rating:4.8
  },
  {
    id:4,
    name:"BaToDi",
    image:
    "https://pbs.twimg.com/media/EDxF8_cVAAA-HWZ.png",
    rating:4.7
  },
];

function Food({name, picture, rating}){
  return <div>
    <h2> I Like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt = {name}/>
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string
};

function App() {
  return(
  <div> 
      {foodILike.map(dish => (
        <Food 
        key = {dish.id}
        name = {dish.name} 
        picture = {dish.image} 
        rating ={dish.rating}/>
      ))}
      
  </div>
  );
}

export default App;
