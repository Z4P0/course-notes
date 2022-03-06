# Course Notes

Simple template to write notes in HTML — nothing to install, no server required. Review your notes directly in a browser or in a [Quick Look window on Mac by pressing `Spacebar`](https://support.apple.com/guide/mac-help/view-and-edit-files-with-quick-look-mh14119/mac).



## Getting Started

- Download the zip file
- Use [degit](https://github.com/Rich-Harris/degit)

### Project Setup

`index.html` is the table of contents and each lesson in a course would have it's own file: `lesson-1.html`, `lesson-2.html`, `lesson-3.html`, etc. `_lesson.html` is a template file to make lesson pages.



## Why?

Writing notes helps you retain information and while writing notes by hand might be better, it's also really slow.

### Why not markdown?

Quick Look on Mac can't read Markdown files so it only shows a generic file icon. Quick Look can read HTML files, and style them. HTML is also purpose built for expressing human thought in a digital format.

### Why not something like 11ty?

11ty is great but needs a web server, which on a local machine means running `npm install` and having a `node_modules` folder for a couple of web pages.

If you write notes in Markdown, run into the previous issue of Quick Look not being able to read Markdown files. Even if you create HTML files you still need to run the server because of how URLs are written with 11ty.

An earlier version of this project was made with 11ty. Full disclaimer, I'm a huge 11ty fan.

### Why not Notion?

Notion seems cool, but it's not for me.
