# home screen
<img src="https://github.com/stnc/ReactNative-Navigation-Tut/blob/master/example_img/n1.png?raw=true" alt="home.png">

# news screen
<img src="https://github.com/stnc/ReactNative-Navigation-Tut/blob/master/example_img/n2.png?raw=true" alt="electoinc.png">

# edit screen
<img src="https://github.com/stnc/ReactNative-Navigation-Tut/blob/master/example_img/n3.png?raw=true" alt="card.png">

# login screen 
<img src="https://github.com/stnc/reactnativePrj/blob/master/dummy/login.png?raw=true" alt="login.png">



#  MY Branch list

 ## 1- react native wordpress login 
 
 https://github.com/stnc/reactnativePrj/tree/feature/WP_login
 
 ##  2- react native firebase 
  
 https://github.com/stnc/reactnativePrj/tree/feature_firebase

 ##  3- react native php rest api login 
 
 https://github.com/stnc/reactnativePrj/tree/feature_login

  ##  4- react navigation
  https://github.com/stnc/reactnativePrj/tree/feature_react-navigation-and-fetch
  
  advanced base 
  https://github.com/stnc/ReactNative-Navigation-Tut
  
  ##  5- react native redux 
  https://github.com/stnc/reactnativePrj/tree/feature_redux
  
# PROBLEM FIX NOTES (for ios)

watchman watch-del-all; kill $(lsof -t -i:8081)

rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios

##  cache clear 
watchman watch-del-all; kill $(lsof -t -i:8081); react-native start --reset-cache

##  new ios and android folder

rm -rf node_modules;
rm -rf ios;
rm -rf android;
yarn install;
rm -rf ios/build/; kill $(lsof -t -i:8081); 
react-native upgrade --legacy true;
cd ios;
pod install;
react-native run-ios

##  error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65 

Go to project settings in Xcode. Menu File->Project Settings

Go to per-User Project Settings section.

Click on advanced.

Select Xcode Default option. previously this used to be Legacy for my project.

rm -rf node_modules;
yarn install;
rm -rf ios/build/; 
kill $(lsof -t -i:8081); 
cd ios;
pod install;
cd ..;
react-native run-ios;
## or
rm -rf node_modules;
npm install;
rm -rf ios/build/; 
kill $(lsof -t -i:8081); 
cd ios;
pod install;
cd ..;
react-native run-ios;

##  No bundle URL present.

rm -rf node_modules; yarn install;
rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios

## null is not an object (evaluating '_RNGestureHandlerModule.default.Direction')
  watchman watch-del-all;   kill $(lsof -t -i:8081);  react-native start --reset-cache;




NOTES LINKS

https://appdividend.com/2018/08/20/javascript-fetch-api-example-tutorial/


https://github.com/imranhsayed/react-with-wordpress/blob/login-with-jwt-wordpress-plugin/src/components/Login.js


https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801

api security
https://wpcerber.com/restrict-access-to-wordpress-rest-api/





