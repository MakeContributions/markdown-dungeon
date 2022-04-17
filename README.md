[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Open Source Helpers](https://www.codetriage.com/makecontributions/markdown-dungeon/badges/users.svg)](https://www.codetriage.com/makecontributions/markdown-dungeon)
[![CodeQL](https://github.com/MakeContributions/markdown-dungeon/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/MakeContributions/markdown-dungeon/actions/workflows/codeql-analysis.yml)
[![codespell](https://github.com/MakeContributions/markdown-dungeon/actions/workflows/codespell.yml/badge.svg)](https://github.com/MakeContributions/markdown-dungeon/actions/workflows/codespell.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/320e6533-33ab-402c-bfb9-ebac1881b260/deploy-status)](https://app.netlify.com/sites/markdown-dungeon/deploys)
[![Discord](https://img.shields.io/discord/863049619734790185?color=7389D8&logo=discord&logoColor=ffffff&label=&labelColor=6A7EC2)](https://discord.gg/ydWxdqbTyK)

<div align="center">
    <h1>⚔️ Markdown Dungeon ⚔️</h1>
    <i>A dungeon is a place or prison where people are held. Usually, they can be found underground</i>
</div>
<br>

This is an example repo illustration of a dungeon using **Markdown** on GitHub.
In the dungeon the reader chooses which option to take and jumps into an appropriate page of the room that is based on their choice.
It is collaborative because the room is written by many authors.

| [Start a new game](./start-new-game.md) |
| --------------------------------------- |

## 📥 Installation

You need to install [yarn](https://www.npmjs.com/package/yarn).

1. Clone the repo

```bash
git clone https://github.com/MakeContributions/markdown-dungeon.git
```

2. Go to the folder

```bash
cd markdown-dungeon
```

3. Run install dependency

```bash
yarn
```

4. Create a `.env.development` file in the project root folder and copy the format of `.env.example` file.
5. To start the development server run:

```bash
yarn start
```

> Ensure you are not using PowerShell

6. 🎉 Open your browser and go to http://localhost:8000/ or http://localhost:8000/___graphql

## 👷‍♂️ Floor and the room format

A **floor** is a folder and each floor is a collection of **rooms** and every room is a `Markdown` file.
The Markdown capability links are used for up/down and to go to another room, like the example below.

[Go to Github dungeon](https://github.com/)

```markdown
[Go to Github dungeon](https://github.com/)
```

## 👩‍💻 Contribution Guidelines

### 0. First time working on an open source project?
This is a great project to start contributing to open source. Here is a guide for how to contribute:
1. Find an issue [here](https://github.com/MakeContributions/markdown-dungeon/issues). The tag "good first issue" might help.
2. (optional) Comment that you are going to work on this issue. In this repo the issue does not have to be assigned to you for you to make contributions.
3. If you have not done so already: create a fork of the repo.
4. Clone your fork.
5. Using your fork, create a new branch to work on.
6. Work on this branch, add, commit and push your changes.
7. When you are ready, create a merge request.
8. Comment you have made some changes, give the merge requests' number.
9. After a while, somebody will review your merge request and propose changes or merge it.

### 1. 📐 Make Adequately Sized Changes

- Keep changes small
- Don't add an option without adding any gate for readers who decide on that option,
  so that the dungeon will not be full of dead links. Instead, the last markdown file the reader reaches on any path of the room should not have any options.

#### Here are some examples of appropriate changes:

- Add one or two sentences to an existing "page" (file) in the room.
- Add a new option to an existing choice point, and link that option to an existing "room" or "floor".
- Add a new option to an existing choice point, create a new "page" for that option, and add a sentence or two to the new "page".
- Add a couple of options to a current dead-end "page", and add a "page" or link to an existing "page" for each option.

### 2. ⛩ Dungeon Structure

Structure should be `dungeon-name/floor-number/room-number`, please see the definitions below for each variable:

- dungeon-name: is a folder that contains floor number, should separate words with a dash(-), is alphanumeric. Example: **normal-dungeon-1**.
- floor-number: is a folder that contains room number, is numeric do not add **0** before the number.

```textile
1, 2, 3 // Compliance

01, 02, A3 // Non-Compliance
```

- room-number: is a markdown file, the name of the file should be in numeric, but if has sub-rooms of the room you could separate the room number with a dash(-), the sub room could be alphanumeric.

```textile
1, 2, 3-AF, 3-01 // Compliance

01A, 02*A3, A3+F // Non-Compliance
```

> Folder or file name only accept all ASCII characters and the dash(-).

> If you created a new dungeon please add in [Start a new game](./start-new-game.md), add it on [images](./static/images) folder, and in the [dungeon-info.json](./src/data/dungeon-info.json), so the reader can go to your dungeon and open it on the website

> If you want to get an idea of which option leads to what when contributing, look for `decision_tree.png` file under any dungeon folder, which contains a graphical view of that dungeon.

### 3. 🔗 Use Relative Links

The links in this file must be [relative links](https://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/) to continue working if the repository is forked.

### 4. 📏 Line Lengths

Keep all lines 120 characters or less. Otherwise, the raw files will be difficult to read in the browser or on the command line, and the changes will be more difficult to review.

### 5. 🪓 Blank Lines Between Options

Insert blank lines between the different options so that the options are visually separated.

## 📝 License

[MIT](./LICENSE)
