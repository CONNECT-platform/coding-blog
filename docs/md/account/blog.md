# Your Blog

> :AccountStatusBound status=Checking
>
> [loading](:Loading (color=text)) &nbsp;&nbsp;&nbsp; Checking account status ...


> :AccountStatusBound status=LoggedIn
> > :AccountPropBound prop=domain
> > 
> > Here you can view and update details of your blog on `coding.blog`, and 
> > publish your blog. If you are not sure how `coding.blogs` work, make sure
> > to checkout [this entry](/knowledge/setting-up-a-blog) first.
> >
> > > :Buttons
> > > > :Button label=Learn More about Blogs, url=/knowledge/setting-up-a-blog
> >
> > **DOMAIN**:
> > > :AccountProp prop=domain
> >
> > > :AccountPropBound prop=repo, unset=true
> > > 
> > > <br>
> > > 
> > > You have not connected your domain to a blog. In order to do so, you simply need to:
> > > 
> > > > [info](:Icon (align=top)) **STEP 1**
> > > >
> > > > Setup a blog repo using [**CODEDOC**](https://codedoc.cc).\
> > > > It is highly recommended to use [this starter project](https://github.com/CONNECT-platform/coding-blog-boilerplate/generate),
> > > > and it is generally recommended to include your domain name or your username in the repo name.
> > > > > :Buttons
> > > > > > :Button url=https://github.com/CONNECT-platform/coding-blog-boilerplate/generate, label=Use the Starter Project
> > >
> > > > [info](:Icon (align=top)) **STEP 2**
> > > >
> > > > Host the Git repo of your blog somewhere that is publicly accessible, e.g. on [GitHub](https://github.com).
> > > > If you have forked the boilerplate repo, your repo is already on GitHub.
> > >
> > > > [info](:Icon (align=top)) **STEP 3**
> > > >
> > > > Click on the **Bind Repo** button below and enter the URL of that Git repo \
> > > > i.e. `https://somewhere/my-blog.git`. The bound repo **MUST** be public (so our build pipeline can fetch)
> > > > and it **MUST** be a [CODEDOC](https://codedoc.cc) project (so our build pipeline knows how to build it).
> > >
> > > > :Buttons
> > > > > :BindRepoButton
> >
> > > :AccountPropBound prop=repo
> > >
> > > **REPO**:
> > > > :AccountProp prop=repo 
> > >
> > > > :Buttons
> > > > > :BindRepoButton icon=true
> > >
> > > **PUBLISH WEBHOOK**:
> > >
> > > You can simply use this webhook to publish your blog. Curl it, [set it on GitHub as a post-master-push 
> > > web-hook](/knowledge/publish-webhook), set it somewhere alongside your
> > > CI/CD, or simply click on the **Publish** button below.
> > > > :AccountProp prop=publishUrl
> > >
> > > > :PublishStatus
> > >
> > > > :Buttons
> > > > > :RefreshPublishWebhookButton
> > > >
> > > > > :CopyButton
> > > >
> > > > > :PublishButton
> > >
> > > <br>
> > >
> > > When triggered, your repo will be cloned, its _master branch_ built using
> > > [**CODEDOC**](https://codedoc.cc), and the generated files distributed to our CDNs, accessible 
> > > via [domain](:AccountProp (prop=domain)).
> > > You will be notified via email of the status of that process.
> > >
> > > > [timer](:Icon) **BUILD TIME**
> > > >
> > > > Building each version of your blog takes some time. Besides, our current build capacity is rather limited,
> > > > and as a result it is highly recommended to avoid publishing twice within 10 minutes.
> > >
> > > > [security](:Icon) **SECURITY**
> > > >
> > > > Keep this URL safe! If other people gain access to it, they will be able to publish your blog
> > > > without you realizing it, which might result in unfinished content being published. If you think
> > > > your publish webhook have been compormised, simply use the refresh button ([refresh](:Icon (align=middle))) to
> > > > create a new webhook, invalidating the old one.
> > >
> > > > [bug_report](:Icon) **TROUBLESHOOTING**
> > > >
> > > > After requesting a publish, your blog should be published in under 10 minutes, notifying you
> > > > via email. Each build will be tried a few times, and flagged as failed if all of the attempts
> > > > finish with an error. In case a build fails, you will also be notified via email.
> > > >
> > > > For more information on potential errors and how to resolve them, 
> > > > [read this knowledge base entry](/knowledge/setting-up-a-blog#troubleshooting)
>
> > :AccountPropBound prop=domain, unset=true
> >
> > You have not set your blog up! If you want to publish coding-related articles on `<your>.coding.blog`,
> > simply join our propspective creators list! Be sure to also check out [this page](/creators) which
> > outlines the process of setting up your blog on `coding.blog`.
> > <br><br><br>
> > > :Buttons
> > > > :JoinCreatorButton


> :AccountStatusBound status=NotLoggedIn
>
> **You are not logged in**. \
> You need to log in to access your account. Click on the **Login** button
> below and you will recieve a login link on your email. Follow that link
> and you will be logged in to your `coding.blog` account.
>
> > [info](:Icon) **ALPHA-STAGE NOTICE**
> >
> > Note that we are in alpha stage, so creating accounts and logging in is not
> > open for public yet. If you are invited to the alpha-stage, you must have
> > recieved an email about it, and you can login using the **Login** button.
> > If not, you can join the beta waiting list, and we will inform you by email
> > when your account is created.
>
> > :Buttons
> > > :JoinButton
> >
> > > :LoginButton

<br><br>

> :DarkLight
> > :InLight
> >
> > ![banner](/img/account-banner.svg)
>
> > :InDark
> >
> > ![banner](/img/account-banner-dark.svg)

> :ToCPrevNext next=false