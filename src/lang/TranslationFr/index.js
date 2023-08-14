import { About } from "./about.js";
import {Home} from "./home.js";
import { NavBar } from "./navbar.js";

export const TranslationFr = {
    ...Home, 
    ...NavBar,
    ...About,
};