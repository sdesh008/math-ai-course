# Function that returns the nth Fibonacci number
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
    
# Compute the nth partial sum of the Fourier series for a square wave on [-pi,pi]
def fourier_square_wave(n, x):
    sum = 0
    for k in range(1, n + 1):
        sum += (1 / (2 * k - 1)) * sin((2 * k - 1) * x)
    return (4 / pi) * sum