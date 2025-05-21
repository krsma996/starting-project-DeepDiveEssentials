import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS_MAP } from "./data.js";
import { EXAMPLES } from "./data.js";
import { useState } from "react";



function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function onClick(selectedTab) {
    setSelectedTopic(selectedTab);

  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS_MAP.map((concepts) => (
              <CoreConcepts
                key={concepts.id}
                title={concepts.title}
                image={concepts.image}
                description={concepts.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => onClick("components")} isSelected={selectedTopic ==='components'}>
              Components
            </TabButton>
            <TabButton onClick={() => onClick("jsx")} isSelected={selectedTopic === "jsx" }>JSX</TabButton>
            <TabButton onClick={() => onClick("state")} isSelected={selectedTopic === "state"}>State</TabButton>
            <TabButton onClick={() => onClick("props")} isSelected={selectedTopic ==='props'}>Props</TabButton>
          </menu>
        </section>
      </main>
      <main>
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

/*
📌 Objašnjenje (kratko i jasno):

✅ import slike – možeš iz bilo kog lokalnog foldera
import mainImg from "./assets/react-core-concepts.png";

✅ niz sa više stringova (description tekstovi)
const reactDescription = ["Fundamental", "Core", "Kurac"];

✅ funkcija koja vraća random broj (0 do max uključujući max)
Math.floor(Math.random() * (max + 1));

✅ biramo nasumičan string iz niza
reactDescription[getRandomDescription(2)];

✅ u JSX se JS kod ubacuje sa {}
<p>{description} React concepts...</p>;

🎯 rezultat: svaki put kad se komponenta renderuje, prikazuje se random opis

📌 PROPS u React-u:
- props = "properties" = podaci koji se prosleđuju komponentama spolja
- Koriste se u funkciji kao `props.nesto`, ili preko destructuringa: `({ title, description })`

✅ Kako prosleđujemo props:
<CoreConcepts
  title="Components"
  description="The core UI building block"
  img={components}
/>

✅ Kako ih koristimo u komponenti:
props.title → za naslov
props.description → za opis
props.img → za prikaz slike

📌 Šta sve može da se prosledi kao prop?
✔️ string: title="React"
✔️ broj: count={5}
✔️ boolean: isActive={true}
✔️ objekat: user={{ name: "Pera", age: 25 }}
✔️ funkcija: onClick={handleClick}
✔️ JSX / drugi elementi: children={<p>Text</p>}

🎯 Props su JEDNOSMERNI (parent ➜ child), komponenta ne može menjati props, samo ih koristi.

*/
/*
📌 Reusability komponente sa .map() i listama

🧱 1. Čuvaj podatke u posebnom fajlu (npr. data.js)
→ Kao niz objekata (kao CORE_CONCEPTS_MAP)

📋 Primer objekta:
{
  id: 1,
  title: "Components",
  image: componentsImg,
  description: "Basic building block of UI"
}

🔁 2. Koristi .map() da prolaziš kroz niz i za svaki element vratiš komponentu:
<ul>
  {CORE_CONCEPTS_MAP.map((concept) => (
    <CoreConcepts
      key={concept.id}
      title={concept.title}
      image={concept.image}
      description={concept.description}
    />
  ))}
</ul>

🧠 Prednosti:
✔️ Lakši rad sa većom količinom podataka
✔️ Komponente su *reusable* i *scalable*
✔️ Izmena sadržaja se radi samo u `data.js`, ne i u JSX-u
✔️ Manje duplikata, čistiji kod

⚠️ Obavezno dodaj `key={}` pri mapiranju → pomaže Reactu da efikasnije upravlja listom.
*/
/*
Isto mozes id akoristis objects destructuring npr u funckiji ovoj da napravis jos boljim i optimalnijim
Object destructuring jednostavno znaci da mozemo da targetiramo razlicite propertije od onoe komponente
sa koje se salje u ovu komponentu kojoj primamo npr 

    {CORE_CONCEPTS_MAP.map((concepts) => (
              <CoreConcepts
                key={concepts.key}
                title={concepts.title}
                image={concepts.image}
                description={concepts.description}
              />
            ))}

  ja sad ovde saljem key title i image description  u Core conpets komponentu sto znaci da 

function CoreConcepts({title,description,image}){
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


/*
📌 Object Destructuring u komponentama

🎯 Umesto ovoga:
function CoreConcepts(props) {
  return <h3>{props.title}</h3>;
}

✅ Koristi direktno destrukturiranje:
function CoreConcepts({ title, description, image }) {
  return (...) // sada koristiš direktno title, description, image
}

📦 Šta dobijamo?
✔️ Čistiji i kraći kod
✔️ Direktan pristup vrednostima bez props. prefiksa
✔️ Lakše čitanje i održavanje

🎯 Kada koristiš:
<CoreConcepts title="JSX" description="..." image={...} />

...komponenta prima te props, i destructuring ih automatski "izvlači" u zasebne promenljive.
*/
/*
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

Posle ovog ides na drugi zapis ne treba vise gledas ovaj fajl ovde sve ide u txt
/*
  Ako želim da prosledim funkciju kao prop (npr. `onClick`) u komponentu, osnovni pristup izgleda ovako:

  // Primer 1:
  function onClick() {
    console.log("Clicked");
  }

  <menu>
    <TabButton onClick={onClick}>Components</TabButton>
    <TabButton>JSX</TabButton>
    <TabButton>State</TabButton>
    <TabButton>Props</TabButton>
  </menu>

  // Komponenta TabButton:
  export default function TabButton({ children, onClick }) {
    return (
      <li>
        <button onClick={onClick}>{children}</button>
      </li>
    );
  }

  // Objašnjenje:
  // - Koristimo object destructuring da iz props "izvučemo" `children` i `onClick`.
  // - Cilj je da funkciju `onClick`, koju prosleđujemo iz roditelja, postavimo direktno
  //   na `onClick` event dugmeta — jer <button> element već podržava taj događaj.
  // - Ovo omogućava da logiku (npr. šta se dešava kada se klikne dugme) držimo van komponente.
*/
