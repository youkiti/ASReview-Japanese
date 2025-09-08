<!-- ASReview LAB v2 Banner -->
<p align="center">
  <img width="60%" height="60%" src="https://raw.githubusercontent.com/asreview/asreview-artwork/refs/heads/master/LogoASReview/asreview_logo_light.svg">
</p>

<br/>

<p align="center">
  <b>🎉 ASReview LAB v2 is here! 🎉</b><br>
  <i>Faster, smarter, and more flexible than ever before.<br>
  Discover the new AI models, improved workflow, and enhanced user experience.<br>
  </i>
</p>

<br/>

<p align="center">
  <a href="https://asreview.nl/download"><img src="https://img.shields.io/badge/Installation-FFCD00?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzIwIDI4MC01MjBsNTYtNTggMTA0IDEwNHYtMzI2aDgwdjMyNmwxMDQtMTA0IDU2IDU4LTIwMCAyMDBaTTI0MC0xNjBxLTMzIDAtNTYuNS0yMy41VDE2MC0yNDB2LTEyMGg4MHYxMjBoNDgwdi0xMjBoODB2MTIwcTAgMzMtMjMuNSA1Ni41VDcyMC0xNjBIMjQwWiIvPjwvc3ZnPg=="/></a>
  <a href="https://asreview.readthedocs.org"><img src="https://img.shields.io/badge/Documentation-FFCD00?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zMjAtMjQwaDMyMHYtODBIMzIwdjgwWm0wLTE2MGgzMjB2LTgwSDMyMHY4MFpNMjQwLTgwcS0zMyAwLTU2LjUtMjMuNVQxNjAtMTYwdi02NDBxMC0zMyAyMy41LTU2LjVUMjQwLTg4MGgzMjBsMjQwIDI0MHY0ODBxMCAzMy0yMy41IDU2LjVUNzIwLTgwSDI0MFptMjgwLTUyMHYtMjAwSDI0MHY2NDBoNDgwdi00NDBINTIwWk0yNDAtODAwdjIwMC0yMDAgNjQwLTY0MFoiLz48L3N2Zz4="/></a>
  <a href="https://asreview.app"><img src="https://img.shields.io/badge/Live_Demo-C00A35?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMDAtMTIwcS0zMyAwLTU2LjUtMjMuNVQxMjAtMjAwdi01NjBxMC0zMyAyMy41LTU2LjVUMjAwLTg0MGg1NjBxMzMgMCA1Ni41IDIzLjVUODQwLTc2MHY1NjBxMCAzMy0yMy41IDU2LjVUNzYwLTEyMEg2MDB2LTgwaDE2MHYtNDgwSDIwMHY0ODBoMTYwdjgwSDIwMFptMjQwIDB2LTI0NmwtNjQgNjQtNTYtNTggMTYwLTE2MCAxNjAgMTYwLTU2IDU4LTY0LTY0djI0NmgtODBaIi8+PC9zdmc+&logoColor=white"/></a>
</p>
</br>

# ASReview LAB 日本語版 (Japanese Fork)

