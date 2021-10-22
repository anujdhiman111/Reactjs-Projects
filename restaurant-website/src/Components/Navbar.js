import React from 'react'
import Menu from './menuApi'
import {useState} from 'react';

const uniqueList = [
    ...new Set(
        Menu.map((currElem) => {
            return currElem.category;
        }),
    ),"All",
];

const Navbar = ({data2}) => {
    const[menuList] = useState(uniqueList);
    const filterItem = (cat) =>{
        const updatedList = Menu.filter((currElem) => {
            if(cat === "All"){
                return Menu;
            }
            else{
                return currElem.category === cat;;
            }
        })
        data2(updatedList);
    }
    return (
        <>
            <nav className = "navbar">
                <ul>
                {menuList.map((currElem,idx) =>{
                    return(
                        <button className="navButton" onClick = {() =>filterItem(currElem)} key ={idx} >{currElem}</button>
                    )
                })}
                </ul> 
            </nav>
        </>
    )
}

export default Navbar
