トラブルシューティング
===============

ASReview LAB は高度な機械学習ソフトウェアです。状況によっては予想外の動作に
遇遇することがあります。一般的な問題の解決策については以下を参照してください。

不明なコマンド "pip"
---------------------

コマンドラインが以下のメッセージのいずれかを返す場合：

.. code:: bash

  -bash: pip: No such file or directory

.. code:: bash

  'pip' is not recognized as an internal or external command, operable program or batch file.

まず、以下のコマンドで Python がインストールされているか確認してください：

.. code:: bash

    python --version

これがバージョン番号を返さない場合、Python はインストールされていないか、
正しくインストールされていません。

おそらく環境変数が正しく設定されていません。ASReview ウェブサイトのステップバイステップ
インストール手順に従ってください（`Windows <https://asreview.ai/download/>`__ および
`MacOS <https://asreview.ai/download/>`__）。

しかし、コマンドの前に `python -m` を追加することで、間違った環境変数を解決する
簡単な方法があります。例えば：

.. code:: bash

  python -m pip install asreview


不明なコマンド "asreview"
--------------------------

状況によっては、インストール後にエントリーポイント "asreview" が見つからないことがあります。
まずパッケージが正しくインストールされているか確認してください。`python -m asreview -h`
コマンドでこれを行います。これがプログラムの説明を表示する場合は、すべてのコマンドの
前に `python -m` を使用してください。例えば：

.. code-block:: bash

  python -m asreview lab


ビルド依存関係エラー
---------------------

コマンドラインが以下のメッセージを返す場合：

.. code:: bash

  "Installing build dependencies ... error"

このエラーは通常、お使いのPythonインストールのバージョンが非常に最近リリースされた
ものである場合に発生します。このため、ASReviewの依存関係がまだお使いのPython
インストールと互換性がありません。代わりに、2番目に最新のPythonバージョンを
インストールすることをお勧めします。Pythonおよび（ASReview LAB）のインストールに関する
詳細なステップバイステップ手順が `Windows <https://asreview.ai/download/>`__ および
`MacOS <https://asreview.ai/download/>`__ ユーザー向けに用意されています。
