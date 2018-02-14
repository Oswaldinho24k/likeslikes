import React from 'react';

const MainCard = ({username, image, uid, descripcion}) => {
    return (
        <div className='main-card'>
            <img src={image} alt={username}/>
            <div>
                <h2>{username}</h2>
                <p>{descripcion}</p>

                <section>
                    <span className='like'> 😏 </span>
                    <span className='dislike'>  🙄 </span>
                </section>
            </div>
        </div>
    )
};

export default MainCard;