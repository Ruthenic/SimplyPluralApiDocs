---
id: intro
title: Getting Started
sidebar_label: Getting Started
slug: /getting-started/intro
---

Hello and welcome to the API documentation!

## Quick start

We have two servers that you can connect to, Pretesting and Production.

If you want to test out your integration we recommend you use Pretesting as that doesn't affect Production.
If you want to run your integration on your actual account, use Production.

** Production **  
`https://api.apparyllis.com`  
`wss://api.apparyllis.com/v1/socket`  

** Pretesting **  
`https://devapi.apparyllis.com`  
`wss://devapi.apparyllis.com/v1/socket`  

:::info

If you want to use the Pretesting endpoints you will need to make an account on Pretesting and generate an API key for Pretesting. Pretesting is available on [https://devapp.apparyllis.com](https://devapp.apparyllis.com) and on [Discord](/docs/discord.md) in the Pretesting channels.

:::


The most commonly used endpoints for integrations can be found here:

[Members](../api/members)  
[Groups](../api/groups)  
[Custom Fronts](../api/custom-fronts)  
[Front History](../api/front-history)

## Rate Limits

We don't rate limit requests, however if you are going to request updates to data in a frequent interval (more than once per 30 minutes) we would ask that you implement a socket connection. This will allow you to get updates whenever a change to the authenticated user is made.
