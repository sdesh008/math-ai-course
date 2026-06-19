# In-Class Activities — Systems of Linear Equations

Duration: 10–15 minutes total (pair work + quick reports)

## Goals
- Practice Gaussian elimination on representative systems
- Classify systems as unique / none / infinite
- Translate row-reduction results into parametric solutions when needed

## Activity 1 — Pair classification (7–10 minutes)
Each pair picks one system and performs row reduction. Decide: unique / no solution / infinitely many. Prepare a one-line justification.

A. Unique solution (2×2)
\begin{align*}
 x + 2y &= 5\\
 3x - y &= 4
\end{align*}

B. No solution (2×2 — parallel)
\begin{align*}
 2x + 4y &= 1\\
 x + 2y &= 3
\end{align*}

C. Infinite solutions (3×3 — dependent rows)
\begin{align*}
 x + 2y - z &= 1\\
 2x + 4y -2z &= 2\\
 -x + y + z &= 0
\end{align*}

After reduction, present the category and one sentence of reasoning (e.g., "row2 = 2·row1 ⇒ rank drop; consistent ⇒ infinite solutions").

### Solutions (brief)
A. Unique: Use $R_2\leftarrow R_2-3R_1$ ⇒ $[1\ 2 | 5; 0\ -7 | -11]$. So $y=11/7$, $x=13/7$.

B. No solution: Multiply second equation by 2 ⇒ $2x+4y=6$ which conflicts with first $2x+4y=1$; inconsistent ⇒ no solution.

C. Infinite: Second row equals $2\times$ first row, so elimination yields a zero row but right-hand side consistent ($2=2$). Use the third row to reduce and set a free variable (e.g., let $t=z$) and parametrize $x,y$.

## Activity 2 — Quick elimination challenge (individual, 5 minutes)
Solve this 3×3 system and state the solution set (if unique give numeric solution; if infinite give parametric form):
\begin{align*}
 x - y + 2z &= 3\\
 2x + y - z &= 0\\
 -x + 3y + z &= 4
\end{align*}

### Solution sketch
Augmented matrix and elimination (sketch):
- $R_2\leftarrow R_2-2R_1$ and $R_3\leftarrow R_3+R_1$ to eliminate $x$ below first pivot.
- Continue to REF and back-substitute. The system reduces to a unique solution: $(x,y,z)=(1,0,1)$ (work shown in lecture).

## Instructor notes
- Circulate and check that pairs explicitly show row operations (not just answers).
- For the infinite-solutions case, ask a pair to present the parametric vector form (e.g., $\mathbf x=\mathbf p + t\mathbf v$).
- If time permits, show how rank checks the classification: compare rank($A$) vs rank($[A|b]$).
