---
title: "Create EC2 Instance"
date: '2024-08-18'
spoiler: 'ssh -i "aws-kobe.pem" ec2-user@my-elastic-ip'
---

I'll summarize the process to create EC2 instance.

## Launch an instance

![Launch Instance](./create-ec2-instance/launch-instance.png)

First, let's create an instance.
Click the button in the image above and then we have to handle some options to launch an instance.
Even though there are some complicated options, I'll tackle the things I need.

![Name and Tags](./create-ec2-instance/name-and-tags.png)

Input a name of the instance.

![Key Pairs](./create-ec2-instance/key-pair.png)

AWS recommends we should use key pair to securely connect to your instance.

![Network Setting](./create-ec2-instance/network-setting.png)

Don't forget to check two options.

![Running Instance](./create-ec2-instance/running-instance.png)
![Running Instance](./create-ec2-instance/running-instance-2.png)

We created a new instance. But we have an issue with Public IPv4 address. Whenever we stop the instance and start it again, the IP address will be changed.

![Elastic IP](./create-ec2-instance/elastic-ip.png)

![Allocate Elastic IP](./create-ec2-instance/allocate-elastic-ip.png)

As you see, you can see the ip address that changed. Let's connect to the instance.

## Connect to an instance

```sh
$ ssh -i 'your-key-pair.pem' ec2-user@your-elastic-ip-or-public-ipv4-dns
```

You have to locate your pem file to current path.

![Connect instance](./create-ec2-instance/connect-instance.png)

You can connect to your instance. Let's install nginx and start the nginx server.

## Run a Nginx server

```sh
# install nginx
$ sudo yum install nginx
# run nginx
$ sudo systemctl start nginx
```

![Nginx Page](./create-ec2-instance/nginx-page.png)

## Wrap Up

I posted about the process to launch an instance, connect to the instance and run nginx server. I hope it will be helpful for aws newbies.