import React, { useState } from "react";
import styled from "styled-components";
import GPTRepoLoader from "./GPTRepoLoader";
import KeysHandler from "./KeysHandler";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  const [prompt, setPrompt] = useState("");
  const [fileContents, setFileContents] = useState<any[]>([]);
  const [openAIKey, setOpenAIKey] = useState(
    localStorage.getItem("openAIKey") || ""
  );
  const handleKeysSubmit = (openAIKey: string) => {
    setOpenAIKey(openAIKey);
  };

  return (
    <div>
      <h1>GPTCoder</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
        fugit temporibus natus voluptatum animi ex, quas nobis eos consequatur
        modi sit quos hic sunt praesentium corrupti explicabo beatae
        perspiciatis error.
      </p>

      <h2>Init: Keys</h2>
      <KeysHandler onSubmit={handleKeysSubmit} />

      <h2>Step 2: GPTRepoLoader</h2>
      <GPTRepoLoader
        onSubmit={(prompt, fileContents) => {
          setPrompt(prompt);
          setFileContents(fileContents);
        }}
      />

      <h2>Step 3: Ask GPT, Render SourceCode</h2>
    </div>
  );
}

export default App;
