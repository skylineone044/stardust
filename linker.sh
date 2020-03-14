#!/bin/sh

printf "\nLinking Stardsut theme files..."

printf "\nlinking colorscheme..."
mkdir ~/.local/share/color-schemes
ln -rs color-schemes/Stardust.colors ~/.local/share/color-schemes

printf "\nlinking plasma style..."
mkdir ~/.local/share/plasma
mkdir ~/.local/share/plasma/desktoptheme
ln -rs Stardust-plasma ~/.local/share/plasma/desktoptheme

printf "\nlinking look-and-feel..."
mkdir ~/.local/share/plasma/look-and-feel
ln -rs look-and-feel/Stardust ~/.local/share/plasma/look-and-feel

printf "\nkvantum theme is done manually, through kvantum-manager"
printf "\n Done."
