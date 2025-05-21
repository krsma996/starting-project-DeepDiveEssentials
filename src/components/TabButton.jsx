export default function TabButton({children,onClick,isSelected}) {

    return (
    <li>
      <button className={isSelected ? "active":null} onClick={onClick}>{children}</button>
    </li>
  );
}
/*
  // Primer korišćenja TabButton komponente sa children sadržajem:
  <TabButton>Components</TabButton>
  <TabButton>JSX</TabButton>
  <TabButton>State</TabButton>
  <TabButton>Props</TabButton>

  // Komponenta TabButton:
  export default function TabButton({ children }) {
    // Nema univerzalno "boljeg" ili "lošijeg" pristupa – sve zavisi od mog izbora i dizajna komponente.
    // U ovom slučaju koristim `children`, što znači da sve što stavim između otvarajuće i zatvarajuće
    // tagove komponente (npr. <TabButton>Components</TabButton>) biva automatski prosleđeno kao `children`.

    // Mogao sam umesto toga koristiti prop kao što je `label`:
    // <TabButton label="Components" /> i onda u komponenti pristupati preko props.label
    // Obe varijante su validne, izbor zavisi od fleksibilnosti i strukture koju želim.

    return (
      <li>
        <button>{children}</button>
      </li>
    );
  }
*/
