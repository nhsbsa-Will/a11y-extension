chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const alwaysActive = true;

// Define a variable to track whether content.js is enabled
let isContentJsEnabled = false;

chrome.action.onClicked.addListener(async (tab) => {
  if (alwaysActive) {
    // Toggle the content.js state
    isContentJsEnabled = !isContentJsEnabled;

    // Set the action badge based on the state
    const badgeText = isContentJsEnabled ? 'ON' : 'OFF';
    await chrome.action.setBadgeText({ tabId: tab.id, text: badgeText });

    // Execute or stop content.js based on the state
    if (isContentJsEnabled) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["scripts/content.js"],
      });
    } else {
      // Remove content.js when the user turns the extension off
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          location.reload(); // Reloads the page undoing the JS we've run
        },
      });
    }
  }
});
