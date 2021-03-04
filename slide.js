MyBanners=new Array('img1.jpg', 'img2.png', 'img3.jpg')
            banner=0
            function ShowBanners()
            { if (document.images)
            { banner++
            if (banner==MyBanners.length) {
            banner=0}
            document.ChangeBanner.src=MyBanners[banner]
            setTimeout("ShowBanners()",4000)
            }
            }