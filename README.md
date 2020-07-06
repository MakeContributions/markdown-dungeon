# Markdown Dungeon [![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
> A dungeon is a room or cell in which prisoners are held, especially underground.

This is an example repo ilustration of Dugeon using `Markdown` on Github.
In the dugeon the reader choose wich option to take and jump into an appropriate page of the room that based on their choice.
It is collaborative because the room is written by many authors. [Start a new game](./start-new-game.md)

# Floor and the room format
A **floor** is a folder and each floor is a collection of **rooms** and every room is a `Markdown` file.
The Markdown capability links is used for up/down and go to another room, like below example.

[Go to Github dungeon](https://github.com/)
```md
[Go to Github dungeon](https://github.com/)
```
# Contribution Guidelines
## Make Adequately Sized Changes
- Keep change small
- Don't add an option without adding any gate for readers who decide that option, so the dungeon will not be full of deadlines. Instead, the last markdown file the reader reaches on any path of the room should not have any options.

### Here are some examples of appropriate changes:
- Add one or two sentences to an existing "page" (file) in the room.
- Add a new option to an existing choice point, and link that option to an existing "room" or "floor".
- Add a new option to an existing choice point, create a new "page" for that option, and add a sentence or two to the new "page".
- Add a couple of options to a current dead-end "page", and add a "page" or link to an existing "page" for each option.

## Dungeon Structure
Structure should be `dungeon-name/floor-number/room-number`, please see below definiotion of each variables:
- dungeon-name: is a folder that contains floor number, should separate words with a dash(-), is alphanumeric. Example: `normal-dungeon-1`.
- floor-number: is a folder that contains room number, is numeric do not add `0` before the number.
```
1, 2, 3 // Compliance

01, 02, A3 // Non-Compliance
```
- room-number: is a markdown file, the name of the file should be in numeric, but if has sub-rooms of the room you could separate the room number with a dash(-), the sub room could be alphanumeric.
```
1, 2, 3-AF, 3-01 // Compliance

01A, 02*A3, A3+F // Non-Compliance
```
> Folder or file name only accept all ASCII characters and the dash(-).
If you created a new dungeon please add in [Start a new game](./start-new-game.md), so the reader can go to you dungeon
## Use Relative Links
The links in this file must be [relative links](https://compugoddess.com/relative-vs-absolute-links/) to continue working if the repository is forked.

## Line Length
Keep all lines 120 characters or less. Otherwise, the raw files will be difficult to read in the browser or on the command line, and the changes will be more difficult to review.

## Blank Lines Between Options
Insert blank lines between the different options so that the options are visually separated.

# License
The content of this repository is licensed under a [Creative Commons Attribution License](./LICENSE)
