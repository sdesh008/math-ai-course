# Summary, References & Teaching Tips — Systems of Linear Equations

## One-paragraph summary
Systems of linear equations model many applied problems and are central in linear algebra. Gaussian elimination and row operations give a reliable algebraic method to find solutions; rank and column space provide clean criteria that link algebraic procedures to geometric intuition.

## Quick reference (to show in class)
- Elementary row ops: swap ($R_i\leftrightarrow R_j$), scale ($cR_i$), add multiple ($R_i\leftarrow R_i+cR_j$).
- Tests:
  - rank($A$) < rank($[A|b]$) ⇒ inconsistent (no solution)
  - rank($A$) = rank($[A|b]$) = n ⇒ unique solution
  - rank($A$) = rank($[A|b]$) < n ⇒ infinitely many solutions

## Teaching tips
- Start with a geometric example in 2D: show two lines intersecting, parallel, coincident.
- Emphasize the invariant nature of row ops — perform an incorrect example deliberately to show why preserving solutions matters.
- Use color-coding on the board/slides for pivot columns vs free columns.
- Encourage students to always state the row operation they perform; this helps debugging and understanding.
- When students get confused by many arithmetic steps, step back to pivot logic: "Which variable can you eliminate next?".
- For larger classes, give one solvable and one inconsistent system per row group to compare approaches.

## Common student pitfalls
- Treating a zero row as meaning "no solution" without checking the RHS.
- Forgetting to parametrize free variables when infinite solutions occur.
- Arithmetic mistakes during elimination — encourage checking by substituting back one solution into original equations.

## Extensions and computational notes
- Mention partial pivoting and numerical stability briefly when introducing computational solvers.
- Show how LU decomposition factors into elimination; demonstrate in software (optional).

## References
- Gilbert Strang, "Introduction to Linear Algebra" — chapters on systems and elimination.
- Lay, Lay & McDonald, "Linear Algebra and Its Applications" — treatment of rank and solution sets.

## Suggested slide speaker notes (one-liners)
- When showing elimination: narrate each row op in plain English (e.g., "Subtract 3 times row 1 from row 2 to eliminate x in row 2").
- For the 3×3 worked example: pause to ask students what should be the next pivot.
- For the activity: remind students to write operations explicitly and to check consistency via rank.
