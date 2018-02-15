import React from 'react';
import MainCard from "./MainCard";

const CardsComponent = ({users, like, dislike}) => {
    users = Object.keys(users).map(function (key) { return users[key]; });
    for(let i in users){
        console.log(users[i])
    }
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