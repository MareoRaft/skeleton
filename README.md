# Skeleton

Skeleton is simply a project skeleton mainly for personal use.  Many of my projects follow a similar directory structure and include the same files, such as .gitignore and .gitlint; so when starting a new project, it is easier to copy skeleton and make changes than to start from scratch.

## branches

  * master -- base no-framework project
  * react -- base React project

## Getting started

Use `npm install` to install the deps, and then install globally `npm install --global npm-watch` if you want to use the npm watcher instead of the gulp watchers.

Use `npm run-script <cmd>` to run any of the scripts listed in package.json.  The `watch` key corresponds to the configuration of the npm watcher.  Then use `npm run-script serve` to see your webpages and have them automatically update each time the built files change.  If the build process takes a long time, then you should adjust the `--wait=x` milliseconds argument accordingly, so live-server won't try to load a missing file.


