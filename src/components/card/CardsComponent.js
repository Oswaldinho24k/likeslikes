import React from 'react';
import MainCard from "./MainCard";

const CardsComponent = ({users, like, dislike}) => {
    users = Object.keys(users).map(function (key) { return users[key]; });
    return (
        <div className='cards-container'>
            Usuarios
            {users.map((user, key)=>{
                return(
                    <MainCard key={key} {...user} like={like} dislike={dislike}/>
                )
            })}

        </div>
    )
};

export default CardsComponent;