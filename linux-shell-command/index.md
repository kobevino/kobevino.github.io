---
title: "Linux Shell Command"
date: '2024-08-22'
spoiler: "whoami"
---

When we handle **Docker** or **Infrastructure**, we need to learn how to use lunux shell command.
From now on, I'll introduce some commands we often use in common. Let's get it started.

```sh
$ whoami
```

This shows user id who is logined.

```sh
$ pwd
```

This shows current path.


```sh
$ ls -al
$ ls -al > [FILE]
$ ls -al >> [FILE]
$ head < [FILE]
$ ls -al | grep [PROCESS NAME]
```

* `ls -al` : It shows files included hidden files.
* `ls -al > [FILE]` : It saves the output in a file and it can be overrided.
* `ls -al >> [FILE]` : It adds the output in a file.
* `head < [FILE]` : It shows the content of a file at line 10.
* `ls -al | grep [PROCESS NAME]` : It shows the list, which is included process name.

```sh
$ chmod 777 [FILE]
$ chmod 555 [FILE]
$ chmod 400 [FILE]
$ chmod 700 [FILE]
```

* `777` : All users can read, write and execute a file.
* `555` : All users can read, execute, but they dont' have an authroity to write.
* `400` : The owner can only read and the others don't have any authority.
* `700` : The owner has all authority, but others don't have any authority.

```sh /&/#green
# ex)
$ find / -name `*.py` > list.txt
$ find / -name `*.py` > list.txt &
```

There is a difference between two commands. The difference is **foreground process** and **background process**.

```sh
$ ps aux | grep [PROCESS NAME]
$ kill -9 [PID]
```
`ps aux` : It shows the information related to process.
`kill -9` : Kill the process forcefully.

```sh
$ cp [FILE] [NEW FILE]
$ cp -rf * [FOLDER]
```

`-rf`: It's an option to include subfolder.

```sh
$ ln [FILE] [NEW FILE]
$ ln -s [FILE] [NEW FILE]
```

* `ln` : It's **Hard Link**.
* `ln -s` : It's **Soft Link**. The size of the file, which is connected to soft link, is smaller than the original.

## Wrap Up

If I find something useful, I'll share it with you guys here. Let's call it a day.