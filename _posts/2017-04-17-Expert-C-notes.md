---
layout: post
title: Expert C notes
---

Ch1:

Ch2:

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
## sins of ommission

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



## sins of mission
