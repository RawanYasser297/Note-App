import { theme } from "./scripts/theme";
import { handleNewListItem } from "./scripts/addNewListItem";
import { getUncompletedItemsNum } from "./scripts/itemsLeft";
import { handleClearCompletedItemsBtn } from "./scripts/clearCompleted";
import { initFilterButtons } from "./scripts/filters/handleFilterBtns";
import { styleStoredCompletedItems } from "./scripts/checkbox";

document.querySelectorAll("a").forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Setup theme switcher
  theme();

  // 2. Render default list (all items)
  //renderListItems("all");

  // 3. Init filters (All / Active / Completed)
  initFilterButtons();

  // 4. Init new item input
  handleNewListItem();

  // 5. Init clear completed button
  handleClearCompletedItemsBtn();

  // 6. Apply styles (checked, count left, etc.)
  getUncompletedItemsNum();
  //checkedItemStyle();
  styleStoredCompletedItems();
});
