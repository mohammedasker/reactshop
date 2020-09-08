import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from "../../pages/Homepage/Homepage";
import Checkout from "../../pages/Checkout/Checkout";

const Navbar = () => (
	<Router>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">SHOP</Link>
					</li>
					<li>
						<Link to="/checkout">CART (0)</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
			</Switch>
		</div>
	</Router>
);

export default Navbar;
