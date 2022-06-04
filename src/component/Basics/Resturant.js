import React, { useState } from 'react'
import "./styles.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"

const Resturant = () => {

    //use state Hook/or prefered redux/  (on rules we have to apply hooks on top of the code i.e above return)
    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (category) => {
        const upDatedList = Menu.filter((curElen) => {
            return curElen.category === category

        })
        setMenuData(upDatedList)

    };

    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={() => filterItem("Breakfast")}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filterItem("lunch")}>lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("Dinner")}>Dinner</button>
                    <button className='btn-group__item' onClick={() => filterItem("non-veg")}>non-veg</button>
                    <button className='btn-group__item' onClick={() => setMenuData(Menu)}>all Menu</button>

                </div>

            </nav>




            < MenuCard menuData={menuData} />

        </>
    )
}

export default Resturant;







