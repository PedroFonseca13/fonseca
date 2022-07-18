import React from 'react';
import logo13 from '../../assets/img/avataaars.png';
import Header from '../../components/Header/index';
import '../../assets/css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
	return (
		<>
			<Header />
			<main className="masthead bg-success text-white text-center">
				<div className="container d-flex align-items-center flex-column">
					{/*<!-- Masthead Avatar Image-->*/ }
					<img className="masthead-avatar mb-5" src={ logo13 } alt="..." />
					{/*<!-- Masthead Heading-->*/ }
					<h1 className="masthead-heading text-uppercase mb-0">TREZE</h1>
					{/*<!-- Icon Divider-->*/ }
					<div className="divider-custom divider-light">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
							<FontAwesomeIcon icon={ faCode } />
						</div>
						<div className="divider-custom-line"></div>
					</div>
					{/*<!-- Masthead Subheading-->*/ }
					<p className="masthead-subheading font-weight-light mb-0">
						Web Developer
					</p>
				</div>
			</main>
		</>
	);
}
