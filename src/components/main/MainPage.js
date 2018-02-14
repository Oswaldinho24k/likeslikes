import React, {Component} from 'react';
import ProfileComponent from "../profile/ProfileComponent";
import CardsComponent from "../card/CardsComponent";
import firebase from '../../firebase';

class MainPage extends Component {
    state = {
        profile:{
            username:'Oswaldinho',
            image:"https://instagram.fmex6-1.fna.fbcdn.net/vp/a1e54b376a1e0a4268b9a126cfc283d4/5B24E525/t51.2885-15/e35/26158060_311312119273365_4074198967598972928_n.jpg",
            email:'os@fixter.org',
            uid:'1',
            likes:[],
            dislikes:[],
            descripcion:'',
            instagram:'@oswaldinho24k',
            github:'/oswaldinho24k'
        },
        users:[],
    };

    componentWillMount(){
        this.ckheckIfUser();
        this.getUsers();
    }

    getMyProfile=(u)=>{
        firebase.database().ref('likelike/users/'+u.uid)
            .on('value', snap=>{
                this.setState({profile:snap.val()})
            })
    };
    getUsers=()=>{
        let users=[];
      firebase.database().ref('likelike/users')
          .on('child_added', snap=>{
              users.push(snap.val());
              console.log(users)
          });
        this.setState({users})
    };

    ckheckIfUser=()=>{
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                this.getMyProfile(user)
            } else {
                this.props.history.push('/login')
            }
        });
    };
    logOut=()=>{
        firebase.auth().signOut().then(()=> {
            this.props.history.push('/login')
        }).catch(function(error) {
            // An error happened.
        });
    };
    render() {
        let {profile, users} = this.state;
        return (
            <div className="App">
                <div className='container'>
                    <ProfileComponent {...profile}/>
                    <CardsComponent users={users}/>
                </div>
            </div>
        );
    }
}


export default MainPage;
