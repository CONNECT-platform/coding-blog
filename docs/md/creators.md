> :DarkLight
> > :InDark
> >
> > ![Banner](/img/figure4-dark.svg)
>
> > :InLight
> >
> > ![Banner](/img/figure4.svg)

# For Creators

So you are someone who has some experience and knowledge in coding that you want to share with
your fellow programmers. Maybe you want to tell the story of a fun and perhaps technically
challenging project you recently did, maybe you want to share your experience with a new tool,
or maybe you want to help people avoid a common mistake you often see them make.

You need a blog. Somewhere to share your awesome knowledge.

<br>

**Hey there is Medium, this ready-made blogging platform.** Sure it basically
takes ownership of your precious writings, but the benefits are worth it.

You start writing, then you realize it doesn't have proper syntax highlighting. 
You embed some code from somewhere else, but there is no way to put hints on different 
lines to tell your readers what each of them are for, nor is there a way to highlight the 
important bits. 

Still, you power through, and when you are finally done, you realize something: 
You are either forced to put your article behind a paywall in order for Medium to tell readers 
about it, or you need to put in many, many more hours to do the promotion on your own.
Not many benefits left, it seems.

<br>

**Ok so lets instead set-up your own, custom blog.** Yes its a lot of work, not just
to get a domain and find a proper host but also to ensure you have the tools to make a modern,
readable blog.

A lot of people simply stop here, because they are not sure about how much they want to
do this. Not you perhaps. You go through with it. You put many hours before writing even the
first line of the thing you wanted to write about, until your glorious blog system is setup.

Then you write your piece. Done? far from it. Now comes the time to tell people about
it. I mean there is no point in sharing if there is no one to enjoy it in the end, right?
The worst part: _You should do this every time. Every. Single. Time._

<br>

> :Big
>
> We want to change that with `coding.blog`. All of that.

---

# How Will It Help?

<br>

## We Spread the Word

We will make sure readers who would enjoy your work, will know about it. Instead of sneakily
charging them via ads or locking them behind paywalls, we will give free access to all pieces
and transparently charge readers who want in return for delivering them personalized curated lists 
of content they would love. Bonus point: we will also payback the authors whose work readers
are paying to stay informed about.

<br>

## You Maintain Ownership

Every blog space on `coding.blog` is a git repository of markdown files and configurations
indicating how those markdown files are to be represented. You own and maintain that repository.
We will simply pull it for every publish, build a super-fast and lightweight JAMStack app from
it, distribute it across our CDNs and make it available on `https://<your>.coding.blog`. We will
then add it to our curation system and inform readers who we know would love it.

<br>

## The Community Supports You

You will not only be compensated by curation revenue, 
your blog on `https://<your>.coding.blog` will also be automatically equipped with the 
tools for the community to show their appreciation for your work directly, 
in form of tips.

<br>

## Best-in-Class Blogging Tools

`coding.blog` is based on [**CODEDOC**](https://codedoc.cc), which is an open-source tool offering
a feature-rich set of tools for easily building best-in-class docs, wikis and blogs around software.
You simply use [an intuitive extension of markdown](https://codedoc.cc/docs/markdown/overview),
and **CODEDOC** ensures that it has optimal usability and readability across all devices.

Want to get a taste of how your blog will look? This website was also created using **CODEDOC**.
[Check out the repository](https://github.com/CONNECT-platform/coding-blog) to see how simple
markdown gets you these results.

<br>

## Maximum Customizability

It is your blog in the end, and you tell us how it should look. From the [color scheme](https://codedoc.cc/docs/theme) 
and [fonts](https://codedoc.cc/docs/config/page#fonts),
to [the essential structure of the layout](https://codedoc.cc/docs/customization/overview), to even utilizing
your own [custom components in your markdown](https://codedoc.cc/docs/markdown/custom-components),
**CODEDOC** doesn't just allow maximum customization of your blog, it encourages it by making it as easy
as possible.

---

> Note that these are our goals based on our current plans. `coding.blog` is still in early stages
> of development, and our plans might change as we figure out what works best for readers and creators
> alike. We will try our best to keep you informed about any such changes to `coding.blog`. To stay informed,
> simply join our prospective creators list
>
> > :Buttons
> > > :JoinCreatorButton

---

# How Will It Work?

<br>

## Step 1: Create a Repo

Create a repository for your blog using [**CODEDOC**](https://codedoc.cc), and make the repository available somwhere
(for example on GitHub). It is highly recommended to fork 
[this boilerplate project](https://github.com/CONNECT-platform/coding-blog-boilerplate/fork) as it is equipped with
additional components specifically designed for blogging.

<br>

## Step 2: Connect Your Blog Space

If you do have an account, you can connect your domain, i.e. `<your>.coding.blog`, to your repo, via [your account's page](/account/blog).
Simply enter the Git URL of your repo and it will be connected to your domain, meaning that its _master_ branch will be
pulled and built (using **CODEDOC**) and the result will be distributed to `<your>.coding.blog`. You can trigger a publish
either manually (there is a button) or using the provided webhook.

If you do not have an account, you can simply join our list of prospective creators and tell us your preferred `name.coding.blog`.
We will keep you updated on the process of connecting your blog as we progress with development of `coding.blog`.

<br>

> :Buttons
> > :JoinCreatorButton

> :ToCPrevNext