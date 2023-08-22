import { modalContent } from "../TranslationEn/modal.js";
import { About } from "./about.js";
import { Fleet } from "./fleet.js";
import {Home} from "./home.js";
import { NavBar } from "./navbar.js";
import { Reservation } from "./reservation.js";

export const TranslationFr = {
    ...Home, 
    ...NavBar,
    ...About,
    ...Fleet,
    ...modalContent,
    ...Reservation
};