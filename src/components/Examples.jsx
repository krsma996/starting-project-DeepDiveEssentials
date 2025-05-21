
import TabButton from "../components/TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function onClick(selectedTab) {
    setSelectedTopic(selectedTab);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }







  return (
    <Section title={"Examples"} id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              onClick={() => onClick("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => onClick("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => onClick("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </TabButton>
            <TabButton
              onClick={() => onClick("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      <menu></menu>
    </Section>
  );
}
