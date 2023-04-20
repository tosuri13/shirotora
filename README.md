<h1 align="center">Shirotora</h1>
<p align="center">
  <img src="https://img.shields.io/badge/npm-1.18.2-green" />
  <img src="https://img.shields.io/badge/yarn-1.22.19-6495ED.svg?logo=yarn&style=plastic">
  <img src="https://img.shields.io/badge/-Vercel-000000.svg?logo=Vercel&style=plastic">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=Next.js&style=plastic">
  <img src="https://img.shields.io/badge/-React-555.svg?logo=react&style=flat">
  <img src="https://img.shields.io/badge/-TypeScript-FFFFFF.svg?logo=TypeScript&style=plastic">
</p>
<br>
<p align="center">
SHIROTORAは、神戸市営地下鉄の西神・山手線の時刻表を見やすく表示してくれる個人用Webアプリケーションです。<br>リアルタイムにスクレイピングしているので重いですが、それでも使いたい人は使ってください。</p>

## ✨ Product

- https://shirotora.vercel.app/

<div align="center">
<img width="600" src="./docs/images/shirotora_image.png">
</div>

## 🔨 Requirement

- Node 18.12.1
- Vercel

## 🚧 Development

- プロジェクト依存関係のインストール

```
$ yarn install
```

- ローカル開発環境の起動(http://localhost:3000)

```
$ yarn dev
```

- ローカル本番環境の起動(http://localhost:3000)

```
$ yarn build && yarn start
```