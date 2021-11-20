---
title: Why we chose vite over create-react-app
image: /blog/vite.png
description: Vite is the combination of an extremely fast dev-server and a highly optimized build command, which bundles your app for production. We used it for our newest web-app and this is our journey.
author: Leon Erath
authorImage: /blog/author.jpeg
created: "11/20/2021 18:00"
---

Is there anything more annoying in web app development than waiting for the bundler and other build processes to finish, before you can review your changes in the browser? Surely, there must be a better way! There is. While doing research for our newest web app, we came across Vite:

[Vite](https://vitejs.dev/guide/) is the combination of an extremely fast dev-server and a highly optimized build command, which bundles your app for production. Built by Evan You – creator of [Vue](https://vuejs.org/) – it utilises browser native ESM support, similar to [snowpack](https://www.snowpack.dev/) and [preact/wmr](https://github.com/preactjs/wmr). For that, Vite divides the modules in your web app into two categories: **dependencies** and **source code**.

1. Dependencies are pre-bundled using [ESBuild](https://github.com/evanw/esbuild) – a JavaScript bundler written in Go which is up to 10-100 times faster than a traditional JavaScript bundler. It only needs to bundle them once unless the dependency changes (which rarely happens).
2. Source code over native Ecma-Script-modules (ESM): Since [all major browsers now support ESM](https://caniuse.com/?search=modules), Vite transforms the source code to ESM and lets the browser do the rest. The benefit? Only the modules necessary for the current page are loaded by the browser, instead of loading all of the bundled app.

Even though Vite is built by the creator of Vue.js, Vite itself is framework agnostic and works with almost any frontend framework like React, Svelte, TypeScript or native JS. As its core, Vite is a highly efficient build tool and development environment which can be leveraged by anyone.

And that's not all: Vite also comes with hot-module-replacement (HMR). Because Vite’s dev-server serves the source code over native ESM, it can easily replace modules that have changed without reconstructing the dependency graph like traditional bundlers do.

## Our experience after 3 months

Vite is fast! We never want to go back to our previous setup. Once we integrated Vite in our web app, we had a startup time below 1s and reload times that felt instantaneous. That’s over 20 times faster than our previous dev-server provided by create-react-app. If you don’t believe me, look at the [tweet](https://twitter.com/amasad/status/1355379680275128321?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1355379680275128321%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.sipgate.de%2F%3Fp%3D30276) by Amjad Masad:

<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">
Create React App vs Vite React on <a href="https://twitter.com/Replit?ref_src=twsrc%5Etfw">@replit</a>. <br></br>Vite ran before the container could even boot CRA files. <a href="https://t.co/lZe87brsjv">pic.twitter.com/lZe87brsjv</a>
</p>
&mdash; Amjad Masad ⠕ (@amasad) <a href="https://twitter.com/amasad/status/1355379680275128321?ref_src=twsrc%5Etfw">January 30, 2021</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The time to switch from the IDE to the Browser takes longer than the dev-server hot reloading the app. And due to HMR not losing your local state after hot-reloading the page, was a huge benefit for our workflow. Features, where you would need an active call, like transfer, could now be easily tested and debugged without starting a new call everytime you change a line of code.

Let’s now look at different aspects of our journey:

### Configuration

Configuring the `vite.config.ts` is straightforward. The [documentation](https://vitejs.dev/config/) is well written and we had no problem adding a local development certificate, creating aliases for specific directories or tweaking our SCSS configuration. Vite's config is the perfect tradeoff between too complicated, where you need to read the entire documentation and 3 tutorials to understand how to do something (looking at you Webpack) and too simple where some more advanced settings are missing (looking at you Create React App).

### Production Builds

Production builds in Vite are still bundled with Rollup with a highly optimized configuration. This performed well, but resulted in some issues where the dev-server behaved a little bit different than the served production build. Thankfully Vite exposes the Rollup config so you can configure your very own production build or add your favorite Rollup plugins if you want to.

### Missing Jest Support

One of the biggest downsides of Vite is the missing support for Jest and therefore testing. At the time of writing, there is an open issue for [first-class Jest support](https://github.com/vitejs/vite/issues/1955), but it is mostly a conceptual discussion on how to implement it. So we did the following to use Jest in our Vite app: We added a custom babel setup that transforms ESM to CJS and resolves Vite features like `import.meta.env` or custom path aliases.

### Vite Plugins

Vite comes with its own plugin system (similar to Preact / WMR) and has a wide variety of [community-supported plugins](https://github.com/vitejs/awesome-vite#plugins). Heads up, most of them are in early stages and not meant for use in production. We expect that plugin support will get better with the rising popularity of Vite. But right now most plugins are still in early alpha versions.

### TypeScript Support

Vite builds your source with ESBuild which is extremely fast and fully supports TypeScript. It has one downside, though: It doesn't do type checking. I recommend setting up your IDE to do type checking and adding a pre-commit hook, just to be sure.

### Web Workers

Vite fully supports web workers. You can import a web worker with `import Worker from './worker.ts?worker` and it just works (with TypeScript support).

### CSS Pre-Processor

Vite has built-in support for almost any CSS pre-processor. It simply scans your package.json for a SASS or LESS dependency and, if applicable, includes the necessary build steps automagically. If needed, you can still pass options to the preprocessor in the `vite.config.ts`.

### import.meta syntax

Since Vite transforms your source code to ESM it also introduces [ESM features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta) such as  `import.meta.env` for environment variables. This confused us for a bit, when we first started, because we were used to `process.env` .

## Conclusion

Although Vite is pretty new, it really shows the potential of bundle free dev-servers. Since the beginning Vite’s feature set seemed to include almost everything we wished for in a modern build tool (besides its incredible speed) but it has also proven itself as reliable enough to be used for our new web app, after only being in active development for 1 year. If you are currently researching possible build tools for your frontend framework or just want to try something new and fun, check out Vite.
<br/>
Cheers!
Leon
