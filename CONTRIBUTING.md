# Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## How to Contribute

1. First up you need to fork (make a copy) of this repo to your Github account.

1. Clone (download) your fork to your computer.

1. Set your streams so you can sync your clone with the original repo (get the latest updates)

   - `git remote add upstream https://github.com/tintindas/nosave-wa`
   - `git pull upstream main`
   - The above 2 commands will synchronize your forked version of the project with the actual repository.

1. Create a branch `git checkout -b <your_branch_name>`.

1. Get a screenshot of your finished work! (if there are any UI changes).

1. Pull from the upstream again before you commit your changes, like you did in step 3. This is to ensure your still have the latest code.

1. If you see a error like

   ```md
   Your local changes to the following files would be overwritten by merge. Please commit your changes or stash them before you merge
   ```

   on using `git pull upstream main` use:

   - `git stash`
   - `git pull upstream main`
   - `git stash pop`

   for more info on this [visit](https://bluecast.tech/blog/git-stash/).

1. Commit and push the code to your fork.

1. Create a pull request to have the changes merged from your fork into the origin.

### Folder Structure

```
./
├── assets
│   └── CountryCodes.json
├── components
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── NumberForm.tsx
├── CONTRIBUTING.md
├── next-env.d.ts
├── package.json
├── package-lock.json
├── pages
│   ├── api
│   │   └── hello.js
│   ├── _app.tsx
│   └── index.tsx
├── postcss.config.js
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── wa-background.jpg
├── README.md
├── styles
│   ├── globals.css
│   └── index.css
└── tsconfig.json
```

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
1. If your change needs an explanation to the user, update the documentation.
1. Make sure your code lints.
1. Issue pull request.

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](../../issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](../../issues); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

## Use a Consistent Coding Style

Observe the coding style of the project and add your code also in the same style.
**Don't make major changes** (Like changing the complete folder structure)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Acknowledgements

This CONTRIBUTING.md file has been created using [this file](https://github.com/Ashutosh00710/github-readme-activity-graph/blob/main/CONTRIBUTING.md) as the base template. 
