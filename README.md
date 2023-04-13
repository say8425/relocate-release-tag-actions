# Relocate Release Tag Action

This GitHub Action automatically adds or relocates Git tags (e.g. `v1` and `v1.2`)
to your repository when a new release is created with a new Semantic Versioning tag (e.g. `v1.2.3`).

## Usage

```yaml
name: Release
on:
  release:
    types:
     - published

jobs:
  release-github-actions:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Relocate Release Tag
        uses: say8425/relocate-release-tag-actions@v1
```

## Motivation

![action-release-versioning](https://github.com/actions/toolkit/raw/main/docs/assets/action-releases.png)

GitHub Actions is a great tool for automating your workflow. However, it is not easy to use the latest version of your action. 
GitHub Actions does not support the `@latest` tag, and it is not recommended to use the `@main` tag, but [GitHub recommends using the `@v1` tag](https://github.com/actions/toolkit/blob/main/docs/action-versioning.md#versioning).
So, you need to manually add or update the tag of your action when you release a new version.
This GitHub Action automatically adds or relocates Git tags (e.g. `v1` and `v1.2`)
to your repository when a new release is created with a new Semantic Versioning tag (e.g. `v1.2.3`).
So, your action can be used with the `@v1` or `@v1.2` tag.

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE.txt).
