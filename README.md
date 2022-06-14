<img src="./src/images/image.png" alt="Logo of the project" align="right">

# COVID-19 Tracker 
### [Live Site](https://covid.irs.dev/)
# Introduction
* When the components get rendered we fetch the data and display the numbers, graphs and populate the dropdown with countries.
* When there is a change in the country we fetch the data from API to get the relevant country information and re-render the ```<Cards />``` component and ```<Charts />``` component.
* The application is done to show how to fetch the data from the API and how to leverage hooks when the data changes.

## API Reference
https://covid19.mathdro.id/api

## Built Application Using Libraries
* material-ui
* axios
* chart.js
* classnames
* react-countup

## Style guide
* CSS Modules were used for styling the components along with the material-ui.
* CSS Modules let you use the same CSS class name in different files without worrying about naming clashes.
* classnames library is used for conditionally joining classNames together.

## Setting Up The Project
```
git@github.com:srikrishnak-dev/covid-tracker.git
cd covid-tracker/
npm install
npm start
```