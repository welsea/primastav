import "../assets/global.css";
import selectEvent from "./scripts/event";
import displayInfo from "./scripts/displayInfo";
import assignClassImg from "./scripts/displayBGimgs";
function main() {
  selectEvent();
  assignClassImg();
  displayInfo();
}

main();
