---
title: Parsing Nunjucks with C# and Pidgin
description: Exploring a powerful "parser combinator" called Pidgin to quickly stand up a parser for (at least an initial subset of) the Nunjucks templating language.
date: 2022-12-25
tags:
  - parser
  - nunjucks
  - c#
  - pidgin
---

<aside>This post is part of the [2022 C# Advent](https://www.csadvent.christmas/), an annual showcase of new C# content on the web. Thanks very much to [Matt Groves](https://crosscuttingconcerns.com/) for creating a space for us to share with the community!</aside>

## I want to embed a template language in a spreadsheet

Yes, yes, I already have [one side project]({{ "/blog/a-new-language-learning-tool" | url }}) going on but since this post is for the C# advent, it's time to quickly pivot to sketching out some ideas for yet another project in the future.

Eventually, I'd like to create a spreadsheet reporting engine - a tool to create spreadsheet reports. **Crucially, in this reporting engine, you'd be able to create report templates that are _themselves_ spreadsheets.** In such a template spreadsheet, you'd embed instructions in some templating language.

It might look a little bit like this:

