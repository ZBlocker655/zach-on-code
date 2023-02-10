---
title: A meeting with myself to gather requirements for my side-project
socialShareTitle: Requirements conversation with myself
description: The techie side of myself and the language learner side get together and work out what to build.
date: 2023-02-08
tags:
  - requirements
---

In my pilot post, I [declared my new StudyPuck side project]({{ '/blog/a-new-language-learning-tool' | url }}) but as I began to think about how it would really work, I started to realize that I was coming at the project with two completely different agendas. On the one hand, I wanted to learn and practice interesting technology, and blog about it. But on the other hand, I actually need to build this tool and have it work well, so I can learn to speak other languages!

Zach the technology professional needs to remember, in other words, that **he has a client!** Zach the language learner needs a tool to get built, and he really needs Zach the professional to take a serious pause before rushing ahead to build StudyPuck, and figure out what it should really do.

## We Zachs need to talk

So I thought: well, I'm writing software in public. I want it to be like a _real_ software engagement. And a good software professional doesn't start the implementation until he's had a chance to sit down with his client and discuss his needs.

It seemed like a whimsical exercise to split myself into two people to talk this over, but once I framed it in this way, the two me's had a surprisingly productive conversation, and generated some real insights.

So without further ado, here's me: having a requirements gathering meeting with... myself.

## So we talked

**Zach, the Software Professional (SP):** Zach, thanks for sitting down with me. I'm really pumped to build you a great tool to help you with your language learning.

**Zach, the Language Learner (LL):** I'm excited we're finally doing this, Zach!

**SP:** So just tell me your problem.

**LL:** I've been studying this one language for a while now - Chinese if you want to know. And I'm making really slow progress.

**SP:** Why's that?

**LL:** I'm stuck in a rut here. I'm studying flashcards every day. I have thousands of them on Anki and with the spaced repetition I'm making progress at learning vocabulary and a good number of those characters. But here's the thing: every time I try to talk to my language partner, I still can barely understand a thing he says.

**SP:** So you feel like you're not making the kind of progress you want to.

**LL:** And I think I know why! I've studied enough about language learning to realize that I'm doing too much of the wrong things and not enough of the right ones. Let me summarize quickly: I should be listening to the language _all_ the time. It should be what I spend most of my study time on!  But because I'm so busy in the rest of my life, and I have limited time and creative thought to spend on this hobby, I find myself just doing the rote things I've prepared for myself, namely, doing my daily flashcards, reading my weekly short story which I'll read aloud to my language partner, and... once in a while take a Duolingo quiz? I get to check off my "Study Chinese" box every day, but I'm not really learning to understand and speak the language.  I should be listening, and listening, and listening - training my ear.

**SP:** So the obvious question would be, then...

**LL:** Why don't I spend my time listening? Right! I know. I've thought about this a lot, and it goes something like: I'm tired, I'm busy. I have limited mental energy to be creative. So when it comes to studying, I have enough juice to do the weekly routine, but when I think about picking something to listen to, I get overwhelmed with the choices I have.  I have squirreled away a ton of YouTube channels and podcasts with Chinese content to listen to.

**SP:** So why not listen to it?

**LL:** I get overwhelmed when it's hard to get myself organized. There's so much to listen to, and some of it's going to be too hard at first, some too easy. I find that even the seemingly simple task of just picking something to listen to makes me procrastinate.

**SP:** So if you could just have another tool to make listening just another part of your study routine that you don't have to think too hard about...

**LL:** Now you're getting it! I want to systematically attack all the content I've set aside, little by little. I want a tiny menu of limited choices presented to me. Then I get to pick one or two things to listen to, spend maybe a half hour on it, and then mark off what I've done, and maybe rank it somehow.  And then, I want to forget about it.

**SP:** I mean, you don't really _need_ a purpose-built tool to do this, do you? You could just bullet list your YouTube channels and podcasts, pick one, find a video or podcast episode, listen to it, then write it down somewhere that you did it, maintain a list to keep track of what you've done... ok... I'm getting it.

**LL:** It's starting to sound like a lot of work, right? A whole project in itself.

**SP:** Right. And knowing you, you'll spend lots of time trying to get it organized, and have even less time to do what you really want to do: train your ear on the language.

**LL:** Bingo. I will fiddle with details and spend too much time on it. I hate a mess.

**SP:** So you want to build a machine to do all the annoying, boring work of organizing this. It should pull out things for you to study, ask you for some super quick feedback.  You want to spend as little time as possible with the actual tool.

**LL:** Yes. I want the tool to help me spend my time on what really matters: learning to speak another language! That's what I love.

**SP:** Fortunately I happen to love building cool software! And since we're really the same financial entity, you can't pay me for this, so we'll call it a barter exchange.

**LL:** True. Payment would be purely performative. Let's get to it.

**SP:** We've agreed the tool will be called StudyPuck. Because Robin Goodfellow, or Puck, is the obedient servant who will run at top speed through the Internet and collect all the stuff you want, and bring it to you.

**LL:** A little at a time. And Puck is fairly annoying and abrasive so I don't want him to hang around for long.

**SP:** Right! The name works for the purpose. So how will you "tell" StudyPuck what to go get?

**LL:** Let's keep it simple. I want to tell StudyPuck all the podcast shows and YouTube channels that have the Chinese content I want. StudyPuck will go collect every single video and podcast episode from those sources. He will hold on to it all. He'll also keep checking back for new content.  Then, when I want it, he'll hand-select, oh, no more than five or six choices for me to look at.

**SP:** You get a tiny menu of choices.

**LL:** Tiny menu.  And I pick one thing at a time. For each item I pick, StudyPuck presents me a link to click. I click on it - I listen to the content. Then, to close the loop, I go back to StudyPuck and give some quick feedback about it.

