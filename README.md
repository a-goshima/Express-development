# Express + TypeScript + Prisma + MySQL 開発環境（Devcontainer）

このリポジトリは、以下を使ったバックエンド開発環境をDocker + Devcontainerで構築したテンプレートです

```
- TypeScript + Express
- Prisma（ORM）
- MySQL（Dockerコンテナ上）
- Devcontainer
```

---

## ディレクトリ構成
```
.
├── .devcontainer/ # Devcontainer定義
│ ├── devcontainer.json
│ └── docker-compose.yml
├── prisma/ # Prisma設定・マイグレーション
│ └── schema.prisma
├── src/ # Expressアプリ本体
│ ├── app.ts
│ ├── prisma.ts
│ ├── controllers/
│ └── routes/
├── .env # 環境変数（DB接続情報）
├── package.json
└── tsconfig.json
```

---

## セットアップ手順

## Devcontainerを開く

VSCodeでこのプロジェクトを開き、コマンドパレットから  

```
Remote-Containers: Reopen in Container
```

を実行します。

## 環境変数の設定

`.env` ファイルをルートに作成してください：

```
DATABASE_URL="mysql://user:password@mysql:3306/dbname"
※ 他のMySQL接続設定に変更する場合は適宜修正
```

## パッケージインストール
```
npm install
```

## PrismaスキーマをDBに反映（初回）
```
npx prisma db push
```

## Prismaクライアント生成
```
npx prisma generate
```

## 開発サーバー起動
```
npm run dev
```

## よくあるエラー対策
シャドウDB作成エラー（P3014）
```
prisma migrate dev 実行時に起こる場合
```

一時DB作成権限がないユーザーでは 
```
npx prisma db push 
```
を代わりに使ってください。

## ライセンス
MIT

---