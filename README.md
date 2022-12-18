# Usage guide:
Two ways:
- [Manually](https://github.com/mostafa-abdelbrr/auto-skip-cufe-chs-staff-evaluation#manual-method).
- [Extension](https://github.com/mostafa-abdelbrr/auto-skip-cufe-chs-staff-evaluation#automatic-method-extension).
## Editing default score:
Edit it in the manual method or from the script in Tampermonkey.
```javascript
value='6'
```
Change `6` to whichever value you want, I think score 1 is 0? Find out from the inspect element. 6 means "Can not answer" which makes the system skip your evaluation while calculating the staff's score, but it won't lock your account. This is my hypothesis, but I did it for 3 semesters at least and my account wasn't locked, thankfully.

## Manual method:
- Open evaluation after signing in.
- Open browser console (F12 then go to console tab).
- Paste the following script then run. To run in Chrome: just paste and click on enter button. Firefox: there is a `run` button, click on it. The script will auto go to the next page, then you need to again and repeat this step until the evaluation is over.
- Script:
```javascript
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
setTimeout( () => {
    $("td").children("input[value='6']").prop("checked", true);
    $("input[type='submit']").click()
}, 1000);
```

## Automatic method (extension):
- Install Tampermonkey extension [here](https://www.tampermonkey.net/) (note that any userscript extension is supported).
- Install the script from [here](https://raw.githubusercontent.com/mostafa-abdelbrr/auto-skip-cufe-chs-staff-evaluation/master/AutoEvaluate.user.js).
- Sign in normally from one of the following:
  - https://std.eng.cu.edu.eg
  <br>OR<br>
  - https://chreg.eng.cu.edu.eg
- IMPORTANT: open your evaluation from here, choose std or chreg based on the one you chose in the previous step: 
  - https://std.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=~/SIS/Modules/Student/Survey/Survey.ascx
<br>OR<br>
  - https://chreg.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=~/SIS/Modules/Student/Survey/Survey.ascx
- Nothing more to do, it should do it automatically, hopefully.
- You don't need reinstall every semester unless you uninstall the extension.