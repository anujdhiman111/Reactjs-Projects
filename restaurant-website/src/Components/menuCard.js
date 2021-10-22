import React from 'react'

const MenuCard = ({data}) => {
    return (
        <>
        {data.map((currElem,idx) => {
            const{id,category,name,description,image} = currElem
            return (
                <>
                    <div className = "container" key = {idx}>
                        <div className = "card">
                            <div className = "card-body">
                                <span className ="card-no">{id}</span><br></br>
                                <span className ="card-author">{category}</span>
                                <h1 className = "title">{name}</h1>
                                <span className = "description">
                                {description}
                                </span>
                                <div className = "read"></div>
                                <img src = {image} alt = "Restaurant-Menu" className = "card-image"/>
                                <button className = "card-tag">Order Now</button>
                            </div>
                        </div>
                    </div> 
                </>
            )
        })}
           
        </>
    )
}

export default MenuCard
