ECHO OFF
git add .
git status
set /p v="Commit Title: "
git commit -m "%v%"
git push origin main
set /p b="Do you want to commit to a different branch? (Yes/No)"
set result=false
if %b% == Yes set result=true
if %b% == yes set result=true
if %b% == y set result=true
if %b% == nai set result=true


if "%result%" == "true" (
	set /p b="Which Branch? : "
	git push origin main:v1.2
) 
pause

