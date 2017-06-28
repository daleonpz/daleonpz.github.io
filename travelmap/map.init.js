jQuery(function ($) {
    var inDetails = false;
    var container = $("#map");
    var r = Raphael('map', container.width(), container.height());
//     var r = Raphael(0,0,1200,800);
    var panZoom = r.panzoom({ initialZoom: 5, initialPosition: { x: 120, y: 300} });
	var isHandling = false;
	
    panZoom.enable();
    r.safari();

    var attributes = {
        fill: '#cccccc',
        stroke: '#FFFFFF',
        'stroke-width': 2,
        'stroke-linejoin': 'round'
    };

    var arr = [];

    var overlay = r.rect(0, 0, r.width, r.height);
    overlay.attr({ fill: '#ffffff', 'fill-opacity': 0, "stroke-width": 0, stroke: '#ffffff' });

    for (var country in paths){
        var obj = r.path(paths[country].path);

        obj.attr(attributes);
        obj.click(handleDetails);
        obj.data({
            'code': paths[country].code, 
            'name': paths[country].name 
        });
        obj.hover(animateOver, animateOut);
        arr[paths[country].name] = obj;
    }

    $("#mapContainer #up").click(function (e) {
        panZoom.zoomIn(1);
        e.preventDefault();
    });

    $("#mapContainer #down").click(function (e) {
        panZoom.zoomOut(1);
        e.preventDefault();
    });
    
    $("#others #moveTopLeft").click(function (e) {
        panZoom.pan(1,1);
    });
   
    function animateOver() {
            this.attr("opacity",0.7) ;
            document.getElementById('country-name').innerHTML =
                        this.data('name');
    }

    function animateOut() {
            this.attr("opacity",1);
            document.getElementById('country-name').innerHTML = 
                    "Somewhere over the ocean";
    }
    
    function handleDetails() {
        if (panZoom.isDragging() || isHandling) return;
        isHandling = true;
        var anim, box = this.getBBox();

        if (inDetails) {
            inDetails = false;
            panZoom.enable();
            this.hover(animateOver, animateOut);
            anim = overlay.animate({ 'fill-opacity': 0 }, 300, function () { this.toBack(); isHandling = false; });
            this.animateWith(overlay, anim, {
                transform: ""
            }, 300);
            this.attr("fill", this.data("fill"));
        }
        else {
            inDetails = true;
            panZoom.disable();
            this.unhover(animateOver, animateOut);
            overlay.toFront();
            this.toFront();

            var currPaperPosition = panZoom.getCurrentPosition();
            var currPaperZoom = panZoom.getCurrentZoom();

            var currHeight = r.height * (1 - currPaperZoom * 0.1);

            var zoomDif = (currHeight / 2) / box.height;

            var xdif = currPaperPosition.x - box.x + ((box.width * zoomDif) - box.width) / 2;
            var ydif = (currPaperPosition.y + ((currHeight / 2) - (box.height / 2))) - box.y;


            anim = overlay.animate({ 'fill-opacity': 0.7 }, 300, function () { isHandling = false; });
            this.animateWith(overlay, anim, {
                transform: "t" + xdif + "," + ydif + "s" + zoomDif
            }, 300);
        }
    }
    
});
