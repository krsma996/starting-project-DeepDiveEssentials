import mainImg from "../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Core", "Kurac"];

function getRandomDescription(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactDescription[getRandomDescription(2)];
  return (
    <header>
      <img src={mainImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
