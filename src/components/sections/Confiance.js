import React from "react";

import { useTranslation } from "react-i18next";
import "./Confiance.css";


function Confiance() {
	
	const { t } = useTranslation();
	return (
    
		<div className='ConfianceContainer'>
			<div className='partTitle'>
				<div className='titre_petit'>Testimonials</div>
				<div className='titre'> {t("descTes")} < span className='TextRed'> {t("descTes2")}</span></div>
     
			</div>
			<div className='partCard'>
				<div className='cardsConfiance'>
					<div className='dialog'>
      Saying moved own. Above kind stars after was Seed Created fish divided creeping they’re after them stars heaven seed male and and won’t god also be said seas, had Waters give gathering life may third.
					</div>
					<div className='confianceB'>
						<div className='textConf'>
							<div>Hilary Whan</div>
							<div > < span className='TextRed'> Designer</span> </div>
						</div>
						<div className='imgConf'> <img src='images/pixel_confiance/pixel_confiance.png' alt=''/></div>
					</div>
        
				</div>
				<div className='cardsConfiance'>
					<div className='dialog2'>
      Saying moved own. Above kind stars after was Seed Created fish divided creeping they’re after them stars heaven seed male and and won’t god also be said seas, had Waters give gathering life may third.
					</div>
					<div className='confianceB'>
						<div className='textConf'>
							<div>Hilary Whan</div>
							<div > < span className='TextRed'> Designer</span> </div>
						</div>
						<div className='imgConf'> <img src='images/pixel_confiance/pixel_confiance.png' alt=''/></div>
					</div>
        
				</div>
				<div className='cardsConfiance'>
					<div className='dialog'>
      Saying moved own. Above kind stars after was Seed Created fish divided creeping they’re after them stars heaven seed male and and won’t god also be said seas, had Waters give gathering life may third.
					</div>
					<div className='confianceB'>
						<div className='textConf'>
							<div>Hilary Whan</div>
							<div > < span className='TextRed'> Designer</span> </div>
						</div>
						<div className='imgConf'> <img src='images/pixel_confiance/pixel_confiance.png' alt=''/></div>
					</div>
        
				</div>
			</div>

   
		</div>
	);
}

export default Confiance;
