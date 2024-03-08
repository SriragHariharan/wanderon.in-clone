const textList = ["Spreading Happiness", "Connencting people", "Creating memories"]; // List of texts
let currentTextIndex = 0; // Index to track current text

function type() {
    const currentText = textList[currentTextIndex]; // Get current text
    let index = 0;

    function typeCharacter() {
        if (index < currentText.length) {
            document.getElementById('text').textContent += currentText.charAt(index);
            index++;
            setTimeout(typeCharacter, 500); // Typing speed (adjust as needed)
        } else {
            setTimeout(erase, 1000); // Delay before erasing (adjust as needed)
        }
    }

    function erase() {
        if (index >= 0) {
            document.getElementById('text').textContent = currentText.substring(0, index);
            index--;
            setTimeout(erase, 50); // Erasing speed (adjust as needed)
        } else {
            currentTextIndex = (currentTextIndex + 1) % textList.length; // Move to next text
            setTimeout(type, 500); // Delay before typing next text (adjust as needed)
        }
    }

    typeCharacter(); // Start typing
}

type(); // Initial start
