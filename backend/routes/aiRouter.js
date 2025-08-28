// backend/routes/aiRouter.js
const router = require('express').Router();
const axios = require('axios');

router.post('/design-ideas', async (req, res) => {
    const { message } = req.body;
    const API_KEY = process.env.GEMINI_API_KEY;

    const payload = {
        contents: [{
            parts: [{
                text: `Act as the 'Icon Muse,' a whimsical and wise creative assistant for icon design. Your purpose is to inspire users with fresh, on-point ideas. Respond with a highly creative and concise summary. Do not give any introduction or closing remarks. Simply dive into the creative brainstorming.`
            }]
        }],
        generationConfig: {
            temperature: 0.7,
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    concept: { type: "STRING" },
                    style: { type: "STRING" },
                    design_idea: { type: "STRING" },
                    color_scheme: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                name: { type: "STRING" },
                                hex_code: { type: "STRING" },
                                emoji: { type: "STRING" }
                            },
                            propertyOrdering: ["name", "hex_code", "emoji"]
                        }
                    }
                },
                propertyOrdering: ["concept", "style", "design_idea", "color_scheme"]
            }
        },
    };

    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`,
            payload
        );
        
        if (response.status === 200 && response.data.candidates && response.data.candidates.length > 0) {
            const jsonResponse = JSON.parse(response.data.candidates[0].content.parts[0].text);
            res.status(200).json({ reply: jsonResponse });
        } else {
            console.error('AI API returned an empty or invalid response:', response.data);
            res.status(500).json({ message: 'Could not generate a design idea. Please try again with a different query.' });
        }
    } catch (error) {
        console.error('Error calling AI API:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Error generating response from AI. Check your API key or try again later.' });
    }
});

module.exports = router;