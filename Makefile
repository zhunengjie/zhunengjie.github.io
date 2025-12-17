# ===============================
# GitHub Pages deploy (Vite + pnpm)
# ===============================

DIST_DIR := dist

.PHONY: install build deploy clean publish

## 安装依赖
install:
	pnpm install

## 构建项目
build:
	pnpm build

## 发布到 gh-pages
deploy:
	pnpm run deploy

## 清理构建产物
clean:
	rm -rf $(DIST_DIR)

## 一键发布（最常用）
publish: clean install build deploy
	@echo "✅ Deploy finished: https://zhunengjie.github.io/"
