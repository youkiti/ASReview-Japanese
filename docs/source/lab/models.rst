AIモデル
==========

ASReview LABのAIモデルは、効率的で正確な系統的レビューの原動力です。あなたの判断から学習することで、
これらのモデルは最も関連性の高いレコードに優先順位を付け、レビュープロセスに必要な時間と努力を
大幅に削減します。単一言語のデータセット、多言語データ、高度な意味理解が必要な場合に
関わらず、ASReviewはあなたのニーズに合わせた様々なモデルを提供しています。

各モデルは、レビュープロセスを最適化するために連携するコンポーネントの組み合わせから
構築されています—特徴抽出器、分類器、クエリア、バランサー。シンプルさを求める場合は
事前設定されたモデルから選択し、より大きな柔軟性が必要な場合は独自のモデルを
カスタマイズできます。このガイドは、利用可能なモデルを理解し、あなたの使用事例に最適な
モデルを選択する方法を学ぶのに役立ちます。

.. tip::

  どこから始めればよいかわからない場合？ELAS u4モデルはほとんどのユーザーにとって優秀な選択です。
  高速で効率的で、様々なデータセットで優秀な性能を発揮します。ASReview LABでデフォルトで
  利用可能です。

ELASモデル
-----------

ASReview LABのELASモデルは、様々な系統的レビューのニーズに対応するように設計された
事前設定されたAIモデルです。高速で効率的なモデル、多言語データセットを扱うモデル、
または高度な意味理解を持つモデルが必要な場合でも、ELASシリーズが対応します。
各モデルは、レビュープロセスを最適化するために連携するコンポーネントの組み合わせから
構築されています—特徴抽出器、分類器、クエリア、バランサー。

すべてのELASモデルはアクティブラーニングモデルです。これは、あなたのラベル付け決定から反復的に学習し、
最も関連性の高いレコードに優先順位を付けるために予測を動的に調整することを意味します。
アクティブラーニングにより、レビュープロセスは時間とともにより効率的になり、最も関連性が高い
可能性のあるレコードに焼点を合わせることができます。

.. list-table:: モデル概要
   :header-rows: 1

   * - モデル
     - 略名
     - 説明
     - 必要項目
   * - ELAS Ultra
     - uシリーズ
     - ほとんどの使用事例に適した高速で優秀な性能のモデル。
     - -
   * - ELAS Multilingual
     - lシリーズ
     - 多言語データセット用に設計。
     - :doc:`dory`, :ref:`ハードウェア要件 <lab/models:Hardware Requirements>`
   * - ELAS Heavy
     - hシリーズ
     - テキストの意味理解に焦点を当てたモデル。
     - :doc:`dory`, :ref:`ハードウェア要件 <lab/models:Hardware Requirements>`

ほとんどのユーザーにとって、事前設定されたELASモデルで十分です。ただし、より細かい制御が必要な場合は、
コンポーネントを組み合わせてカスタムモデルを作成できます。この柔軟性により、特定のデータセットと
研究目標に合わせてAIモデルを調整できます。カスタムモデルはASReviewと:doc:`dory`拡張機能の
両方からコンポーネントを組み合わせることができ、技術的な専門知識を持つ人に高度な
オプションを提供します。

ELAS Ultra
~~~~~~~~~~

ASReview LABのELAS Ultra AIモデルはデフォルトで最も幅広く使用されているモデルです。
高速性と効率性を目的として設計されており、ほとんどの系統的レビュータスクに理想的です。
このモデルは軽量で信頼性の高い「古典的」な機械学習手法を活用しています。これらの手法は
SciKit-learnライブラリのコンポーネントを使用して実装され、堅牢な性能を保証しています。

ELAS Ultraの主な特徴：

- **速度**: データを高速で処理し、大きなデータセットに適しています。
- **効率性**: 性能とリソース使用量のバランスが良く、ほとんどのシステムでスムーズな動作を保証します。
- **汎用性**: 幅広いデータセットと使用事例で優秀な性能を発揮します。

The following table outlines the components of the ELAS Ultra model for its
various versions:

