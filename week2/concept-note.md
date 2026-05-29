# Systems of Linear Equations

## Definition
A system of linear equations is a set of at least two linear equations with the same variables. The solution to a system of linear equations is the set of values for the variables that satisfy all equations simultaneously. These systems can have one solution, infinitely many solutions, or no solution at all, depending on the relationships between the equations. To determine the number of solutions, we can use methods such as substitution, elimination, or matrix operations. If the equations are consistent and independent, there will be one unique solution. If they are consistent and dependent, there will be infinitely many solutions. If they are inconsistent, there will be no solution. Alternatively, we can represent the system of linear equations in matrix form and use techniques such as Gaussian elimination or Cramer's rule to find the solutions.

## Example
Consider the following system of linear equations:
1. \( 2x + 3y = 5 \)
2. \( 4x - y = 11 \)
To solve this system, we can use the elimination method. First, we can multiply the second equation by 3 to align the coefficients of \( y \) (alternatively, we multiply the first equation by -2 to get opposite coefficients for \( x \)):
1. \( 2x + 3y = 5 \)
2. \( 12x - 3y = 33 \)
Next, we can add the two equations together to eliminate \( y \):
\( (2x + 3y) + (12x - 3y) = 5 + 33 \)
This simplifies to:
\( 14x = 38 \)
Now, we can solve for \( x \):
\( x = \frac{38}{14} = \frac{19}{7} \
Next, we can substitute the value of \( x \) back into one of the original equations to find \( y \). Using the first equation:
\( 2\left(\frac{19}{7}\right) + 3y = 5 \)
This simplifies to:
\( \frac{38}{7} + 3y = 5 \)
Now, we can solve for \( y \):
\( 3y = 5 - \frac{38}{7} \)
\( 3y = \frac{35}{7} - \frac{38}{7} \)
\( 3y = -\frac{3}{7} \)
Finally, we can find \( y \):
\( y = -\frac{3}{7} \div 3 = -\frac{3}{7} \times \frac{1}{3} = -\frac{1}{7} \)
Thus, the solution to the system of linear equations is:
\( x = \frac{19}{7} \) and \( y = -\frac{1}{7} \).

We can verify the solution by substituting \( x \) and \( y \) back into the original equations:
1. For the first equation:
\( 2\left(\frac{19}{7}\right) + 3\left(-\frac{1}{7})\right) = \frac{38}{7} - \frac{3}{7} = \frac{35}{7} = 5 \)
2. For the second equation:
\( 4\left(\frac{19}{7}\right) - \left(-\frac{1}{7}\right) = \frac{76}{7} + \frac{1}{7} = \frac{77}{7} = 11 \)
Since both equations are satisfied, the solution \( (x, y) = \left(\frac{19}{7}, -\frac{1}{7}\right) \) is correct.
## Conclusion
These systems of linear equations are important in different areas of mathematics in their applications to real-world situations but more importantly, how this seemingly simple topic spawned an entire branch of mathematics called linear algebra. 