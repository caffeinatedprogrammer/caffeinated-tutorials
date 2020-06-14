# Limits

This is a theoretical tutorial about limits.
We assume that you are familiar with notations such as $\forall$ and $\exists$.

## Intuitions

We want to define some abstract concepts that we use often:

- A sequence of number approaches a value, getting closer and closer to it at the tail
- A sequence of number gets bigger and bigger, and eventually it is bigger than everything

First, it does not suffice to say that a sequence of number gets closer and closer to a number at the tail part. It has to get *sufficiently* close.

As an example, the sequence $1, 0.51, 0.501, 0.5001, ...$ get closer and close to $0$ (isn't it?), but we won't say that it approaches to $0$ eventually. $0.5$ is a better candidate.

The difference lies in the fact that $0.5001$ is closer to $0$ when compared to $0.51$, but it is not sufficiently close to $0$. In particular, if we only give an error allowance of $0.1$, indeed $0.501$ does not fall into our allowed region $(-0.1, 0.1)$.

Another example is $1, 0.5, 0.25, 0.125, 0.0625, ..., 2^{-n}, ...$. Indeed it has a trend to get closer and closer to $0$, and indeed it gets sufficiently close to $0$ at the tail. Given a very small error allowance, can you find a term that satisfies the allowance?

## Definitions

First, we want to define the notion *sequence*.

A sequence of real numbers, say $a$, is a function mapping from $\mathbb{N}$ to $\mathbb{R}$. We usually write $a_n$ instead of $a(n)$ to denote the value.

We denote the entire sequence ${\{a_n\}}_{n=1}^{\infty}$, or just $\{a_n\}$. Some people also use round brackets.

As an example, suppose $a_n=\frac{1}{n}$. Then $a_3=\frac{1}{3}$ and $a_{10}=\frac{1}{10}$.

## Definitions

Suppose ${\{a_n\}}_{n=1}^{\infty}$ is a sequence of real numbers.

We say it converges to $l$ if

$$\forall \epsilon > 0, \exists N \in \mathbb{N} \, \text{s.t.} \, |a_n - l| < \epsilon \,\forall n \ge N$$

It is like saying that if $n$ is very large, say, larger than $N$, then $a_n$ will be very close to $l$.

You may wonder why can't we define limit directly. The reason is that we do not know whether such an $l$ is unique. If it is, then indeed we can give it a symbol.

## Lemma
The following are equivalent
- $a = 0$
- $\forall \epsilon > 0, \, |a| < \epsilon$

## Proof
(=>)

Trivial

(<=)

Suppose not. Then $a \ne 0$. Then $|a| > 0$. Let $\epsilon = \frac{|a|}{2}$. Then $\epsilon > 0$. It follows by the assumption that $|a| < \frac{|a|}{2}$.

This is a contradiction since $|a|>0$, and after cancelling $|a|$, the inequality direction does not change.

## Theorem
Suppose $a_n$ converges to $l$ and $k$, then $l=k$.

## Proof
By definition, given any $\epsilon > 0$, we have
- $\exists N_1 \in \mathbb{N}$ s.t. $|a_n-l|<\frac{\epsilon}{2} \, \forall n \ge N_1$
- $\exists N_2 \in \mathbb{N}$ s.t. $|a_n-k|<\frac{\epsilon}{2} \, \forall n \ge N_2$

Now let $N=\max{\{N_1, N_2\}}$. We have
- $|a_n-l|+|a_n-k|<\epsilon \, \forall n > N$

By triangle inequality we have
- $|l-k| \le |l-a_n|+|a_n-k| = |a_n-l|+|a_n-k| < \epsilon \, \forall n \ge N$

Be lemma we have $l=k$.

## Remark
Now, we can give a notation to the limit. We write

$$\lim_{n} a_n = l$$

or

$$\lim_{n \to \infty} a_n = l$$

as expected.