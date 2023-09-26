chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const alwaysActive = true;
var tabURL;

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

      // chrome.scripting.executeScript({
      //   target: { tabId: tab.id, allFrames : true },
      //   files: ["scripts/content.js"],
      // });

      // For Iframe pop out
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
          const oldIframe = document.getElementById('cm-frame');

          if (oldIframe) {
            oldIframe.remove();
            return;
          }

          const iframe = document.createElement('iframe');
          iframe.setAttribute('id', 'cm-frame');
          iframe.setAttribute(
              'style',
              'width: 380px; height: 100%; float: left; position: fixed; border: none; z-index: 2147483646; top: 0px; left: 0px;'
          );
          iframe.setAttribute( 'nuan_newframe',"true");
          iframe.setAttribute('allow', '');
          iframe.src = chrome.runtime.getURL('html/panel.html');

          document.body.appendChild(iframe);
        },
      });

      // message system to listen hidden button being toggle clicked
      chrome.runtime.onMessage.addListener(
          function(request, sender, sendResponse) {
            if (request.message === "showHidden"){
              chrome.scripting.executeScript({
                target: { tabId: tab.id, allFrames : true },
                files: ["scripts/content.js"],
              });
              // insert css to show hidden text and other stuff
              chrome.scripting.insertCSS({
                target: { tabId: tab.id, allFrames : true },
                files: ["css/panel.css"]
              });
              sendResponse({showText: "Showing hidden text"});
            }
            if (request.message === "hideHidden"){
              chrome.scripting.executeScript({
                target: { tabId: tab.id, allFrames : true },
                files: ["scripts/removeClass.js"],
              });
              sendResponse({showText: "Not showing hidden text"});
            }
          }
      );
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
