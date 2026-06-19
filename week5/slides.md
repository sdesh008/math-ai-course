---
marp: true
theme: default
paginate: true
class: lead
---

# Solving Systems of Linear Equations
### Undergraduate Linear Algebra
- What is a system of linear equations?
- How do geometry, algebra, and matrices connect?
- Why solution type matters in applications

---

## What Is a System of Linear Equations?
- A set of two or more linear equations sharing the same variables
- Every equation must hold at the same time
- Solutions are values for the variables that satisfy all equations

$$
\begin{aligned}
x + 2y &= 5 \\
2x - y &= 1
\end{aligned}
$$

---

## Graphical Interpretation
- Each equation represents a line in the plane
- The solution is the point where the lines intersect
- Compare cases with one, none, or infinitely many intersections

$$
\text{Line 1: } x + 2y = 5 \qquad
\text{Line 2: } 2x - y = 1
$$

---

## Substitution Method
- Solve one equation for one variable
- Substitute that expression into the other equation
- Applies to the same system used earlier

$$
\begin{aligned}
x + 2y &= 5 \\
2x - y &= 1
\end{aligned}
$$

Solve the first equation for $x$:

$$
x = 5 - 2y
$$

---

## Substitution: solve $y$
- Replace $x$ in the second equation
- Then solve for $y$

$$
2(5 - 2y) - y = 1
$$

$$
10 - 5y = 1 \quad\Rightarrow\quad y = \frac{9}{5}
$$

Then substitute back:

$$
x = 5 - 2\left(\frac{9}{5}\right) = \frac{7}{5}
$$

---

## Elimination Method
- Add or subtract equations to eliminate one variable
- Uses the same system to find the same solution

$$
\begin{aligned}
x + 2y &= 5 \\
2x - y &= 1
\end{aligned}
$$

Multiply the first equation by 2:

$$
2x + 4y = 10
$$

Subtract the second equation:

$$
(2x + 4y) - (2x - y) = 10 - 1
$$

---

## Elimination: solve $y$
- After elimination, solve for $y$
- Then substitute back to find $x$

$$
5y = 9 \quad\Rightarrow\quad y = \frac{9}{5}
$$

Then substitute back:

$$
x + 2\left(\frac{9}{5}\right) = 5 \quad\Rightarrow\quad x = \frac{7}{5}
$$

---

## Matrix Inverse Method
- Represent the system as $A\mathbf{x} = \mathbf{b}$
- Solve using $\mathbf{x} = A^{-1}\mathbf{b}$ when $A$ is invertible

$$
A = \begin{pmatrix} 1 & 2 \\
2 & -1 \end{pmatrix}, \qquad
\mathbf{x} = \begin{pmatrix} x \\
 y \end{pmatrix}, \qquad
\mathbf{b} = \begin{pmatrix} 5 \\
1 \end{pmatrix}
$$

The inverse is

$$
A^{-1} = \frac{1}{-5} \begin{pmatrix} -1 & -2 \\
-2 & 1 \end{pmatrix}
= \frac{1}{5} \begin{pmatrix} 1 & 2 \\
2 & -1 \end{pmatrix}
$$

Then

$$
\mathbf{x} = A^{-1} \mathbf{b} = \frac{1}{5} \begin{pmatrix} 1 & 2 \\
2 & -1 \end{pmatrix} \begin{pmatrix} 5 \\
1 \end{pmatrix}
= \begin{pmatrix} \frac{7}{5} \\
\frac{9}{5} \end{pmatrix}
$$

---

## Row Reduction and Gaussian Elimination
- Use elementary row operations to reach echelon form
- Eliminate variables step by step
- Then back-substitute to solve

$$
\begin{pmatrix}
1 & 2 & | & 5 \\
2 & -1 & | & 1
\end{pmatrix}
\rightarrow
\begin{pmatrix}
1 & 2 & | & 5 \\
0 & -5 & | & -9
\end{pmatrix}
$$

---

## Solution Types
- Unique solution: one intersection, full rank
- No solution: inconsistent system, parallel lines
- Infinitely many solutions: dependent equations, a line of solutions

$$
A\mathbf{x} = \mathbf{b}
$$

---

## Why It Matters
- Systems appear in engineering, physics, economics, and data science
- Row reduction scales to matrices and higher dimensions
- Identifying solution type is essential for modeling

---

## Summary
- Systems of linear equations can be solved graphically, algebraically, or with matrices
- Substitution and elimination are foundational techniques
- Matrix form and Gaussian elimination generalize to larger systems

$$
\begin{aligned}
x + 2y &= 5 \\
2x - y &= 1
\end{aligned}
$$