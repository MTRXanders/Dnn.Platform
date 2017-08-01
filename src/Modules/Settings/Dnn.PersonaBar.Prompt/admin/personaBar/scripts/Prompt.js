define(['jquery', 'main/extension', 'main/config'], function ($, ext, cf) {
    'use strict';
    var identifier;
    var utility;
    cf.init();
    var init = function (wrapper, util, params, callback) {
        identifier = params.identifier;
        utility = util;

        window.dnn.initPrompt = function initializePrompt() {
            return {
                utility: utility,
                settings: params.settings,
                moduleName: 'Prompt',
                version: "1.0.0"
            };
        };
        utility.loadBundleScript('http://localhost:8100/dist/prompt-bundle.js');

        if (typeof callback === 'function') {
            callback();
        }
    };

    var load = function (params, callback) {
        if (typeof callback === 'function') {
            callback();
        }
    };


    return {
        init: init,
        load: load
    };
});

//return {
//    init: function (wrapper, util, params, callback) {
//        identifier = params.identifier;
//        utility = util;
//        $.ajax({
//            dataType: "script",
//            cache: true,
//            url: "modules/dnn.prompt/scripts/bundles/prompt-bundle.js",
//            success: function () {
//                window.dnnPrompt = new window.DnnPrompt(vsn, wrapper, util, params);
//            },
//        });
//        if (typeof callback === 'function') {
//            callback();
//        }
//    },
//    load: function (params, callback) {
//        if (typeof callback === 'function') {
//            callback();
//        }
//    }
//};