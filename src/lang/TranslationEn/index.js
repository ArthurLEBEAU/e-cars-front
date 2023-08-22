
import { About } from "./about";
import { Fleet } from "./fleet";
import {Home} from "./home";
import { modalContent } from "./modal";
import { NavBar } from "./navbar";
import { Reservation } from "./reservation";

export const TranslationEn = {
    ...Home, 
    ...NavBar,
    ...About,
    ...modalContent,
    ...Fleet,
    ...Reservation
};