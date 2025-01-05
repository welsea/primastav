import Events from "./data.json";

interface Event {
  eventName: string;
  description: string;
  date: string;
  rune: string;
  index: number;
}

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

export default function selectCurrentEvent() {
  const current = new Date();
  let selectEvent: Event = null;

  const currentMonth = current.getMonth();
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

  if (selectEvent.index >= 12 || selectEvent.index < 43) {
    // change to summer logo
    changeSeasonLogo("summer");
  }

  if (selectEvent.index >= 43 || selectEvent.index < 12) {
    // change to winter logo
    changeSeasonLogo("winter");
  }

  setDetails(selectEvent);
  setActions(selectEvent.index);
}

function setDetails(current: Event) {
  console.log(current.date);
  const nameEle = document.getElementById("name");
  nameEle.innerText = current.eventName;
  const dateEle = document.getElementById("date");
  const eventDate = new Date(current.date);
  const eventMonth = eventDate.getMonth();
  const eventDay = eventDate.getDate();
  dateEle.innerText = `${eventDay} ${norwegianMonthShortNames[eventMonth]}.`;
  const desEle = document.getElementById("des");
  desEle.innerText = current.description || "";
  const runeEle = document.getElementById("rune");
  runeEle.innerText = current.rune;

  const logoContainer = document.getElementById("logo");
  logoContainer.classList.remove("logo_default");
  logoContainer.innerHTML = "";
  const logo = document.createElement("img");
  logo.alt = current.eventName;

  logo.src = `../../assets/img/${current.index}.png`; // change to selectEvent.index
  logoContainer.appendChild(logo);
}

function setActions(current: number) {
  const preBtn = document.getElementById("pre_btn") as HTMLButtonElement;
  const nextBtn = document.getElementById("next_btn") as HTMLButtonElement;

  preBtn.onclick = () => handleAction("pre", current, nextBtn, preBtn);
  nextBtn.onclick = () => handleAction("next", current, preBtn, nextBtn);
}

function getNextIndex(current: number, direction: "pre" | "next"): number {
  if (direction === "pre") {
    return (current - 1 + Events.length) % Events.length;
  } else {
    return (current + 1) % Events.length;
  }
}

function handleAction(
  action: "pre" | "next",
  current: number,
  oppositeBtn: HTMLButtonElement,
  currentBtn: HTMLButtonElement
) {
  if (currentBtn.innerText.includes("Current")) {
    setDetails(Events[current]);
    oppositeBtn.innerText = action === "pre" ? "Next >" : "< Previous";
    oppositeBtn.style.display = "inline";
    currentBtn.innerText = action === "pre" ? "< Previous" : "Next >";
  } else {
    const index = getNextIndex(current, action);
    setDetails(Events[index]);

    oppositeBtn.innerText = action === "pre" ? "Current >" : "< Current";
    currentBtn.style.display = "none";
  }
}

function changeSeasonLogo(value: string) {
  const seasonContainer = document.getElementById("season");
  seasonContainer.innerHTML = "";
  const season = document.createElement("img");
  season.alt = value;
  season.src = `../../assets/img/${value}.png`;
  seasonContainer.appendChild(season);
}
