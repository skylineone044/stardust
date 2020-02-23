var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "720",
                    "DialogWidth": "960"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "pressToMoveHelp": "false",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/skyline/Pictures/Wallpapers/TheExpanse/cropped/epsiens_yacht.jpg"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/skyline/Pictures/Wallpapers/Slideshow/TheExpanse/vlcsnap-2019-12-21-11h31m20s713.png",
                    "SlideInterval": "60",
                    "SlidePaths": "/home/skyline/Pictures/Wallpapers/Slideshow"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "959",
                    "DialogWidth": "1280"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "pressToMoveHelp": "false",
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/skyline/Pictures/Wallpapers/Slideshow/SG/daedalus_2016_4k_by_alxfx_d9u6gie.jpg",
                    "SlideInterval": "60",
                    "SlidePaths": "/home/skyline/Pictures/Wallpapers/Slideshow"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "SlidePaths": "/home/skyline/Pictures/Wallpapers/Slideshow"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "3",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "578",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Next/contents/images/1920x1080.png"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/skyline/Pictures/Wallpapers/Slideshow/Space/heic0710a.jpg",
                    "SlideInterval": "60",
                    "SlidePaths": "/home/skyline/Pictures/Wallpapers/Slideshow"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "4",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "720",
                    "DialogWidth": "960"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Next/contents/images/1920x1080.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "5",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "703",
                    "DialogWidth": "1360"
                },
                "/Configuration": {
                    "PreloadWeight": "42"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Next/contents/images/1366x768.png"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/skyline/Pictures/Wallpapers/Slideshow/SG/knight.jpg",
                    "SlidePaths": "/home/skyline/Pictures/Wallpapers/Slideshow"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
