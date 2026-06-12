# Compact Sets — Study Guide

**Concept**

A set $K$ in a metric space $(X,d)$ is called *compact* if every open cover of $K$ admits a finite subcover. In $\mathbb{R}^n$ (with the usual Euclidean metric) the Heine–Borel theorem gives a convenient characterization:

- In $\mathbb{R}^n$: a set is compact iff it is closed and bounded.

Important equivalent formulations (in metric spaces):
- Sequential compactness: every sequence in $K$ has a convergent subsequence whose limit lies in $K$.
- Limit point compactness: every infinite subset of $K$ has a limit point in $K$.

Basic properties:
- Continuous image of a compact set is compact.
- A compact subset of a Hausdorff space is closed.
- On a compact set, a continuous real-valued function attains a maximum and minimum (Extreme Value Theorem).

**Worked Example 1 — Compactness of $[0,1]$ in $\mathbb{R}$**

Claim: $[0,1]$ is compact.

Solution: By the Heine–Borel theorem in $\mathbb{R}$, any subset of $\mathbb{R}$ is compact iff it is closed and bounded. The interval $[0,1]$ is bounded and contains its endpoints, so it is closed. Therefore $[0,1]$ is compact.

Alternative (open-cover) sketch: Let \(\{U_\alpha\}\) be an open cover of $[0,1]$. Define
$$S = \{x\in[0,1]: [0,x]\text{ can be covered by finitely many }U_\alpha\}.$$ 
Then $0\in S$, $S$ is nonempty and bounded above by $1$. Let $s = \sup S$. One shows that $s\in S$ and that if $s<1$ then some neighborhood of $s$ can be finitely covered, contradicting maximality; hence $s=1$ and $[0,1]$ has a finite subcover.

**Worked Example 2 — $(0,1)$ is not compact**

Claim: The open interval $(0,1)$ is not compact in $\mathbb{R}$.

Solution: Consider the open cover $\{U_n\}_{n\in\mathbb{N}}$ where $U_n=(1/n,1)$ for $n=1,2,\dots$. For any $x\in(0,1)$ choose $n>1/x$ so that $1/n<x$, hence $x\in U_n$; therefore the family covers $(0,1)$. Suppose a finite subcollection $U_{n_1},\dots,U_{n_k}$ covered $(0,1)$. Let $N=\max\{n_1,\dots,n_k\}$. Then points in $(0,1/N]$ are not covered by $U_N$ or any $U_{n_i}$ with $n_i\le N$, contradiction. Hence no finite subcover exists, so $(0,1)$ is not compact.

**Worked Example 3 — Sequential compactness: $\{1/n\}\cup\{0\}$**

Claim: The set $A=\{1/n : n\in\mathbb{N}\}\cup\{0\}\subset\mathbb{R}$ is compact.

Solution: $A$ is bounded (all points lie in $[0,1]$) and $A$ contains all its limit points (its only limit point is $0$, which is included), so $A$ is closed. By Heine–Borel, closed and bounded in $\mathbb{R}$ implies compact, so $A$ is compact.

Equivalently, check sequential compactness: any sequence in $A$ either takes the value $0$ infinitely often (then has subsequence constantly $0$), or has infinitely many terms $1/n_k$ with $n_k\to\infty$, which converges to $0$. Thus every sequence has a convergent subsequence with limit in $A$.

**Practice Problems**

1. Problem: Determine whether the set $B=[0,\infty)$ is compact in $\mathbb{R}$. Explain.

   Solution: $B$ is not compact. Although $B$ is closed, it is unbounded, and in $\mathbb{R}$ unbounded sets cannot be compact (Heine–Borel). For example, the open cover $\{(-n,n)\}_{n\in\mathbb{N}}$ does not admit a finite subcover that contains arbitrarily large points.

2. Problem: Prove the intersection of a countable collection of compact sets is compact (in a metric space).

   Solution: Let $\{K_n\}_{n=1}^\infty$ be compact subsets of a metric space $X$, and let $K=\bigcap_{n=1}^\infty K_n$. Take any sequence $(x_m)$ in $K$. Since $K_1$ is compact, $(x_m)$ has a subsequence $(x_{m}^{(1)})$ that converges to some $x^{(1)}\in K_1$. From this subsequence, since $K_2$ is compact, extract a further subsequence $(x_{m}^{(2)})$ that converges to some $x^{(2)}\in K_2$. Continue inductively to obtain nested subsequences whose limits lie in the corresponding $K_n$. Using the diagonal argument, choose a subsequence that is the $n$-th term of the $n$-th subsequence; this diagonal subsequence converges, and its limit must equal each $x^{(n)}$, so the common limit $x$ lies in every $K_n$ (each $K_n$ is closed because compact subsets of metric spaces are closed). Thus every sequence in $K$ has a convergent subsequence with limit in $K$, so $K$ is sequentially compact; in metric spaces sequential compactness is equivalent to compactness. Hence $K$ is compact.

3. Problem: Show the open interval $D=(-1,1)\subset\mathbb{R}$ is not compact.

   Solution: $D$ is bounded but not closed. For example, consider the sequence $x_n=1-1/n\in D$. This sequence converges to $1$, which is not in $D$. Hence there exists a sequence in $D$ with no subsequence converging to a point of $D$, so $D$ is not sequentially compact and therefore not compact.

**Connections**

- **`Heine–Borel`**: characterizes compact subsets of $\mathbb{R}^n$ as exactly the closed and bounded sets.
- **`Bolzano–Weierstrass`**: in $\mathbb{R}^n$, every bounded sequence has a convergent subsequence; equivalently: bounded closed sets are sequentially compact.
- **`Extreme Value Theorem`**: a continuous function on a compact set attains its global maximum and minimum.
- **`Continuous maps`**: images of compact sets under continuous functions are compact; used to transfer compactness properties.
- **`Total boundedness` and `completeness`**: in metric spaces, compactness ⇔ complete + totally bounded.
- **`Functional analysis`**: compactness of operators generalizes finite-dimensional intuition (compact operators map bounded sets to relatively compact sets).

**Quick tips / checklist**

- To show compactness in $\mathbb{R}^n$: verify closedness and boundedness.
- To show non-compactness: either produce an open cover with no finite subcover, or produce a sequence with no convergent subsequence (limit outside the set).
- Remember continuous functions on compact sets are well-behaved (uniformly continuous, attain extrema).