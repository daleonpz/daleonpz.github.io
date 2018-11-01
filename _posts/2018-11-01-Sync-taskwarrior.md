---
layout: post
title: Sync Taskwarrior with Dropbox
category: programming
---

I found this tool called [Task Warrior](https://taskwarrior.org/), which I think is pretty impressive. 
I have been using that for a while,  and now I wanted to sync my phone, and my two laptops.  By the way, I use Manjaro with XFCE.


- First install Dropbox 

```sh
$ yaourt -S dropbox
```

A better option, in my opinion,  would be a GitHub private repo, because it's a lightweight solution, secure enough, it has version control and have no space limitation (I won't use more than a few kilobytes, but still). But I don't have money yet for that. 

- Move tasks information to Dropbox

```sh
$ cd ~/Dropbox/
$ mkdir -p task
$ cd task/
$ cp -r ~/.task/  ./
```

- Change the path of the data location in `~/.taskrc` 

```sh
data.location=~/Dropbox/task
``` 

The synchronization between laptops is done, but I'm still thinking a efficient way to do it with my phone. So far I can only read the task from Dropbox, which is not that useful. 

 Anyway, here is how I read from Dropbox. First I had to extract from the file `pending.data` the data, I think, is relevant: Project and Task. In order to do so, I made a basic script `format_tasks.sh`

```bash
#!/bin/bash

cat pending.data  | sed  -r 's/.*description:"(.*)" entry.*project:"(.*)" status.*/\2: \1/g;' | sort > Pending.txt
```

- The output is as follows

```sh
$ cat Pending.txt 
ResProject: table of contents
VuC: Exercise Example Kubernetes
```




 
