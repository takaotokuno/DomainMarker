# DomainMarker
環境誤操作（本番／検証環境の取り違え）を防ぐための Edge/Chrome 拡張機能です。
指定したドメインにアクセスした際、画面上部に色付きのラインを表示します。

🎯 目的
本番環境と検証環境等、混同してはならない画面を視覚的に区別し、
誤操作や事故を未然に防止することを目的としています。

🔧 機能
ドメインごとに色を設定可能
画面上部に固定ラインを表示
クリック操作を妨げない設計（pointer-events: none）

🛠 インストール方法（ローカル）
Chrome で chrome://extensions を開く
「デベロッパーモード」を有効化
「パッケージ化されていない拡張機能を読み込む」をクリック

本リポジトリのディレクトリを選択
⚙ 設定方法
config.js にドメインと色を定義してください。

window.ENV_CONFIG = {
  "prod.example.com": "#ff0000",
  "stg.example.com": "#ffa500",
  "dev.example.com": "#00aa00"
};

※ manifest.json の matches にも対象ドメインを追加する必要があります。