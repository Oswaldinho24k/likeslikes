import React from 'react';

const MainCard = ({username, image, uid, descripcion, like, dislike}) => {
    return (
        <div className='main-card'>
            <img src={image} alt={username}/>
            <div>
                <h2>{username}</h2>
                <p>{descripcion}</p>

                <section>
                    <span className='like' onClick={()=>like(uid)}> 😏 </span>
                    <span className='dislike' onClick={()=>dislike(uid)}>  🙄 </span>
                </section>
            </div>
        </div>
    )
};

export default MainCard;