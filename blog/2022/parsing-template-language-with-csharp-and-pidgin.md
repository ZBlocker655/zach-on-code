---
title: Parsing a template language with C# and Pidgin
description: Exploring a powerful "parser combinator" called Pidgin to quickly stand up a parser for (at least an initial subset of) a simple templating language.
date: 2022-12-25
tags:
  - parser
  - c#
  - pidgin
---

_This post is part of the [2022 C# Advent](https://www.csadvent.christmas/), an annual showcase of new C# content on the web. Thanks very much to [Matt Groves](https://crosscuttingconcerns.com/) for creating a space for us to share with the community!_

## Let's build a parser for a template language

Writing code to parse a language may not be quite as extraordinary as [writing a compiler](http://steve-yegge.blogspot.com/2007/06/rich-programmer-food.html) but it's still a very handy capability!

In this post, I'm going to begin writing a parser for a simple templating language that I plan to use in a future project. Eventually it may look vaguely like [Nunjucks](https://mozilla.github.io/nunjucks/templating.html).

I'll set up a quick C# solution, and some logic to parse simple expressions of the templating language. Specifically, I want to read in some arbitrary templating code and build a parse tree. A parse tree represents in memory the logical structure of the templating code. Then, my program can do... whatever it was going to _do_ with that templating code in the first place!

## The templating language

The proto version of our templating language will be quite simple. Here's a sample statement:

```nunjucks
{%- raw %}
{{ me.addresses["home"].city }}
{% endraw %}
```

The double curly braces indicate the opening of "template space". Inside this space we can have an identifier. The identifier can be as simple as one variable name like `me` or `myValue`, or it can use the dot `.` notation to indicate a property relationship (for example: `me.addresses` indicates that `addresses` is a property of `me`.)

We can also use the square brackets after a property name to indicate that a certain property is actually an index of other values. In our case above, `addresses` represents a collection of addresses that are indexed by name. So the above example could be understood as "My _home_ address's city".

### The parse tree

Parsing the above sample would yield a parse tree like this:

![Parse tree]({{ '/img/parsing-template-language-with-csharp-and-pidgin/parseTree.png' | url }})
