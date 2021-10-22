import React from 'react'
import Menu from "./menuApi";
import {useState} from "react";
import MenuCard from './menuCard';
import Navbar from './Navbar';
const Restaurant = () => {

    const[menuData,setMenuData] = useState(Menu);
    return (
        <>
        <Navbar data2 = {setMenuData} />
        <section className= "section-center">
            <MenuCard data = {menuData}/>
        </section>
        </>
    )
}

export default Restaurant
