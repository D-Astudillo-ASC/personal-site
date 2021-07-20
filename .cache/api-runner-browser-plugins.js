module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"DanielDev","short_name":"DanDev","description":"Daniel Astudillo's Personal Site","start_url":"/","background_color":"#6b37bf","theme_color":"#6b37bf","display":"standalone","icon":"src/images/icon.png","crossOrigin":"use-credentials","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","include_favicon":true,"cacheDigest":"b861aa7ce402aa505677dcd433631016"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-preact/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
