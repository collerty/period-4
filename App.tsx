// App.tsx
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

// Expanded mock data with more items and labels
const mockWardrobe = {
  tops: [
    { id: 1, name: 'White Crewneck T-shirt', labels: ['casual', 'summer', 'cotton', 'short-sleeve', 'basic', 'minimalist'] },
    { id: 2, name: 'Blue Oxford Dress Shirt', labels: ['formal', 'business', 'long-sleeve', 'office', 'professional', 'button-down'] },
    { id: 3, name: 'Black Zip Hoodie', labels: ['casual', 'winter', 'warm', 'streetwear', 'athleisure', 'layering'] },
    { id: 4, name: 'Striped Breton Top', labels: ['casual', 'summer', 'nautical', 'classic', 'french', 'long-sleeve'] },
    { id: 5, name: 'Pink Silk Blouse', labels: ['formal', 'feminine', 'elegant', 'office', 'evening', 'luxury'] },
    { id: 6, name: 'Denim Jacket', labels: ['casual', 'spring', 'fall', 'vintage', 'streetwear', 'layering'] },
    { id: 7, name: 'Gray Sweater', labels: ['winter', 'warm', 'knit', 'minimalist', 'smart-casual', 'neutral'] },
  ],
  bottoms: [
    { id: 8, name: 'Blue Slim Jeans', labels: ['casual', 'denim', 'slim-fit', 'everyday', 'versatile', 'streetwear'] },
    { id: 9, name: 'Black Dress Pants', labels: ['formal', 'business', 'tailored', 'office', 'professional', 'slim-fit'] },
    { id: 10, name: 'Athletic Joggers', labels: ['casual', 'sporty', 'comfort', 'athleisure', 'modern', 'elastic-waist'] },
    { id: 11, name: 'Pleated Midi Skirt', labels: ['feminine', 'formal', 'office', 'elegant', 'business-casual', 'a-line'] },
    { id: 12, name: 'Cargo Pants', labels: ['casual', 'streetwear', 'utilitarian', 'pockets', 'urban', 'military'] },
    { id: 13, name: 'White Linen Pants', labels: ['summer', 'resort', 'lightweight', 'breathable', 'smart-casual', 'relaxed-fit'] },
  ],
  shoes: [
    { id: 14, name: 'White Leather Sneakers', labels: ['casual', 'sporty', 'minimalist', 'versatile', 'modern', 'clean'] },
    { id: 15, name: 'Black Oxford Shoes', labels: ['formal', 'business', 'classic', 'office', 'professional', 'polished'] },
    { id: 16, name: 'Brown Chelsea Boots', labels: ['smart-casual', 'fall', 'winter', 'leather', 'versatile', 'minimalist'] },
    { id: 17, name: 'Running Shoes', labels: ['athletic', 'sporty', 'comfort', 'performance', 'gym', 'technical'] },
    { id: 18, name: 'Strappy Sandals', labels: ['summer', 'feminine', 'evening', 'dressy', 'open-toe', 'lightweight'] },
    { id: 19, name: 'Combat Boots', labels: ['edgy', 'streetwear', 'fall', 'winter', 'utilitarian', 'chunky'] },
  ],
  outerwear: [
    { id: 20, name: 'Trench Coat', labels: ['formal', 'fall', 'spring', 'classic', 'timeless', 'water-resistant'] },
    { id: 21, name: 'Puffer Jacket', labels: ['winter', 'warm', 'technical', 'outdoor', 'insulated', 'utility'] },
    { id: 22, name: 'Denim Jacket', labels: ['casual', 'spring', 'fall', 'vintage', 'streetwear', 'layering'] },
    { id: 23, name: 'Blazer', labels: ['formal', 'business', 'smart-casual', 'tailored', 'office', 'structured'] },
  ],
  accessories: [
    { id: 24, name: 'Silver Watch', labels: ['formal', 'business', 'minimalist', 'luxury', 'classic', 'metal'] },
    { id: 25, name: 'Baseball Cap', labels: ['casual', 'summer', 'sporty', 'streetwear', 'logo', 'adjustable'] },
    { id: 26, name: 'Silk Scarf', labels: ['feminine', 'formal', 'elegant', 'luxury', 'patterned', 'versatile'] },
    { id: 27, name: 'Leather Belt', labels: ['formal', 'business', 'classic', 'brown', 'minimalist', 'essential'] },
    { id: 28, name: 'Statement Necklace', labels: ['feminine', 'evening', 'bold', 'fashion', 'dressy', 'luxury'] },
  ]
};

// Style categories with their associated labels
const STYLE_CATEGORIES = {
  all: { name: 'All Styles', labels: [] },
  casual: { name: 'Casual', labels: ['casual', 'everyday', 'comfort'] },
  business: { name: 'Business', labels: ['formal', 'business', 'office', 'professional'] },
  streetwear: { name: 'Streetwear', labels: ['streetwear', 'urban', 'edgy', 'utilitarian'] },
  smartCasual: { name: 'Smart Casual', labels: ['smart-casual', 'tailored', 'relaxed-fit', 'versatile'] },
  feminine: { name: 'Feminine', labels: ['feminine', 'elegant', 'dressy', 'flowy'] },
  minimalist: { name: 'Minimalist', labels: ['minimalist', 'basic', 'neutral', 'clean'] },
  athletic: { name: 'Athletic', labels: ['athletic', 'sporty', 'performance', 'comfort'] },
};

