import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading : false,
			posts   : [],
			error   : ''
		};
	}

	componentDidMount() {
		const wordPressSiteUrl = 'http://localhost:5050';

		this.setState(
			{
				loading : true
			},
			() => {
				axios
					.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
					.then((res) => {
						console.log(res.data);
						this.setState({
							loading : false,
							posts   : res.data
						});
					})
					.catch((error) =>
						this.setState({
							loading : false,
							error   : 'No Posts'
						})
					);
			}
		);
	}

	render() {
		const { posts } = this.state;

		return (
			<div>
				<Navbar />
				{posts.length ? (
					<div className="mt-5 post-container">
						{posts.map((post) => (
							// Title
							<div key={post.id} className="card border-dark mb-3" style={{ width: '50rem' }}>
								<Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
							</div>
							// Body
						))}
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}
