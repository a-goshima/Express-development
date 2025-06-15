FROM node:20-slim

# ロケール等の基本設定
ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /workspace

# パッケージのインストール
RUN apt-get update && apt-get install -y \
  git \
  curl \
  && rm -rf /var/lib/apt/lists/*

# グローバルツール（任意）
RUN npm install -g typescript ts-node nodemon

EXPOSE 8000