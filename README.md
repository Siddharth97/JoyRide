# JoyRide

This App is built in Ionic which runs on top of Angular meaning that that this app can be deployed to both Android and IOS.

The Google Maps API key aquired for this project was for Android so it is advisable to run it as a deployment on android to have the Google maps running.

command to run it in browser:
ionic serve      (Note: the api key is for android so Google maps wont function in browser)

Steps to Generate an Android Deployment:
1. npm install
2. ionic cordova platform add android
3. cordova plugin add cordova-android-play-services-gradle-release --variable PLAY_SERVICES_VERSION=15.0.0 --fetch

Note in the build.gradle generated you have to reposition the jcenter() to be at the end of the repository or else the build will fail, this is described here:
https://stackoverflow.com/questions/50563407/could-not-find-play-services-basement-aar

4. ionic cordova run android / ionic cordova build android

This will generate a built deployment for Android which you can test in Android Studio using an Emulator.
