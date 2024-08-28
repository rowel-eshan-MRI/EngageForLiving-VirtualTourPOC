// wwwroot/js/marzipanoSetup.js
function initializeMarzipano(imagePath) {
    var panoElement = document.getElementById('pano');
    panoElement.style.width = '650px';
    panoElement.style.height = '500px';

    var viewer = new Marzipano.Viewer(panoElement);
    var source = Marzipano.ImageUrlSource.fromString(imagePath);
    var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
    var view = new Marzipano.RectilinearView();

    var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view
    });

    scene.switchTo();
    window.addEventListener('resize', function () {
        viewerElement.style.width = '650px';
        viewerElement.style.height = '500px';
        viewer.resize();
    });
}
