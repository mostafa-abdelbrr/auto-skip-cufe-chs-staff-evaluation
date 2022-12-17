# Usage guide:
Two ways:
- Manually (maybe faster if you don't have Tampermonkey installed).
- Extension.

## Manual:
- Open evaluation after signing in.
- Open browser console (F12 then go to console tab).
- Paste the following script then run. To run in Chrome: just paste and click on enter button. Firefox: there is a `run` button, click on it. The script will auto go to the next page, then you need to again and repeat this step until the evaluation is over.
- Script:
```javascript
$("td").children("input[value='6']").prop("checked", true);
$("input[type='submit']").click();
```
- Score Change:

```javascript
value='6'
```
Change `6` to whichever value you want, I think score 1 is 0? Find out from the inspect element. 6 means "Can not answer" which makes the system skip your evaluation while calculating the staff's score, but it won't lock your account. This is my hypothesis, but I did it for 3 semesters at least and my account wasn't locked, thankfully.

## Extension:
- [Install Tampermonkey extension](https://www.tampermonkey.net/)
- Add new script from extension menu.
- Paste this (can be found in AutoEvaluate.js):
```javascript
// ==UserScript==
// @name         Auto evaluate
// @namespace    http://tampermonkey.net/
// @version      4
// @description  ِAuto evaluate with "Can not answer".
// @author       Titan
// @match        https://std.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=~/SIS/Modules/Student/Survey/Survey.ascx
// @match        https://std.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=%7e%2fSIS%2fModules%2fStudent%2fSurvey%2fSurvey.ascx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.eg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout( () => {
    $("td").children("input[value='6']").prop("checked", true);
    $("input[type='submit']").click()
        }, 500);  //500-millisec delay
})();
```
- Sign in normally from here: https://std.eng.cu.edu.eg 
- IMPORTANT: open your evaluation from here: 
https://std.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=~/SIS/Modules/Student/Survey/Survey.ascx
- Nothing more to do, it should do it automatically, hopefully.