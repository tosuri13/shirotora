<div align="center">
  <img align="center" width="180" src="public/shirotora.png" />
</div>

<h1 align="center">Shirotora</h1>

<div align="center">
  <img src="https://img.shields.io/badge/npm-1.18.2-green" />
  <img src="https://img.shields.io/badge/yarn-1.22.19-6495ED.svg?style=flat" />
  <img src="https://img.shields.io/badge/Next.js-13.2.4-000000.svg?logo=Next.js&style=flat" />
  <img src="https://img.shields.io/badge/React-18.2.0-5DD3F2.svg?logo=react&style=flat" />
  <img src="https://img.shields.io/badge/TypeScript-18.2.0-3073BF.svg?logo=typescript&style=flat" />
  <img src="https://therealsujitk-vercel-badge.vercel.app/?app=shirotora" />
</div>

<br>

<p align="center">
SHIROTORAは、神戸市営地下鉄の西神・山手線の時刻表を見やすく表示してくれるWebアプリケーションです。<br>NAVITIMEからAPI Routesを通してスクレイピングしているため重いですが、それでも使いたい人は使ってください。</p>

## ✨ Product

- SHIROTORA: https://shirotora.vercel.app

<br>
<div align="center">
<img width="600" src="./docs/images/shirotora_image.png">
</div>
<br>

## 🔨 Requirement

- Vercel
- Node.js `18.12.1`

## 🚧 Development

- プロジェクト依存関係のインストール

```
yarn install
```

- ローカル開発環境の起動(http://localhost:3000)

```
yarn dev
```

- ローカル本番環境の起動(http://localhost:3000)

```
yarn build && yarn start
```

## 🧩 External Dependencies

SHIROTORAでは、外部サイトからスクレイピングを通してリアルタイムに時刻表を取得しています。そのため、交通遅延および外部サイトの仕様変更などが発生した場合は、正しい情報が表示されなくなる可能性があります。

- 神戸市営地下鉄HP
  - https://www.city.kobe.lg.jp/a80062/kurashi/access/kotsukyoku/subway/index.html

- NAVITIME(神戸市営西神・山手線の時刻表 駅一覧)
  - https://www.navitime.co.jp/diagram/stationList?lineId=00000703&from=diagram.campany.top