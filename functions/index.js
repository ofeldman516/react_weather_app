// functions/index.js

const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.getWeatherForecast = functions.https.onRequest(async (req, res) => {
  // Get the location query parameter from the request
  const {location} = req.query;

  // Check if the location parameter is provided
  if (!location) {
    return res.status(400).json({error: "Location parameter is required"});
  }

  try {
    // Make a request to the Tomorrow.io API with API key
    console.log("API Key:", process.env.REACT_APP_WEATHER_API_KEY);

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const functions = require("firebase-functions");
    const fetch = require("node-fetch");

    exports.getWeatherForecast = functions.https.onRequest(async (req, res) => {
      // Get the location query parameter from the request
      const {location} = req.query;

      // Check if the location parameter is provided
      if (!location) {
        return res.status(400).json({error: "Location parameter is required"});
      }

      try {
        // Make a request to the Tomorrow.io API with your API key
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`;
        const response = await fetch(url);

        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        // Parse the JSON response
        const data = await response.json();

        // Send the weather data back to the client
        res.json(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({error: "Failed to fetch weather data"});
      }
    });

    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`;
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    // Parse the JSON response
    const data = await response.json();
    console.log('Weather Data:', data); 

    // Send the weather data back to the client
    res.json(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({error: "Failed to fetch weather data"});
  }
});
