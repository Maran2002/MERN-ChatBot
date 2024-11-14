const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const predefinedResponses = require("./predefinedResponses");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [ ], //Add your origin URL (frontend link) here.
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

const normalizeText = (text) => {
  return text.toLowerCase().replace(/[^\w\s]/g, "");
};

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;
  const normalizedMessage = normalizeText(userMessage);

  const predefinedResponse = predefinedResponses.find(
    (entry) => normalizeText(entry.input) === normalizedMessage
  );

  if (predefinedResponse) {
    return res.json({ response: predefinedResponse.response });
  }
  try {
    const response = await fetch(`${process.env.API_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: userMessage }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();

    res.json({ response: result[0].generated_text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      response: "Error generating response for your prompt.",
    });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
