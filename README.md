# Research guides as progressively enhanced JavaScript application

## Introduction

As part of the work to staticise WordPress pages under Cloud project we are exploring potential for existing applications to be delivered as HTML pages which are then progressively enhanced to be single-page applications with JavaScript. 

This is a proof of concept for the research guides filter functionality.

## Development environment setup 

This repository uses the development environment set-up provided in the documentation on [angular.io](https://angular.io/guide/quickstart). If you have cloned the repository, you'll need to install the Node packages listed by running the following command **from the root of this repository**:

```bash
cd research-guide-filters && npm install && cd .. 
```

Having installed the dependencies you can run the application with 

```bash
cd research-guide-filters && ng serve --open
```
