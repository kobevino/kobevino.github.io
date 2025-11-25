---
title: "Python Development Environment setup"
date: '2025-11-24'
spoiler: "brew install --cask miniconda"
---

As AI development has grown in popularity, my interest in Python has increased as well. So I decided to summarize how to set up a Python development environment locally.

## Install miniconda

```sh
# install miniconda by brew
$ brew install --cask miniconda
```

## Conda commands

```sh
# check conda version
$ conda --version
conda 25.7.0

# check conda environment information
$ conda info --envs
# conda environments:
#
base                 * /opt/homebrew/Caskroom/miniconda/base
ai                     /opt/homebrew/Caskroom/miniconda/base/envs/ai

# create conda environment 
$ conda create --name test python ipykernel

# initialize conda
$ conda init zsh
$ source ~/.zshrc

# activate 'test' environment
$ conda activate test
# deactivate 'test' environment
$ codna deactivate
# remove 'test' environment
$ conda remove --name test --all
```

## Set up vscode with conda environment

![vscode-extensions](./python-development-environment-setup/vscode-extensions.png)

First of all, I strongly recommend you should install two extension packs for VScode.

![python-execution](./python-development-environment-setup/python-execution.png)

Execute a python file in `test` conda environment.

![jupyter-notebook](./python-development-environment-setup/jupyter-notebook.png)

* `Command + Shift + p` -> Select Interpreter -> Select the environment you created

## Wrap Up

This is the first step toward developing with LLMs.