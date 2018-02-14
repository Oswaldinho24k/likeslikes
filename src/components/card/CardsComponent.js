import React from 'react';
import MainCard from "./MainCard";

const CardsComponent = ({users}) => {
    console.log(users)
    return (
        <div className='cards-container'>
            Usuarios
            <MainCard/>
            {users.map((user, key)=>{
                return(
                    <MainCard key={key} {...user}/>
                )
            })}

        </div>
    )
};

export default CardsComponent;