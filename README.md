# Usage guide:
Two ways:
- Manually.
- Extension.
## Manual method:
- Open evaluation after signing in.
- Open browser console (F12 then go to console tab).
- Paste the following script then run. To run in Chrome: just paste and click on enter button. Firefox: there is a `run` button, click on it. The script will auto go to the next page, then you need to again and repeat this step until the evaluation is over.
- Script:
```javascript
$("td").children("input[value='6']").prop("checked", true);
$("input[type='submit']").click();
```
- Score Change:


## Automatic method (extension):
- Install Tampermonkey extension [here](https://www.tampermonkey.net/).
- Install the script from [here](https://raw.githubusercontent.com/mostafa-abdelbrr/auto-skip-cufe-chs-staff-evaluation/master/AutoEvaluate.user.js).
- Sign in normally from here: https://std.eng.cu.edu.eg 
- IMPORTANT: open your evaluation from here: 
https://std.eng.cu.edu.eg/SIS/Modules/MetaLoader.aspx?path=~/SIS/Modules/Student/Survey/Survey.ascx
- Nothing more to do, it should do it automatically, hopefully.