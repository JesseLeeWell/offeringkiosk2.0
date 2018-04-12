1.- put a copy of Offering Kiosk-Info.plist into platforms/ios/Offering Kiosk folder
2.- update _kioskversion number in platforms/ios/www/js/settings.js
3.- open platforms/ios/Offering Kiosk.xcodeproj in XCode and add 1024 icon on resources/images.xcassets (app store icon and apple watch store icon)
4.- go to project settings, open general tab and set bunddle identifier to com.company.continuetogive
5.- update app version (same as in settings.js)
6.- update build version (every new compilation needs to increase this number)
7.- go to info tab and make sure that key - value "Privacy - Photo Library Usage Description" is set