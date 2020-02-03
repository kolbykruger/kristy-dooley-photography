(function() {
    WebFontConfig = {
      active: function() {
        sessionStorage.fonts = true;
      },
      google: {
        families: ['Roboto:300,300i,400,400i,500,600,700']
      },
      custom: {
        families: [
            'sanies-script',
        ],
        urls: [
            '../fonts/sanies-script/sanies-script.css'
        ]
      },
      timeout: 2000
    };

    (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
})();
