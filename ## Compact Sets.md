## Compact Sets

Let $A$ be a subset of $\mathbb{R}$. We say that $A$ is **compact** if every open cover of $A$ has a finite subcover. In other words, if we have a collection of open sets $\{U_\alpha\}_{\alpha \in I}$ such that $A \subseteq \bigcup_{\alpha \in I} U_\alpha$, then there exists a finite subset $J \subseteq I$ such that $A \subseteq \bigcup_{\alpha \in J} U_\alpha$.

### Example 1

Prove that the closed interval $[0, 1]$ is compact.

To prove that the closed interval $[0, 1]$ is compact, we will use the Heine-Borel theorem, which states that a subset of $\mathbb{R}$ is compact if and only if it is closed and bounded.

1. **Closed**: The interval $[0, 1]$ is closed because it contains all its limit points. Specifically, the points $0$ and $1$ are included in the interval, and there are no limit points outside of this interval.
2. **Bounded**: The interval $[0, 1]$ is bounded because it is contained within the bounds of $0$ and $1$.
3. Since $[0, 1]$ is both closed and bounded, by the Heine-Borel theorem, it is compact.

### Example 2
Prove that the open interval $(0, 1)$ is not compact.To prove that the open interval $(0, 1)$ is not compact, we will show that there exists an open cover of $(0, 1)$ that does not have a finite subcover.
Consider the open cover of $(0, 1)$ given by the collection of open intervals $\{U_n\}_{n=1}^\infty$, where $U_n = \left(0, 1 - \frac{1}{n}\right)$ for each positive integer $n$.
1. Each $U_n$ is an open set, and the collection $\{U_n\}_{n=1}^\infty$ covers $(0, 1)$ because for any point $x \in (0, 1)$, we can choose $n$ large enough such that $x < 1 - \frac{1}{n}$, which means $x \in U_n$.
2. However, there is no finite subcover of $\{U_n\}_{n=1}^\infty$ that can cover $(0, 1)$. If we take any finite number of these intervals, say $U_{n_1}, U_{n_2}, \ldots, U_{n_k}$, where $n_1 < n_2 < \ldots < n_k$, the largest interval in this finite collection will be $U_{n_k} = \left(0, 1 - \frac{1}{n_k}\right)$. This interval does not cover the entire open interval $(0, 1)$ because it does not include points close to $1$ that are greater than $1 - \frac{1}{n_k}$.
3. Therefore, since there is no finite subcover that can cover $(0, 1)$, we conclude that the open interval $(0, 1)$ is not compact.

### Practice Problem 1
Prove that the set of rational numbers $\mathbb{Q}$ is not compact.

Using the Heine-Borel theorem, we know that a subset of $\mathbb{R}$ is compact if and only if it is closed and bounded. The set of rational numbers $\mathbb{Q}$ is not closed because it does not contain all its limit points (for example, the irrational numbers are limit points of $\mathbb{Q}$ but are not included in $\mathbb{Q}$). Therefore, since $\mathbb{Q}$ is not closed, it cannot be compact.

### Practice Problem 2
Prove [0,1) is not compact.To prove that the interval $[0, 1)$ is not compact, we will show that there exists an open cover of $[0, 1)$ that does not have a finite subcover.
Consider the open cover of $[0, 1)$ given by the collection of open intervals$\{U_n\}_{n=1}^\infty$, where $U_n = \left(0, 1 - \frac{1}{n}\right)$ for each positive integer $n$.
1. Each $U_n$ is an open set, and the collection $\{U_n\}_{n=1}^\infty$ covers $[0, 1)$ because for any point $x \in [0, 1)$, we can choose $n$ large enough such that $x < 1 - \frac{1}{n}$, which means $x \in U_n$.
2. However, there is no finite subcover of $\{U_n\}_{n=1}^\infty$ that can cover $[0, 1)$. If we take any finite number of these intervals, say $U_{n_1}, U_{n_2}, \ldots, U_{n_k}$, where $n_1 < n_2 < \ldots < n_k$, the largest interval in this finite collection will be $U_{n_k} = \left(0, 1 - \frac{1}{n_k}\right)$. This interval does not cover the entire interval $[0, 1)$ because it does not include points close to $1$ that are greater than $1 - \frac{1}{n_k}$.
3. Therefore, since there is no finite subcover that can cover $[0, 1)$, we conclude that the interval $[0, 1)$ is not compact.]

### Practice Problem 3
Prove the intersection of a countable collection of compact sets is compact.

Let $\{K_n\}_{n=1}^\infty$ be a countable collection of compact sets in $\mathbb{R}$, and let $K = \bigcap_{n=1}^\infty K_n$ be the intersection of these sets. We want to show that $K$ is compact. Since each $K_n$ is compact, it is closed and bounded. The intersection of closed sets is also closed, so $K$ is closed. Additionally, since each $K_n$ is bounded, there exists some real number $M$ such that $K_n \subseteq [-M, M]$ for all $n$. Therefore, $K \subseteq [-M, M]$, which means $K$ is bounded. Since $K$ is both closed and bounded, by the Heine-Borel theorem, we conclude that $K$ is compact.

### Connections

The concept of compactness is fundamental in various areas of mathematics, including analysis, topology, and functional analysis. Compact sets have many important properties, such as being closed and bounded in $\mathbb{R}$, and they play a crucial role in the study of continuous functions, convergence, and the behavior of sequences. Understanding compactness allows us to generalize results from finite-dimensional spaces to infinite-dimensional spaces and to analyze the structure of mathematical objects in a more comprehensive way.

In real analysis, compactness can be used to prove the uniform continuity of functions, the existence of maximum and minimum values, and the convergence of sequences and series.

