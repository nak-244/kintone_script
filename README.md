# アプリで使用するスクリプト一覧
## 入力元（子アプリ）
- record_copy.js

## 閲覧用（親アプリ）
- latest_record_show.js

# kintoneで使用するスクリプト一覧
OLPで使用するkintoneで使用する予定のスクリプトを保存する場所。

## 01_latest_record
### latest_record.js
同一企業IDの場合、最新のレコードのみを残すスクリプト。  
アプリ内で登録をする場合のみ。

### latest_record_show.js
同一企業IDの場合、最新のレコードのみを残すスクリプト。  
アプリを開いたときにスクリプトが動く。

## 02_record_copy
- いずれもフィールドIDを追加する必要があるので注意。
### record_copy.js
Aアプリで新規登録した内容を、Bアプリへ自動で登録するスクリプト。

### record_copy_table.js
Aアプリで新規登録した内容を、Bアプリへ自動で登録するスクリプト。
Aアプリの特定項目をBアプリのテーブルフィールドへ積み上げていくときに使用する。
