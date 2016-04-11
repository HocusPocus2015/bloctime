###Bloctime - a time :hourglass: management application based on the Pomodoro :tomato: technique

The [Pomodoro] (http://caps.ucsd.edu/Downloads/tx_forms/koch/pomodoro_handouts/ThePomodoroTechnique_v1-3.pdf) Technique aims to increase your work productivity and quality. In its simplest form, you time your work in 25-minute intervals, with five-minute breaks in between. After four consecutive work session you will be awarded with a longer 30-minute break.

![Output sample] (https://github.com/HocusPocus2015/bloctime/blob/master/app/assets/images/bloctime.gif) 

User Stories | 
------------ | 
A user can start and reset a 25-minute work session |
After each comepleted work session, the user can I want to start and reset a five-minute break	|
After every four completed work sessions, a user can start and reset a longer, 30-minute break.	|
Users can see a live timer during work sessions and breaks	|
Users can hear a sound at the end of work sessions and breaks	|
Users can record completed tasks	|
A history of tasks is presented in reverse chronological order	|

####General Notes
+ This app was built using AngularJS and [Firebase](https://www.firebase.com/).
+ Sound Library: [Buzz](http://buzz.jaysalvat.com/documentation/buzz/) 

####Configuration Notes

The project uses [Grunt](http://gruntjs.com/) to run tasks in development. 
Run the application using the Gruntfile's `default` task:
```
$ grunt
```
Install the project dependencies by running:
```
$ npm install
```

A list of the Grunt plugins in this application. | 
------------ | 
[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected. |
[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from development folders and puts them in the folder that will be served with the frontend of your application. |
[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in the distribution folder (`dist`) so that logic in stylesheets, templates, or scripts isn't accidentally overridden by previous code in the directory. |
[Grunt Hapi](https://github.com/athieriot/grunt-hapi) runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node web application framework with robust configuration options. |


Made with the help of wonderful people :gift_heart: at [bloc](http://bloc.io).
