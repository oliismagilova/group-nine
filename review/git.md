# Git Cheatsheet

Table of contents

- [Init](#git-init)
- [Clone](#git-clone)
- [Config](#git-config)
- [Add](#git-add)
- [Status](#git-status)
- [Checkout](#git-checkout)
- [Merge](#git-merge)
- [Commit](#git-commit)
- [Push](#git-push)

## Git Init

`git init` - Create empty Git repo in specified directory. Run with no
arguments to initialize the current directory as a git repository

- **example** `git init .`

## Git Clone

`git clone` - Clone repo located at <repo> onto local machine. Original repo can be
located on the local filesystem or on a remote machine via HTTP or SSH.

- **example** `git clone https://github.com/quelchx/next.tailwind.git`

## Git Config

`git config user.name <name>` - Define author name to be used for all commits in current repo. Devs
commonly use --global flag to set config options for current user.

- **example** `git config user.name john`

- **example** `git config user.email john@email.com`

## Git Add

`git add` - Stage all changes in <directory> for the next commit.
Replace <directory> with a <file> to change a specific file.

- **example** `git add .` - will add all changes made

- **example** `git add index.js`

- **example** `git add index.js index.html`

## Git Status

`git status` - List which files are staged, unstaged, and untracked.

## Git Checkout

`git checkout -b <branch>` - Create and check out a new branch named <branch>.
Drop the -b flag to checkout an existing branch.

> Note: This isn't done too often as projects usually have only a test and main branch

- **example** `git checkout -b project-one`

- **example** `git checkout -b main`

## Git Merge

`git merge <branch>` - Merge <branch> into the current branch

- **example** `git merge main`

## Git Commit

`git commit` - Commit the staged snapshot, but instead of launching
a text editor, use <message> as the commit message.

- **example** `git commit -m 'message here'`

## Git Push

`git push` - Push the branch to <remote>, along with necessary commits and
objects. Creates named branch in the remote repo if it doesn’t exist.

- **example** `git push -u origin master`

## Full Example of my typical workflow

- I start a new project and run `git init .`

- Add a bunch of files, code some stuff after some time ill add the changes running `git add .` - this will add everything I have done in the project 'repo'

- If I want to commit the changes I have made or added files to the current repo I will run `git commit -m 'message'`

- If I want to push the changes made to the current branch (usually main) - `git push -u origin master` or simply `git push`
