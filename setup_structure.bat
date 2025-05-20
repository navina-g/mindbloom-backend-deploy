@echo off
cd /d %~dp0
cd mental-health-management-system

REM Create backend structure
mkdir backend\mental_health_api
mkdir backend\users
mkdir backend\appointments
mkdir backend\mood_tracker
mkdir backend\articles
type nul > backend\requirements.txt

REM Create frontend structure
mkdir frontend\public
mkdir frontend\src\components
mkdir frontend\src\pages
type nul > frontend\package.json
type nul > frontend\src\App.js
type nul > frontend\src\index.js

REM Create root-level files
type nul > README.md
type nul > .gitignore

echo Folder structure created successfully!
pause
