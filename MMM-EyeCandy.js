Module.register("MMM-EyeCandy", {
    defaults: {
        maxWidth: "100%", // adjusts the image size, retains aspect ratio
        updateInterval: 1 * 60 * 1000, // display time of image in ms, default 1 min.
        animationSpeed: 3000, // animation speed in ms
        customImagePath: '', // local path to image or custom url TODO cycle over files in folder
    },


    start: function() {
        self = this;
        this.url = '';

        setInterval(function() {
            self.updateDom(self.config.animationSpeed || 0); 
        }, this.config.updateInterval);
    },

    getStyles: function() {
        return ["MMM-EyeCandy.css"]
    },

    getUrl: function() {
      let defaultUrls = [
            'https://www.collater.al/wp-content/uploads/2013/11/ma_face_mid.gif',
            'https://s.pikabu.ru/post_img/2013/11/09/11/1384022136_669507211.gif',
            'https://68.media.tumblr.com/03a435c5e7ba416ef90be272f5170522/tumblr_mu0kp9XwSn1qc0s10o1_500.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/2b/bd/44/2bbd44dee42db72974d95f86fea8d3ff.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/d7/e5/06/d7e5061c2e0c73c60bc643e0fddc97ba.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/ff/61/a7/ff61a7034e2d1a4606910ee88f24afac.gif',
            'https://68.media.tumblr.com/2b27908fac782ca54cc2b3aff6862423/tumblr_mra3owkIhC1ro855no1_500.gif',
            'https://www.geekextreme.com/wp-content/uploads/2013/02/fuzzy-gif.gif',
            'https://orig05.deviantart.net/6984/f/2015/019/4/6/120515_480x800_f__by_victhor-d8en0m2.gif',
            'https://38.media.tumblr.com/d1665cbde913b2e495ad24c2579df935/tumblr_n5wio1sTz91tummxoo1_250.gif',
            'https://cdn.shopify.com/s/files/1/0172/2296/products/six_large.gif?v=1403626913',
            'https://s-media-cache-ak0.pinimg.com/originals/73/b2/c1/73b2c1b5cd54e7bb71e6b94a652cb92c.gif',
            'https://alexandra.ucoz.org/_ph/26/2/114819057.gif',
            'https://gifimage.net/wp-content/uploads/2017/01/Cool-GIF-Image-for-Whatsapp-and-Facebook-7.gif',
            'https://img17.dreamies.de/img/120/b/vaoigmruccd.gif',
            'https://www.ddesignerr.com/wp-content/uploads/2012/05/026.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/6b/d8/ef/6bd8ef35364c9672c7cbb4687977d3ee.gif',
            'https://www.webdesignmash.com/trial/wp-content/uploads/2010/02/davidope8.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/1b/99/a4/1b99a402c520a20f69bde73be778c098.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossalsphere2.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossalspiral2opt.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120515.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130207.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130304.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130309.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130407.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/140104.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Lava_Burst.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_05.gif',
            'https://media.giphy.com/media/VgBk8EZQILIaPIJymY/giphy.gif'
        ]
        var url = '';
        if (this.config.customImagePath != '') {
            url = this.config.customImagePath;
        } else {
            var randIndex = Math.floor(Math.random() * defaultUrls.length);
            url = defaultUrls[randIndex];
        }
        return url;
    },

    getDom: function() {
        this.url = this.getUrl();
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
        var getTimeStamp = new Date();
        if (this.config.ownImagePath != '' || this.config.style != '') {
            image.classList.add = "photo";
            image.src = this.url + "?seed=" + getTimeStamp;
            image.style.maxWidth = this.config.maxWidth;
        }
        wrapper.appendChild(image);

        return wrapper;
    },

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_EYECANDY') {
            this.hide();
        } else if (notification === 'SHOW_EYECANDY') {
            this.show(1000);
        }

    },

});
