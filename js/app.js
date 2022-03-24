import { fourAPI } from "./api.js";
import { displayInfo, buttonClick } from "./dom.js";
import { infoFlag } from './domFx.js';

//import variables from DomFx
import {flag} from './domFx.js';

buttonClick.addEventListener('click', () => {
    infoFlag();
});