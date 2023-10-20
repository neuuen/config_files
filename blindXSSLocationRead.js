(function() {
    // Check if the neuuen cookie is already set
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)neuuen\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (cookieValue) {
        console.log("neuuen cookie is already set. Exiting.");
        return;
    }

    // Extract location parameter from the invoking script's URL
    var scripts = document.getElementsByTagName('script');
    var locationParam = null;

    for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        
        if (script.src && script.src.indexOf('https://js.rip/lp4lo6albo/') !== -1) {
            locationParam = (new URL(script.src)).searchParams.get("location");
            break; 
        }
    }

    // If location parameter was found, set it as the neuuen cookie
    if (locationParam) {
        document.cookie = "neuuen=" + locationParam + "; path=/";
        console.log("neuuen cookie set with value:", locationParam);
    } else {
        console.log("Location parameter not found. Exiting.");
        return;
    }

    // Refresh the page
    location.reload();
})();