.. list-table:: ELAS Ultra versions
  :header-rows: 1

  * - Model
    - Feature Extractor
    - Classifier
    - Querier
    - Balancer
  * - ELAS u4
    - TF-IDF (with bigrams)
    - SVM
    - Maximum
    - Balanced
  * - ELAS u3
    - TF-IDF
    - Naive Bayes
    - Maximum
    - Balanced

.. note::

  While the components of ELAS Ultra models may appear similar across versions,
  differences in their underlying parameters can significantly impact their
  performance and behavior. Use the latest version (e.g., ELAS u4) for the best
  results.

Use ELAS Ultra if you are looking for a reliable, fast, and easy-to-use model
that works well for most systematic review scenarios.

ELAS Multilingual
~~~~~~~~~~~~~~~~~

The ELAS Multilingual models are specifically designed for datasets containing
multiple languages. These models leverage advanced multilingual feature
extractors. They are ideal for systematic reviews involving multilingual
datasets, where other ELAS models may struggle with language-specific texts and
nuances.

Key features of ELAS Multilingual:

- **Multilingual Support**: Handles datasets with multiple languages seamlessly,
  supporting over 100 languages.
- **Advanced Feature Extraction**: Uses state-of-the-art multilingual feature
  extractors for better understanding of text.
- **Flexibility**: Suitable for a wide range of multilingual systematic review
  tasks.

Requirements for ELAS Multilingual:

- **Dory extension**: The ELAS Multilingual models require the :doc:`dory`
  extension for feature extraction. Install the extension using the following
  command: ``pip install asreview-dory``.
- **Hardware**: These models are computationally intensive and may require
  significant CPU or GPU power to perform efficiently, especially with large
  datasets. See the section on :ref:`Hardware Requirements <lab/models:Hardware
  Requirements>` for more details.

The following table outlines the components of the ELAS Multilingual model for
its various versions:

.. list-table:: ELAS Multilingual versions
  :header-rows: 1

  * - Model
    - Feature Extractor
    - Classifier
    - Querier
    - Balancer
  * - ELAS l2
    - multilingual-e5-large
    - SVM
    - Maximum
    - Balanced

For more information about the `multilingual-e5-large` feature extractor,
including its support for over 100 languages, visit the official documentation
on Hugging Face: https://huggingface.co/intfloat/multilingual-e5-large.

ELAS Heavy
~~~~~~~~~~

The ELAS Heavy models are designed for tasks requiring advanced semantic
understanding of text. These models utilize powerful feature extractors that
focus on the underlying meaning of the text, making them ideal for systematic
reviews where semantic context is crucial.

Key features of ELAS Heavy:

- **Semantic Understanding**: Focuses on the meaning of text rather than just
  word occurrences.
- **Advanced Feature Extraction**: Uses state-of-the-art feature extractors for
  deeper text analysis.
- **Ideal for Complex Reviews**: Suitable for datasets where semantic nuances
  play a significant role.

Requirements for ELAS Heavy:

- **Dory extension**: The ELAS Heavy models require the :doc:`dory`
  extension for feature extraction. Install the extension using the following
  command: ``pip install asreview-dory``.
- **Hardware**: These models are computationally intensive and may require
  significant CPU or GPU power to perform efficiently, especially with large
  datasets. See the section on :ref:`Hardware Requirements <lab/models:Hardware
  Requirements>` for more details.

The following table outlines the components of the ELAS Heavy model for its
various versions:

.. list-table:: ELAS Heavy versions
  :header-rows: 1

  * - Model
    - Feature Extractor
    - Classifier
    - Querier
    - Balancer
  * - ELAS h3
    - mxbai-embed-large-v1
    - SVM
    - Maximum
    - Balanced

For more information about the `mxbai-embed-large-v1` feature extractor and its
capabilities, refer to the official documentation provided in the ASReview Dory
extension.

Custom ELAS Models
~~~~~~~~~~~~~~~~~~

Custom ELAS models allow you to tailor the AI model to your specific needs by
combining different components. Each AI model in ASReview LAB is composed of
four key components that work together to rank your remaining documents:

