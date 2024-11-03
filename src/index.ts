function main() {
  const table = document.getElementById("info");
  const runes = document.getElementById("runes");
  const timeoutID = setTimeout(() => {
    showinfo();
  }, 500);
  function showinfo() {
    let op: number = 1;
    const intervalID = setInterval(() => {
      if (op > 0.0) {
        runes.style.opacity = op.toString();
        op = Number((op - 0.1).toFixed(2));
        console.log(op);
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
}


main()