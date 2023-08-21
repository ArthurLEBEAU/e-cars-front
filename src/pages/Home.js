import React from "react";
 import HeroSection from "../components/sections/HeroSection";
 import Welcome from "../components/sections/Welcome";
 import Cards from "../components/sections/Cards";
 import Confiance from "../components/sections/Confiance";

function Home() {
	return (
		<>
			<HeroSection />
			<Welcome />
			<Cards />
			<Confiance />
		</>
	);
}

export default Home;
