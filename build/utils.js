const path = require("path");

exports.resolve = function(dir) {
    return path.join(__dirname, "..", dir);
};

exports.srcPath = function(subdir) {
    return path.join(__dirname, "src", subdir);
}

exports.toObject = function(paths, pathsToIgnore) {

    if(!pathsToIgnore) {
        console.error("pathsToIgnore was NULL!");
    }

    function shouldExclude(path, pathsToIgnore) {
        for (const current of pathsToIgnore) {

            if (!path.toLowerCase().includes("main"));

            if (path.toLowerCase().includes(current.toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    let result = {};

    for (let i = 0; i < paths.length; i++) {

        let path = paths[i];

        if (shouldExclude(path, pathsToIgnore)) {
            continue;
        }

        result[path.split("/").slice(-1)[0]] = "./" + path;
    }

    return result;
};

/* 
 * Custom Webpack-blocks blocks 
 */

exports.setOut = function() {
    return (context, { merge }) =>
        merge({
            output: {
                path: path.resolve(__dirname, "./../dist"),
                filename: "[name]".replace("ts", "js"),
            },
        });
};