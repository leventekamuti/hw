# R&M SPA

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)

## Introduction

Welcome to the Rick and Morty SPA (Single Page Application) project. This project is a web application built using a frontend framework/library to fulfill the assignment's objectives.

## Project Overview

The goal of this project was to create a Single Page App with two pages: Home and Profile. The Home page displays a table of characters from the Rick & Morty API's Character endpoint, including columns for Avatar, Name, Species, and Status. Clicking on a character's name navigates to the Profile page, displaying detailed character information. Users can return to the main table using the "Back" button.

### Features

- Home Page:
  - Display a table of characters.
  - Columns: Avatar, Name, Species, and Status.
  - Pagination support.
  - Search characters by name.
- Profile Page:
  - Display detailed character information.
  - Navigate back to the main table.

### Project Structure

The project is structured as follows:

- `src/` - Contains the source code for the application.
  - `components/` - Reusable React components.
  - `interfaces/` - TypeScript interfaces.
  - `App.tsx` - Main application component.
  - `Home.tsx` - Home page component.
  - `main.tsx` - Entry point of the application.
- `README.md` - Project documentation (this file).

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the project directory in your terminal.
3. Run the following commands:

   ```bash
   # Install project dependencies
   npm install

   # Start the development server
   npm run dev
   ```

4. Open your web browser and visit `http://localhost:xxxx` to use the application.

## Technologies Used

This project was built using the following technologies and libraries:

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - A build tool and development server for fast and efficient web development.
- [Material-UI](https://mui.com/) - React UI framework.
- [Rick and Morty API](https://rickandmortyapi.com/) - API used to fetch character data.
- [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript.
