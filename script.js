import { prepare, layout } from '@chenglou/pretext'; 

const myText = "Hello! This is a long string that will eventually wrap onto multiple lines.";
const myFont = "16px Inter, sans-serif"; // Must match your CSS exactly!

const prepared = prepare(myText, myFont);

const containerWidth = 300; // in pixels
const lineHeight = 24;      // in pixels

const { height, lineCount } = layout(prepared, containerWidth, lineHeight);

console.log(`The text is ${height}px tall and spans ${lineCount} lines.`);

// 1. Prepare once outside the resize loop
const prepared = prepare("Your long text here...", "16px Arial");

function updateLayout() {
    const width = document.getElementById('my-container').offsetWidth;
    
    // 2. Layout is cheap; run it as often as needed
    const { height } = layout(prepared, width, 24);
    
    // 3. Apply the height to your UI
    console.log("New calculated height:", height);
}

window.addEventListener('resize', updateLayout);

const prepared = prepare(text, font, { whiteSpace: 'pre-wrap' });