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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.5",
    "com.wodify.cordova.plugin.unimag-swiper": "0.0.2"
};
// BOTTOM OF METADATA
});