var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometries-3840x2160": "",
                    "ItemGeometriesHorizontal": "",
                    "ItemGeometriesVertical": "Applet-28:3536,23,288,480,0;Applet-29:0,0,288,224,0;Applet-30:0,0,288,224,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1021",
                    "DialogWidth": "1256"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "559",
                    "ToolBoxButtonY": "34",
                    "arrangement": "1",
                    "iconSize": "2",
                    "positions": "{\"3840x2160\":[\"1\"\\,\"20\"\\,\"desktop:/pacman.conf\"\\,\"0\"\\,\"6\"\\,\"desktop:/stardust_TS.lua\"\\,\"0\"\\,\"5\"\\,\"desktop:/nvim_highlite_colors_stardust_TS.lua\"\\,\"0\"\\,\"4\"\\,\"desktop:/old_setup.sh\"\\,\"0\"\\,\"3\"\\,\"desktop:/clematis.service\"\\,\"0\"\\,\"2\"\\,\"desktop:/bonya_ea_teszt_1_minta.txt\"\\,\"0\"\\,\"1\"\\,\"desktop:/ventoy usb drive stuff\"\\,\"0\"\\,\"0\"]\\,\"1920x1080\":[\"1\"\\,\"9\"\\,\"desktop:/stardust_TS.lua\"\\,\"0\"\\,\"6\"\\,\"desktop:/pacman.conf\"\\,\"0\"\\,\"5\"\\,\"desktop:/old_setup.sh\"\\,\"0\"\\,\"4\"\\,\"desktop:/nvim_highlite_colors_stardust_TS.lua\"\\,\"0\"\\,\"3\"\\,\"desktop:/clematis.service\"\\,\"0\"\\,\"2\"\\,\"desktop:/bonya_ea_teszt_1_minta.txt\"\\,\"0\"\\,\"1\"\\,\"desktop:/ventoy usb drive stuff\"\\,\"0\"\\,\"0\"]\\,\"1024x768\":[\"\"]}",
                    "sortMode": "-1",
                    "toolTips": "true"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///mnt/cupcake/Pictures/Wallpapers/slideshow/lee-fitzgerald-nf-edwardisrael-ext-03a.jpg",
                    "SlidePaths": "/usr/share/wallpapers"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///mnt/cupcake/Pictures/Wallpapers/slideshow/tE_BEAN.png",
                    "SlidePaths": "/home/skyline/Pictures/Wallpapers/slideshow"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometries-3840x2160": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "723",
                    "DialogWidth": "1112"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "576",
                    "ToolBoxButtonY": "34"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Next/contents/images/1920x1080.png",
                    "SlidePaths": "/usr/share/wallpapers"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///mnt/cupcake/Pictures/Wallpapers/slideshow/paul-chadeisson-01-h3-pc-24-final-extended-crop2.jpg",
                    "SlidePaths": "/home/skyline/Pictures/Wallpapers/slideshow"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-3840x2160": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
