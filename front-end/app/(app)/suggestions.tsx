import React, {useState} from 'react';
import {Box} from "@/components/ui/box";
import {Text} from "@/components/ui/text";
import {Button, ButtonText} from "@/components/ui/button";

// --- SVG Icon Components ---
// Using inline SVGs to avoid dependency issues.

const ShirtIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
      <path
          d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
    </svg>
);

const PantsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
      <path d="M12 2v7.5"/>
      <path d="m6 10 1.5 1.5"/>
      <path d="M16.5 11.5 18 10"/>
      <path d="M6 22h12"/>
      <path d="M6 12v10"/>
      <path d="M18 12v10"/>
    </svg>
);

const ShoeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
      <path d="M7 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7z"></path>
      <path d="M16 17a2 2 0 0 0 2-2V9"></path>
      <path d="M4.2 12.8a2 2 0 0 0-1.2 1.2S3 17 7 17h10s4-3 4-6.5-2-5-4-5H7S3 8.5 3 12.5a2.2 2.2 0 0 0 1.2.3z"></path>
    </svg>
);

const QuestionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);


// --- Mock Data ---
// Simplified mock data with components for icons.
const clothingItems = {
  top: [
    {name: 'T-Shirt', icon: <ShirtIcon/>},
    {name: 'Shirt', icon: <ShirtIcon/>},
    {name: 'Sweater', icon: <ShirtIcon/>},
  ],
  bottom: [
    {name: 'Jeans', icon: <PantsIcon/>},
    {name: 'Shorts', icon: <PantsIcon/>},
    {name: 'Trousers', icon: <PantsIcon/>},
  ],
  shoes: [
    {name: 'Sneakers', icon: <ShoeIcon/>},
    {name: 'Boots', icon: <ShoeIcon/>},
    {name: 'Sandals', icon: <ShoeIcon/>},
  ],
};


// --- Components ---

const OutfitCard = ({item}) => (
    <div
        className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-center justify-center w-32 h-40 m-2 transition-transform duration-300 hover:scale-105">
      {item.icon}
      <p className="mt-2 font-bold text-center text-gray-800">{item.name}</p>
    </div>
);

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
    </div>
);


// --- Main App Component ---

function App() {
  const [outfit, setOutfit] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to generate a random outfit
  const generateOutfit = () => {
    setLoading(true);
    setOutfit(null); // Clear previous outfit
    setTimeout(() => {
      const top = clothingItems.top[Math.floor(Math.random() * clothingItems.top.length)];
      const bottom = clothingItems.bottom[Math.floor(Math.random() * clothingItems.bottom.length)];
      const shoes = clothingItems.shoes[Math.floor(Math.random() * clothingItems.shoes.length)];
      setOutfit({top, bottom, shoes});
      setLoading(false);
    }, 1500); // Simulate network request
  };

  return (
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans items-center">
        {/* Header */}
        <Box className="pt-12 pb-4 px-4 bg-black w-full">
          <Text className="text-3xl font-bold text-white">Wardrobe</Text>
        </Box>
        <Button
            onPress={generateOutfit}
            disabled={loading}
            size="xl"
            className="mt-12"
            >
          <ButtonText> {loading ? 'Generating...' : 'Generate Outfit'} </ButtonText>
        </Button>

        <main className="flex-grow flex flex-col justify-center items-center w-full">
          {loading ? (
              <LoadingSpinner/>
          ) : outfit ? (
              <div
                  className="flex flex-wrap justify-center items-center transition-opacity duration-500 animate-fade-in">
                <OutfitCard item={outfit.top}/>
                <OutfitCard item={outfit.bottom}/>
                <OutfitCard item={outfit.shoes}/>
              </div>
          ) : (
              <div
                  className="bg-gray-100 border border-dashed border-gray-300 p-8 rounded-2xl flex flex-col items-center justify-center w-full max-w-lg h-64 text-center">
                <QuestionIcon/>
                <p className="mt-4 text-gray-500">
                  Your outfit suggestion will appear here.
                </p>

              </div>

          )}
        </main>

        {/* Styling for custom animations */}
        <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-in-out;
                }
            `}</style>
      </div>
  );
}

export default App;
