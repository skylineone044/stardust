#!/bin/sh

export BOLD_GREEN='\033[1;32m'
export CLEAR_COLOR='\033[0m' # No Color

export PRINT_COLORED="printf $BOLD_GREEN%s$CLEAR_COLOR\\n"

$PRINT_COLORED "Installing apps..."

PACKAGES="
	kvantum
	papirus-icon-theme
	kwin-scripts-forceblur
	kwin-scripts-dynamic-virtual-desktops-git
	kwin-scripts-sticky-window-snapping-git
	klassy-git
	"

PACKAGE_INSALL_COMMAND="paru -Syu --noconfirm --needed $PACKAGES"

$PRINT_COLORED "Installing packages..."
$PACKAGE_INSALL_COMMAND


$PRINT_COLORED "Linking Stardsut theme files..."
$PRINT_COLORED "linking colorscheme..."
mkdir ~/.local/share/color-schemes
ln -rs color-schemes/Stardust.colors ~/.local/share/color-schemes

$PRINT_COLORED "linking plasma style..."
mkdir ~/.local/share/plasma
mkdir ~/.local/share/plasma/desktoptheme
ln -rs Stardust-plasma ~/.local/share/plasma/desktoptheme

$PRINT_COLORED "linking look-and-feel..."
mkdir ~/.local/share/plasma/look-and-feel
ln -rs look-and-feel/Stardust ~/.local/share/plasma/look-and-feel

$PRINT_COLORED "linking KDE colorschemes..."
ln -s ~/Projects/stardust/color-schemes/ ~/.local/share/ || rmdir ~/.local/share/color-schemes && ln -s ~/Projects/stardust/color-schemes/ ~/.local/share/

$PRINT_COLORED "linking kvantum..."
ln -s ~/Projects/stardust/Kvantum ~/.config

$PRINT_COLORED "linking klassy..."
ln -s ~/Projects/stardust/Klassy/klassyrc ~/.config

$PRINT_COLORED "finishing kwin-script installs..."
mkdir --parents ~/.local/share/kservices5/

cp ~/.local/share/kwin/scripts/forceblur/metadata.desktop ~/.local/share/kservices5/forceblur.desktop
ln -s ~/.local/share/{kwin/scripts/dynamicVirtualDesktops/metadata,kservices5/kwin-script-dynamicVirtualDesktops}.desktop
ln --relative --symbolic ~/.local/share/kwin/scripts/sticky-window-snapping/metadata.desktop ~/.local/share/kservices5/kwin-script-sticky-window-snapping.desktop

qdbus org.kde.KWin /KWin reconfigure

$PRINT_COLORED "All done"
