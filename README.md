![Hero](https://github.com/Liam-hi/Hypermath/blob/master/media/HyperMath%20-%20responsive.png?raw=true)

Hypermath is a prototype application designed for performing mathematical computations related to abstract algebra. The design and functionality is influenced by the Python IDLE development environment.

## Features
-  solve abstract algebra problem
- Hypermath performs calculations not only in the client-side but also in both Django and Spring Boot.
- provides error messages in the terminal that the "compiler" is unable to read variables or scripts (NameError, VariableError).
- toggle between light mode and dark mode
- mobile ready 

## Available commands: 
| #        | Command           | Description  |  Example  |Output  |
| ------------- |:-------------:|:-------------:|:-------------:| -----:|
| 1     | `hypermath -version`| Returns the current version number | `hypermath -version`| 1.x.x
| 2     | `estimateVolume(a, b)`      |   Estimates the volume of a hypersphere of dimension a and radius b using Monte Carlo integration. | `estimateVolume(3, 2)`|28.29564|
| 3 | `havelHakimi(list)`       |    Checks whether the graph is connected or not. | `havelHakimi([3, 2, 1])` |False|
| 4 | `polynomialGroup(polynomial, z)`      |    Finds the roots for polynomial rings and fields in $\mathbb{Z}_n$ | `polynomialGroup(x^2 + 4, 10)` |[4,6]|
## Development
This application uses Webpack, Typescript and NPM
-  Execute the command "npm run serve" in the terminal on the client side
- Run the Spring Boot application within a Java IDE of your choice
- To run Django, enter "python manage.py runserver" command in the terminal.

## Trivia
Hypermath was considered as a potential name for Mathematica before its launch in 1988.

 
