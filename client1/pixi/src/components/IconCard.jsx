// // client/src/components/IconCard.jsx
// import { useState, useEffect, useRef } from "react";
// import { Copy, Check, Heart } from "lucide-react";
// import SpotlightCard from "./SpotlightCard";


// export default function IconCard({ iconName, savedIcons, onIconRemoved }) {
//   const [copied, setCopied] = useState(false);
//   const [saved, setSaved] = useState(false); 

//   useEffect(() => {
//     if (savedIcons) {
//       setSaved(savedIcons.includes(iconName));
//     }
//   }, [savedIcons, iconName]);

//   const handleCopy = async (e) => {
//     e.stopPropagation();
//     const snippet = `<i class="material-icons">${iconName}</i>`;
//     try {
//       await navigator.clipboard.writeText(snippet);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy text: ", err);
//     }
//   };

//   const handleSave = async (e) => {
//     e.stopPropagation();
//     const userData = JSON.parse(localStorage.getItem('user-info'));
//     if (!userData || !userData.userId) {
//         alert('Please log in to save icons.');
//         return;
//     }

//     try {
//       if (saved) {
//         // Unsave the icon
//         const response = await fetch(`http://localhost:8080/api/icons/${userData.userId}/${iconName}`, {
//           method: 'DELETE',
//         });
//         if (response.ok) {
//           setSaved(false);
//           alert('Icon removed from saved list.');
//           // Call the callback to update the parent component
//           if (onIconRemoved) {
//             onIconRemoved(iconName);
//           }
//         } else {
//           alert('Failed to remove icon.');
//         }
//       } else {
//         // Save the icon
//         const response = await fetch('http://localhost:8080/api/icons', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             iconName: iconName,
//             userId: userData.userId
//           }),
//         });

//         if (response.status === 201) {
//           setSaved(true);
//           alert('Icon saved successfully!');
//         } else if (response.status === 200) {
//           setSaved(true);
//           alert('This icon is already in your saved list.');
//         } else {
//           alert('Failed to save icon.');
//         }
//       }
//     } catch (error) {
//       alert('Network error. Failed to connect to server.');
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           @keyframes icon-pop {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.1); }
//             100% { transform: scale(1); }
//           }
//           @keyframes icon-pulse {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.05); }
//             100% { transform: scale(1); }
//           }
//           .icon-effect:hover {
//             animation: icon-pop 0.3s ease-in-out;
//             animation-fill-mode: forwards;
//           }
//           .icon-effect:hover .text-white {
//             animation: icon-pulse 1.5s infinite;
//           }
//         `}
//       </style>
//       <SpotlightCard
//         className="group relative w-full aspect-square flex flex-col items-center justify-center p-6 rounded-2xl
//                  bg-white/5 backdrop-blur-md shadow-lg border border-white/10 transition-all duration-300 hover:shadow-purple-500/20"
//         spotlightColor="rgba(168, 85, 247, 0.3)"
//       >
//         {/* Icon and name container */}
//         <div className="flex-grow flex flex-col items-center justify-center">
//           <i
//             style={{ fontSize: "60px" }}
//             className="material-icons text-purple-400 transition-transform duration-300 group-hover:scale-110"
//           >
//             {iconName}
//           </i>
//           <span className="mt-4 text-white/90 text-base font-medium text-center break-all tracking-wide">
//             {iconName}
//           </span>
//         </div>

//         {/* Button container */}
//         <div className="flex w-full py-2 mt-auto rounded-lg text-sm font-medium gap-2
//                     transition-all duration-300 ease-in-out transform
//                     opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
          
//           {/* Save Button */}
//           <button
//             onClick={handleSave}
//             className={`flex-1 flex items-center justify-center py-2 rounded-lg text-sm font-medium
//                         transition-all duration-300 ease-in-out transform
//                         ${saved
//                           ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
//                           : "bg-white/10 text-white/60 hover:text-white hover:bg-white/20"
//                         }`}
//           >
//             <Heart size={18} fill={saved ? "currentColor" : "none"} />
//           </button>

