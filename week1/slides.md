---
marp: true
theme: default
paginate: true
math: mathjax
---

# Distinct Permutations with Identical Elements

**MATH 797 — Week 1**

---

## Statement

One classic problem in combinatorics is counting combinations and permutations. However, if some of the elements in the permutation are identical, such as letters in a word, then we would have to bring out different methods to enumerate such permutations. Consider the word MISSISSIPPI. If the letters in this word were not identical and instead were different colors (red I, blue I, yellow I, etc.), then the number of distinct permutations would simply be $11!$. To account for the repeated letters, we divide by the number of permutations for each specific letter. For example, the letter S shows up 4 times so we divide by $4!$, divide by $2!$ for the two P's, divide by $4!$ for the four I's, and divide by $1!$ for the single M. Thus, we get:

$$\text{Number of Permutations} = \frac{11!}{4!4!2!1!}=34,650$$

---

## Key Insight

For any given word (or words), we can do this same method to count the number of distinct permutations (or anagrams). My name (Steven DeShong) would have 
$\frac{13!}{2!3!2!} = 259,459,200$ permutations, one of which would be anagrammed to Seven Ghost Den.

---

## Applications

We can use this strategy to count the orders of which we would put on our socks and shoes each day. There are 4 actions (putting on two socks and two shoes) but we must put a sock on before its respective shoe. Therefore, if we treat each foot as a repeated letter where only one out of the two orderings is possible, we get $\text{Number of Permutations} = \frac{4!}{2!2!}=6$. The orderings are listed below:
1. Left sock, right sock, left shoe, right shoe
2. Left sock, right sock, right shoe, left shoe
3. Right sock, left sock, right shoe, left shoe
4. Right sock, left sock, left shoe, right shoe
5. Left sock, left shoe, right sock, right shoe
6. Right sock, right shoe, left sock, left shoe

---

## Challenge
Now imagine Mr. Octopus wakes up one morning to put on all eight of his socks and all eight of his shoes. How many distinct permutations of putting on his socks and shoes are there now? What if he also has to tie his shoes?

---

## Answer to Challenge

With only socks and shoes:
$$\text{Number of Permutations} = \frac{16!}{(2!)^8}\approx 8.17 \times 10^{10}$$

With socks, shoes, and tying:
$$\text{Number of Permutations} = \frac{24!}{(3!)^8}\approx 3.69 \times 10^{17}$$

---

## Summary

Therefore, given any word with $n$ letters with Letter 1 being repeated $r_1$ times, Letter 2 being repeated $r_2$ times, ..., and Letter $k$ being repeated $r_k$ times, we can calculate the number of distinct permutations as:

$$\text{Number of Permutations} = \frac{n!}{r_1! r_2!...r_k!}$$

As seen, an analagous formula can be used for sequences of actions where some subsets of actions must be performed in a particular order.