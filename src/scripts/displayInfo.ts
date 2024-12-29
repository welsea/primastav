export default function displayInfo() {
    const info = document.getElementById("info");
    const runes = document.getElementById("rune");
    let op: number = 1;
    const intervalID = setInterval(() => {
      if (op > 0.0) {
        runes.style.opacity = op.toString();
        op = Number((op - 0.1).toFixed(2));
      } else {
        clearInterval(intervalID);
      }
    }, 250);
  
    let op2 = 0.0;
    setTimeout(() => {
      info.classList.remove("hide");
      info.style.opacity = "0";
      const intervalID2 = setInterval(() => {
        if (op2 <= 1.0) {
          info.style.opacity = op2.toString();
          op2 = op2 + 0.1;
        } else {
          clearInterval(intervalID2);
        }
      }, 250);
    }, 1000);
  }
  