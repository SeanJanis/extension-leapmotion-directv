Leap Motion DIRECTV Controller (Google Chrome extension)
==============

Chrome extension for controlling your DIRECTV Set Top box with Leap Motion.


## Quick start

Start by reading the Chrome Extension tutorial: 
[Getting Started: Building a Chrome Extension](http://developer.chrome.com/extensions/getstarted.html)

To debug Chrome Extension:
- Navigate to: [chrome://extensions/](chrome://extensions/)
- Ensure the 'Developer Mode' checkbox is enabled
- Click 'Load unpacked extension...'
- Select the Leap+DIRECTV code directory and Google Chrome will automatically load the extension for testing.

## Helpful hints

This app was built using AngularJS, Bootstrap 3, Animate.css and LeapJS.

## Code Structure

- Front-end AngularJS controllers found under /public/js/angular/controllers/*
- Partial templates used to render views: /public/partials

## Extras
- Uses animate.css to create smooth transitions

## Commands & Gestures

**Basic:**
+ Load Guide: Circle Gesture

**Guide:**
+ Move Down: Swipe Down
+ Move Up: Swipe Up
+ Move Left: Swipe Left
+ Move Right: Swipe Right

**DVR Playback:**
+ Pause/Stop: Stop Hand
+ Rewind: Swipe Right
+ Fast Forward: Swipe Left


## Authors

**Sean Janis**
+ [http://seanjanis.com](http://seanjanis.com)

## Thanks
+ DIRECTV Set Top API: [http://whitlockjc.github.io/directv-remote-api/](http://whitlockjc.github.io/directv-remote-api/)
+ LeapJS Tutorial: [http://js.leapmotion.com/tutorials/welcome](http://js.leapmotion.com/tutorials/welcome)


## Copyright and license

MIT
