import React from 'react'
import Mainpage from './Frontpage/Mainpage'
import Second from "./Frontpage/Second";
import Third from "./Frontpage/Third";
import Fourth from "./Frontpage/Fourth";
import '../CSS/Home.css'
function Home() {
  return (
    <div>
      Home
      <Mainpage/>
      <Second/>
      <Third/>
      <Fourth/>
    </div>
  )
}
export default Home