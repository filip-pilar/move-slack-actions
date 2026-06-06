(() => {
  "use strict";

  // Cleanup for anyone who loaded v0.1.x. That build could mark the wrong Slack
  // toolbar. Current builds leave positioning to narrowly scoped CSS selectors.
  for (const element of document.querySelectorAll(".sla-message-actions-moved")) {
    element.classList.remove("sla-message-actions-moved");
  }
})();
