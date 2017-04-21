---
layout: post
title: Understanding C declarations 
---

In this journey to learn the most obscure secrets of C, I realized that somehow I could read C declarations but I didn't have a deep understanding of it. 
I didn't have problems with declaration such as `char *p[13]` or `void (*p)(**void)`, but for more complicated declarations such as `char (*(*x[3])())[5]`, I did have a hard time.
And even after I understood what the declaration meant I wasn't very sure. 


In the book [The C programming Language](https://www.amazon.com/Programming-Language-Brian-W-Kernighan/dp/0131103628) section 5.12, the authors explain the grammar of C declaration and show the a simple code to _"Translate C to English"_. 
But the explanation is not straightforward. 
On the other hand, in the book [Expert C programming](https://www.amazon.com/Expert-Programming-Peter-van-Linden/dp/0131774298/ref=sr_1_1?ie=UTF8&qid=1492784910&sr=8-1&keywords=Expert-Programming-Peter-van-Linden), the author shows in chapter 3 an _"algorithm"_ that it is really easy to apply.

I will show you how to read declarations with an example. Let's use `char (*(*x[3])())[5]`.

* *Find the identifier.* 
    In this case is `x`. So **x is a**.
* *Check whether there is a `[` or `(` on the right side.*
    `x[` **x is an array**
* In this case we reach a `[` and there is a `3` before the next `]` on the right. `x[3]`
    **x is an array [3] of**
* There is no `[` or `(` next to `x[3]`. So let's check the left side.  
    `*x[3]`    **x is an array [3] of pointers to**
* `*x[3]` is enclosed in `()`.  
* *Check whether there is a `[` or `(` on the right side of `(*x[3])`.*
    There is a `(` followed by `)`. **x is an array [3] of pointers to function returning**
* Check the left side of `(*x[3])()`. `*(*x[3])()`  **x is an array [3] of pointers to function returning a pointer to**
* `*(*x[3])()`  is enclosed in `()`.
* Check right side of `(*(*x[3])())`. There is a `[5]`.  **x is an array [3] of pointers to function returning a pointer to array [5] of**
* Check left side of  `(*(*x[3])())[5]`. There is a data type `char`.**x is an array [3] of pointers to function returning a pointer to array [5] of type char** 

Here are more examples in which I applied the same algorithm.
   
```c
/* x is a pointer to read-only int */
int const * x;

/* x is a const or read-only pointer to int */
int * const x;

/* p a array [3] of pointers to int*/
int *p[3]

/* p is a pointer to an array [3] of int */
int (*p)[3]

/* p is a pointer to a function returning an int*/
int (*p)()

/* p in a function returning a pointer to function 
returning an int */
int (*p())()

/* x is a pointer to function returning a pointer 
to read-only pointer to char  */
char * const *(*x)();

/* c is an array of pointers to function
that recieve a pointer to pointer to int
and returns a pointer to char */
char *(*c[10])(int **p);
```

By now you should be able to understand any C declaration.

But there is one more step: **implement the algorithm**, a basic version of course, no error checking, no input parameters in functions.



