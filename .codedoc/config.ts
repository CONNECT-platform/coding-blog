import {
  configuration,
  DefaultConfig,
  DefaultMarkdownCustomInlineComponents,
  DefaultMarkdownCustomComponents,
} from "@codedoc/core";

import { Loading, formulaPlugin } from "@codedoc/core/components";

import { theme } from "./theme";
import { Big } from "./components/big";
import { PersonCard } from "./components/person-card";
import { JoinButton$ } from "./components/join-beta/button";
import { JoinCreatorButton$ } from "./components/join-creator/button";

import { LogoutButton$ } from "./components/account/logout";
import { LoginButton$ } from "./components/account/login";
import { AccountStatusBound } from "./components/account/status-bound";
import { AccountPropBound } from "./components/account/prop-bound";
import {
  AccountProp$,
  AccountPropCode$,
} from "./components/account/account-prop";
import { EditNameButton$ } from "./components/account/edit-name";
import { BindRepoButton$ } from "./components/account/bind-repo";
import {
  PublishButton$,
  RefreshPublishWebhookButton$,
} from "./components/account/publish-blog";
import { PublishStatus$ } from "./components/account/publish-status";
import {
  ArticlePreview,
  ArticlePreviewRow,
  deferBgImages$,
} from "./components/article-preview";

import { googleAnalytics } from "./plugins/ga";

export const config = /*#__PURE__*/ configuration({
  theme,
  dev: {
    port: 3030,
  },
  page: {
    title: {
      base: "coding.blog",
    },
    scripts: [],
    favicon: "/favicon.ico",
    meta: {
      subject: "A Blog for Everything Coding",
      description:
        "An open-source blog system for coding and coders. No content-marketing, no ads in disguise. Pure quality articles.",
      keywords: [
        "blog",
        "article",
        "software",
        "programming",
        "code",
        "open-source",
        "open source",
        "coding",
        "tech",
        "IT",
        "blogging",
        "tutorials",
        "articles",
        "convenient",
        "beautiful",
        "modern",
      ],
    },
  },
  dest: {
    html: "dist",
    assets: "dist",
  },
  bundle: {
    init: [...DefaultConfig.bundle.init, deferBgImages$],
  },
  plugins: [formulaPlugin, googleAnalytics("UA-177467962-1")],
  markdown: {
    customInlineComponents: {
      ...DefaultMarkdownCustomInlineComponents,
      Loading,
      AccountProp: AccountProp$,
    },
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      Big,
      PersonCard,
      JoinButton: JoinButton$,
      JoinCreatorButton: JoinCreatorButton$,

      LogoutButton: LogoutButton$,
      LoginButton: LoginButton$,
      AccountStatusBound,
      AccountPropBound,
      AccountProp: AccountPropCode$,
      EditNameButton: EditNameButton$,
      BindRepoButton: BindRepoButton$,
      PublishButton: PublishButton$,
      RefreshPublishWebhookButton: RefreshPublishWebhookButton$,
      PublishStatus: PublishStatus$,

      ArticlePreview,
      ArticlePreviewRow,
    },
  },
  misc: {
    github: {
      user: "CONNECT-platform",
      repo: "coding-blog",
    },
  },
});
