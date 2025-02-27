function colorGenerator(arr) {
    /**
     * generate color per call
     * @params: array of colors
    */

        var idx = 0; 

        // function using closure
        return function () {

            const value = arr[idx];
            idx = (idx + 1) % arr.length;
            return value;
        };
    }

    // get function
    var nextColor = colorGenerator(["red", "blue", "green", "yellow", "brown", "orange"]);