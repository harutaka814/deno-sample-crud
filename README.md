## 環境変数

- mongoDBのクラスターへの接続URLをMONGO_DB_URLへ
- CollectionのDatabase名をMONGO_DB_NAMEへ

## mongodbの設定

- 現在使用しているIPアドレスからの接続を許可するために、Network AccessからIPアドレスの登録をしておく

## コマンド


```
deno run --allow-net --allow-read --allow-env index.ts
```
