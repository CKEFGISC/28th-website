# 操作說明

建北電資 28th 社網開發者操作說明

v0.1 - by 晴

---

## 管理權

如果你想參與改進這個專案，請聯繫  
Discord: 晴 `@star_huey`

## 小知識

這個專案是用 GitHub 管理，語言有 JavaScript、SCSS 等等

網站由 React JS 架設，網頁中使用了 Bootstrap、jQuery 等擴充工具

如果你對這些東西不是很熟悉，請自行上網研究一下

## 事前準備

1. 下載所有需要用到的東西
    - VS Code
    - Git
    - Node.js & NPM
2. 一個新的資料夾

<small>*※作業系統是 Linux 的話超棒，Windows 也還行，Mac 我就幫不了你了*</small>

## Git 指令

介紹一下 Git 指令好了

首次下載這個專案到本機：

```bash
cd "Your folder"
git clone https://github.com/ckefgisc-28th/ckefgisc-28th.github.io.git .
```

儲存一次更新內容：

```bash
git commit -m "I did something"
```

<small>*※ 請照實填寫你做了什麼*</small>

把雲端最新版下載到本機：

```bash
git pull
```

把新版本上傳到雲端：

```bash
git push
```

要修改的話通常都是先 pull，根據修改內容 commit，完成後再 push

另外，也可以使用 GitHub Desktop 就不用打指令了

## 開始

首先，用 Git 把專案 Clone 下來

用 VS Code 打開資料夾，按 ``[Ctrl] + [`]`` 打開終端機

<small>*※建議開兩個終端機，一個打指令，另一個即時更新網頁*</small>

然後執行這個指令：

```bash
npm install
```

安裝所有需要的模組到 `node_modules/`

這樣就完成設置了

另外，若要生成靜態網頁，可以使用以下指令：

```bash
npm run build
```

## 架構

根目錄的架構如下：

```bash
.
│  .env
│  .gitignore
│  package.json
│  package-lock.json
│  README.md
│
├─ .git/      
├─ .vscode/     
├─ node_modules/  
├─ build/     
├─ docs/     
├─ public/       
└─ src/           
```

這些可以不用理他：

| 名稱 | 解釋 |
|-|-|
| `.env` | 環境設定 |
| `.gitignore` | Git 不理會的檔案列表 |
| `package.json` | 告訴 NPM 有哪些需要的 Packages |
| `package-lock.json` | 同上 |
| `README.md` | 介紹文 |
| `.git/` | Git 的東西 |
| `.vscode/` | 編輯介面設定 |
| `node_modules` | 模組包存放的地方 |
| `build/` | 編譯完的檔案 |
| `docs/` | 教學，你現在正在看 |

真正重要的地方是：

| 名稱 | 解釋 |
|-|-|
| `public/` | 所有公開的資料：ICON、圖片 等等 |
| `src/` | 放程式碼的地方 |

### `public/` 之架構

```bash
./public/
│  bootstrap-5.3.1.zip
│  bootstrap-5.3.1-dist.zip
│  CNAME
│  favicon.ico
│  index.html
│  manifest.json
│  README.md
│
├─ icons/
└─ images/
```

不要去動的：

| 名稱 | 解釋 |
|-|-|
| `bootstrap-5.3.1.zip` | Bootstrap 存檔，只是放著而已 |
| `bootstrap-5.3.1-dist.zip` | 同上，編譯過的 |
| `CNAME` | 網站名稱，給 GitHub Pages 看的 |
| `favicon.ico` | 預設網站圖示 |
| `index.html` | 含有 `head`、`body` & `#root` 的最基本 html 架構 |
| `manifest.json` | 網站資料 |
| `README.md` | 引導別人到正確的 `README` 文件 |

存資料的：

`icons/` 和 `images/` 應該不用解釋吧

### `src/` 之架構

這裡就是最重要的地方了

```bash
./src/
│  index.js
│  index.scss
│  Main.js
│  Page.js
│
├─ footer/
├─ header/
├─ pages/
│   ├─ courses/
│   ├─ events/
│   ├─ home/
│   ├─ museum/
│   ├─ news/
│   └─ team/
│
└─ utils/
```

就不一一解釋了，請看下一章

## JSX

首先看到 `public/index.html`

`<head>` 裡面是一些通用的頁面設定，Bootstrap、字體、Font Awesome 的引入

`<body>` 則是沒有 JavaScript 的警示語 和 一個識別為 `#root` 的 `div`

這些有什麼用？

看到 `src/index.js`

裡面就是引入函式庫，然後排版

在 `root.render(/* ... */)` 裡面
