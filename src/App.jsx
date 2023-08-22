import React, { useEffect  } from "react";
import "./App.css";


import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/sections/Navbar";
import "@fontsource/saira";

import "./lang/index";


import  i18n  from "i18next";



import About from "./pages/About/About";
import Fleet from "./pages/Fleet/Fleet";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/sections/Footer";
import LoginForm from "./pages/Auth/SignUp";
import Reservations from "./pages/Reservation/Reservation";
import { Suspense } from "react";


import { ConfigProvider } from "antd";
import frFR from "antd/locale/fr_FR";

import enEn from "antd/locale/en_US";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";





function App() {

	useEffect(() => {
		if (localStorage.getItem("lang") == null) {
			localStorage.setItem("lang", "fr");
			i18n.changeLanguage("fr");
		  } else{
			i18n.changeLanguage(localStorage.getItem("lang"));
		  }
	} , []);

	return (
		<Provider store={store}>
		<ConfigProvider locale={localStorage.getItem("lang") == "en" ? enEn : frFR} theme={{ token: { colorPrimary: "#E0001B" } }}>
		<Suspense fallback={<div>Loading...</div>}>

				<Router>
					<Navbar />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/fleet' component={Fleet} />
						<Route path='/about' component={About} />
						<Route path='/contact' component={Contact} />
						<Route path='/sign-up' component={LoginForm} />
						<Route path='/reservation' component={Reservations} />
					</Switch>
					<Footer />
				</Router>

		</Suspense>
		</ConfigProvider>
		</Provider>
	);
}

export default App;