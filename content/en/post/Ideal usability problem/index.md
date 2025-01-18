---
date: "2024-05-18"
external_link: ""
image:
  caption: 
  focal_point: Smart
links:
slides: 
summary: "Analyzing how to properly describe usability issues and what they are not"
tags:
- Usability Testing
- Usability Issues

title: The Ideal Usability Issue
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---

*There can never be too many articles dedicated to fundamental topics. That’s why I also decided to dig into the well-worn and widely known subject. Today we’ll talk about the canonical definition and description of a usability issue.*

This article deliberately avoids case studies and examples because, right now, it’s especially important to focus on the fundamental principles of usability testing without delving into isolated examples.

Why do I think this is important? Usability testing is a research method with surprisingly few ambiguities. It is very limited and straightforward, but it is precisely in these limitations that its strength lies. The same applies to its results; we can very clearly define what a usability issue is and how to describe it.

However, we often feel that we can use this method to cover more than it’s intended for. Such blurring can strip the method of its strengths and reduce trust in our research.

## Features of Usability Testing as a Method

In usability testing, we have a clearly defined object of study — the interface. Our goals and objectives are also unambiguous — we are looking for usability issues encountered by users and measuring the usability of the product being tested.

Because the object of usability testing is the interface, we can make strong conclusions with a small sample size. We don’t need to worry much about the validity of results, as we’re not studying opinions but the interface itself. We literally see the interface features that lead to problems during the test and understand that they need to be addressed in some way.

By limiting the scope of the research, we gain a unique advantage in qualitative studies. Our conclusions are far less speculative; we have solid, rigorous arguments. This narrow focus allows us to make conclusions with a sample size that would be microscopic for any other study.

Most criticism of usability testing results stems from a lack of understanding of these method features. “Can we really trust these participants? Sure, they say it’s inconvenient, but it’s just two people,” or, “How can we be sure other users will encounter the same issues? Maybe your participants are just not smart.” All of this is meaningless if we understand that usability testing evaluates not users, not even their behavior, but the interface. Mistakes made by participants during the test help us identify interface elements that may cause problems in real-world use and understand why they occur. In usability testing, the participant acts as a tool, helping us evaluate the interface.

However, if we shift the research focus from the interface to the user, problems begin to arise. As a method, usability testing has simple sampling requirements but very limited capacity for studying user opinions and behavior. If we try to study users using this method, our sample size increases, we need to create a 4–8-window structure, and our scenario becomes more complex with added variability. This complicates the analysis, increases our report size, and effectively turns the study into in-depth interviews with elements of usability testing, rather than usability testing itself. This significantly impacts the timelines and costs of the research.

Alternatively, we might not modify the test methodology but attempt to work with participants and results as if conducting in-depth interviews. This approach likely fails to reach data saturation, resulting in shaky foundations for conclusions that are over-extrapolated. Ultimately, this diminishes the value of the research and undermines its validity in the eyes of stakeholders.

Therefore, to fully leverage the strengths of usability testing — speed, simplicity, low sample requirements, and clear, unambiguous results — we must consciously keep our research focus under control.

## Results in Usability Testing

In usability testing, we must always distinguish between primary and secondary results. The primary result of usability testing is always a set of usability issues. It may also include insights into the overall usability of the product but nothing more. User expectations, feature requests, product opinions, and usage patterns are also incredibly important, but they are secondary in this particular study. To explore them, we need to use a more appropriate research method. Usability testing will not provide sufficiently strong results in these areas — at most, it will generate hypotheses and ideas for subsequent, more methodologically valid studies.

This brings us to the idea of the ideal usability issue description.

To describe the ideal usability issue, we turn to the classic definition of usability:

>Extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency, and satisfaction in a specified context of use.

From this definition, we can derive the definition of a usability issue:

>A usability issue is a feature of the interface that hinders the effective and efficient completion of user tasks and reduces user satisfaction with the system.

This definition is important because it also allows us to outline what a usability issue is not:

**A usability issue cannot be the lack of desire to perform an action in the product.** It cannot manifest as a user not wanting to do something. We deliberately narrow our focus in usability testing to exclude questions of willingness to use a product or its features. Studying feature demand is more complex than studying usability and requires a different research method.

**A usability issue cannot be a bug** because a bug is inherently incorrect system behavior. If we try to study bugs or technical system properties (e.g., data loading speed, animation performance) through usability testing, we risk drawing conclusions from an inherently flawed sample. Proper technical testing requires a dedicated device setup and specialized testing methods. That’s why QA testing is often a separate function in a company, operating on a different principle than usability testing.

**A usability issue cannot be a lack of functionality.** In usability testing, we study the ease of use of existing product features. We may receive comments about missing features, but these should always serve as a basis for further research, not as standalone results.

**A usability issue is not the absence of a solution** because a problem is a problem, not the absence of a solution. This distinction is subtle. A usability issue is a property of the interface, an element that hinders product use. If we frame a problem as “Feature X is missing,” we miss the opportunity to address the usability issue in other ways. It’s like going to a doctor and saying, “I lack painkillers” instead of “I have a headache.” While technically possible, this approach limits us to one solution that may not be the best.

## The Ideal Usability Issue

Based on all the above, we can define the ideal usability issue description:

A usability issue should include:

* **A description of the interface property that causes the problem.** We need to describe how the problematic element works, as it is the source of the issue.

* **An explanation of why this system behavior is problematic.** This allows us to describe the problem's mechanism and argue why we consider it a usability issue. It’s especially important to outline the participant’s actions with the problematic element that lead to difficulties.

* **A description of the problem’s impact on usability.** By definition, usability issues reduce key usability metrics, and it’s essential to demonstrate this negative impact.

We can further illustrate the usability issue with participant quotes and add recommendations for resolution.

As we see, participant opinions are not the essence of a usability issue but its illustration. This is particularly important because the object of our study is the interface, not the user.

By strictly adhering to the constraints of usability testing, conducting and processing results will take significantly less time and resources compared to in-depth interviews. This is why I believe usability testing should be as simple as a hammer. Its strength lies in these limitations.

In this article, I’ve tried to thoroughly describe my understanding of usability testing and the description of its results. As with everything I write, this represents my personal professional opinion rather than a textbook or objective truth. In any case, feel free to write to me and share feedback — I always enjoy and appreciate reading it.
