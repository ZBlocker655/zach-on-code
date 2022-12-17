---
title: A new language learning tool
description: Kicking off my tech blog with a side project to build myself a tool for studying languages and learning new tech at the same time!
date: 2022-12-17
tags:
  - language learning
  - serverless
  - architecture
---

## Time for a new side project

Like many full-time software developers, I have a hard time putting my tools down at the end of the workday. I just want to keep building!

I've got another hobby besides code: **learning languages!** I find that I'm missing a specific tool to help me stay organized. So I'm going to build that tool, and while I'm at it, scratch an itch to learn some new technologies and improve existing skills.

To top it off, I decided to do all this building and learning [in public](https://www.swyx.io/learn-in-public/). Thanks to [swyx](https://www.swyx.io/) for inspiring me to do this.

## Problem statement

The rest of this post is going to read like an informal requirements document. I'm going to describe what my problem is, and how I'm going to solve it with the software that I'll write.

### Lots of free resources are out there...

For any language learner, there are a ton of free resources out there to hear your language of study being spoken. It's important to [listen all of the time](https://www.youtube.com/watch?v=Iici0D8yiRc) to acquire your language, and I've got loads of links to YouTube channels, podcasts, and other stuff so I can listen at my level and get all the practice I can.

### ... but there's so much, I'm a little overwhelmed

There are so many videos and podcasts to listen to, I'm having trouble keeping track of:

- what I've already heard
- what I want to hear next
- which channels or shows I find most helpful
- which ones might be a little too hard now but I want to bookmark for later

I need a way to keep it all straight!

## I need an assistant

I need an executive assistant to go and get all the content I want to listen to, suggest to me four or five things at a time, remember what I've heard (and how much I liked it), keep track of what I might want to hear again, or what I'm not quite ready for now but might be in a month, and generally upload all of it out of my brain (which is already too crowded!)

But executive assistants are expensive, so I'll build myself a free one!

### The StudyPuck

Not the hockey kind of "puck", though. In Shakespeare's "Midsummer Night's Dream", the fairy king Oberon has a high-energy servant named Puck who spends the whole play running back and forth and doing jobs for him.

> PUCK: I'll put a girdle round the earth in forty minutes!

Instead of dispensing sketchy love potions, my "Study Puck" will fetch me things to listen to. He'll receive feedback and advice and bring more targeted material the next time. He'll keep track of it all so I don't have to worry about it.

## Is there already a tool out there for this?

I've considered a few other tools out there that might give me this capability, and so far haven't found exactly what I need.

### YouTube?

YouTube's algorithms do keep track of what you've watched and suggest more of the same content. But:

- I can't filter the suggestions down to what I care about.
- I can't organize it according to learning goals.
- I can't add any metadata about why I liked or didn't like something and when I might want to see it again.
- I can't use it to keep track of non-YouTube resources, such as podcast episodes.

### All-inclusive video aggregators?

Products like Zero to Hero _do_ aggregate and present lots of videos in languages I want to learn. But:

- These aggregators are often no less overwhelming than just doing it myself.
- They cost money and there's so much free stuff out there, especially if you're willing to build tools to help.
- They don't (that I can see) have the kinds of tools I want to track and direct my learning.

### Flashcards?

I use [Anki](https://apps.ankiweb.net/) to keep track of flashcards and I love its spaced repetition algorithms. But:

- Spaced repetition flashcards are not the same as spaced repetition videos and podcasts. I would not, for example, want to listen to the same podcast the next day, and then three days later, etc.
- I want to rank videos according to helpfulness; this is not something I look for in a flashcard app.
- Anki isn't going to be a helpful executive assistant and fetch my content for me; it depends on me to import decks of flashcards myself.

### And anyway, I _want_ to build something!

Part of my motivation here is I want to build something with code and learn some tech! Enough said.

## Architecture

So how to build StudyPuck? I want some very specific things here.

### Free or vanishingly cheap

For this side project, I don't want to spend much money. Or any money if I can help it. There are generous free tier platforms for developers out there, and my goal is to stay well within the free tier, and run my app indefinitely.

### Simple to manage

I don't want a lot of management overhead here, so:

- Everything has to be serverless: database, app platform, you name it.
- Fully automated deployment pipeline: I'm aiming for fully-automated continuous deployment, including a sandbox test environment.

### Build it out of stuff I want to learn

Finally, the side benefit of tech learning goals. Here's what I hope to learn more about while building StudyPuck:

#### Front-end vanilla web development

For the last several years I've focused on back-end development. While I was gone, something amazing happened to web development: [it got really good!](https://css-tricks.com/the-web-is-good-now/) I need a vehicle to experiment with all the powerful improvements made to CSS and JavaScript.

#### A modern web framework

I'm looking at [Svelte](https://svelte.dev/). While I'm bringing myself up to date on modern web development, extras like a virtual DOM [are an unneeded overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead).

#### A free, serverless database

I've always wanted to do a project with DynamoDB - I don't know any other serverless database with this generous a free tier offering.

#### Terraform

I'm looking at having parts of this app on AWS but possibly Cloudflare too, so a non-vendor-specific infrastructure-as-code tool is called for. I'll use Terraform to define the app's infrastructure and resources.

#### GitHub Actions

I've worked with many DevOps tools but never tried GitHub's "GitOps" offering. This looks like the simplest way to have a low-management pipeline.

#### Dev containers

I've never tried using Visual Studio Code to develop in local container environments and have been looking for an excuse to do so.

## This is going to take a while

Lots to do and it will take a while (since I don't get a lot of time for side projects!) But I'm looking forward to it.
