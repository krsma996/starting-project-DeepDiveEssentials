import { CORE_CONCEPTS_MAP } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";

export default function CoreConcept() {
  return (
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
  );
}
