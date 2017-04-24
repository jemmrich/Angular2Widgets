# Angular2Widgets

## Purpose
This is a proof-of-concept project that loads a single instance of Angular2, while allowing you to build and render Angular2 components and place them outside of the Angular2 application root, ultimately allowing you to create Angular2 widgets available to static multipage or single page web pages.

The use case for a solution like this is for allowing developers to add Angular2 components to a Wordpress or similar site, much like a widget or series of widgets that are still capable of sharing services and communicating with each other.

It also demonstrates how you might pass data to the component using `data-` attributes since input binding is not available in this architecture.

This project uses Angular Cli.

## The Problem
There are a few problems that this project solves:

* If you want to include your Angular2 components inside an already developed page you could bootstrap each of them, however you will see that a new instance of Angular2 will be created for each.

* If you bootstrap your main app component on the body selector, Angular2 will remove all the content within and load your app there. Obviously, not what we want when we just want to plug widgets in throughout the body of a Wordpress or similar site.

* I didn't really need an interface for the root component so I wanted to have no template for it and you can't bootstrap directives directly either.

* The solution has to be easy to install and use for end users of a theme. This solution is just adding the root application tag to the body and using the widget tags as desired.

## Usage
Include the `<app-root></app-root>` tag at the bottom of the body tag. This is the main application context.

Place `<helloworld></helloworld>` tags where ever you want in your static html page.

## Install
```
npm install
ng serve
```

## Build
```
ng build
```
