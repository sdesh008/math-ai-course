---
marp: true
---

# Systems of Linear Equations

**Audience:** Undergraduate linear algebra

- Goal: Solve $A\mathbf{x}=\mathbf{b}$, classify solution sets, and connect algebra to geometry
- Outline: elimination, pivots, rank, column space, worked examples

---

## Learning Objectives

- State a linear system and write its augmented matrix
- Perform elementary row operations and Gaussian elimination
- Classify solution sets: unique, none, infinite
- Connect rank and column space to solvability

---

## Definitions & Notation

- Linear equation: $a_1x_1+\dots+a_nx_n=b$
- System: $A\mathbf{x}=\mathbf{b}$ with $A\in\mathbb{R}^{m\times n}$
- Augmented matrix: $[A\mid\mathbf{b}]$

---

## Elementary Row Operations

- Swap two rows: $R_i\leftrightarrow R_j$
- Multiply a row by nonzero scalar: $cR_i$
- Add multiple of a row: $R_i\leftarrow R_i+cR_j$
- These preserve solution set

---

## Gaussian Elimination (outline)

- Use row ops to reach Row-Echelon Form (REF)
- Identify pivot columns and perform back-substitution
- For parametrized solutions use free variables

---

## Worked Example 1 — 2×2 (unique)

Solve:
$$
\begin{cases}
 x+2y=5\\
 3x-y=4
\end{cases}
$$
- Augmented matrix: $\big[\begin{smallmatrix}1&2&\mid&5\\3&-1&\mid&4\end{smallmatrix}\big]$
- $R_2\leftarrow R_2-3R_1\Rightarrow [1\ 2\ |\ 5;\ 0\ -7\ |\ -11]$
- Back-substitute: $y=11/7,\ x=13/7$

---

## Worked Example 2 — 3×3 (unique solution)

Solve:
$$
\begin{cases}
 x+y+z=2\\
 2x+3y+z=5\\
 x+2y+2z=4
\end{cases}
$$
- Augmented matrix: $\left[\begin{smallmatrix}1&1&1&\mid&2\\2&3&1&\mid&5\\1&2&2&\mid&4\end{smallmatrix}\right]$
- $R_2\leftarrow R_2-2R_1\Rightarrow [1\ 1\ 1\ |\ 2;\ 0\ 1\ -1\ |\ 1;\ 1\ 2\ 2\ |\ 4]$
- $R_3\leftarrow R_3-R_1\Rightarrow [1\ 1\ 1\ |\ 2;\ 0\ 1\ -1\ |\ 1;\ 0\ 1\ 1\ |\ 2]$
- $R_3\leftarrow R_3-R_2\Rightarrow [\dots;\ 0\ 0\ 2\ |\ 1]$ so $2z=1\Rightarrow z=1/2$
- Back-substitute: $y=1+z=3/2$, $x=2-y-z=0$. Solution: $(0,\tfrac{3}{2},\tfrac{1}{2})$.

---

## Classifying Solutions: Rank

- If $\mathrm{rank}(A)<\mathrm{rank}([A\mid\mathbf{b}])$ ⇒ no solution
- If $\mathrm{rank}(A)=\mathrm{rank}([A\mid\mathbf{b}])=n$ ⇒ unique solution
- If $\mathrm{rank}(A)=\mathrm{rank}([A\mid\mathbf{b}])<n$ ⇒ infinitely many solutions

---

## Geometric Interpretation

- $n=2$: lines in the plane — intersect, parallel, or coincident
- $n=3$: planes in space — intersect in point, line, empty, or plane
- Visualize column space: solvable iff $\mathbf{b}\in\mathrm{Col}(A)$

---

## In-Class Activity (10 minutes)

- Break into pairs; each pair gets one system:
  - Unique solution (2×2)
  - No solution (parallel lines)
  - Infinite solutions (dependent equations)
- Tasks: reduce, classify, and prepare one-line explanation

---

## Homework Exercises

1. Solve & classify:
$$\begin{cases}x+2y-z=1\\2x+4y-2z=2\\-x+y+z=0\end{cases}$$
2. Determine if $A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$, $\mathbf b=(3,7)^T$ is solvable.
3. Solve:
$$\begin{cases}x-y+2z=3\\2x+y-z=0\\-x+3y+z=4\end{cases}$$

---

## Summary & Teaching Tips

- Emphasize elementary row ops preserve solutions
- Relate algebraic elimination to geometric intersection
- Use parametric descriptions for infinite solution sets
- Warn about numerical pivoting in computational contexts

---

## References

- Gilbert Strang, "Introduction to Linear Algebra"
- Lay, Lay & McDonald, "Linear Algebra and Its Applications"

---

<!-- End of Marp slides -->