- **Querier**: Determines which records to show you next. For example, it can
  prioritize potentially relevant records, mix in random records, or use
  uncertainty-based strategies.
- **Feature Extractor**: Converts text into numerical features that the
  classifier can interpret.
- **Classifier**: Predicts the relevance of records based on your decisions
  using the numerical features created by the feature extractor.
- **Balancer**: Handles imbalanced data to improve learning accuracy and ensure
  robust performance.

The following components are available out of the box for creating custom
models:

- **Feature Extractors**: `OneHot`, `TF-IDF`
- **Classifiers**: `Naive Bayes`, `Support Vector Machine`, `Random Forest`,
  `Logistic Regression`
- **Queriers**: `Maximum`, `Mixed (95% Maximum and 5% Random)`, `Mixed (95%
  Maximum and 5% Uncertainty)`, `Random`, `Top-down`, `Uncertainty`
- **Balancers**: `Balanced`

For advanced users, you can also integrate components from the :doc:`dory`
extension, which provides access to more powerful feature extractors and
classifiers:

- **ASReview Dory Feature Extractors**: `doc2vec`, `gtr-t5-large`, `labse`,
  `multilingual-e5-large`, `mxbai-embed-large-v1`, `sbert`
- **ASReview Dory Classifiers**: `AdaBoost`, `Neural Network - 2-Layer`, `Neural
  Network - Dynamic`, `Neural Network - Warm Start`, `XGBoost`

Tips for customization:

- Combining components from ASReview and Dory allows for highly flexible and
  powerful models. However, some feature extractors may not work with certain
  classifiers. For example, some Dory feature extractors cannot be combined with
  the ASReview Naive Bayes classifier.
- Experiment with different combinations to find the best fit for your dataset
  and research goals. You can use the simulation mode in ASReview LAB to
  evaluate the performance of different models before applying them to your
  actual dataset.
- Creating custom models requires some knowledge of how the components work.
  Start with simpler combinations and gradually explore more complex setups as
  you gain experience.

ハードウェア要件
-----------------

The hardware requirements for running AI models in ASReview LAB vary depending
on the complexity of the model. The ELAS Ultra models are lightweight and can
run efficiently on most modern systems, including laptops and desktops, without
requiring specialized hardware. In contrast, the ELAS Multilingual and ELAS
Heavy models utilize advanced machine learning techniques and feature
extractors, making them computationally intensive. These models often require
significant CPU or GPU power to perform efficiently, especially when working
with large datasets.

For optimal performance, ELAS Multilingual and ELAS Heavy models are better
suited for server installations or systems equipped with dedicated GPUs. If you
plan to use these models, ensure that your hardware includes a multi-core
processor with high clock speed and at least 16 GB of RAM. Some operating
systems will also benefit from a modern GPU for faster processing. Running these
models on underpowered hardware may result in slower performance, longer
training times, and inefficient screening.

モデル番号付け
--------------

The ELAS models are numbered with a letter and a number. The letter indicates
the type of model, and the number indicates the version. The latest version of
each model type is always the one with the highest number. For example, the
latest version of the Ultra model is denoted as ELAS uX, where X represents the
highest available version number. Not all historical versions are available in
ASReview LAB, but you can always use the latest version of the model.

モデルの変更
--------------

系統的レビューで使用するAIモデルはいつでも変更できます。モデルを切り替えると、新しいモデルが
背後で訓練を開始します。このプロセスはデータセットのサイズとモデルの複雑さによって、
ある程度の時間がかかる場合があります。ただし、新しいモデルの訓練中でも中断することなく
レコードのスクリーニングを継続できます。

モデルを変更するには、以下の手順に従ってください：

1. ASReview LABの **カスタマイズ** セクションに移動。
2. **AI** カードに移動。
3. 利用可能なオプションの一覧から希望のモデルを選択。

Once the new model is trained, it will automatically take over and start
prioritizing records based on its predictions. In the meantime, you can keep
screening records as usual.

.. note::

  Switching to a more complex model, such as those requiring the ASReview Dory
  extension, may take longer to train.
