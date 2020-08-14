> :DarkLight
> > :InDark
> >
> > ![Banner](/img/under-the-hood-dark.svg)
>
> > :InLight
> >
> > ![Banner](/img/under-the-hood.svg)

# Why we didn't use React on `coding.blog`

In [this previous post](/blog/jamstack), we outlined how `coding.blog`'s JAMStack architecture works,
and how that has given `coding.blog` competitive performance even though we didn't put any efforts (yet)
specifically to optimize the platform. In this post, we are going into details of why we didn't use
any popular frontend framework (such as React), and instead opted to use our own in-house library.

---

## Bit of History [history](:Icon)

> Psst: this is some chronological context that you can safely by-pass if you aren't interested.

Chronologically speaking, we didn't create a frontend library out of the blue for `coding.blog` or
[**CODEDOC**](https://codedoc.cc). It was the other way around: I was working on [this complex web-app](https://connect-platform.io),
which I've built using [Angular](https://angular.io). That app has intricate interdependencies between
lots of models, which seriously confused Angular's change detection mechanism. A sizable amount of
the code was then dedicated to _dance around_ that mechanism, with still sub-par (though better) performance.

I could easily and efficienctly express those inter-dependencies using an FRP library like [RxJS](https://rxjs.dev),
but then I really didn't need DOM reconcilliation or change detection mechanisms of popular frameworks,
and they would become mere overheads. So I [created a simple and thin library](https://github.com/connect-platform/connective-html)
(details below), created [**CODEDOC**](https://codedoc.cc) to document it, people quickly picked **CODEDOC** up for
blogging, we created `coding.blog`, and here we are, the library still undocumented, the web-app still running Angular.

---
