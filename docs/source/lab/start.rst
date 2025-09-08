ASReview LAB の開始
==================

ASReview LAB をインストールした後、コマンドラインからプログラムを開始して
使用を開始してください。

.. code:: bash

	asreview lab

Windows を使用している場合は `CMD.exe` を開いてコマンドを実行してください。MacOS や Linux を
使用している場合は `Terminal` を開いてコマンドを実行できます。

ASReview LAB を開始または設定するための高度なオプションについては、以下のセクションを
お読みください。

ASReview LAB 開始のためのコマンドライン引数
------------------------------------------------

ASReview LAB は、他のオプションで ASReview LAB を実行したり、シミュレーションのようなタスクを
実行するための強力なコマンドラインインターフェースを提供します。ASReview LAB で利用可能な
コマンドのリストは、:code:`asreview lab --help` と入力してください。

:program:`asreview lab` は ASReview LAB ソフトウェア（フロントエンド）を起動します。

.. code:: bash

   asreview lab [options]



.. program:: asreview lab

.. option:: -h, --help

	ヘルプメッセージを表示して終了します。

.. option:: --host HOST

    サーバーがリッスンするホスト/IPアドレスです。

.. option:: --port PORT

	サーバーがリッスンするポートです。

.. option:: --enable-auth ENABLE_AUTH

	認証を有効にします。非推奨。

.. option:: --secret-key SECRET_KEY

	認証用のシークレットキーです。非推奨。

.. option:: --salt SALT

	認証を使用する際、パスワードのハッシュ化にソルトコードが必要です。

.. option:: --config-path CONFIG_PATH

    ASReview パラメータを含む TOML ファイルへのパスです。

.. option:: --no-browser NO_BROWSER

	起動後にブラウザで ASReview LAB を開かないようにします。

.. option:: --port-retries NUMBER_RETRIES

	指定したポートが使用できない場合に試す追加ポートの数です。

.. option:: --certfile CERTFILE_FULL_PATH

    SSL/TLS 証明書ファイルへのフルパスです。

.. option:: --keyfile KEYFILE_FULL_PATH

    SSL/TLS で使用する秘密鍵ファイルへのフルパスです。

.. option:: --skip-update-check

	更新チェックをスキップします。


環境変数の設定
-------------------------

以下の環境変数が利用可能です。

.. option:: ASREVIEW_PATH

	プロジェクトを含むフォルダへのパスです。デフォルトは `~/.asreview` です。


環境変数の設定方法は、オペレーティングシステムと ASReview LAB をデプロイする
環境によって異なります。

MacOS や Linux オペレーティングシステムでは、コマンドラインから環境変数を設定できます。
例えば：

.. code:: bash

    export ASREVIEW_PATH=~/.asreview

Windows では、以下の構文を使用できます：

.. code:: bash

	set ASREVIEW_PATH=~/.asreview

環境変数が正常に設定されたかを確認するには、\*nix オペレーティングシステムでは
以下を実行してください：

.. code:: bash

	echo $ASREVIEW_PATH

または Windows オペレーティングシステムでは以下を実行してください：

.. code:: bash

	echo %ASREVIEW_PATH%


異なるポートで localhost 上の ASReview LAB を実行
---------------------------------------------------

デフォルトでは、ASReview LAB はポート 5000 で実行されます。そのポートが既に使用中であるか、
異なるポートを指定したい場合は、以下のコマンドで ASReview LAB を開始してください：

.. code:: bash

	asreview lab --port <port>

例えば、ASReview LAB をポート 5001 で開始する場合：

.. code:: bash

	asreview lab --port 5001



認証付きローカルサーバー
--------------------------------

.. note:: 本番環境での使用には Docker セットアップの使用をお勧めします。詳細については
   :doc:`../server/overview` セクションを参照してください。

認証付き ASReview LAB アプリケーションの最も基本的な設定は、CLI から ``--enable-auth`` フラグを
付けてアプリケーションを実行することです。アプリケーションは認証が有効な状態で開始され、
存在しない場合は SQLite データベースを作成します。データベースは ASReview プロジェクト
フォルダに保存されます。データベースにはユーザーアカウントが含まれ、プロジェクトにリンクされます。

認証を有効にしてアプリケーションを開始します：

.. code:: bash

    asreview lab --enable-auth --secret-key=<secret key> --salt=<salt>

ここで ``--enable-auth`` はアプリケーションを認証モードで実行することを強制し、
``<secret key>`` はクッキーの暗号化に使用される文字列、``<salt>`` はパスワードのハッシュ化に
使用される文字列です。認証が必要な場合、``--secret-key`` および ``--salt`` パラメータは必須です。

ユーザーアカウントを作成するには、ASReview アプリケーションの ``auth-tool`` サブコマンドの
``add-users`` コマンドを使用できます：

.. code:: bash

    asreview auth-tool add-users

auth-tool とユーザー作成についての詳細は、以下の
`ユーザーアカウントの作成 <#create-user-accounts-with-auth-tool>`_ セクションを参照してください。
