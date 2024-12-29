import Events from "./data.json";


interface Event {
  eventName: string;
  description: string;
  date: string;
  rune: string;
  index: number;
}

export default function selectEvent() {
  const current = new Date();
  let selectEvent: Event = null;
  const logoContainer = document.getElementById("logo");
  logoContainer.classList.remove("logo_default")
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

  const nameEle = document.getElementById("name");
  nameEle.innerText = selectEvent.eventName;
  const dateEle = document.getElementById("date");
  dateEle.innerText = selectEvent.date;

  if (selectEvent.index >= 12 || selectEvent.index < 43) {
    // change to summer logo
    changeSeasonLogo("summer");
  }

  if (selectEvent.index >= 43 || selectEvent.index < 12) {
    // change to winter logo
    changeSeasonLogo("winter");
  }
  const desEle = document.getElementById("des");
  desEle.innerText = selectEvent.description || "";
  const runeEle = document.getElementById("rune");
  runeEle.innerText = selectEvent.rune;

  logoContainer.innerHTML = "";
  const logo = document.createElement("img");
  logo.alt = selectEvent.eventName;
  
  logo.src = `../../assets/img/${selectEvent.index}.png`; // change to selectEvent.index
  logoContainer.appendChild(logo);
}

function changeSeasonLogo(value: string) {
    const seasonContainer = document.getElementById("season");
    seasonContainer.innerHTML = "";
    const season = document.createElement("img");
    season.alt = value;
    season.src = `../../assets/img/${value}.png`;
    seasonContainer.appendChild(season);
  }