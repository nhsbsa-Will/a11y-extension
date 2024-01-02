chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

const alwaysActive = true;

// Define a variable to track whether showHiddenText.js is enabled
let isContentJsEnabled = false;

chrome.action.onClicked.addListener(async (tab) => {
    if (alwaysActive) {
        // Toggle the showHiddenText.js state
        isContentJsEnabled = !isContentJsEnabled;

        // Set the action badge based on the state
        const badgeText = isContentJsEnabled ? 'ON' : 'OFF';
        await chrome.action.setBadgeText({tabId: tab.id, text: badgeText});

        let tempResults;

        // Execute or stop showHiddenText.js based on the state
        if (isContentJsEnabled) {
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
                    iframe.setAttribute('nuan_newframe', "true");
                    iframe.setAttribute('allow', '');
                    iframe.src = chrome.runtime.getURL('html/manual-tests.html');

                    document.body.appendChild(iframe);
                },
            });

            // const functionToExecute = () => { document.title };

            // message system to listen hidden button being toggle clicked
            chrome.runtime.onMessage.addListener(
                function (request, sender, sendResponse) {
                    if (request.message === "showHidden" || request.message === "hideHidden") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showHiddenText.js"],
                        });
                        // insert css to show hidden text and other stuff
                        chrome.scripting.insertCSS({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["css/panel.css"]
                        });
                    }

                    if (request.message === "showHtmlTitle") {

                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showTitle.js"]
                        })
                    }
                    if (request.message === "hideHtmlTitle") {
                        sendResponse({showText: "Not showing *Title* text"});
                    }

                    if (request.message === "showLanguage") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showLang.js"]
                        });
                    }

                    if (request.message === "showSkipLink" || request.message === "hideSkipLink") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showSkipLink.js"]
                        });
                        chrome.scripting.insertCSS({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["css/panel.css"]
                        });
                    }

                    if (request.message === "showButtons" || request.message === "hideButtons") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/checkButtons.js"]
                        });
                        chrome.scripting.insertCSS({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["css/panel.css"]
                        });
                    }

                    if (request.message === "showImageAltText") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showImageAltText.js"]
                        });
                        chrome.scripting.insertCSS({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["css/panel.css"]
                        });
                    }
                    if (request.message === "hideImageAltText") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/removeImageAltText.js"]
                        });
                        // sendResponse({showText: "Not showing *Title* text"});
                    }


                    if (request.message === "showButtonSpacing") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/buttonSpacing.js"]
                        });
                        chrome.scripting.insertCSS({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["css/panel.css"]
                        });
                    }


                    if (request.message === "showTabIndex" || request.message === "hideTabIndex") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/checkTabIndex.js"]
                        });
                        chrome.scripting.insertCSS({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["css/panel.css"]
                        });
                    }

                    if (request.message === "showVideos" || request.message === "hideVideos") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/checkVideo.js"]
                        });
                        chrome.scripting.insertCSS({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["css/panel.css"]
                        });
                    }

                    if (request.message === "showAudios" || request.message === "hideAudios") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/checkAudio.js"]
                        });
                        chrome.scripting.insertCSS({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["css/panel.css"]
                        });
                    }

                    if (request.message === "showLabel") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showLabel.js"]
                        });
                        // chrome.scripting.insertCSS({
                        //   target: { tabId: tab.id, allFrames : true },
                        //   files: ["css/panel.css"]
                        // });
                    }

                    if (request.message === "showMouseOperations") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showMouseOperations.js"]
                        });
                    }

                    if (request.message === "showKeyboardShortcuts") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showKeyboardShortcuts.js"]
                        });
                    }

                    if (request.message === "showPopUps") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showPopUps.js"]
                        });
                    }

                    if (request.message === "showTouchGestures") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showTouchGestures.js"]
                        });
                    }

                    if (request.message === "showMotionGestures") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showMotionGestures.js"]
                        });
                    }

                    //mc25 disable css
                    if (request.message === "disableCss") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/disableCss.js"]
                        });
                    }
                    if (request.message === "enableCss") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/enableCss.js"]
                        });
                    }

                    if (request.message === "showInstructionStyling") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showInstructionStyling.js"]
                        });
                    }

                    if (request.message === "showDraggingMovements") {
                        chrome.scripting.executeScript({
                            target: {tabId: tab.id, allFrames: true},
                            files: ["scripts/showDraggingMovements.js"]
                        });
                    }


                }
            );

        } else {
            // Remove showHiddenText.js when the user turns the extension off
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                function: () => {
                    location.reload(); // Reloads the page undoing the JS we've run
                },
            });
        }
    }
});

// function getTitle() { return document.title; }
