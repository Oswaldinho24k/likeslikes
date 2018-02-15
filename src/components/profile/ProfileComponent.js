import React from 'react';

const ProfileComponent = ({username, uid, image, email, descripcion, instagram, github, likes, dislikes, logOut, editar, handleText, saveUser, handleEdit}) => {
    return (
        <div className='profile-container'>
            <img src={image} alt={username}/>
            <div>
                <h2>{username}</h2>
                <section>
                    <p className='like'> 😏 {likes?Object.keys(likes).length:0} </p>
                    <p className='dislike'>  🙄 {dislikes?Object.keys(dislikes).length:0} </p>
                </section>

                <textarea placeholder={'Tu descripción'} name={'descripcion'} onChange={handleText} value={descripcion?descripcion:''}/>
                <input type='text' placeholder={'email'} name={'email'} onChange={handleText} value={email?email:''}/>
                <input type='text' placeholder={'instagram'} name={'instagram'} onChange={handleText} value={instagram?instagram:''} />
                <input type='text' placeholder={'github'} name={'github'} onChange={handleText} value={github?github:''}/>

                <span onClick={saveUser} >Editar</span>
                <span onClick={logOut}>Salir</span>
            </div>
        </div>
    )
};

export default ProfileComponent;