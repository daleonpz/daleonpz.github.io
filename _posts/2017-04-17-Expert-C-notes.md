---
layout: post
title: Expert C notes
---

# Ch1:

# Ch2:

## sins of commission

things that the language does, that it shouldn't do

* By the way, since the keyword const doesn't really mean constant in C,


```
const int two=2;

switch (i) {
    /*case const-expr: statements*/
    case 1: printf("case 1 \n");
    case two: printf("case 2 \n");
    **error** ^^^ integral constant expression expected
    case 3: printf("case 3 \n");
    default: ; }
```

* Do not forget to `break` if you don't want to _fall throught_ other `case`.

* "interpositioning—I should learn more about that.Interpositioning is the practice of supplanting a library function by a user-written function of the same
name
With the benefit of practical experience, default global visibility has been conclusively and repeatedly
demonstrated to be a mistake. Software objects should have the most limited scope by default.
Programmers should explicitly take action when they intend to give something global scope.

## sins of mission
covers things in C that just seem misdirected, or a bad fit to the
language
* Overloading issues
sizeof is an operator, not a function
```c
#include <stdio.h>

int main(){
    float p[] = {10.0, 5.0};
            
    int n = sizeof*p;
    
    puts("float p[] = {x, y}");
       
    printf("sizeof*p = %d\n",n); 

    n = sizeof(p);
    printf("sizeof(p) = %d\n",n); 
    
    n = sizeof(int)*n;
    printf("sizeof (int)*n = %d\n",n);
    
    n = sizeof((short)*p);
    printf("sizeof((short)*p) = %d\n",n);
}
```

```c
float p[] = {x, y}
sizeof*p = 4
sizeof(p) = 8
sizeof (int)*n = 32
sizeof((short)*p) = 2
```

buffer overflow 


## sins of ommission
covers things that the language doesn't do that it should.

### spaces

error
```
z = y+++++x;

 lvalue required as increment operand
i+++++j
   ^~

```

that `/*y` is considered as comment opener.
```
ratio = *x/*y;
```

To last post: avoid when possible this kind of things

```
int *foo(){
    int *x;

    x = (int*) malloc(10);
    
    return x;
}
```
# Chapter 3
Declarations

The Precedence Rule for Understanding C Declarations
* Declarations are read by starting with the name and then reading in precedence order.
* The precedence, from high to low, is:
** Parentheses grouping together parts of a declaration
** the postfix operators: parentheses () indicating a function, and square brackets [] indicating an array.
** the prefix operator: the asterisk denoting "pointer to".
* C If a const and/or volatile keyword is next to a type specifier (e.g. int, long , etc.) it applies to the type specifier. Otherwise the const and/or volatile keyword applies to the pointer asterisk on its immediate left.

From "Expert C Programming: Deep C secrets" by Peter van der Linden

```
/* pointer to const int */
const int * grape;
int const * grape;

/* const pointer to int */
int * const grape_jelly;

/* array of pointers to int*/
int *p[3]

/* pointer to a int array */
int (*p)[3]

/* pointer to a function */
int (*p)()

/* fut in a function that returns
a pointer to function that returns an int */
int (* fun())()

/*  next is a pointer to function
that returns a pointer to const pointer to char  */
char* const *(*next)();

/* x is a array of pointers to a function
that returns a pointer to char array  */
char (*(*x[3])())[5]
```

