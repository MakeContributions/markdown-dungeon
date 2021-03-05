[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Open Source Helpers](https://www.codetriage.com/makecontributions/markdown-dungeon/badges/users.svg)](https://www.codetriage.com/makecontributions/markdown-dungeon)
[![Netlify Status](https://api.netlify.com/api/v1/badges/320e6533-33ab-402c-bfb9-ebac1881b260/deploy-status)](https://app.netlify.com/sites/markdown-dungeon/deploys)

 <h1 align="center">⚔️ Markdown Dungeon ⚔️</h1>

> A dungeon is a room or cell in which prisoners are held, especially underground.

This is an example repo illustration of a dungeon using **Markdown** on Github.
In the dungeon the reader chooses which option to take and jumps into an appropriate page of the room that based on their choice.
It is collaborative because the room is written by many authors.


 |[Start a new game](./start-new-game.md)|
|---|

## 📥 Installation
You need install [yarn](https://www.npmjs.com/package/yarn).

1. Clone the repo

```bash
git clone https://github.com/MakeContributions/markdown-dungeon.git
```

2. Got to folder

```bash
cd markdown-dungeon
```

3. Run install dependecy

```bash
yarn
```

4. Create a `.env.development` file in the project root folder and copy the format of `.env.example` file.
5. To start the development server run:

```bash
yarn start
```

> Ensure you are not using Power shell

6. 🎉 Open your browser and go to http://localhost:8000/ or http://localhost:8000/___graphql

## 👷‍♂️ Floor and the room format
 
 A **floor** is a folder and each floor is a collection of **rooms** and every room is a `Markdown` file.
The Markdown capability links is used for up/down and go to another room, like below example.

[Go to Github dungeon](https://github.com/)

```markdown
[Go to Github dungeon](https://github.com/)
```

## 👩‍💻 Contribution Guidelines
### 1. 📐 Make Adequately Sized Changes
- Keep changes small
- Don't add an option without adding any gate for readers who decide on that option,
so the dungeon will not be full of deadlinks. Instead, the last markdown file the reader reaches on any path of the room should not have any options.
#### Here are some examples of appropriate changes:
 
- Add one or two sentences to an existing "page" (file) in the room.
- Add a new option to an existing choice point, and link that option to an existing "room" or "floor".
- Add a new option to an existing choice point, create a new "page" for that option, and add a sentence or two to the new "page".
- Add a couple of options to a current dead-end "page", and add a "page" or link to an existing "page" for each option.

### 2. ⛩ Dungeon Structure

   Structure should be `dungeon-name/floor-number/room-number`, please see below definition of each variables:

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

   > If you created a new dungeon please add in [Start a new game](./start-new-game.md), so the reader can go to your dungeon
   
   > If you want to get an idea of which option leads to what when contributing, look for `decision_tree.png` file under any dungeon folder, which contains a graphical view of that dungeon.
   
### 3. 🔗 Use Relative Links
The links in this file must be [relative links](https://compugoddess.com/relative-vs-absolute-links/) to continue working if the repository is forked.

### 4. 📏 Line Lengths
Keep all lines 120 characters or less. Otherwise, the raw files will be difficult to read in the browser or on the command line, and the changes will be more difficult to review.
     
### 5. 🪓 Blank Lines Between Options
Insert blank lines between the different options so that the options are visually separated.

## 📝 License
[MIT](./LICENSE)
