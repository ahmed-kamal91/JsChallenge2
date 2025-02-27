# JS Challenge 2

## Description
This project creates an interactive colored box that changes color when hovered over and duplicates itself when clicked. The duplicated boxes inherit the background color of their parent but receive a new hover color.

## Features
- **Dynamic Color Generation**: Each box is assigned a random background and hover color using `colorGenerator.js`.
- **Hover Effect**: The box changes color when hovered over.
- **Box Duplication**: Clicking on a box creates a new box with the same background color but a different hover color.

## How It Works
1. The initial box (`#originBox`) is assigned a random background and hover color.
2. When a user hovers over a box, its color changes to the hover color.
3. Clicking a box creates a new box with the same background color but a different hover color.
4. The new box is added to the document and can also be clicked to create more boxes.

## Files
- `index.html` - The main HTML file containing the interactive box logic.
- `colorGenerator.js` - A script that provides the `nextColor()` function for generating colors cyclically.

## Setup & Usage
1. Ensure `colorGenerator.js` is present in the same directory.
2. Open `index.html` in a web browser.
3. Hover over the initial box to see the color change.
4. Click the box to create new boxes.
5. Repeat the process for newly created boxes.

## Example
```javascript
function colorGenerator(arr) {
    /**
     * Generates colors cyclically per call.
     * @param {Array} arr - Array of colors.
     */
    var idx = 0; 
    return function () {
        const value = arr[idx];
        idx = (idx + 1) % arr.length;
        return value;
    };
}

// Get function
var nextColor = colorGenerator(["red", "blue", "green", "yellow", "brown", "orange"]);
```

## Notes
- The original box loses its click functionality after duplication.
- Each newly created box can also generate further boxes.

## Future Improvements
- Add a limit to the number of generated boxes.
- Implement animations for a smoother user experience.
- Allow users to remove boxes by double-clicking them.

## License
This project is open-source and free to use and modify.


