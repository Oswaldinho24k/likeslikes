import React, {Component} from 'react';
import firebase from '../../firebase';


class LoginPage extends Component {

    componentWillMount(){
        firebase.auth().getRedirectResult()
            .then(result=> {
                if(!result.user) return;
                console.log(result.user);
                localStorage.setItem("user",JSON.stringify(result.user));
                this.saveUser(result.user);
                this.props.history.push("/");
            }).catch(function(error) {
            console.log(error)
        });
    }

    saveUser=(u)=>{
      firebase.database().ref('likelike/users/'+u.uid)
          .set({
              username:u.displayName,
              image:u.photoURL,
              email:u.email,
              uid:u.uid,
          }).then(r=>{
              this.props.history.push('/')
      })
    };

    loginGoogle=()=>{
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then((result)=> {
            console.log(result);

        })
    };
    render() {
        return (
            <div className='login App'>
               <div className='container'>
                   <section>
                       <h2>Inicia Sesión</h2>
                       <span onClick={this.loginGoogle}>Con Google</span>
                   </section>
               </div>
            </div>
        )
    }
}

export default LoginPage;