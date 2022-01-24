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
            'https://media.giphy.com/media/l9eTgC1GpyEZq/giphy.gif',
            'https://www.animatedimages.org/data/media/35/animated-eye-image-0006.gif',
            'https://www.animatedimages.org/data/media/35/animated-eye-image-0013.gif',
            'https://www.animatedimages.org/data/media/35/animated-eye-image-0004.gif',
            'https://www.animatedimages.org/data/media/35/animated-eye-image-0093.gif',
            'https://www.animatedimages.org/data/media/35/animated-eye-image-0099.gif',
            'https://www.animatedimages.org/data/media/35/animated-eye-image-0162.gif',
            'https://www.animatedimages.org/data/media/35/animated-eye-image-0314.gif',
            'https://www.animatedimages.org/data/media/35/animated-eye-image-0300.gif',
            'http://www.animatedimages.org/data/media/35/animated-eye-image-0143.gif',
            'http://www.animatedimages.org/data/media/35/animated-eye-image-0321.gif',
            'http://www.picgifs.com/graphics/e/eyes/graphics-eyes-662258.gif',
            'http://www.picgifs.com/graphics/e/eyes/graphics-eyes-449207.gif',
            'http://www.picgifs.com/name-graphics/m/michael/name-graphics-michael-582478.gif',
            'https://media.giphy.com/media/l2SpYymt1W1pkqb5e/giphy.gif',
            'https://www.collater.al/wp-content/uploads/2013/11/ma_face_mid.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/b4/30/e8/b430e8fbe229dd7b3f3e935c3c9ef730.gif',
            'http://www.thecitrusreport.com/wp-content/uploads/2014/04/paolo-ceric-trippy.gif',
            'http://s.pikabu.ru/post_img/2013/11/09/11/1384022136_669507211.gif',
            'http://68.media.tumblr.com/03a435c5e7ba416ef90be272f5170522/tumblr_mu0kp9XwSn1qc0s10o1_500.gif',
            'http://pic.pimg.tw/darthvader/dfdedcfebc895bc48df4db6d765fe8ec.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/2b/bd/44/2bbd44dee42db72974d95f86fea8d3ff.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/d7/e5/06/d7e5061c2e0c73c60bc643e0fddc97ba.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/ff/61/a7/ff61a7034e2d1a4606910ee88f24afac.gif',
            'http://68.media.tumblr.com/2b27908fac782ca54cc2b3aff6862423/tumblr_mra3owkIhC1ro855no1_500.gif',
            'http://www.geekextreme.com/wp-content/uploads/2013/02/fuzzy-gif.gif',
            'http://orig05.deviantart.net/6984/f/2015/019/4/6/120515_480x800_f__by_victhor-d8en0m2.gif',
            'http://38.media.tumblr.com/d1665cbde913b2e495ad24c2579df935/tumblr_n5wio1sTz91tummxoo1_250.gif',
            'https://cdn.shopify.com/s/files/1/0172/2296/products/six_large.gif?v=1403626913',
            'https://s-media-cache-ak0.pinimg.com/originals/73/b2/c1/73b2c1b5cd54e7bb71e6b94a652cb92c.gif',
            'http://66.media.tumblr.com/6c0995048767c190b30f6f1509aeb436/tumblr_nruis5lhIn1qzt4vjo1_500.gif',
            'http://alexandra.ucoz.org/_ph/26/2/114819057.gif',
            'http://gifimage.net/wp-content/uploads/2017/01/Cool-GIF-Image-for-Whatsapp-and-Facebook-7.gif',
            'http://img17.dreamies.de/img/120/b/vaoigmruccd.gif',
            'http://www.ddesignerr.com/wp-content/uploads/2012/05/026.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/6b/d8/ef/6bd8ef35364c9672c7cbb4687977d3ee.gif',
            'http://bestanimations.com/Science/Chemistry/electron-singularity-animated-gif.gif',
            'http://bestanimations.com/Humans/Skulls/skull-animation-gif-3.gif',
            'http://www.webdesignmash.com/trial/wp-content/uploads/2010/02/davidope8.gif',
            'https://s-media-cache-ak0.pinimg.com/originals/1b/99/a4/1b99a402c520a20f69bde73be778c098.gif',
            'http://3.bp.blogspot.com/-gB_29pdcz7g/UXjglip231I/AAAAAAAAD_s/wtojtZXO9AU/s320/pictsel-davidope15.gif',
            'http://1.bp.blogspot.com/_5oJhQAjCd9k/TOFe3bRcgqI/AAAAAAAAAMM/pxOJ_hm8Mps/s1600/supreme_1.gif',
            'https://media.giphy.com/media/9JLl87j7cHisE/giphy.gif',
            'http://68.media.tumblr.com/116333fb96e8686e857b1db8a26fe241/tumblr_myucf1d5VM1spu58bo1_500.gif',
            'http://www.gifimagesdownload.com/wp-content/uploads/2016/02/cute-cool-gifs-333.gif',
            'http://bestanimations.com/Humans/Skulls/skull-animation-gif-2.gif',
            'http://www.gifimagesdownload.com/wp-content/uploads/2016/02/best-cool-gifs-773.gif',
            'https://static.tumblr.com/fc536f36bf2da8ddb6374ba63a89a479/wslnmk1/EvLo1xgf0/tumblr_static_tumblr_static_filename_640.gif',
            'http://www.sihirperisi.com/icerik/wall/sihirperisicom-man-face-erkek-yuzu%20(32).jpg',
            'http://orig02.deviantart.net/f176/f/2008/348/f/7/smiley_face_gif_by_sookie_by_sookiesooker.gif',
            'http://static.giga.de/wp-content/uploads/2015/05/face-red-loop-15.emoji_-rcm320x0.gif',
            'https://upload-assets.vice.com/files/2016/12/19/1482167674giphy__3_.gif',
            'https://media.giphy.com/media/FTbD5RqvttJ5e/giphy.gif',
            'https://media.giphy.com/media/aN9GqoR7OD3nq/giphy.gif',
            'https://media.giphy.com/media/3e80bmOBgeCZO/giphy.gif',
            'https://media.giphy.com/media/4NPT1ipEUoiMo/giphy.gif',
            'https://media.giphy.com/media/WuaGC7DUTeJW0/giphy.gif',
            'https://media.giphy.com/media/ZSUtKFTbwndYs/giphy.gif',
            'https://media.giphy.com/media/s2uampOAMWksU/giphy.gif',
            'https://media.giphy.com/media/dbopGHCaI2zsY/giphy.gif',
            'https://media.giphy.com/media/ql77HNnLAjV4s/giphy.gif',
            'https://media.giphy.com/media/eAMJgzoGAEwCc/giphy.gif',
            'https://media.giphy.com/media/vZqiytAaw85Ne/giphy.gif',
            'https://media.giphy.com/media/PNf2Ke7gn6oDK/giphy.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif5opt.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossalsphere2.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossalspiral2opt.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossaltd2opt.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120515.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130207.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130304.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130309.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130407.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/03/140104.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2014/06/6.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Switching_Sides.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Lava_Burst.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Cracked_Gem.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_05.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_02.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_03.gif',
            'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_04.gif',
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
