import React from 'react';

const ProfileComponent = ({username, uid, image, email, descripcion, instagram, github, likes, dislikes, logOut, editar, handleText, saveUser}) => {
    return (
        <div className='profile-container'>
            <img src={image} alt={username}/>
            <div>
                <h2>{username}</h2>
                <section>
                    <p className='like'> 😏 {likes?likes.length:0} </p>
                    <p className='dislike'>  🙄 {dislikes?dislikes.length:0} </p>
                </section>
                <textarea placeholder={descripcion?descripcion:'Tu descripción'} name={'descripcion'} onChange={handleText}/>
                <input type='text' placeholder={email?email:'email'} name={'email'} onChange={handleText}/>
                <input type='text' placeholder={instagram?instagram:'instagram'} name={'instagram'} onChange={handleText}/>
                <input type='text' placeholder={github?github:'github'} name={'github'} onChange={handleText}/>


                <span onClick={saveUser}>Editar</span>
                <span onClick={logOut}>Salir</span>
            </div>
        </div>
    )
};

export default ProfileComponent;