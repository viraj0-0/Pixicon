// // client1/pixi/src/components/AIGuide.jsx
// import React, { useState } from 'react';
// import { Send, Sparkles } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';

// export default function AIGuide() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [userMessage, setUserMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSendMessage = async () => {
//     if (!userMessage.trim()) return;

//     const newUserMessage = { sender: 'user', text: userMessage };
//     setChatHistory(prevChat => [...prevChat, newUserMessage]);
    
//     setLoading(true);
//     setUserMessage('');

//     try {
//       const response = await fetch('http://localhost:8080/api/ai/design-ideas', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: userMessage }),
//       });
      
//       const data = await response.json();
//       if (response.ok && data.reply) {
//         // AI reply is now a JSON object
//         const aiReply = { sender: 'ai', text: data.reply };
//         setChatHistory(prevChat => [...prevChat, aiReply]);
//       } else {
//         const errorText = data.message || 'Something went wrong on the server.';
//         const errorReply = { sender: 'ai', text: `Error: ${errorText}` };
//         setChatHistory(prevChat => [...prevChat, errorReply]);
//       }
//     } catch (error) {
//       const errorReply = { sender: 'ai', text: 'Network error. Please try again later.' };
//       setChatHistory(prevChat => [...prevChat, errorReply]);
//       console.error('Error fetching AI response:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   // Custom render logic for the structured AI response
//   const renderMessage = (message) => {
//     if (message.sender === 'ai' && typeof message.text === 'object') {
//       const { concept, style, design_idea, color_scheme } = message.text;
//       return (
//         <div className="bg-neutral-700 text-neutral-200 rounded-lg p-3 shadow-md">
//           <p className="font-bold">Concept:</p>
//           <p>{concept}</p>
//           <p className="font-bold mt-2">Style:</p>
//           <p>{style}</p>
//           <p className="font-bold mt-2">Design Idea:</p>
//           <p>{design_idea}</p>
//           <p className="font-bold mt-2">Color Scheme:</p>
//           <ul>
//             {color_scheme && color_scheme.map((color, idx) => (
//               <li key={idx} className="flex items-center gap-2">
//                 <span className="text-xl">{color.emoji}</span>
//                 <span>{color.name} ({color.hex_code})</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
//     }
//     return (
//       <div className={`max-w-[80%] rounded-lg p-3 shadow-md ${
//         message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-neutral-700 text-neutral-200'
//       }`}>
//         <ReactMarkdown>{message.text}</ReactMarkdown>
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col h-full bg-neutral-800 rounded-lg shadow-xl overflow-hidden">
//       <div className="flex items-center justify-center p-4 bg-neutral-900 border-b border-neutral-700">
//         <Sparkles size={24} className="text-purple-400" />
//         <h2 className="ml-2 text-xl font-bold text-white">Pix Ai</h2>
//       </div>

//       <div className="flex-grow p-4 space-y-4 overflow-y-auto">
//         {chatHistory.length === 0 && (
//           <div className="text-center text-neutral-500 italic p-8">
//             Start a conversation to get icon design ideas!
//           </div>
//         )}
//         {chatHistory.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//           >
//             {renderMessage(msg)}
//           </div>
//         ))}
//       </div>

//       <div className="p-4 bg-neutral-900 border-t border-neutral-700">
//         <div className="flex items-center gap-2">
//           <textarea
//             className="flex-grow p-3 bg-neutral-700 text-white rounded-lg resize-none outline-none focus:ring-2 focus:ring-purple-500"
//             rows="1"
//             placeholder="Ask for icon ideas..."
//             value={userMessage}
//             onChange={(e) => setUserMessage(e.target.value)}
//             onKeyDown={handleKeyPress}
//           />
//           <button
//             onClick={handleSendMessage}
//             disabled={loading || !userMessage.trim()}
//             className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-neutral-600"
//           >
//             {loading ? <span className="animate-spin">...</span> : <Send size={20} />}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function AIGuide() {
  const [chatHistory, setChatHistory] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newUserMessage = { sender: 'user', text: userMessage };
    setChatHistory(prevChat => [...prevChat, newUserMessage]);

    setLoading(true);
    setUserMessage('');

    try {
      const response = await fetch('http://localhost:8080/api/ai/design-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      let aiReplyContent = data.reply;
      try {
        aiReplyContent = JSON.parse(data.reply);
      } catch (e) {
        // keep as text
      }

      const aiReply = { sender: 'ai', text: aiReplyContent };
      setChatHistory(prevChat => [...prevChat, aiReply]);
    } catch (error) {
      const errorReply = { sender: 'ai', text: '⚠️ Network error. Please try again later.' };
      setChatHistory(prevChat => [...prevChat, errorReply]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Render AI structured reply
  const renderMessage = (message) => {
    if (message.sender === 'ai' && typeof message.text === 'object') {
      const { concept, style, design_idea, color_scheme } = message.text;
      return (
        <div className="bg-neutral-800/70 backdrop-blur-sm border border-neutral-700 rounded-xl p-4 shadow-lg w-full max-w-lg">
          <h3 className="text-purple-400 font-bold mb-2">💡 Concept</h3>
          <p className="mb-3">{concept}</p>

          <h3 className="text-purple-400 font-bold mb-2">🎨 Style</h3>
          <p className="mb-3">{style}</p>

          <h3 className="text-purple-400 font-bold mb-2">✨ Design Idea</h3>
          <p className="mb-3">{design_idea}</p>

          <h3 className="text-purple-400 font-bold mb-2">🎨 Color Scheme</h3>
          <div className="flex gap-3 flex-wrap">
            {color_scheme && color_scheme.map((color, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border border-white/20"
                  style={{ backgroundColor: color.hex_code }}
                ></div>
                <span className="text-sm text-neutral-300">
                  {color.name} ({color.hex_code})
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-md ${
        message.sender === 'user'
          ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white self-end'
          : 'bg-neutral-800/80 border border-neutral-700 text-neutral-200'
      }`}>
        <ReactMarkdown>{message.text}</ReactMarkdown>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-neutral-900 rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-center p-4 bg-neutral-950 border-b border-neutral-800">
        <Sparkles size={24} className="text-purple-400" />
        <h2 className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Pix Ai
        </h2>
      </div>

      {/* Chat Window */}
      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {chatHistory.length === 0 && (
          <div className="text-center text-neutral-500 italic p-8">
            Start a conversation to get icon design ideas ✨
          </div>
        )}
        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {renderMessage(msg)}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-neutral-950 border-t border-neutral-800">
        <div className="flex items-center gap-2">
          <textarea
            className="flex-grow p-3 bg-neutral-800/70 text-white rounded-lg resize-none outline-none focus:ring-2 focus:ring-purple-500"
            rows="1"
            placeholder="Ask for icon ideas..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          {/* <button
            onClick={handleSendMessage}
            disabled={loading || !userMessage.trim()}
            className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? <span className="animate-spin">...</span> : <Send size={20} />}
          </button> */}
          <button
  onClick={handleSendMessage}
  disabled={loading || !userMessage.trim()}
  className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center"
>
  {loading ? (
    <span className="flex gap-1 animate-pulse">
      <span>.</span><span>.</span><span>.</span>
    </span>
  ) : (
    <Send size={20} />
  )}
</button>
        </div>
      </div>
    </div>
  );
}

