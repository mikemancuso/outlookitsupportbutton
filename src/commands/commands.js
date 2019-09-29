/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

Office.onReady(info => {
  // If needed, Office.js is ready to be called
});

/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function action(event) {

  window.open("https://strategicfunding.atlassian.net/servicedesk/customer/portals")

  // Be sure to indicate when the add-in command function is complete
  event.completed();
}

function getGlobal() { 
  return (typeof self !== "undefined") ? self :
    (typeof window !== "undefined") ? window : 
    (typeof global !== "undefined") ? global :
    undefined;
}

const g = getGlobal();

// the add-in command functions need to be available in global scope
g.action = action;
