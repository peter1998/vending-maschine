# Vending Machine Application
![image](https://github.com/peter1998/vending-maschine/assets/19347046/4559992d-9551-4a07-81f6-bc57d66130f2)


## Table of Contents

1. [Description](#Description)
2. [Setup and Installation](#Setup-and-Installation)
3. [Running with Docker](#Running-with-Docker)
4. [Coin Denominations](#Coin-Denominations)
5. [Running Tests](#Running-Tests)
6. [Deployment](#Deployment)
7. [Technologies Used](#Technologies-Used)
8. [Author](#Author)
9. [Acknowledgments](#Acknowledgments)
10. [Future Work](#Future-Work)

## Description

This application simulates the functionality of a real-world vending machine. Users can view a list of available products, insert coins, make a product selection, and purchase products. The application manages an inventory count for the products and only allows users to purchase if the product is in stock and if they have inserted sufficient funds.

## Setup and Installation

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.

To install the Vending Machine Application, follow these steps:

1. Clone this repository onto your local machine.
2. Navigate into the project directory: `cd vending-machine`.
3. Install the project dependencies with npm: `npm install`.
4. Start the application: `npm start`.
5. Open http://localhost:3000 to view it in the browser.

## Running with Docker

Before you begin, make sure you have Docker installed on your system. If it's not currently installed, you can get it from the official Docker website.

To build and run the Vending Machine application with Docker, follow these steps:

1. Navigate to the root directory of the project in your terminal.
2. Build the Docker image: `docker build -t vending-machine-app .`
3. Once the image is built, run the Docker container: `docker run -p 3000:3000 vending-machine-app`.
4. Open your browser and go to http://localhost:3000 to view the application.

## Coin Denominations

The vending machine accepts the following coin denominations (in USD): $0.01, $0.05, $0.10, $0.25, $1.

## Running Tests

Run tests using `npm test`. This should start the test runner, Jest, in the project. Currently, there are five test cases:

- Check if the VendingMachine component renders.
- Check if a product can be selected.
- Check if coins can be inserted.
- Check if a purchase can be confirmed.
- Check if the process can be reset.

## Deployment

Enjoy the live application here: [Vending Machine App](https://peter1998.github.io/vending-maschine/)

## Technologies Used

- [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): A predictable state container for JavaScript applications.
- [Material-UI](https://mui.com/): A popular React UI framework that provides a comprehensive set of ready-to-use components.

## Author

This project was developed by **Peter Matov**.

## Acknowledgments

Thank you to [DXC Technology](https://www.dxc.technology/) for providing the task requirement that guided the development of this application.

## Future Work

1. Creating a Flask server to serve as the backend of the application.
 This server will handle all business logic and database connections.
2. Setting up a PostgreSQL database and integrating it with the Flask server.
 Develop models and schemas for vending machine data.
3. Enhancements to the UI/UX for a smoother user experience.
4. More robust testing and validation of user input.

Your contributions and suggestions are heartily♡ welcome, (✿◠‿◠).
Future Work
Integration with Docker for easier setup and deployment.
More robust testing and validation of user input.
Enhancements to the UI/UX for a smoother user experience.
Your contributions and suggestions are heartily♡ welcome, (✿◠‿◠).

### 👤 Peter Matov Full Stack Junior
