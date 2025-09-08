インストール
============

ASReview LAB のインストール
---------------------

ASReview LAB は Python 3.10 以上が必要です。Python と ASReview LAB のインストールに関する詳細な手順が
`Windows <https://asreview.ai/download>`__ および `macOS/Linux
<https://asreview.ai/download/>`__ ユーザー向けに用意されています。

Pip を使用して ASReview LAB をインストールするには、`CMD.exe`（Windows）または
`Terminal`（macOS/Linux）で以下のコマンドを実行してください：

.. code:: bash

    pip install asreview

アプリケーションを開始するには、`CMD.exe` または `Terminal` で以下のコマンドを実行してください：

.. code:: bash

    asreview lab

ASReview LAB アプリケーションがブラウザで開きます。ASReview LAB の開始に関する詳細なオプションは
:doc:`start` を参照してください。

.. note::

    一般的なインストールの問題の解決策については :doc:`troubleshooting` を参照してください。


ASReview LAB のアップグレード
---------------------

ASReview LAB をアップグレードするには、以下を実行してください：

.. code:: bash

    pip install --upgrade asreview


ASReview LAB のアンインストール
-----------------------

ASReview LAB をアンインストールするには、以下を実行してください：

.. code:: bash

    pip uninstall asreview

確認を求められたら ``y`` を入力してください。

.. warning::

    ASReview LAB をアンインストールしてもプロジェクトファイルは削除されません。これらのファイルは
    ホームディレクトリの `.asreview` フォルダに保存されています。


サーバーインストール
-------------------

ASReview LAB はサーバーやカスタムドメインで実行できます。設定には `ip` と `port` フラグを
使用してください。ASReview LAB はクローズドネットワークでのみ使用すべきです。

.. code:: bash

    asreview lab --port 5555 --ip xxx.x.x.xx

.. warning::

    本番環境で使用する場合は、ASReview LAB Server の
    :doc:`../server/installation` の手順に従うことをお勧めします。


Docker でのインストール
-------------------

ASReview LAB は Docker コンテナとしても利用できます。マシンに Docker がインストールされて
いることを確認してください。

http://localhost:5000 で ASReview LAB をインストールして開始するには、以下を実行してください：

.. code:: bash

    docker run -p 5000:5000 ghcr.io/asreview/asreview:latest lab

高度なコマンドラインオプションは以下のように渡すことができます：

.. code:: bash

    docker run -p 9000:9000 ghcr.io/asreview/asreview lab --port 9000

.. tip::

    ASReview LAB のインストールが完了しました。ウェブブラウザで ``http://localhost:5000`` を
    開いて開始してください。


ローカルボリュームのマウント
~~~~~~~~~~~~~~~~~~

コンテナをローカルプロジェクトフォルダ（または他のフォルダ）にマウントするには、
`-v` フラグを使用します。`path-to-your-folder` をローカルフォルダのパスに置き換えてください。
プロジェクトフォルダが指定されると、ASReview LAB はこのフォルダからすべてのプロジェクトを
保存および読み込みします。複数のコンテナが同じフォルダにアクセスできます。

.. code:: bash

    docker run -p 5000:5000 -v path-to-your-folder:/project_folder
    ghcr.io/asreview/asreview lab


名前付きコンテナ
~~~~~~~~~~~~~~~

使用を簡単にするため、名前付きコンテナを作成します：

.. code:: bash

    docker create --name asreview-lab -p 5000:5000 -v
    path-to-your-folder:/project_folder ghcr.io/asreview/asreview lab

ASReview LAB を開始するには、以下を実行してください：

.. code:: bash

    docker start asreview

停止するには `start` を `stop` に置き換えてください。実行中のコンテナは
`docker ps` で確認できます。


イメージのカスタマイズ
~~~~~~~~~~~~~~~~~~~

エクステンションを追加したり、Docker イメージを自分でビルドしたりするには、
`Dockerfile <https://github.com/asreview/asreview/blob/main/Dockerfile>`__ を編集してください。
変更後、以下でイメージをビルドして実行してください：

.. code:: bash

    docker build -t asreview/asreview:custom . docker run -p 5000:5000
    ghcr.io/asreview/asreview:custom lab
