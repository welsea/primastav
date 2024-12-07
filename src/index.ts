import "../assets/global.css";
import Events from "./data.json";

/**
 * TODO:
 *  [x] check date, update the info & logo to newest date
 *  [ ] resize logo files
 */
interface Event {
  eventName: string;
  description: string;
  date: string;
  rune: string;
}

function main() {
  selectEvent();
  assignClassImg();
  const timeoutID = setTimeout(() => {
    showinfo();
  }, 500);
}

function selectEvent() {
  const current = new Date();
  let selectEvent: Event = null;
  const norwegianMonthShortNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "mai",
    "jun",
    "jul",
    "aug",
    "sep",
    "okt",
    "nov",
    "des",
  ];

  const currentMonth = current.getMonth(); // 0-based index for month
  const currentDate = current.getDate();
  for (let i = 0; i < Events.length; i++) {
    const event = Events[i] as Event;
    const eventDate = new Date(event.date);
    const eventMonth = eventDate.getMonth();
    const eventDay = eventDate.getDate();

    if (
      eventMonth < currentMonth ||
      (eventMonth === currentMonth && eventDay <= currentDate)
    ) {
      selectEvent = event;
      selectEvent.date = `${eventDay} ${norwegianMonthShortNames[eventMonth]}.`;
    } else {
      break;
    }
  }

  const nameEle = document.getElementById("name");
  nameEle.innerText = selectEvent.eventName;
  const dateEle = document.getElementById("date");
  dateEle.innerText = selectEvent.date;
  const desEle = document.getElementById("des");
  desEle.innerText = selectEvent.description || "";
  const runeEle = document.getElementById("rune");
  runeEle.innerText = selectEvent.rune;
}

function assignClassImg() {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 3);
  };
  const random = getRandomInt();
  const boat = document.getElementById("boat");
  const with_shield = document.getElementById("with-shield");
  const helmet = document.getElementById("helmet");
  boat.className = `boat_${random}`;
  with_shield.className = `with_shield_${random}`;
  helmet.className = `helmet_${random}`;
}

function showinfo() {
  const table = document.getElementById("info");
  const runes = document.getElementById("rune");
  let op: number = 1;
  const intervalID = setInterval(() => {
    if (op > 0.0) {
      runes.style.opacity = op.toString();
      op = Number((op - 0.1).toFixed(2));
    } else {
      clearInterval(intervalID);
    }
  }, 200);

  let op2 = 0.0;
  setTimeout(() => {
    table.classList.remove("hide");
    table.style.opacity = "0";
    const intervalID2 = setInterval(() => {
      if (op2 <= 1.0) {
        table.style.opacity = op2.toString();
        op2 = op2 + 0.1;
      } else {
        clearInterval(intervalID2);
      }
    }, 200);
  }, 1000);
}

main();
