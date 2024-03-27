# Etch-a-Sketch
This project is a simple web application that creates a grid of squares on a webpage. The size of the grid is determined by user input. This was created without using the Canvas Api, and instead using Dom Manipulation so that i could get extra experience with the DOM.

![Gif Example](./OxDDrH1.gif)

# Functions
getPadding(numSquares): This function calculates the padding for each square in the grid. It takes the number of squares as an argument and returns a string representing the padding in pixels.

createRow(num): This function creates a row of squares. It takes the number of squares as an argument. It creates a div for each square, adds an event listener to change the square's background color on mouseover, and appends the square to the row. It returns the row.

createGrid(num): This function creates a grid of squares. It takes the number of squares as an argument. It creates a row for each square and appends the row to the grid. It returns the grid.

getInput(): This function is currently empty and does not perform any actions.

# Event Listeners
button: An event listener is added to the button. When the button is clicked, it prompts the user for the number of squares, removes the old grid from the container, creates a new grid with the specified number of squares, and appends the new grid to the container.

# Future Plans
i plan to redo this project using React to fancy up the Ui. Additionally i want to add the functionality to draw only on click as opposed to hover and i also 
want to add an eraser tool.