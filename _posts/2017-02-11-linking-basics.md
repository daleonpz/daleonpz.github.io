---
layout: post
title: Linking basics
---

In my journey to master the most obscure and secrets arts of computer systems, I started by master the basics. 
One thing I have never worried to learn properly was *linking*, since most of the projects I worked on had everything set, `Makefile` was already written.
But the time to grow up becomes.
Let's start then.a
I took the examples from 
[Computer Systems: A Programmer's Perspective ](https://www.amazon.com/Computer-Systems-Programmers-Perspective-3rd/dp/013409266X/ref=sr_1_1?ie=UTF8&qid=1490718500&sr=8-1&keywords=computer+systems)


# ELF object file

The ELF file contains a _header_ that give us information that will help the linker to parse and interpret the object file. 
Here are some information of an ELF header, I used the `readelf` command.

```
ELF Header:
  Class:                    ELF64
  Data:                     2's complement, little endian
  Version                   1 (current)
  OS/ABI:                   UNIX - System V
  Type:                     EXEC (Executable file)
  Machine                   Advanced Micro Devices X86-64
  Entry point address:      0x4003b0
  Start of program headers: 64 (bytes into file)
  Start of section headers: 6568 (bytes into file)
  Size of this header:      64 (bytes)
  Size of program headers:  56 (bytes)
  Number of program headers:9
  Size of section headers:  64 (bytes)
  Number of section headers:28
```

The basic structure of an ELF file is as follow:

![ELF object file](/images/posts/linking-basics-1.png)
*Image obtained from this [site](https://people.cs.pitt.edu/~xianeizhang/notes/Linking.html)*

* `.text` is the machine code of the compiled program
* `.rodata` read-only data, such as `const char`
* `.data`  global variables that have been initialized
* `.bss`  uninitialized global variables
* `.symtab` table symbol with information about functions and global variables that are defined and referenced in the program
* `.debug` debugging symbol table, only generated when compiling with `-g`
* `.line` mapping between actual C code and compiled code, only generated when compiling with `-g`
* `.strtab` a string table for symbol in `.symtab` and `.debug`

Let's analyze the following example

```c
#include<stdio.h>

int A = 5;
const char a[] = "hallo danke"; 

int main()
{
	printf("hello world\n"); 
	printf("%i\n",A);  
        printf("%s\n",a);  
	return 0;
}

```
I compiled it with `gcc -c` since I just wanted to focus on the code itself.
Let's check the `.rodata` and see what it contains, I used `objdump -D ` to get the assembly code of that section.

```nasm
Disassembly of section .rodata:

0000000000000000 <a>:
   0:	68 61 6c 6c 6f  h a l l o
   5:	20 64 61 6e       d a n
   9:	6b 65 00 68     k e 0 h
   d:	65 6c           e l
   f:	6c              l
  10:	6f              o
  11:	20 77 6f          w o
  14:	72 6c           r l
  16:	64              d
  17:	00              0 
  18:	25              %
  19:	69              i
  1a:	0a 00           ⤶ 0

```

In case it is no obvious, I added the letters using the ASCII code. As I mentioned before `.rodata` only contains read only data. 

Now let's focus on the `.symtab`. 
To do so, let's compile the code without the `-c` option.
I used `objdump -x` to visualize the `.symtab`. Some  entries of the `.symtab` are shown below.

```  
400546 g     F .text	0000036      main
400608 g     O .rodata	000000c      a
000000       F *UND*	0000000      printf@@GLIBC_2.2.5
```

Description of the columns from left to right.
* virtual memory offset 
* unit size, in the case of `main` and `a` is g _giant words_ (8 bytes)
* type, `F` and `O` stand for _function_ and _object_ respectively
* section where it belongs, for example `main` belongs to `.text`
* size in hex
* name, in case of `printf`, it is also mentioned the shared library where it is defined.

So these are the basics of the ELF files. If want to read more just google it or read the man pages of the commands I used, I am not kidding. You can also read the chapter 7 of book it mentioned above.





# Symbol Resolution



```c
// foo5_1.c
#include <stdio.h>

int x = 15213;
int y = 15212;

int main(){
	printf("x = %i \t y = %i \n", 
			x,y);
	return 0;
}
```

```c
x = 15213 	 y = 15212
```

```c
// bar5.c
double x;

void f(){
	x = -0.0;
}
```

```c
\\ foo5_2.c
#include <stdio.h>

void f(void);

int x = 15213;
int y = 15212;

int main(){
	f();
	/*
	 * the value of x=-0.0 will overwrite the value of 
	 * x and y since in bar5.c x is declared as double
	 * in foo5_2.c
	 *  | X X X X | 4 bytes
	 *  | Y Y Y Y | 4 bytes
	 *
	 * but in bar5.c
	 *  | X X X X X X X X | 8 bytes
	 *  since X is negative and 0
	 *  | 8 0 0 0 0 0 0 0 |
	 *  | Y Y Y Y X X X X |
	 * */
	printf("x = 0x%i \t y = 0x%i \n", 
			x,y);
	return 0;
}
```

```c
x = 0x0 	 y = 0x-2147483648 
```


## main

```c
\\bar6.c
#include <stdio.h>

char main;

void p2(){
	printf("0x%x\n",&p2);
	printf("0x%x\n",p2);
	printf("0x%x\n",*(&main+1));
	/* when printing main it prints the opcode of the first instruction
	 * push %rbp -> 0x55 ,note that main is called from _start 
	 * maybe that's why main contains the first opcode instead of the address
	 * but in case of p2, it print the address of the first 
	 * assembler instruction
	 * */
	printf("0x%x\n",main);
}
```

```c
\\foo6.c
void p2(void);

int main(){
	p2();
	return 0;
}
```

```c
0x400506
0x400506
0x48
0x55
```


