進捗と結果
==============

スクリーニング中に、進捗を追跡し、停止基準の情報を得たい場合があります。このセクションでは、
これらの目的に役立つツールに関するドキュメントを提供します。

ダッシュボード
-----------

ASReview LAB は進捗を監視するのに役立つ洞察に富んだ統計とチャートを提供しています。

ダッシュボードを開くには：

1. :doc:`start`。
2. 左のメニューで *ダッシュボード* をクリック。

すべての統計とチャートについて、統計またはチャートの右上隅にあるランプアイコンを
クリックすることで、どのように動作するかの情報を確認できます。統計やチャートに関する
質問がある場合は、ディスカッションプラットフォーム https://github.com/asreview/asreview/discussions でお気軽にお尋ねください。


.. figure:: ../../images/fullscreen_projects.png
   :alt: ASReview LAB progress Dashboard

   停止基準にもう少しで到達しそうなレビューのダッシュボード。


スクリーニングの停止
-----------------

On the dashboard, you can set a stopping criteria for your screening. The
stopping criterium is a threshold for the number of *not relevant* records since
the last *relevant* record. If you reach this threshold, you will be asked to stop
screening. You can decide to stop screening or to continue. As you will most likely see more not relevant records the longer you screen, the
stopping criteria is a useful tool to help you decide when to stop screening.

The stopping treshold is not set by default. You can set the stopping criteria
by clicking on the *Set threshold* button in the top right corner of the
dashboard. The circle will turn dark when the threshold is reached. You can set
the stopping criteria to any number you like. Choose the treshold that works
best for you. Base the threshold on your own experience or simulation studies on
simular topics. The ideal threshold is still actively researched.


In a popular discussion on the ASReview Discussion platform, `How to stop screening?
<https://github.com/asreview/asreview/discussions/557>`_, several stopping strategies
are discussed.

.. tip::

  The wave plot shows the "waves" of irrelevant records. The larger the waves,
  the more irrelevant records you have seen and the more likely you are ready to
  stop. The wave plot displays the threshold you set.


プロジェクトを完了としてマーク
-----------------------------

When you decide to stop screening, you can mark the project as finished. You can
undo this at any time. To mark your project as finished:

1. :doc:`start`.
2. Open the project you want to mark as finished.
3. Click on *Dashboard* if you are not there yet.
4. Click on *In review* in the top right corner of the dashboard.
5. Click on *Mark as finished*.

Continuing screening is now disabled. This can be undone by clicking again on
*Finished* and resume the review.

.. tip::

  You can find some interesting estimates of the time saved on the dashboard
  after marking the project as finished.


データセットのエクスポート
------------------------------

スクリーニングプロセスの途中いつでもデータセットをエクスポートできます。これにはあなたが
提供したラベル、インポートしたデータ、およびいくつかの追加変数が含まれます。
RIS、CSV、TSV、またはExcelファイルとしてデータセットをエクスポートできます。

データセットをダウンロードするには、以下の手順に従ってください：

1. :doc:`start`。
2. プロジェクトを開く。
3. 左のメニューで *コレクション* をクリック。
4. 画面右上隅の *エクスポート* ボタンをクリック。
5. エクスポートしたいレコードを選択。
6. *エクスポート* をクリック。

.. note::

    A RIS file can only be exported if a RIS file is imported.



Variables in the exported dataset
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The exported dataset contains the labels you provided during screening, the
data you imported, and some additional variables. The following table lists the
additional variables that are included in the exported dataset:


.. list-table:: Variables in the exported dataset
  :header-rows: 1

  * - Variable
    - Description
  * - **asreview_label**
    - Contains the labels provided by the user: ``1`` for relevant, ``0`` for
      not relevant, and missing if the record was not seen during screening.
  * - **asreview_time**
    - Contains the datatime of the screening decision.
  * - **asreview_note**
    - Contains any notes made by the user during screening.
  * - **asreview_user_name**
    - Contains the name of the user who made the screening decision (if
      applicable).
  * - **asreview_user_email**
    - Contains the email of the user who made the screening decision (if
      applicable).

For RIS files, the variables are stored in the N1 (Notes) field. The
**asreview_label** variable is stored with the `ASReview_relevant` and
`ASReview_irrelevant` tags to find them easily via search option in a reference
manager.

Order of the records in the exported dataset
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The file is ordered as follows:

1. All relevant records you have seen in the order they were shown during the
   screening process.
2. All records not seen during the screening and ordered from most to least
   relevant according to the last iteration of the model.
3. All non-relevant records are presented in the order these are shown during
   the screening process.
