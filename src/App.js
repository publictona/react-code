// //rafce =react arrow dot function
// import React from 'react'
// import cafe from "./component/cafe"

// const App = () => {
//   return (
//     <div>cofffffeeeee !!!!!! cafe</div>
//   )
// }

// export default App


import React from 'react';
import "./component/style.css";
import Menu from ".";

const cafe = () => {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card number card-circle subtle'>1</span>
                        <span className='card-Author suntle'>Breakfast</span>
                        <h2 className='card-title'>maggi</h2>
                        <span className= 'card-description subtle '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore saepe eius sint assumenda maiores corrupti tempora soluta voluptatum quis. Eum sit beatae exercitationem a
                         labore nulla vitae cumque alias iure!</span>
                         <div className='card read'>read</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cafe

