import React from "react";
import "./App.css";


import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/sections/Navbar";
import "@fontsource/saira";

import {  useTranslation } from "react-i18next";
import "./lang/index";





import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import Footer from "./components/sections/Footer";
import LoginForm from "./pages/SignUp";
import Reservations from "./pages/Reservation";
import { Suspense } from "react";






function App() {
	// const {t} = useTranslation();

 
	return (  
		<Suspense fallback={<div>Loading...</div>}>

			{/* <div>
		<h1>
			{t("title")}
		</h1>

			</div> */}
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/f3leet' component={Fleet} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					<Route path='/sign-up' component={LoginForm} />
					<Route path='/reservation' component={Reservations} />
				</Switch>
				<Footer />
			</Router>
		</Suspense>
	);
}

export default App;