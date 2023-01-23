import React, { useEffect, useState } from "react";
import Axios  from "axios";
const FetchApi = () => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
const [category, setCategory] = useState([]);

Axios.get("https://fakestoreapi.com/products").then((res)=>{
   setCategory(res.data)
});
useEffect(()=>{

},[])

  return (
    <div>
      {category.map((value)=>{
        return <img height={100} src={value.image}/>
      })}
    </div>
  );
};

export default FetchApi;
