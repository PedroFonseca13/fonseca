import React from 'react';
import logo from '../../assets/img/treze.png';
import '../../assets/css/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg bg-dark fixed-top navbar-dark"
				id="mainNav"
			>
				<div className="container">
					<a className="navbar-brand text-success" href="#page-top">
						<img src={ logo } alt="Logo TREZE" />
					</a>
					<button
						className="navbar-toggler text-uppercase font-weight-bold bg-success text-white rounded"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item mx-0 mx-lg-1">
								<a
									className="nav-link py-3 px-0 px-lg-3 rounded"
									href="#portfolio"
								>
									Portfolio
								</a>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<a
									className="nav-link py-3 px-0 px-lg-3 rounded"
									href="#about"
								>
									About
								</a>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<a
									className="nav-link py-3 px-0 px-lg-3 rounded"
									href="#contact"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
