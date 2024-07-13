# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

#### Apps

-   `frontend`: a [Next.js](https://nextjs.org/) app being developed for the frontend
-   `backend`: an upcoming [Express.js](https://expressjs.com/) app for the backend

#### Packages

-   `@threadit/ui`: a React component library used in the frontend app
-   `@threadit/forms`: a React component library containing forms
-   `@threadit/utils`: a library containing reuable functions
-   `@threadit/validators`: a library containing data validators
-   `@threadit/eslint`: `eslint` configurations used in apps and packages
-   `@threadit/prettier`: `prettier` configurations used throughout the monorepo
-   `@threadit/tailwind`: `Tailwind CSS` configurations used in apps and packages
-   `@threadit/typescript`: `TypeScript` configurations used in apps and packages

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

-   [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
-   [Caching](https://turbo.build/repo/docs/core-concepts/caching)
-   [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
-   [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
-   [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
-   [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
