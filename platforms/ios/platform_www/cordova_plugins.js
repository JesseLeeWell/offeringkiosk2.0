cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "com.wodify.cordova.plugin.unimag-swiper.UniMag-Swiper",
      "file": "plugins/com.wodify.cordova.plugin.unimag-swiper/www/unimag-swiper.js",
      "pluginId": "com.wodify.cordova.plugin.unimag-swiper",
      "clobbers": [
        "cordova.plugins.unimag.swiper"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.0.3",
    "com.wodify.cordova.plugin.unimag-swiper": "0.0.2",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-inappbrowser": "3.2.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});