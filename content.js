// Toggle element visibility when clicked
function hideElement(event) {
    event.stopPropagation(); // Prevent hiding parent elements unintentionally
    event.target.style.display = 'none'; // Hide the clicked element
    console.log("Element hidden:", event.target);
}

// Enable element deleter mode
function enableDeleter() {
    document.addEventListener('click', hideElement, true);
    console.log("Element deleter enabled");
}

// Disable element deleter mode
function disableDeleter() {
    document.removeEventListener('click', hideElement, true);
    console.log("Element deleter disabled");
}

// Watch for changes to the element deleter state
async function updateDeleterMode() {
    const data = await chrome.storage.local.get('elementDeleterActive');
    const isActive = data.elementDeleterActive || false;
    if (isActive) {
        enableDeleter();
    } else {
        disableDeleter();
    }
}

// Initial setup
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.elementDeleterActive) {
        updateDeleterMode();
    }
});

// Initialize on script load
updateDeleterMode();
