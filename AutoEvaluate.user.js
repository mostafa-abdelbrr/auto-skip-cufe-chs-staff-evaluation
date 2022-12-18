// ==UserScript==
// @name         Auto evaluate
// @namespace    http://tampermonkey.net/
// @version      5
// @description  ِAuto evaluate with "Can not answer".
// @author       Titan
// @match        https://std.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=~/SIS/Modules/Student/Survey/Survey.ascx
// @match        https://std.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=%7e%2fSIS%2fModules%2fStudent%2fSurvey%2fSurvey.ascx
// @match        https://chreg.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=~/SIS/Modules/Student/Survey/Survey.ascx
// @match        https://chreg.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=%7e%2fSIS%2fModules%2fStudent%2fSurvey%2fSurvey.ascx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.eg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var jqry = document.createElement('script');
    jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
    document.getElementsByTagName('head')[0].appendChild(jqry);
    setTimeout( () => {
    $("td").children("input[value='6']").prop("checked", true);
    $("input[type='submit']").click()
        }, 1000);  //1 second delay
})();