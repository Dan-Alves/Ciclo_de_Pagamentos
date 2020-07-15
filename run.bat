@echo off

start mongod

start cmd /k "cd backend & npm run dev"

start cmd /k "cd angular1 & npm run dev"
