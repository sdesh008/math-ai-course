# Eigenvalues

## Definition
An eigenvalue of a square matrix \( A \) is a scalar \( \lambda \) such that there exists a non-zero vector \( v \) (called an eigenvector) satisfying the equation:
\[Av = \lambda v \]

## Example
Find the eigenvalues of the matrix:
\[A = \begin{bmatrix}
2 & 1 \\
1 & 2
\end{bmatrix}\]To find the eigenvalues of the matrix \( A \), we need to solve the characteristic equation, which is derived from the determinant of \( A - \lambda I \) being equal to zero:
1. First, we compute \( A - \lambda I \):
\[A - \lambda I = \begin{bmatrix}
2 - \lambda & 1 \\
1 & 2 - \lambda
\end{bmatrix}\]
2. Next, we calculate the determinant of \( A - \lambda I \):
\[\text{det}(A - \lambda I) = (2 - \lambda)(2 - \lambda) - (1)(1) = (2 - \lambda)^2 - 1\]
3. Setting the determinant equal to zero gives us the characteristic equation:
\[(2 - \lambda)^2 - 1 = 0\]
4. Expanding and simplifying the equation:
\[(2 - \lambda)^2 = 1\]
\[(2 - \lambda) = \pm 1\]
5. Solving for \( \lambda \):
- For \( 2 - \lambda = 1 \):
\[\lambda = 1\]
- For \( 2 - \lambda = -1 \):
\[\lambda = 3\]

Thus, the eigenvalues of the matrix \( A \) are \( \lambda_1 = 1 \) and \( \lambda_2 = 3 \).