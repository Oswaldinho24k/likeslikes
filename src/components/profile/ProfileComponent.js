import React from 'react';

const ProfileComponent = ({username, uid, image, email, descripcion, instagram, github, likes, dislikes}) => {
    return (
        <div className='profile-container'>
            <img src={image} alt={username}/>
            <div>
                <h2>{username}</h2>
                <section>
                    <p className='like'> 😏 {likes?likes.length:0} </p>
                    <p className='dislike'>  🙄 {dislikes?dislikes.length:0} </p>
                </section>
                <textarea placeholder={'Tu descripción'} defaultValue={descripcion}/>
                <input type='text' placeholder='email' defaultValue={email}/>
                <input type='text' placeholder='instagram' defaultValue={instagram}/>
                <input type='text' placeholder='github' defaultValue={github}/>


                <span>Guardar</span>
            </div>
        </div>
    )
};

export default ProfileComponent;