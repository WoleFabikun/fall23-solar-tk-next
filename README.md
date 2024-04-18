# Solar Data Retrieval and Analysis

This project aims to retrieve solar data from the National Solar Radiation Database (NSRDB) API for a specific location on Earth and perform machine learning predictions using the obtained data. The project consists of a Flask backend that interacts with the NSRDB API and processes the retrieved solar data, and a frontend built with Next.js and React that provides a user interface for inputting location coordinates and selecting desired datasets.

## Features

- Retrieve solar data from the NSRDB API based on user-provided latitude and longitude coordinates.
- Allow users to select specific datasets, years, and intervals for data retrieval.
- Process the retrieved solar data using pandas and calculate solar generation potential using the SolarTKMaxPowerCalculator class.
- Perform machine learning predictions based on the processed solar data (to be implemented).
- Provide a user-friendly frontend interface for inputting location coordinates and selecting datasets.

## Prerequisites

To run this project locally, you need to have the following installed:

- Python 3.x
- Node.js
- bun 

## Getting Started

Clone the repository:

    git clone https://github.com/your-username/fall23-solar-tk-next.git

Install the required Python dependencies:

    cd server
    conda install -r requirements.txt

Install the required frontend dependencies:

    cd client
    bun install

Obtain an API key from the NSRDB API [here](https://developer.nrel.gov/signup/)

Start the Flask backend server:

    cd ..
    python proto.py

In a separate terminal, start the Next.js frontend development server:

    cd client
    bun dev

Open your web browser and navigate to http://localhost:3000 to access the frontend interface.

## Usage

- On the frontend interface, enter email, NSRDB api key, latitude, and longitude coordinates of the desired location.
- Select the desired dataset, years, and intervals for data retrieval.
- Click the "Submit" button to initiate the data retrieval process.
- The backend server will retrieve the solar data from the NSRDB API, process it, and perform machine learning predictions (to be implemented).
- The results will be displayed on the frontend interface (to be implemented).