//           {/* Copy Button */}
//           <button
//             onClick={handleCopy}
//             className={`flex-1 flex items-center justify-center py-2 rounded-lg text-sm font-medium
//                         transition-all duration-300 ease-in-out transform
//                         ${copied
//                           ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg shadow-purple-400/40"
//                           : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-lg shadow-purple-500/30"
//                         }`}
//           >
//             {copied ? (
//               <Check size={18} className="animate-bounce" />
//             ) : (
//               <Copy size={18} />
//             )}
//           </button>
//         </div>
//       </SpotlightCard>
//     </>
//   );
// }



import { useState, useEffect } from "react";
import { Copy, Check, Heart } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { toast } from "react-hot-toast"; // add this

export default function IconCard({ iconName, savedIcons, onIconRemoved }) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (savedIcons) {
      setSaved(savedIcons.includes(iconName));
    }
  }, [savedIcons, iconName]);

  const handleCopy = async (e) => {
    e.stopPropagation();
    const snippet = `<i class="material-icons">${iconName}</i>`;
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);

      toast.success("Copied to clipboard!", {
        style: {
          borderRadius: "12px",
          background: "rgba(20,20,20,0.7)",
          backdropFilter: "blur(10px)",
          color: "#fff",
        },
        icon: "📋",
      });

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy text.");
    }
  };

  const handleSave = async (e) => {
    e.stopPropagation();
    const userData = JSON.parse(localStorage.getItem("user-info"));
    if (!userData || !userData.userId) {
      toast.error("Please log in to save icons.");
      return;
    }

    try {
      if (saved) {
        // Unsave
        const response = await fetch(
          `https://pixicon-backend.onrender.com/api/icons/${userData.userId}/${iconName}`,
          { method: "DELETE" }
        );
        if (response.ok) {
          setSaved(false);
          if (onIconRemoved) onIconRemoved(iconName);

          toast("Icon removed", {
            style: {
              borderRadius: "12px",
              background: "rgba(255,50,100,0.1)",
              backdropFilter: "blur(10px)",
              color: "#ff4d6d",
            },
            icon: "❌",
          });
        } else {
          toast.error("Failed to remove icon.");
        }
      } else {
        // Save
        const response = await fetch("https://pixicon-backend.onrender.com/api/icons", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            iconName,
            userId: userData.userId,
          }),
        });

        if (response.status === 201 || response.status === 200) {
          setSaved(true);
          toast.success("Icon saved!", {
            style: {
              borderRadius: "12px",
              background: "rgba(120,50,255,0.15)",
              backdropFilter: "blur(10px)",
              color: "#fff",
            },
            icon: "💜",
          });
        } else {
          toast.error("Failed to save icon.");
        }
      }
    } catch {
      toast.error("Network error. Try again.");
    }
  };

  return (
    <SpotlightCard
      className="group relative w-full aspect-square flex flex-col items-center justify-center p-6 rounded-2xl
                 bg-white/5 backdrop-blur-md shadow-lg border border-white/10 transition-all duration-300 hover:shadow-purple-500/20"
      spotlightColor="rgba(168, 85, 247, 0.3)"
    >
      {/* Icon */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <i
          style={{ fontSize: "60px" }}
          className="material-icons text-purple-400 transition-transform duration-300 group-hover:scale-110"
        >
          {iconName}
        </i>
        <span className="mt-4 text-white/90 text-base font-medium text-center break-all tracking-wide">
          {iconName}
        </span>
      </div>

      {/* Buttons */}
      <div
        className="flex w-full py-2 mt-auto rounded-lg text-sm font-medium gap-2
                   transition-all duration-300 ease-in-out transform
                   opacity-100 sm:opacity-0 sm:scale-95 sm:group-hover:opacity-100 sm:group-hover:scale-100"
      >
        {/* Save Button */}
        <button
          onClick={handleSave}
          className={`flex-1 flex items-center justify-center py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${
              saved
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                : "bg-white/10 text-white/60 hover:text-white hover:bg-white/20"
            }`}
        >
          <Heart size={18} fill={saved ? "currentColor" : "none"} />
        </button>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`flex-1 flex items-center justify-center py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${
              copied
                ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-400/40"
                : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-lg shadow-purple-500/30"
            }`}
        >
          {copied ? (
            <Check size={18} className="animate-bounce" />
          ) : (
            <Copy size={18} />
          )}
        </button>
      </div>
    </SpotlightCard>
  );
}
