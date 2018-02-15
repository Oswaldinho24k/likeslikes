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
        editar:false,
        users:[

        ],
    };

    componentWillMount(){
        this.checkIfUser();
        this.getUsers();

    }

    getMyProfile=(u)=>{
        firebase.database().ref('likelike/users/'+u.uid)
            .on('value', snap=>{
                console.log(snap.val());
                this.setState({profile:snap.val()})
            })
    };
    getUsers=()=>{
        firebase.database().ref('likelike/users')
            .on('value', snap=>{
                this.setState({users:snap.val()});
                console.log(snap.val())
            });

    };

    checkIfUser=()=>{
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
    saveUser=()=>{
        let profile= this.state.profile;
        let updates={};
        updates[`likelike/users/${profile.uid}`] = profile;
        firebase.database().ref().update(updates)
            .then(r=>{
            this.getMyProfile(profile);
        })
    };
    handleText=(e)=>{
        let profile=this.state.profile;
        let field = e.target.name;
        profile[field] = e.target.value;
        this.setState({profile});
        console.log(profile)
    };

    like=(user)=>{
        let updates={};
        let from = this.state.profile.uid;
        updates[`likelike/users/${user}/likes/${from}`] = true;
        firebase.database().ref().update(updates)
    };
    dislike=(user)=>{
        let updates={};
        let from = this.state.profile.uid;
        updates[`likelike/users/${user}/dislikes/${from}`] = true;
        firebase.database().ref().update(updates)
    };

    render() {
        let {profile, users, editar} = this.state;

        return (
            <div className="App">
                <div className='container'>
                    <ProfileComponent
                        {...profile}
                        logOut={this.logOut}
                        handleText={this.handleText}
                        saveUser={this.saveUser}
                        editar={editar}/>
                    <CardsComponent
                        like={this.like}
                        dislike={this.dislike}
                        users={users}/>
                </div>
            </div>
        );
    }
}


export default MainPage;
