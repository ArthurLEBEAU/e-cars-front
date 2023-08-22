import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import checkTokenExpiration from "../../hooks/checkTokenExpiration";

import { useTranslation } from "react-i18next";
import LanguageOptions from "../subcomponents/LanguageOptions";

function Navbar() {
	let linkUrl;
	if (checkTokenExpiration) {
		linkUrl = "/reservation";
	} else {
		linkUrl = "/sign-up";
	}

	const [click, setClick] = useState(false);
	const [, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};


	useEffect(() => {
		showButton();
	}, []);


	window.addEventListener("resize", showButton);

	const { t } = useTranslation();
	return (<>
		<nav className='navbar' >
			<div className='navbar-container'>
				<div className='navbar-part-logo'>
					<Link to='/' className='navbar-logo' >

						<img id='logoEcars' />

					</Link>
				</div>

				<div className='navbar-part-menu'>
					<div className='navbar-menu-haut'>
						<ul className={click ? "nav-menu active" : "nav-menu"}>

							<li className='nav-item'>
								<Link

									className='nav-links-1'
									onClick={closeMobileMenu}
								>
									support@ecars.africa
								</Link>
							</li>
							<li className='spacer'>|</li>
							<li className='nav-item'>
								<Link

									className='nav-links-1'
									onClick={closeMobileMenu}
								>
									{t("crenaux")}
								</Link>
							</li>
							<li className='spacer'>|</li>
							<li className='nav-item'>
								<Link

									className='nav-links-1'
									onClick={closeMobileMenu}
								>
									Abidjan, Cocody, Riviera 6
								</Link>
							</li>



						</ul>
						{/*  {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>} */}

					</div>
					<div className='navbar-menu-bas'>
						<ul className={click ? "nav-menu2 active" : "nav-menu2"}>
							<li className='nav-item'>
								<Link to='/' className='nav-links' onClick={closeMobileMenu}>
									{t("home")}
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/about'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									{t("about")}
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/fleet'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									{t("fleet")}

								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to={linkUrl}
									className='nav-links'
									onClick={closeMobileMenu}
								>
									{t("reservation")}

								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/contact'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Contacts
								</Link>
							</li>





							{/*  
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}

							<Link
								to='/fleet'
								className='nav-links-s'
								onClick={closeMobileMenu}
							>
								<div className='btnblack'>
									<div className='ass'>{t("reserveVehicle")}</div>
									<img id='logoReservation' />
								</div>
							</Link>



						</ul>

						{/*  {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>} */}


					<LanguageOptions/>
					</div>
					<div>
						<div className="container">
							<div>

							</div>
							<div className="btn-white-wrapper">

								{/* <button class="btn-white">
    CLICK ME
  </button> */}
							</div>
						</div>
					</div>

					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>



				</div>





			</div>



		</nav>
	</>
	);
}

export default Navbar;