> :DarkLight
> > :InLight
> >
> > ![banner](/img/account-banner.svg)
>
> > :InDark
> >
> > ![banner](/img/account-banner-dark.svg)

# Setting up a Blog

Each blog on `coding.blog` consists of two parts:
- a domain, e.g. [domain](:AccountProp (prop=domain, empty=your.coding.blog)),
- bound with a repo, e.g. [repo](:AccountProp (prop=repo, empty=https://blog-repo.git)).

The domain is the URL through which your blog is accessible to the world, and the repo should 
be a [**CODEDOC**](https://codedoc.cc) project including markdown files for your blog posts, 
alongside **CODEDOC** configuration dictating how your blog should look like.

> :Buttons
> > :Button label=Learn More about CODEDOC, url=https://codedoc.cc

> :AccountStatusBound status=NotLoggedIn
>
> <br>
>
> You can access request a blog on `coding.blog` by joining the prospective creators list:
>
> > :Buttons
> > > :JoinCreatorButton

> :AccountPropBound prop=domain, unset=true
>
> <br>
>
> You can access request a blog on `coding.blog` by joining the prospective creators list:
>
> > :Buttons
> > > :JoinCreatorButton

---

## The Repoisotry

Your blog repo **MUST** be openly accessible, as that is how our build servers can fetch and build it.
It also **MUST** be a [**CODEDOC**](https://codedoc.cc) project. If you have not setup such a repo,
the best place to start would be [using this template](https://github.com/CONNECT-platform/coding-blog-boilerplate/generate).

> :Buttons
> > :Button label=Use the Blog Template, url=https://github.com/CONNECT-platform/coding-blog-boilerplate/generate

<br>

Regardless of whether you use the template or not, it is _HIGHLY RECOMMENDED_ to use 
[`@codedoc/coding-blog-plugin`](https://connect-platform.github.io/coding-blog-plugin), as it 
provides necessary features for blogging on top of **CODEDOC**, and allows for easily configuring
your `coding.blog` as well.

> :Buttons
> > :Button label=Learn More about the Plugin, url=https://connect-platform.github.io/coding-blog-plugin

---

## Binding Repo and Domain

After you have setup your repo, you can simply bind it to your domain via [your blog management page](/account/blog).
For binding your repo to your domain, you **MUST** enter the _GIT URL_ for your repo, i.e. 
the URL using which our build servers can clone your repo and build it.

Valid repo URLs:

```bash | --no-wmbar
https://github.com/johndoe/my-blog.git
https://my-own.server/my-blog.git
```

Typically repo URLs end with `.git`. Your repo might be available on a URL that does not end with `.git`, however
_that is pretty rare_. In any case, be sure that you have entered the proper URL (we will try to clone it
in order to build and publish your repo, so we should be able to clone it).

---

## Publishing

After you have your repo set up and bound to your domain, you can simply publish
it using the publish button on [your blog management page](/account/blog). You can
also use the provided publish webhook to automatically publish your blog, for example
when you push to your blog repository.

> :Buttons
> > :Button label=Learn More about Publish Webhook, url=/knowledge/publish-webhook

<br>

Each time you request publish, the following process will be started:

- Our build servers will clone the _master branch_ of your repo ([repo](:AccountProp (prop=repo, empty=https://blog-repo.git))).

- **CODEDOC** dependencies will be installed.

- **CODEDOC** will build the project, generating static files.

- Generated files, alongside [specified assets](https://connect-platform.github.io/coding-blog-plugin/assets), will be put on our CDNs.

- The newest version of your blog is now accessible on [domain](:AccountProp (prop=domain, empty=your.coding.blog)),\
  and you will be notified via email.

---

## Troubleshooting

Errors typically occur as one of the publishing steps cannot be completed. Here are a rundown of common errors, their typical
causes, and simple solutions for each such error:

<br>

- _Repo cannot be cloned_
  - **TYPICAL CAUSE**: This is mostly due to repositories being private, or typos in repository URLs.
  - **FIX**: make your blog repo publicly accessible.

<br>

- _Dependencies cannot be installed_
  - **TYPICAL CAUSE**: the repo is not a **CODEDOC** project, or typo in `.codedoc/package.json`.
  - **FIX**: make sure your repo is a [**CODEDOC** project](https://codedoc.cc) and all dependencies listed in
    `.codedoc/package.json` can be actually installed.

<br>

- _Project cannot be built_
  - **TYPICAL CAUSE**: typo in usage of custom component or in a markdown file.
  - **FIX**: make sure you can run and build your repo locally, via `codedoc serve` and `codedoc build`.

<br>

- _Unknown error_
  - this shouldn't happen, so contact us if it is happening to you via contact@coding.blog.

> :ToCPrevNext prev=false