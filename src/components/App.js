import { Component } from "react";
import axios from 'axios'

import Nav from "./Nav";
import Home from "./Home";
import Users from "./Users";
import AboutYou from "./AboutYou";
import Schedule from "./Schedule";
import Symptoms from "./Symptoms";

const SIGN_UP_URL = 'http://localhost:3000/users';
const SIGN_IN_URL = 'http://localhost:3000/login';
const USER_PROFILE_URL = 'http://localhost:3000/profile';

class App extends Component {
	
	state = {
		user: {},
		error: ''
	}
	
	signUp = (user) => {
		const body = JSON.stringify({
			user: {
				first_name: user.firstName,
				last_name: user.lastName,
				email: user.email,
				password: user.password,
			}
		});
		axios.post(SIGN_UP_URL, body, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			console.log(response.data)
			this.setState({
				user: response.data
			})
		})
	}
	
	signIn = (user) => {
		const body = JSON.stringify({
			user: {
				email: user.email,
				password: user.password
			}
		});
		
		axios.post(SIGN_IN_URL, body, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			const data = response.data
			if (data.token) {
				localStorage.setItem('token', data.token); // this is fetched on componentDidMount
				this.setState({
					user: data.user
				})
			} else {
				this.setState({
					error: data.error
				})
			}
		})
	}
	componentDidMount() {
		let token = localStorage.getItem('token');
		if (token) {
			axios.get(USER_PROFILE_URL, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then((response) => {
				const data = response.data
				if (data.id) {
					this.setState({
						user: data
					})
				}
			})
		}
	}
	
	render() {
		return (
			<div>
			<Nav />
			<Home />
			{this.state.user.id ? <h4>Welcome {this.state.user.first_name}</h4> : <h4>No user</h4>}
			<Users signUp={this.signUp} signIn={this.signIn} error={this.state.error}/>
			<AboutYou />
			<Schedule />
			<Symptoms />
			</div>
			);
		}
	}
	
	export default App;