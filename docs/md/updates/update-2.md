> :DarkLight
> > :InDark
> >
> > ![Banner](/img/update-banner-dark.svg)
>
> > :InLight
> >
> > ![Banner](/img/update-banner.svg)

# Update #2 -  July 2020

About two months ago, we announced [`coding.blog`](https://coding.blog). Following a positive response by the community,
we started the alpha phase of the platform. We released the publishing tool-chain and started a slow roll-out of
blogs on `coding.blog`. We published the [first update](/updates/update-1) and outlined a plan for the platform.

Here's a summary of what has happened since then and what our future plans are:

- About a 100 blogs were activated for creators who signed up on our [Prospective Creator's List](/creators). As mentioned in the last update, we opted for a slow
roll out purposefully to be able to tend to the feedback of each new creator. As the product further stabilizes, we will
increase the rate at which new blogs are activated.

- Progressing towards the [planned beta stage](/updates/update-1#towards-beta-stage), we have released 
[the first public issue of coding.blog](/public-issues/issue-1). We have a steady flow for publishing such issues
on a recurrent basis, and as the flow increases, we will progress towards paid personalized issues (same format, personalized content).

- Based on creators' feedback, we've had lots of updates to `coding.blog`, [**CODEDOC**](https://codedoc.cc), and
the [associated plugin](https://github.com/CONNECT-platform/coding-blog-plugin). These improvements include:

  - Realtime feedback on publish process on `coding.blog` UI
  - Improved local preview, with fast iterative rebuilds and docker support
  - RSS support
  - New features in code snippets: linking to lines, highliting segments of a snippet with URL hashes, marking warning/error
    segments in the code, etc.
  - SEO and general performance
  - Lots of bug fixes

- We expect to progress according to our outlined plans, except perhaps we might roll out the curation system
earlier than the tipping system.

---

## Public Issue #1

Our main plan for monetisation `coding.blog` is through paid curated lists of content, as mentioned before. Progressing
towards that goal, we have published the [first public issue](/public-issues/issue-1). This issue which is a free and public collection of
interesting recent articles about programming that we have hand-picked ourselves along with some community recommendations.

We envision our paid issues to have a similar format, but instead with personalized content. At the moment, we have
a content flow that can sustain the public issues, and as the flow increases, we will move towards the personalized issues as well.
We will keep publishing the free public issues even after personalized issues are released.

The first issue is comprised of articles mostly published on `coding.blog`, though it is not limited by that criteria. The quality
of the delivered content is priority number one, so if there is any interesting article that we think our readers would benefit
from knowing about, we want to sread the word to them, regardless of the tool-chain used to publish the content.

Since we can guarantee a higher baseline quality (in terms of readability, performance, etc.) on `coding.blog`, 
alongside provide more value to authors of articles published on the platform, we do prioritize articles published on 
`coding.blog` to some degree.

> :Buttons
> > :Button label=Read Public Issue #1, url=/public-issues/issue-1

---

## Product Updates

Based on feedback and in collaboration with initial batch of creators and testers, we have fixed lots of issues
and inconviences on `coding.blog`, **CODEDOC** and `coding-blog-plugin`. These updates include, but are not limited
to the following:

<br>

### Publishing Process

The [blog management page](/account/blog) now provides realtime feedback on the status of a publish job
in addition to notifying you via emails. The more verbose error reporting of that, alongside the
[newly added knowledge base](/knowledge/setting-up-a-blog), should allow much more streamlined troubleshooting
publishes.

<br>

### Dev Environment

Initial testers on the alpha stage were quick to [point out](https://github.com/CONNECT-platform/codedoc/issues/16) that
**CODEDOC** takes a long time to rebuild for huge blog repositories on a local preview. In light of that, we shifted
to a tiered build process that builds component codes separately than markdown files, drastically speeding up
the rebuilds (from reported sometimes ~17 seconds to less than one).

Additionally, we realized the setting up **CODEDOC** on docker on windows (for local previews) is not as streamlined
as it could be. To fix the issue, we included a docker file alongside our boilerplate projects to help windows users
avoid such inconveniences in the future.

<br>

### Code Snippet Features

Functionality of **CODEDOC**'s [code snippets](https://codedoc.cc/docs/code/overview) have been expanded. You can now
link to any line of any code-snippet (it has a unique URL), or even to arbitrary selections of lines. When navigated
to a document via such a URL, the selected line(s) of the code-snippet will automatically be focused and highlighted.
This means authors can also use this feature to change highlighting of a particular code snippet interactively on the page.

Besides links, we added four new possible annotations for codes: Added and removed lines, which highlight the marked
lines but with colors and visual indicators similar to those in code diffs, and warning and error segments, which allows
marking a particular part of the code as having warnings or errors (with wavy underlines matching styles of popular IDEs).

<br>

### RSS, SEO and Performance

As requested by the community, we also added [RSS support](https://connect-platform.github.io/coding-blog-plugin/rss) 
to `coding-blog-plugin`. This means authors can get feeds in RSS2, Atom and JsonFeed formats automatically and with
minimal configuration.

We also further polished automated SEO metadata generation of the plugin. In that light (but not directly related to SEO),
we also introduced an early version of tags (via [a custom tags component](https://connect-platform.github.io/coding-blog-plugin/tags))
that should help with further classification of content on the platform.

We did conduct investigations onto performance of `coding.blog`, and while the results are pretty good considering
zero optimization done beforehand, there is definitely room for improvement (mostly to ensure that smart phones with
bad connections will also have a snappy loading experience). Part of that effort is iterative improvements
to **CODEDOC** and `coding-blog-plugin`, which we have already started with. Another part is even further improving
our underlying rendering and state-management libraries, to trim them down to absolute basics while improving their
speed. We want to sync this process with us polishing and releasing these libraries for public use, which we have
started with the newest version of our client-side state management library, [RxDeep](https://loreanvictor.github.io/rxdeep/).

---

## The Path Forward

In coming months, we will focus more on increasing the flow of content on the platform while keep improving the
authoring and publishing toolchain powering it. As mentioned above, this increase will allow us to move forward
the planned beta stage of `coding.blog`.

In that light, we are actively looking for enthusiastic writers. If you want to write articles published
on `coding.blog`, simply drop me an email on [eugene@connect-platform.com](mailto:eugene@connect-platform.com).
If you are not enlisted in our prospective creators list, [please enlist](/creators) beforehand.

> :Buttons
> > :JoinCreatorButton

---

## Future Updates

We will keep you updated as we progress forward on this path. `coding.blog` is heavily
reliant on the community to work-out, so we think extreme transparency in whatever we are doing
is essential in its success.

You can [follow us on twitter](https://twitter.com/coding_blog) for more frequent updates and a regular does
of new articles published on the platform, or stay tuned for the next update!

> :DarkLight
> > :InDark
> >
> > ![Banner](/img/figure4-dark.svg)
>
> > :InLight
> >
> > ![Banner](/img/figure4.svg)

> :ToCPrevNext

> :MetaOverride property=og:type
>
> article

> :MetaOverride target=twitter:card
>
> summary_large_image

> :MetaOverride target=twitter:title
>
> Coding.blog update #2 - July 2020

> :MetaOverride property=og:title
>
> Coding.blog update #2 - July 2020

> :MetaOverride target=twitter:creator
>
> @lorean_victor

> :MetaOverride target=twitter:site
>
> @coding_blog

> :MetaOverride target=twitter:description
>
> July 2020 update of coding.blog's status.

> :MetaOverride property=og:description
>
> July 2020 update of coding.blog's status.

> :MetaOverride target=twitter:image
>
> https://coding.blog/img/update-social-banner.png

> :MetaOverride property=og:image
>
> https://coding.blog/img/update-social-banner.png
