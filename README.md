# Fantasy Sports Google Sheets Draft Board UI

This React app is one created to be a draftboard application that uses NoCodeAPI's Google Sheets integration to interface with a Google sheet and update it periodically during a fantasy sports draft. 

## Getting started

- First, you will need a NoCodeAPI account. [You can get an account here.](https://app.nodecodeapi.com/signup)
- Second, you will need to install the Google Sheets integration.
- Third, you will need to setup the Google Sheet into NoCodeAPI following their instruction for setting up a particular sheet. 
- Finally, you will need to place the URL for use into the .env file. See the .env.example file for details. 

## Other helpful information

This app will periodically refresh the table to pull any new draft picks from the Google Sheet. To update the frequency in which it checks for new data, you can look setup the .env file to have a new REFRESH_TIME value. 
