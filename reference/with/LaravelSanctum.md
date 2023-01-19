# with Laravel Sanctum

## 概要

- Laravel をサーバーとして利用することを想定したブランチです。
- 認証機能として LaravelSanctum を想定しています。

## 主な役割

### 認証情報の管理

store(共通変数)に認証情報を格納して利用します。

- api/verify/auth.js
  - メール認証を前提とした store です。
- api/nomal/auth.js
  - メール認証を使用しない store です。

### 認証を行うページ

例としての基礎的な認証ルートが pages に存在します。

- verify/~
  - メール認証を前提としたルートです。
- normal/~
  - メール認証を使用しないルートです。