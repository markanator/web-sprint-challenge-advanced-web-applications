import React, { useState, useEffect } from "react";
// import axios from "axios";

import axiosWithAuth from '../utils/AxiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const fetchColors = ()=>{
    return axiosWithAuth().get("/colors")
    .then((res)=>{
      setColorList([...res.data])
    })
    .catch((err)=>console.error(err));
  }

  useEffect(()=>{
    fetchColors();
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fetchColors={fetchColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
