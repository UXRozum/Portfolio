---
date: "2021-09-27"
external_link: ""
image:
  caption: 
  focal_point: Smart
links: 
slides: 
summary: "Script for quick processing of open card sorting results in R"
tags:
- R
- Open card sorting
- Automation
title: Script for open card sorting
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---

CardSort is an R script designed for processing card sorting data, generating visualizations, and analytical reports. This tool simplifies analysis, allowing UX researchers and designers to quickly and accurately identify user grouping logic.

## Why do you need this script?
* **Time-saving.** Automatic processing of data from card sorting tools like OptimalSort reduces the need for manual analysis.
* **Informative visualization.** The script generates dendrograms, similarity matrices, and other useful charts that help understand user preferences.
* **In-depth analysis.** Identifying grouping patterns and calculating consistency metrics.

## How does CardSort work?
* **Data loading.** The script accepts card sorting data in CSV format.
* **Data processing.** Based on user groupings, similarity matrices are created, and metrics are calculated.
* **Report generation.** The following are generated:
  * Similarity matrix showing the frequency of co-grouping elements.
  * Dendrogram visualizing how users grouped elements.
  * Network graph of relationships between cards.
  * Word clouds for group names.
  
## How to use the script?

A detailed guide on using the script is provided in [this article](uxrozum.com/en/post/cardsorting/). An example of the script in action is in this video:
{{< youtube WQmqlDw_2wE >}}

## Download

You can download this script and test data from my [GitHub](https://github.com/UXRozum/cardsort-en).