// Enhanced recommendation logic
const generateOutfits = (wardrobe: typeof mockWardrobe, styleKey: keyof typeof STYLE_CATEGORIES) => {
  const outfits = [];
  const styleLabels = STYLE_CATEGORIES[styleKey].labels;
  
  // Generate all possible combinations
  for (const top of wardrobe.tops) {
    for (const bottom of wardrobe.bottoms) {
      for (const shoes of wardrobe.shoes) {
        // Optionally add outerwear (50% chance to include)
        const includeOuterwear = Math.random() > 0.5;
        const outerwearOptions = includeOuterwear ? wardrobe.outerwear : [null];
        
        for (const outerwear of outerwearOptions) {
          // Find all labels across the outfit items
          const allLabels = [
            ...top.labels,
            ...bottom.labels,
            ...shoes.labels,
            ...(outerwear?.labels || [])
          ];
          
          // Count how many style labels are matched
          const styleMatchCount = styleKey === 'all' 
            ? 1 
            : styleLabels.filter(label => allLabels.includes(label)).length;
          
          // Only add outfit if it matches at least one style label (or if no style filter)
          if (styleKey === 'all' || styleMatchCount > 0) {
            // Find accessories that match at least one label from the outfit
            const matchingAccessories = wardrobe.accessories
              .filter(acc => acc.labels.some(label => allLabels.includes(label)))
              .slice(0, 2); // Limit to 2 accessories
            
            outfits.push({
              top,
              bottom,
              shoes,
              outerwear,
              accessories: matchingAccessories,
              styleMatchCount,
              allLabels: [...new Set(allLabels)] // Unique labels
            });
          }
        }
      }
    }
  }
  
  // Sort by best style matches first
  if (styleKey !== 'all') {
    outfits.sort((a, b) => b.styleMatchCount - a.styleMatchCount);
  }
  
  return outfits;
};

const App = () => {
  const [outfits, setOutfits] = useState<any[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof STYLE_CATEGORIES>('all');

  const handleGenerateOutfits = () => {
    const generatedOutfits = generateOutfits(mockWardrobe, selectedStyle);
    setOutfits(generatedOutfits);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fashion Outfit Recommender</Text>
      
      <View style={styles.controls}>
        <Text style={styles.sectionTitle}>Style Preferences</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.styleButtons}
        >
          {Object.entries(STYLE_CATEGORIES).map(([key, { name }]) => (
            <Button 
              key={key}
              title={name} 
              onPress={() => setSelectedStyle(key as keyof typeof STYLE_CATEGORIES)} 
              color={selectedStyle === key ? '#6200ee' : '#aaa'}
            />
          ))}
        </ScrollView>
        
        <Button 
          title="Generate Outfits" 
          onPress={handleGenerateOutfits} 
          color="#6200ee"
        />
      </View>
      
      <ScrollView style={styles.outfitsContainer}>
        <Text style={styles.sectionTitle}>
          {outfits.length > 0 
            ? `Recommended ${STYLE_CATEGORIES[selectedStyle].name} Outfits (${outfits.length})`
            : 'No outfits generated yet'}
        </Text>
        
        {outfits.slice(0, 10).map((outfit, index) => (
          <View key={index} style={styles.outfitCard}>
            <Text style={styles.outfitTitle}>Outfit #{index + 1}</Text>
            <Text style={styles.outfitItem}>Top: {outfit.top.name}</Text>
            <Text style={styles.outfitItem}>Bottom: {outfit.bottom.name}</Text>
            <Text style={styles.outfitItem}>Shoes: {outfit.shoes.name}</Text>
            {outfit.outerwear && (
              <Text style={styles.outfitItem}>Outerwear: {outfit.outerwear.name}</Text>
            )}
            {outfit.accessories.length > 0 && (
              <Text style={styles.outfitItem}>
                Accessories: {outfit.accessories.map((a: { name: string }) => a.name).join(', ')}
              </Text>
            )}
            <Text style={styles.labelsText}>
              Style: {STYLE_CATEGORIES[selectedStyle].name} • 
              Matching Labels: {outfit.allLabels.filter((l: string) => 
                selectedStyle === 'all' || STYLE_CATEGORIES[selectedStyle].labels.includes(l)
              ).join(', ')}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#444',
  },
  controls: {
    marginBottom: 16,
  },
  styleButtons: {
    paddingBottom: 10,
    gap: 8,
  },
  outfitsContainer: {
    flex: 1,
  },
  outfitCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  outfitTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#6200ee',
  },
  outfitItem: {
    marginBottom: 4,
    color: '#555',
  },
  labelsText: {
    fontStyle: 'italic',
    color: '#666',
    marginTop: 8,
    fontSize: 12,
  },
});

export default App;