#!/bin/sh

printf "\nLinking Stardsut theme files..."

printf "\nlinking colorscheme..."
ln -s color-schemes/Stardust.colors ~/.local/share/color-schemes

printf "\nlinking plasma style..."
ln -rs Stardust-plasma ~/.local/share/plasma/desktoptheme

printf "\nlinking look-and-feel..."
ln -rs look-and-feel/Stardust ~/.local/share/plasma/look-and-feel

printf "\nkvantum theme is done manually, through kvantum-manager"
