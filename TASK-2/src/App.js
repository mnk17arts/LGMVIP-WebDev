
import React, { Component } from 'react';
import './App.css'
import Navbar from './bits/navbar';
import Cards  from './bits/user-card';
import Loading from './bits/loading';

class App extends Component{
    constructor(){
        super()
        this.state = {
            users : [],
            getUsers : false
        }
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
    }

    onButtonSubmit = () => {
        this.setState({getUsers : !this.getUsers})

        const loadtime = setTimeout(() => {

            fetch('https://reqres.in/api/users?page=1').then(response => {
                return response.json();
            }).then(users => {
                this.setState({users : users.data})
            });
        }, 3000);
        return () => clearTimeout(loadtime);
    }

    render(){
 
        if(this.state.users.length === 0 && this.state.getUsers === false){
            return (
                <div><Navbar onButtonSubmit={this.onButtonSubmit}/>
                    <div className="body">
                        <h1> Welcome to my project <br/> Click <b>GET USERS</b> <br/>to get started!!</h1>
                    </div>
                </div>
            );
        }
        else if(this.state.users.length === 0){
            return (
                <div>
                    <Navbar onButtonSubmit={this.onButtonSubmit}/>
                    <div className="body">
                    <Loading/>
                    </div>
                </div>
            );            
        }
        else{
            return(
                <div>
                    <Navbar onButtonSubmit={this.onButtonSubmit} />
                    <div className="body">
                        <Cards users={this.state.users} />
                    </div>                    
                </div>
            )
        }
    }

}

export default App;