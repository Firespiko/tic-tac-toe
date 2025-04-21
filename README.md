<div align="center">

<h3 align="center">Tic-Tac-Toe Game</h3>

  <p align="center">
    A simple Tic-Tac-Toe game built with React and styled with Tailwind CSS.
    <br />
     <a href="https://github.com/firespiko/tic-tac-toe">firespiko/tic-tac-toe</a>
  </p>
</div>

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This project is a classic Tic-Tac-Toe game implemented using React for the user interface and Tailwind CSS for styling. It allows two players to compete against each other, taking turns to mark spaces in a 3x3 grid. The game detects a winner or a draw and displays the result.

### Key Features

- **Interactive Gameplay:** Players can click on the squares to place their marks (X or O).
- **Win Detection:** The game automatically detects a winner based on standard Tic-Tac-Toe rules.
- **Draw Detection:** The game identifies when all squares are filled without a winner, resulting in a draw.
- **Dynamic Status:** Displays the current player's turn and the game result (winner or draw).
- **Tailwind CSS Styling:** Uses Tailwind CSS for a clean and responsive design.
- **Winner Celebration:** Displays an image when a player wins.

## Architecture

The project is built using the following technologies:

- **React:** A JavaScript library for building user interfaces. It manages the game state and updates the UI based on player actions and game logic.
- **Tailwind CSS:** A utility-first CSS framework for styling the components. It provides a set of pre-defined CSS classes that are used to style the game board, squares, and status messages.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/firespiko/tic-tac-toe.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd firespiko-tic-tac-toe
   ```
3. **Install the dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm start
   ```
   This will start the application in your browser, usually at `http://localhost:3000`.

## Acknowledgments

- The initial project setup was created using `create-react-app`.
