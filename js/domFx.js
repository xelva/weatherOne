//declare functions

import { displayInfo } from "./dom.js";
import { fourAPI } from "./api.js";

//variables to export 
export let flag = false; 

export const infoFlag = () => {
    if (!flag) {
        displayInfo.innerHTML = fourAPI;
        flag = true;
    }
    else{
        displayInfo.innerHTML = '******xjsoidkf';
        flag = false;
    }
};