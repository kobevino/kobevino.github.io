---
title: "VPC Peering"
date: '2025-08-24'
spoiler: 'Peering Connections'
---

![Peering Connection](./vpc-peering/peering-connection.png)

**VPC Peering** allows two VPCs to communicate with each other.
Since VPCs can be placed in different regions for security, I will demonstrate connecting two VPCs across regions.

## Create Personal VPC

![New VPC](./vpc-peering/new-vpc.png)
1. Create a new VPC to use different IP range.

![Create Subnet](./vpc-peering/create-subnet.png)
![Subnet Setting](./vpc-peering/subnet-setting.png)

2. Configure each subnet.

![Internet Gateway](./vpc-peering/internet-gateway.png)
![Attach VPC](./vpc-peering/attach-to-vpc.png)

3. Create a new internet gateway and attach to VPC.

![Create Route Table](./vpc-peering/create-route-table.png)
![Edit subnet Association](./vpc-peering/edit-subnet-association.png)
![Edit Route](./vpc-peering/edit-route.png)

4. In the end, Create route table and edit subnet association and route.

## Create two EC2 Instances in different regions.

Then, create an EC2 instance in each region, each running a web server.
For one of the instances, ***select the VPC that we created earlier***.

For example)

* Seoul Server Private IPv4 addresses : `10.0.6.38`
* Osaka Server Private IPv4 addresses : `172.31.39.92`

![Ping Server](./vpc-peering/ping-server-01.png)

They can't communicate with each other. Now, I will configure **Peering Connections**.

## Peering Connection

![Create Peering Connection](./vpc-peering/create-peering-connection.png)
![Accept Peeringonnection](./vpc-peering/accept-peering-connection.png)

Choose another VPC to peer with, and then go to Peering Connections in the region where you made the request and accept it.

![Route Table](./vpc-peering/route-table-01.png)
![Route Table](./vpc-peering/route-table-02.png)

Configure the range of private IPv4 addresses to be used in another region.

![Ping Success](./vpc-peering/ping-success.png)

Now, the two servers in different regions can communicate with each other.

## Wrap Up

VPC Peering is a powerful way to connect isolated networks without going through the public internet. If your infrastructure spans multiple VPCs or regions, peering provides a secure and low-latency option for communication.