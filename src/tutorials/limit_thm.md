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

Hence

$$\exists \, N \in \mathbb{N} \, \text{s.t.} \, |a_n-l| < \frac{\epsilon}{c} \, \forall n \ge N$$
, and hence
$$\exists \, N \in \mathbb{N} \, \text{s.t.} \, |c||a_n-l| < \epsilon \, \forall n \ge N$$
and we can conclude that the result is true. It remains to show the result for the case $c=-1$ (why?)
But again it is very obvious since $|-a_n-(-1)l|=|-a_n+l|=|l-a_n|=|a_n-l|$.

2. Given any $\epsilon > 0$, we have
$$ \exists \, N_1 \in \mathbb{N} \, \text{s.t.} \, |a_n-l| < \frac{\epsilon}{2} \, \forall n \ge N_1$$
and
$$ \exists \, N_2 \in \mathbb{N} \, \text{s.t.} \, |b_n-k| < \frac{\epsilon}{2} \, \forall n \ge N_2$$

Now let $N=\max{\{N_1, N_2\}}$. Then we have
$$|(a_n+b_n)-(l+k)| = |(a_n-l)+(b_n-k)| \le |a_n-l|+|b_n-k| < \frac{\epsilon}{2} + \frac{\epsilon}{2} < \epsilon \, \forall n > N$$

3. We first show that $a_n$ is bounded. By putting $\epsilon = 1$ we have

$$ \exists N_1 \in \mathbb{N} \, \text{s.t.} \, |a_n-l| < 1 \forall n \ge N_1 $$

Applying the reverse triangle inequality we have

$$ \exists N_1 \in \mathbb{N} \, \text{s.t.} \, |a_n|-|l| \le |a_n-l| < 1 \, \forall n \ge N_1 $$

and hence

$$ \exists N_1 \in \mathbb{N} \, \text{s.t.} \, |a_n| \le 1 + |l| \, \forall n \ge N_1 $$

Now consider

$$ |a_nb_n - lk| = |a_nb_n - a_nk + a_nk - lk| \le |a_n||b_n - k| + |k||a_n - l| $$

Given $\epsilon > 0$,

$$\exists N_2 \in \mathbb{N} \, \text{s.t.} |a_n-l| < \frac{\epsilon}{2(|k| + 1)} \, \forall n \ge N_2 $$
and
$$\exists N_3 \in \mathbb{N} \, \text{s.t.} |b_n-k| < \frac{\epsilon}{2(|l| + 1)} \, \forall n \ge N_3 $$

Now let $N = \max\{N_1, N_2, N_3\}$. We have

$$|a_nb_n-lk| \le (1+|l|)\frac{\epsilon}{2(1+|l|)} + |k|\frac{\epsilon}{2(|k|+1)} < \frac{\epsilon}{2} + \frac{\epsilon}{2} < \epsilon \, \forall n \ge N$$

4. The trick is to show that $a_n$ is bounded below.

By letting $\epsilon_0 = \frac{|l|}{2}$ (here $\epsilon_0 > 0$), we have

$$ \exists N_1 \in \mathbb{N} \, \text{s.t.} \, |a_n-l| < \frac{|l|}{2} \, \forall n \ge N_1$$

Applying triangle inequality we have

$$ |l| - |a_n| \le |a_n - l| < \frac{|l|}{2} \, \forall n \ge N_1 $$

and hence

$$ |a_n| \le |l| - \frac{|l|}{2} = \frac{|l|}{2} \, \forall n \ge N_1 $$

Also, by definition,

$$ \exists N_2 \in \mathbb{N} \, \text{s.t.} \, |a_n-l| < \frac{\epsilon{|l|}^2}{2} \, \forall n \ge N_2 $$

Hence by letting $N = \max\{N_1, N_2\}$,
$$ |{\frac{1}{a_n}-\frac{1}{l}}| = \frac{|l-a_n|}{la_n} = \frac{1}{|l|}\frac{1}{a_n}|a_n-l| < \frac{1}{|l|}\frac{2}{|l|}\frac{\epsilon{|l|}^2}{2} = \epsilon \, \forall n \ge N$$

5. Given $\epsilon > 0$, we have

$$ \exists N \in \mathbb{N} \, \text{s.t.} \, |{|a_n|-|l|}| \le |a_n-l| < \epsilon \, \forall n \ge N $$
