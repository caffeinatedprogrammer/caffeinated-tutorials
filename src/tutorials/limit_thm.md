# Theorems of limit of sequence

## Theorem
Suppose ${\{a_n\}}$ and ${\{b_n\}}$ are sequences of real numbers.
Suppose $a_n \to l$ and $b_n \to k$. Then
1. If $c \in \mathbb{R}$, then $c(a_n) \to c \cdot l$
2. $a_n+b_n \to l_k$
3. $a_n \cdot a_n \to l \cdot k$
4. $\frac{1}{a_n} \to \frac{1}{l}$, assuming that $l \ne 0$
5. $|a_n| \to |l|$

## Proofs

1. Let $c \in \mathbb{R}$. If $c = 0$, the result is obvious. Otherwise, first assume $c > 0$.

Given any $\epsilon > 0$, we also have $\frac{\epsilon}{c} > 0$.

Hence $\exists \, N \in \mathbb{N}$ s.t. $|a_n-l| < \frac{\epsilon}{c} \, \forall n > N$.
Hence $\exists \, N \in \mathbb{N}$ s.t. $|c||a_n-l| < \epsilon \, \forall n > N$.

Hence the result is true. It remains to show the result for the case $c=-1$ (why?)
But again it is very obvious since $|-a_n-(-1)l|=|-a_n+l|=|l-a_n|=|a_n-l|$.

2. Given any $\epsilon > 0$, we have
- $\exists \, N_1 \in \mathbb{N}$ s.t. $|a_n-l| < \frac{\epsilon}{2} \, \forall n > N_1$
- $\exists \, N_2 \in \mathbb{N}$ s.t. $|b_n-k| < \frac{\epsilon}{2} \, \forall n > N_2$

Now let $N=\max{\{N_1, N_2\}}$. Then we have
$|(a_n+b_n)-(l+k)| = |(a_n-l)+(b_n-k)| \le |a_n-l|+|b_n-k| < \frac{\epsilon}{2} + \frac{\epsilon}{2} < \epsilon \, \forall n > N$
