# Week 1 Toy Problems

This project contains solutions to the Week 1 Toy Problems, including:

1. **Student Grade Generator**
2. **Speed Detector**
3. **Net Salary Calculator**

Each solution is implemented in JavaScript and works independently in separate HTML files.

## Table of Contents

1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Solutions](#solutions)
   - [Student Grade Generator](#student-grade-generator)
   - [Speed Detector](#speed-detector)
   - [Net Salary Calculator](#net-salary-calculator)
4. [Usage](#usage)
5. [License](#license)

## Overview

This repository contains three toy problems that help demonstrate basic JavaScript functionality and DOM manipulation. The problems focus on user input, conditional statements, event handling, and basic calculations.

## Technologies

- **HTML** - Used for the structure of each solution.
- **CSS** - Basic styling for each solution.
- **JavaScript** - Logic for the student grade generator, speed detector, and salary calculator.

## Solutions

### Student Grade Generator

A program that prompts the user to input student marks between 0 and 100. Based on the input, the program will return a grade according to the following scale:
- **A**: Above 79
- **B**: 60 - 79
- **C**: 49 - 59
- **D**: 40 - 49
- **E**: Below 40

#### Usage
- Input a mark between 0 and 100.
- Click the "Generate Grade" button to see the grade.

### Speed Detector

A program that takes the speed of a car as input and calculates demerit points for the driver based on the following rules:
- Speed below 70: "OK"
- Speed above 70: For every 5 km/h above the limit, a point is given. If points exceed 12, the driver's license is suspended.

#### Usage
- Input the speed of the car.
- Click the "Check Speed" button to see the result.

### Net Salary Calculator

A program that calculates an individual's net salary by taking into account:
- **Basic salary** and **benefits** as input.
- **PAYE** (Pay As You Earn) tax calculation based on Kenyan tax bands.
- **SHIF** deduction (Social Health Insurance Fund).
- **NSSF** (National Social Security Fund) deduction.
- **Housing Levy**.

It calculates the total deductions and outputs the net salary after all deductions.

#### Usage
- Input the basic salary and benefits.
- Click the "Calculate Salary" button to see the breakdown of deductions and the final net salary.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Mammet-tech/Wk1-js-practice.git
2. Open the respective HTML file for the solution you want to run:
   - `grade-generator.html` for the **Student Grade Generator**
   - `speed-detector.html` for the **Speed Detector**
   - `salary-calculator.html` for the **Net Salary Calculator**

3. Open the HTML files in a browser to interact with the solutions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
