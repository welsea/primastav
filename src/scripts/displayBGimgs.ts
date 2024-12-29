export default function assignClassImg() {
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