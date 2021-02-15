---
date: "2021-02-08"
external_link: ""
image:
  caption: 
  focal_point: Smart
links:
slides: 
summary: "Using social network graphs somewhere where it's not belong"
tags:
- SUM
- Usability Analytics
- UMUX-Lite
- Kano
title: SNA in Cardsorting
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---

Card-sorting is a pretty cool method. It’s popular as a tool to generate clean and easily understandable information architecture in the product.
But, there is one little aspect, which is bothering me. It is about the analysis of the data you got with this method. So I thought it would be awesome to make the process of analyzing card sorting results a little easier.

### What's the problem?

Each time I use card-sorting, I'm getting headaches trying to parse the resulting table.

(It's really hard to comprehend, especially if you are new to it)

Maybe there is a more comprehensible way to visualize all relationships between the cards? Yes, there is, and it's called the network graph.

What is social network analysis?

Social network analysis is a process of investigating social structures, using network and graph theory. In other words, it's a method of sociological research using network graphs.

(That's how the social graph looks like)

Each dot is a node (it could be one person or a group) each line is a relation between nodes. As incoming data, this visualization uses the adjacency table.

(Here you go, just like the table in the card-sorting result)

### So, let's try.

For my example, I've done a trial study (open card sorting) for one of our products at work. Without any resources to recruit respondents, I bought a pack of chocolate and offered it to every one of my colleagues for participating as a respondent.

(The sigh «Participate in test and get some chocolate»)

So after getting all of my data, I brought it to R Studio (IDE for R language), where the magic started.

(Raw data looked like this - excel table with two columns - «Group name» and «Card name»)

After several operations, I made the adjacency table, where we see, how many times any of the cards were in the same group as any other card.

(It is pretty easy with R)

So, using this adjacency table, we can plot our network graph. And here we see all groups, they just formulated themselves. And now, this plot could be easily comprehended by anyone.

(What a miracle!)

### Conclusion

With some of the R knowledge, we can easily make beautiful visualization of our card-sorting results. It's easy to comprehend and you can show it in your decks just for visual pleasure.
