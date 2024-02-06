React Weather APP

This is a simple weather application built using React. It allows users to search for weather information based on city names.

Features -
Search: Users can enter the name of a city and search for its weather forecast.
Weather Forecast: The app displays the current weather conditions as well as a 5-day forecast for the searched city.

Installation -

Clone the repository:

git clone https://github.com/your-username/react-weather-app.git

Navigate to the project directory:

cd react-weather-app

Install dependencies:

npm install
Obtain an API key from Tomorrow.io by signing up for an account. Once you have the API key, create a .env file in the root directory of the project and add the following line:

REACT_APP_WEATHER_API_KEY=your-api-key

Start the development server:

npm start
Open http://localhost:3000 in your web browser to view the app.

Usage -
Enter the name of a city in the search bar and press Enter or click the Search button.
The app will display the current weather conditions and a 5-day forecast for the searched city.

Project Structure -
The project consists of three main files:

App.js: The main component of the application, responsible for rendering other components and managing state.

WeatherSearch.js: A functional component responsible for rendering the search form and handling user input.

WeatherResults.js: A functional component responsible for displaying the weather forecast results.

Technologies Used -

Language: This app was built using React.
Tomorrow.io API: Weather data is fetched from the Tomorrow.io API to provide accurate and up-to-date weather information.