**SP:** And then what?

**LL:** Then, whatever item I picked disappears from the menu for a while. And may come back again later, if my feedback specifies that it should.

**SP:** Your feedback is going to determine if and when you see that content show up in your menu again. And are you expecting to watch all five or six things that StudyPuck presents you?

**LL:** No! I'll do just what I have time for.  Plus some of the items will be very short, like five minute videos and some might be an hour. I'm going to do only what I have time for.

**SP:** What if you don't finish the whole hour and you're not ready to give feedback?

**LL:** Oh good point. Ok, I need a way to put something "In Progress" - maybe when I open it up to a detail page, StudyPuck assumes I've gone off to watch it. If I log off without giving feedback, StudyPuck needs to keep bugging me about it until I finally give feedback.

I _also_ want to be able to tell StudyPuck "No, I don't want to watch this one right now. Make it go away for a while."

**SP:** You need to be able to say "no" to StudyPuck.

**LL:** That little dude is _my_ servant and I don't want to feel constrained by any of his suggestions. He works for _me!_

**SP:** So you might just want to say "These five or six things: they displease me!"

**LL:** Take zem away!

**SP:** And bring me five more!

**LL:** And make it snappy!

**SP:** Ok!  Is StudyPuck going to be guided by any basic principles when selecting content for you?

**LL:** This is the big question - how is StudyPuck going to choose what's next? So the first thing I want to say is: I don't really know the best way to pick things right now. If I feel overwhelmed by the prospect of doing such selection manually, I also feel overwhelmed about choosing how to tell StudyPuck to do it.  _But_ I do feel that once I've actually tried this out for a while, I might get some better ideas.

**SP:** Ok, let's keep it pretty simple for now. No pressure. How would StudyPuck (and let's assume he's not too bright at first) pick things for you?

**LL:** The dimwitted StudyPuck will, at a minimum, favor picking things in chronological order. Like, if it's a podcast, he'll start with episode 1 and work his way steadily forward. That's roughly what I'd do manually, so I'd like StudyPuck to do it. But there's really two kinds of content, aren't there?  First, there's new stuff I haven't seen yet.  Then, there's the repeat stuff that I want to see again.  The new stuff is simple: chronological order.  For the repeat stuff, there's going to be ....  some algorithm. Some cool way of figuring out what to bring back when.

**SP:** Which you reserve the right to improve upon later.

**LL:** Yes. For now, the simplest thing I can think of goes something like this: in the feedback I give to StudyPuck, I might say any of the following: "This was interesting. I don't ever need to hear it again." Or "Really useful - I want to see it again in a couple weeks." Or "Much too hard. I couldn't understand a word. Bring it back in six months." Assuming I'll steadily improve my ear in the meantime.

**SP:** This doesn't sound complicated. You'll specify exactly when you want to see it again. So the item goes dormant, anywhere from a week all the way up to forever never again.

**LL:** Don't make me pick an interval out of thin air. Give me a few simple choices.

**SP:** A proportional scale, something like "Next week. Two weeks. Two months. Six months. One year. Never again."

**LL:** That already feels like too many choices!  How about this? I get to say whether I thought something was too easy, too hard, or just right. I don't want to have to think about the feedback. I'm being serious when I say that I want minimal mental load spent on StudyPuck.

**SP:** Ok, then we let StudyPuck decide when to bring it back?

**LL:** Maybe that's best, at least for version 1.0.

**SP:** Here's a tough one: with all these YouTube channels, how is StudyPuck going to decide which ones to pick from when selecting your mini-menu of the day?

**LL:** First thought: chronological order across _all_ content. Like, if video from channel A was created before podcast from Show B, then the video comes first. Except I can think of a way that's going to annoy me.

**SP:**....

**LL:** I'm inevitably going to start preferring content from some channels and podcast shows over others. But if StudyPuck doesn't _understand_ my preferences, he's going to irk me by presenting an even distribution of all the channels, even the less helpful ones. He'll make me wait to see what I really would rather see, or I'll feel compelled to keep clicking the "No thanks. Deal me again." button until I see something I'm interested in.  It would be great if I rarely ever had to ask for all new items.

**SP:** Ok, so when the StudyPuck selects stuff, even new stuff, he should have acquired _some_ idea of which sources you like better than others, and show you those more often.

**LL:** But not exclusively at the expense of everything else. I want a little randomness thrown in.

**SP:** There are two ways I can think of to handle this.  One, you are explicit about all your choices. You go look at the list of your YouTube and podcast sources. You force-rank everything, or maybe you apply a rating to each one of how much you like it. You can go back and adjust those ratings any time. Then StudyPuck will just obey your ratings and select new content in strict proportion to what you like best.

**LL:** Sounds like work! Bleah!!!  What's the other option?

**SP:** The other option is: StudyPuck uses the feedback you give him to gradually build up an idea of what you like, and he responds accordingly by giving you more of what you like.

**LL:** This sounds like some of the fancy big tech algorithms out there, like how YouTube gives you more links that it thinks you prefer. Do you know how those algorithms work?

**SP:** Some kind of machine learning no doubt. That's definitely not something we'll do in version 1.0.

**LL:** _(chuckle)_ I wouldn't have thought!

**SP:** Right. But what we will do is keep track of all the choices you ever make, so we'll have the data to feed into some _future_ machine learning model. For now, we can use simple heuristic methods looking at your history of choices to pick a rough idea of the favorites. And who knows, that just might be good enough!

**LL:** So I think you have the basic idea, right?

**SP:** I do indeed. Let me ruminate and come back with some mockups for you.

**LL:** And make it snappy!

**SP:** Dude. I am building you the StudyPuck. But I am not your StudyPuck to belittle!

**LL:** Sorry, got confused there.
