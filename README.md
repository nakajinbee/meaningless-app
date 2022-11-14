### meaningless-app

# アプリを作る目的
Laravel×React　でのWEBアプリ開発を勉強して、今のプロジェクト（2022年10月~）に活躍できるようになるため


参考書籍
* 限りある時間の使い方

## 使用する技術

* React
* Laravel9
* MySQL

【未確定】
インフラ
* レンタルサーバー
* AWS EC2 RDS


## 機能

無駄生成・登録画面
* 無駄なことを登録できる
* 無駄なことを登録する作業に使った時間を計上する

#### 画面の種類
【必須】
* トップメニュー
* 無駄生成・登録画
* 無駄更新画面
* 過去の無駄更新画面　【一番無駄そう】

【可能であれば】
* ログイン画面
* ユーザー情報　確認画面
* ユーザー情報　登録画面
* ユーザー情報　更新画面


#### 共通仕様
* メインカラー　lightslategray
* サブカラー　　gray

* クローン後のコマンド

docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs