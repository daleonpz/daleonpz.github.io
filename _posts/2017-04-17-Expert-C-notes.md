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


## sins of ommission

## sins of mission
