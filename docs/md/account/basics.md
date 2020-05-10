# Your Account

> :AccountStatusBound status=Checking
>
> [loading](:Loading (color=text)) &nbsp;&nbsp;&nbsp; Checking account status ...


> :AccountStatusBound status=LoggedIn
>
> Welcome [name](:AccountProp (prop=name, fallback=email))! \
> Here you can see all the information
> about your `coding.blog` account and update it.
>
> **EMAIL**:
> > :AccountProp prop=email
> 
> **NAME**:
> > :AccountProp prop=name, empty=Not Set
>
> > :Buttons
> > > :EditNameButton
>
> Your email is only used to send you updates of the beta process of `coding.blog`
> and publish process of your own blog. Your name is only used to address you in
> a friendlier manner in the emails. None will be shared with any third-party or disclosed
> to any other user or used in any other context.
> 
>
> > :Buttons
> > > :Button label=Manage Blog, url=/account/blog
> >
> > > :LogoutButton


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

> :ToCPrevNext prev=false