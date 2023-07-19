
# Health-Checker Website

This simple health calculator website allows users to calculate BMI, body fat percentage, ideal weight, and calories burned. The website provides a user-friendly interface with tab navigation for each calculator.

## Features

- BMI calculator: Calculates the Body Mass Index (BMI) based on the user's height and weight.
- Body fat calculator: Calculates the estimated body fat percentage based on the user's height, weight, age, and sex.
- Ideal weight calculator: Calculates the ideal weight based on the user's sex and height.
- Calories burned calculator: Calculates the estimated calories burned based on the user's weight, height, age, sex, and physical activity level.

## Files

- `index.html`: The main HTML file containing the structure and content of the website.
- `style.css`: The custom CSS file for styling the website.
- `script.js`: The JavaScript file containing the logic for handling the calculator calculations and interactions.
- `bootstrap.min.css`: The Bootstrap CSS file for styling the website.
- `jquery.min.js`: The jQuery library for JavaScript functionality.
- `readme.txt`: This file, provides information about the website.

## Frontend Usage

1. Open the `index.html` file in a web browser.
2. Navigate through the different tabs (BMI, Body fat, Ideal weight, Calories burned) to access the respective calculators.
3. Enter the required input values in each calculator and click the corresponding "Calculate" button to get the results.
4. The calculated results will be displayed below each calculator.

## Backend Setup and Usage

To run the Node.js backend for the Health-Checker website, follow these steps:

1. Install Node.js: Make sure you have Node.js installed on your system.
2. Navigate to the backend directory: Open your terminal or command prompt and navigate to the backend directory of the project.
3. Install dependencies: Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server: Run the following command to start the backend server:

   ```bash
   node server.js
   ```

   The server should now be running on the specified port (e.g., `http://localhost:3000`).

5. Connect the frontend to the backend: In the `script.js` file, update the `backendAddress` variable with the appropriate backend URL (e.g., `http://localhost:3000`).

## Dependencies

- Bootstrap v4.5.0: The CSS framework used for styling the website.
- jQuery v3.5.1: The JavaScript library for DOM manipulation and event handling.
- Node.js: The JavaScript runtime environment used for the backend.

## Deployment

The code for this project is deployed on GitHub and can be accessed publicly. Please visit the following GitHub repository:

https://github.com/sunnydao99/Health-Checker.git

Please note that the deployment may not include live server functionality, and you may need to set up the backend server separately for full functionality.

