import * as React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {


	return (
		<>
			<div id="banner">
				<h1 id="header-title">
					<Link to={'/'}>Keanu Ford</Link>
				</h1>
				<ul className="nav nav-tabs">
					<li id="nav-item">
						<Link
							key={1}
							className="nav-link"
							to='/about-me'
						>
							About Me
						</Link>
					</li>
					<li id="nav-item">
						<Link
							key={1}
							className="nav-link"
							to='/portfolio'
						>
							Portfolio
						</Link>
					</li>
					<li id="nav-item">
						<Link
							key={1}
							className="nav-link"
							to='/contact-me'
						>
							Contact Me
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
