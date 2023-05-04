import { Configuration, OpenAIApi } from "openai";
import "./App.css";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setImage(response.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h3>Generate an Image using OpenAI API</h3>
      <input
        className="app-input"
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={generateImage}>Generate an Image</button>
      {image.length > 0 ? (
        <img className="image" src={image} alt="image" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
