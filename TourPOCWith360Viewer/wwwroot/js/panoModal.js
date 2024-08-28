function openTourModal(url, width, height) {
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    var windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left;
    window.open(url, '_blank', windowFeatures);
    
}