> **注意**: これは ASReview LAB の非公式日本語フォークです。
> 
> このリポジトリは、2025年9月8日にClaude Code を使用してフォークされ、ユーザーインターフェースを日本語に完全に翻訳したものです。オリジナルのASReview LABの全ての機能を維持しながら、日本のユーザーがより使いやすいように日本語化されています。
>
> **オリジナル版**: [asreview/asreview](https://github.com/asreview/asreview)

## 日本語版インストール方法

### GitHub から直接インストール

フォーク版（日本語化）を GitHub から直接インストールすることができます：

```bash
# 基本インストール
pip install -U "asreview @ git+https://github.com/youkiti/ASReview-Japanese@main"

# 依存一式を入れたい場合は [all] の extras を付けて指定
pip install -U "asreview[all] @ git+https://github.com/youkiti/ASReview-Japanese@main"

# Google Colab などで ngrok も併せて使用する場合
pip install -U pyngrok
```

### 日本語ドキュメント

日本語に翻訳されたユーザーマニュアルは以下からご利用いただけます：

- **[インストール手順](docs/source/lab/installation.rst)** - ASReview LAB のインストール方法
- **[開始方法](docs/source/lab/start.rst)** - ASReview LAB の起動と基本設定
- **[プロジェクト作成](docs/source/lab/project_create.rst)** - 新しいレビュープロジェクトの作成方法
- **[スクリーニング](docs/source/lab/screening.rst)** - レコードのスクリーニング手順
- **[データフォーマット](docs/source/lab/data_format.rst)** - サポートされているデータ形式
- **[AIモデル](docs/source/lab/models.rst)** - 利用可能なAIモデルの説明
- **[進捗監視](docs/source/lab/progress.rst)** - 進捗の確認と結果のエクスポート
- **[トラブルシューティング](docs/source/lab/troubleshooting.rst)** - よくある問題と解決方法

---

## ASReview LAB: Active Learning for Systematic Reviews

**ASReview LAB** is an open-source machine learning tool for efficient,
transparent, and interactive screening of large textual datasets. It is widely
used for systematic reviews, meta-analyses, and any scenario requiring
systematic text screening.

The key features of **ASReview LAB** are:

- **Active Learning**: Interactively prioritize records using AI models that
  learn from your labeling decisions.
- **Scientifically validated**: ASReview LAB has been scientifically validated
  and published in [Nature Machine
  Intelligence](https://doi.org/10.1038/s42256-020-00287-7).
- **Flexible AI Models**: Choose from pre-configured ELAS models or build your
  own with custom components.
- **Simulation toolkit**: Assess model performance on fully labeled datasets.
- **Label Management**: All decisions are saved automatically; easily change
  labels at any time.
- **User-Centric Design**: Humans are the oracle; the interface is transparent
  and customizable.
- **Privacy First**: Everything is open source and no usage or user data is
  collected.

---

### What's New in Version 2?

On May 14th, ASReview LAB version 2 was released with a large set of new
features. The most notable new features are:

- **New ELAS AI Models**: Pre-configured, high-performance (+24%) models for
  different use cases (Ultra, Multilingual, Heavy). More new and exciting models
  can now be found in our new [ASReview
  Dory](https://github.com/asreview/asreview-dory) extension.
- **Improved User Experience**: The interface is faster, progress monitoring is
  better, and there are more customization options (such as dark mode, font
  size, and keyboard shortcuts).
- **ASReview LAB Server with crowd screening**: Screen a single project with
  multiple experts. All users interact with the same AI model.
- **Quick project setup**: Start screening new datasets in seconds using the
  quick setup for projects.
- **Add customizable tags**: Add tags and groups of tags to your records and
  label decisions. This makes data extraction much easier!
- **Improved simulation API**: The new and flexible simulation API opens up a
  whole new simulation potential. It is a perfect tool for hunting for even
  better-performing models.

---

## Installation

Requires Python 3.10 or later.

```bash
pip install asreview
```

Upgrade:

```bash
pip install --upgrade asreview
```

For Docker and advanced installation, see the [installation
guide](https://asreview.readthedocs.io/en/stable/lab/installation.html).

Latest version of ASReview LAB: [![PyPI
version](https://badge.fury.io/py/asreview.svg)](https://badge.fury.io/py/asreview)



## The ASReview LAB Workflow

1. **Import Data**: Load your dataset (CSV, RIS, XLSX, etc.).
2. **Create Project**: Set up a new review or simulation project.
3. **Select Prior Knowledge**: Optionally provide records you already know are
   relevant or not relevant.
4. **Start Screening**: Label records as Relevant or Not Relevant; the AI model
   continuously improves.
5. **Monitor Progress**: Use the dashboard to track your progress and decide
   when to stop.
6. **Export Results**: Download your labeled dataset or project file.

[![ASReview
LAB](https://github.com/asreview/asreview/blob/main/images/ASReviewWebApp.png?raw=true)](https://asreview.readthedocs.io/en/stable/lab/about.html
"ASReview LAB")

---

## Documentation & Resources

- [Documentation](https://asreview.readthedocs.io/)
- [Video tutorials](https://www.youtube.com/@ASReview)
- [AI models of ASReview
  LAB](https://asreview.readthedocs.io/en/latest/lab/models.html)
- [FAQ](https://github.com/asreview/asreview/discussions?discussions_q=sort%3Atop)
- [Live Demo](https://asreview.app)


## Citation

If you wish to cite the underlying methodology of the ASReview software, please
use the following publication in Nature Machine Intelligence:

> van de Schoot, R., de Bruin, J., Schram, R. et al. An open source machine
> learning framework for efficient and transparent systematic reviews. Nat Mach
> Intell 3, 125–133 (2021). https://doi.org/10.1038/s42256-020-00287-7

For citing the software, please refer to the specific release of the ASReview
software on Zenodo: https://doi.org/10.5281/zenodo.3345592. The menu on the
right can be used to find the citation format you need.

For more scientific publications on the ASReview software, go to
[asreview.ai/papers](https://asreview.ai/papers/).

## Community & Contact

The best resources to find an answer to your question or ways to get in contact
with the team are:

- [Newsletter](https://asreview.ai/newsletter/subscribe)
- [FAQ](https://github.com/asreview/asreview/discussions?discussions_q=sort%3Atop)
- [Community events](https://asreview.ai/events)
- [Issues or feature requests](https://github.com/asreview/asreview/issues)
- [Donate to ASReview](https://asreview.ai/donate)
- [Contact](mailto:asreview@uu.nl) (asreview@uu.nl)

## License

The ASReview software has an Apache 2.0 [LICENSE](LICENSE). The ASReview team
accepts no responsibility or liability for the use of the ASReview tool or any
direct or indirect damages arising out of the application of the tool.
