
import TabButton from "../components/TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function onClick(selectedTab) {
    setSelectedTopic(selectedTab);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onClick={() => onClick("components")} isSelected={selectedTopic === "components"}>
          Components
        </TabButton>
        <TabButton onClick={() => onClick("jsx")} isSelected={selectedTopic === "jsx"}>
          JSX
        </TabButton>
        <TabButton onClick={() => onClick("state")} isSelected={selectedTopic === "state"}>
          State
        </TabButton>
        <TabButton onClick={() => onClick("props")} isSelected={selectedTopic === "props"}>
          Props
        </TabButton>
      </menu>
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
    </section>
  );
}
