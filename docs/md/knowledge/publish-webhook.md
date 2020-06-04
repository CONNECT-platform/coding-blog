> :DarkLight
> > :InLight
> >
> > ![banner](/img/cb-publish.svg)
>
> > :InDark
> >
> > ![banner](/img/cb-publish-dark.svg)

# Publish Webhook

You can find your publish webhook [on your blog management page](/account/blog).
It allows you to integrate publishing of your blog into any workflow. For example,
you can simply curl it to get the latest version of your blog published:

```bash
curl -X POST https://publish.coding.blog?token=<your-publish-token>
```

<br>

Or you can set it up to be triggered whenever you push to your blog repository on GitHub:

![github webhook screenshot](/img/github-webhook.png)

<br>

When triggered, the webhook will initiate [the publish process](/knowledge/setting-up-a-blog#publishing).
> :Buttons
> > :Button label=Learn More about Publish Process, url=/knowledge/setting-up-a-blog#publishing

---

## Security

You should not share your publish webhook (or the publish token within it) with other people, as it
will allow them to request publishes for your blog at any time. You can refresh your publish token
at any given time via [your blog management page](/account/blog), which will disable all previously
issued publish URLs.

> :ToCPrevNext next=false