/// Save Ad Blocker toggle state to Chrome storage
function saveAdBlockState(isEnabled) {
    chrome.storage.local.set({ adBlockEnabled: isEnabled }, () => {
        console.log("Ad Blocker state saved:", isEnabled);
    });
}

// Load Ad Blocker state from Chrome storage
function loadAdBlockState() {
    chrome.storage.local.get('adBlockEnabled', (data) => {
        const isEnabled = data.adBlockEnabled || false;
        document.getElementById("toggleSwitch").checked = isEnabled;
        updateAdBlockRules(isEnabled);
        updateAdBlockStatus(isEnabled);
    });
}

// Update Ad Blocker rules
function updateAdBlockRules(isEnabled) {
    chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: isEnabled ? ["ruleset_1"] : [],
        disableRulesetIds: isEnabled ? [] : ["ruleset_1"]
    }, () => {
        console.log("Ad Blocker rules updated:", isEnabled ? "enabled" : "disabled");
    });
}

// Update Ad Blocker status text
function updateAdBlockStatus(isEnabled) {
    const status = document.getElementById("status");
    status.textContent = `Ad Blocker is ${isEnabled ? "ON" : "OFF"}`;
}

// Save Manual Blocking (Element Deleter) state to Chrome storage
function saveDeleterState(isActive) {
    chrome.storage.local.set({ elementDeleterActive: isActive }, () => {
        console.log("Element Deleter state saved:", isActive);
    });
}

// Load Manual Blocking state from Chrome storage
function loadDeleterState() {
    chrome.storage.local.get('elementDeleterActive', (data) => {
        const isActive = data.elementDeleterActive || false;
        document.getElementById("deleterSwitch").checked = isActive;
        updateDeleterStatus(isActive);
    });
}

// Update Manual Blocking status text
function updateDeleterStatus(isActive) {
    const status = document.getElementById("deleterStatus");
    status.textContent = `Element Deleter is ${isActive ? "ON" : "OFF"}`;
}

// Save Twitch Ad Blocker state to Chrome storage
function saveTwitchState(isEnabled) {
    chrome.storage.local.set({ twitchBlockEnabled: isEnabled }, () => {
        console.log("Twitch Ad Blocker state saved:", isEnabled);
    });
}

// Load Twitch Ad Blocker state from Chrome storage
function loadTwitchState() {
    chrome.storage.local.get('twitchBlockEnabled', (data) => {
        const isEnabled = data.twitchBlockEnabled || false;
        document.getElementById("twitchSwitch").checked = isEnabled;
        updateTwitchStatus(isEnabled);
    });
}

// Update Twitch Ad Blocker status text
function updateTwitchStatus(isEnabled) {
    const status = document.getElementById("twitchStatus");
    status.textContent = `Twitch Ad Blocker is ${isEnabled ? "ON" : "OFF"}`;
}

// Event listener for Ad Blocker toggle
document.getElementById("toggleSwitch").addEventListener("change", function () {
    const isEnabled = this.checked;
    saveAdBlockState(isEnabled);
    updateAdBlockRules(isEnabled);
    updateAdBlockStatus(isEnabled);
});

// Event listener for Manual Blocking toggle
document.getElementById("deleterSwitch").addEventListener("change", function () {
    const isActive = this.checked;
    saveDeleterState(isActive);
    updateDeleterStatus(isActive);
});

// Event listener for Twitch Ad Blocker toggle
document.getElementById("twitchSwitch").addEventListener("change", function () {
    const isEnabled = this.checked;
    saveTwitchState(isEnabled);
    updateTwitchStatus(isEnabled);
});

// Load all states when popup is opened
function loadAllStates() {
    loadAdBlockState();
    loadDeleterState();
    loadTwitchState();
}

// Run initialization
loadAllStates();
