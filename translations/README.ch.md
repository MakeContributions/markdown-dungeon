[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Open Source Helpers](https://www.codetriage.com/makecontributions/markdown-dungeon/badges/users.svg)](https://www.codetriage.com/makecontributions/markdown-dungeon)
[![CodeQL](https://github.com/MakeContributions/markdown-dungeon/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/MakeContributions/markdown-dungeon/actions/workflows/codeql-analysis.yml)
[![codespell](https://github.com/MakeContributions/markdown-dungeon/actions/workflows/codespell.yml/badge.svg)](https://github.com/MakeContributions/markdown-dungeon/actions/workflows/codespell.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/320e6533-33ab-402c-bfb9-ebac1881b260/deploy-status)](https://app.netlify.com/sites/markdown-dungeon/deploys)
[![Discord](https://img.shields.io/discord/863049619734790185?color=7389D8&logo=discord&logoColor=ffffff&label=&labelColor=6A7EC2)](https://discord.gg/ydWxdqbTyK)

 <h1 align="center">⚔️ Markdown 地牢 ⚔️</h1>

> 地牢是關押人的地方或監獄。通常，它們可以在地下找到。

這是在 GitHub 上使用 **Markdown** 的地牢示例 repo 插圖。
在地牢中，讀者根據自己的選項來選擇並跳轉到房間的適當頁面。
它是協作的，因為房間是由許多作者編寫的。

| [開始新遊戲](./../start-new-game.md) |
| --------------------------------------- |

## 📥 安裝

你需要安裝 [yarn](https://www.npmjs.com/package/yarn).

1. 克隆 repo

```bash
git clone https://github.com/MakeContributions/markdown-dungeon.git
```

2. 進入文件夾

```bash
cd markdown-dungeon
```

3. 運行安裝軟件依賴

```bash
yarn
```

4. 在項目根目錄下創建一個`.env.development`文件，複製`.env.example`文件的格式。
5. 要啟動開發服務器，請運行

```bash
yarn start
```

> 確保您沒有使用 PowerShell

6. 🎉 打開瀏覽器並轉到 http://localhost:8000/ 或 http://localhost:8000/___graphql

## 👷‍♂️ 樓層和房間格式

**樓層**是一個文件夾，每個樓層都是**房間**的集合，每個房間都是一個`Markdown`文件。
Markdown 功能鏈接用於向上/向下和轉到另一個房間，如下例所示。

[前往 Github 地牢](https://github.com/)

```markdown
[前往 Github 地牢](https://github.com/)
```

## 👩‍💻 貢獻指南

### 1. 📐 進行適當大小的更改

- 保持較小的變化
- 不要在沒有為決定該選項的讀者添加任何門的情況下添加選項，
  這樣地牢就不會充滿死鏈。相反，讀者在房間的任何路徑上到達的最後一個`Markdown`文件不應該有任何選項。
  
#### 以下是一些適當更改的示例：

- 在房間中現有的“頁面”（文件）中添加一兩句話。
- 向現有選擇點添加新選項，並將該選項鍊接到現有“房間”或“樓層”。
- 向現有選擇點添加新選項，為該選項創建一個新“頁面”，並在新“頁面”中添加一兩句話。
- 向當前的死胡同“頁面”添加幾個選項，並為每個選項添加一個“頁面”或指向現有“頁面”的鏈接。

### 2. ⛩ 地牢結構

結構應該是`dungeon-name/floor-number/room-number`，請參閱下面每個變量的定義：

- 地牢名稱: 是一個包含樓層號碼的文件夾，應該用破折號（-）分隔單詞，是字母數字。示例：**normal-dungeon-1**。
- 樓層號: 是一個包含房間號的文件夾，是數字不要在數字前加**0**。

```textile
1, 2, 3 // 合規

01, 02, A3 // 不合規
```

- 房間名：是一個`Markdown`文件，文件名應該是數字，但是如果房間有子房間可以用破折號（-）隔開房間號，子房間可以是字母數字。
```textile
1, 2, 3-AF, 3-01 // 合規

01A, 02*A3, A3+F // 不合規
```

> 文件夾或文件名只接受所有 ASCII 字符和破折號 (-)。

> 如果你創建了一個新的地牢，請在[Start a new game](./../start-new-game.md)中添加，將其添加到[images](./../static/images)
> 文件夾和[dungeon-info .json](../src/data/dungeon-info.json)，這樣讀者就可以去你的地牢在網站上打開它。

> 如果您想了解貢獻時哪個選項會導致什麼，請在任何地牢文件夾下查找“decision_tree.png”文件，其中包含該地牢的圖形視圖。

### 3. 🔗 Use Relative Links
如果存儲庫被分叉，此文件中的鏈接必須是[相對鏈接](https://baike.baidu.hk/item/%E7%9B%B8%E5%B0%8D%E8%B7%AF%E5%BE%91/479926)才能繼續工作。

### 4. 📏 Line Lengths
保持所有行不超過 120 個字符。否則，原始文件將難以在瀏覽器或命令行中讀取，並且更改將更難以查看。

### 5. 🪓 選項之間的空行
在不同選項之間插入空行，使選項在視覺上分開。

## 📝 許可證

[MIT](./../LICENSE)
