import "../assets/global.css";
import selectCurrentEvent from "./scripts/event";
import displayInfo from "./scripts/displayInfo";
import assignClassImg from "./scripts/displayBGimgs";
function main() {
  selectCurrentEvent();
  assignClassImg();
  displayInfo();
}

main();
