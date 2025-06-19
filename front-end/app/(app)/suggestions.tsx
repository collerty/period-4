import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Switch, TextInput } from 'react-native';


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


const STYLE_CATEGORIES = {
  all: { name: 'All Styles', primaryLabels: [], secondaryLabels: [] },
  casual: { 
    name: 'Casual', 
    primaryLabels: ['casual', 'everyday', 'comfort'],
    secondaryLabels: ['streetwear', 'athleisure', 'minimalist']
  },
  business: { 
    name: 'Business', 
    primaryLabels: ['formal', 'business', 'office', 'professional'],
    secondaryLabels: ['tailored', 'polished', 'structured']
  },
  streetwear: { 
    name: 'Streetwear', 
    primaryLabels: ['streetwear', 'urban', 'edgy'],
    secondaryLabels: ['casual', 'utilitarian', 'oversized']
  },
  smartCasual: { 
    name: 'Smart Casual', 
    primaryLabels: ['smart-casual', 'tailored', 'versatile'],
    secondaryLabels: ['casual', 'minimalist', 'neutral']
  },
  feminine: { 
    name: 'Feminine', 
    primaryLabels: ['feminine', 'elegant', 'dressy'],
    secondaryLabels: ['flowy', 'delicate', 'luxury']
  },
  minimalist: { 
    name: 'Minimalist', 
    primaryLabels: ['minimalist', 'basic', 'neutral'],
    secondaryLabels: ['clean', 'simple', 'monochrome']
  },
  athletic: { 
    name: 'Athletic', 
    primaryLabels: ['athletic', 'sporty', 'performance'],
    secondaryLabels: ['comfort', 'technical', 'active']
  },
};

type Outfit = {
  id: string;
  top: any;
  bottom: any;
  shoes: any;
  outerwear?: any;
  accessories: any[];
  style: string;
  matchingScore: number;
  createdAt: Date;
  name?: string;
};

const EnhancedRecommender = () => {
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof STYLE_CATEGORIES>('all');
  const [includeAccessories, setIncludeAccessories] = useState(true);
  const [savedOutfits, setSavedOutfits] = useState<Outfit[]>([]);
  const [outfitName, setOutfitName] = useState('');

  const generateOutfits = () => {
    const generatedOutfits: Outfit[] = [];
    const styleCategory = STYLE_CATEGORIES[selectedStyle];
    
    const maxCombinations = 100; 
    let combinationCount = 0;
    
    for (const top of mockWardrobe.tops) {
      for (const bottom of mockWardrobe.bottoms) {

        if (!itemsMatch(top, bottom)) continue;
        
        for (const shoes of mockWardrobe.shoes) {

          if (!itemsMatch(top, shoes) || !itemsMatch(bottom, shoes)) continue;
          

          const baseScore = calculateMatchingScore([top, bottom, shoes], styleCategory);
          

          const outerwearOptions = Math.random() > 0.5 
            ? mockWardrobe.outerwear.filter(ow => itemsMatch(top, ow) && itemsMatch(bottom, ow))
            : [undefined];
            
          for (const outerwear of outerwearOptions) {
            const items = outerwear 
              ? [top, bottom, shoes, outerwear]
              : [top, bottom, shoes];
            
            const matchingScore = outerwear
              ? calculateMatchingScore(items, styleCategory)
              : baseScore;
            
            const accessories = includeAccessories
              ? getMatchingAccessories([top, bottom, shoes, ...(outerwear ? [outerwear] : [])])
              : [];
            
            const finalScore = accessories.length > 0
              ? matchingScore * 1.1 
              : matchingScore;
            

            if (selectedStyle === 'all' || finalScore >= 0.5) {
              generatedOutfits.push({
                id: `${top.id}-${bottom.id}-${shoes.id}-${Date.now()}`,
                top,
                bottom,
                shoes,
                outerwear,
                accessories,
                style: styleCategory.name,
                matchingScore: finalScore,
                createdAt: new Date()
              });
              
              combinationCount++;
              if (combinationCount >= maxCombinations) break;
            }
          }
          if (combinationCount >= maxCombinations) break;
        }
        if (combinationCount >= maxCombinations) break;
      }
      if (combinationCount >= maxCombinations) break;
    }
    

    generatedOutfits.sort((a, b) => b.matchingScore - a.matchingScore);
    setOutfits(generatedOutfits.slice(0, 10)); 
  };


  const itemsMatch = (item1: any, item2: any) => {
    return item1.labels.some((label: string) => item2.labels.includes(label));
  };


  const calculateMatchingScore = (items: any[], styleCategory: any) => {
    if (selectedStyle === 'all') return 1;
    
    let score = 0;
    const allLabels = items.flatMap((item: any) => item.labels);
    

    const primaryMatches = styleCategory.primaryLabels.filter((label: string) => 
      allLabels.includes(label)
    ).length;
    

    const secondaryMatches = styleCategory.secondaryLabels.filter((label: string) => 
      allLabels.includes(label)
    ).length;
 
    score = (primaryMatches * 0.7 + secondaryMatches * 0.3) / 
      (styleCategory.primaryLabels.length * 0.7 + styleCategory.secondaryLabels.length * 0.3);
    
    return Math.min(1, score); 
  };


  const getMatchingAccessories = (items: any[]) => {
    const allLabels = items.flatMap((item: any) => item.labels);
    return mockWardrobe.accessories
      .filter(acc => acc.labels.some((label: string) => allLabels.includes(label)))
      .slice(0, 3); 
  };

  const saveOutfit = (outfit: Outfit) => {
    const outfitToSave = {
      ...outfit,
      name: outfitName || `${outfit.style} Outfit ${savedOutfits.length + 1}`
    };
    setSavedOutfits(prev => [...prev, outfitToSave]);
    setOutfitName('');
    alert(`Outfit "${outfitToSave.name}" saved!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enhanced Outfit Recommender</Text>
      
      {/* Controls */}
      <View style={styles.controls}>
        <Text style={styles.sectionTitle}>Style Preferences</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.styleButtons}
        >
          {Object.entries(STYLE_CATEGORIES).map(([key, { name }]) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.styleButton,
                selectedStyle === key && styles.selectedStyleButton
              ]}
              onPress={() => setSelectedStyle(key as keyof typeof STYLE_CATEGORIES)}
            >
              <Text style={selectedStyle === key ? styles.selectedStyleText : styles.styleButtonText}>
                {name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <View style={styles.accessoryToggle}>
          <Text>Include Accessories:</Text>
          <Switch
            value={includeAccessories}
            onValueChange={setIncludeAccessories}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={includeAccessories ? '#6200ee' : '#f4f3f4'}
          />
        </View>
        
        <Button 
          title="Generate Outfits" 
          onPress={generateOutfits} 
          color="#6200ee"
        />
      </View>
      
      {/* Generated Outfits */}
      <ScrollView style={styles.outfitsContainer}>
        <Text style={styles.sectionTitle}>
          {outfits.length > 0 
            ? `Recommended ${STYLE_CATEGORIES[selectedStyle].name} Outfits`
            : 'Generate outfits to see recommendations'}
        </Text>
        
        {outfits.map((outfit) => (
          <View key={outfit.id} style={styles.outfitCard}>
            <View style={styles.outfitHeader}>
              <Text style={styles.outfitTitle}>Match: {Math.round(outfit.matchingScore * 100)}%</Text>
              <Button 
                title="Save" 
                onPress={() => saveOutfit(outfit)} 
                color="#6200ee"
              />
            </View>
            
            <Text style={styles.outfitItem}>Top: {outfit.top.name}</Text>
            <Text style={styles.outfitItem}>Bottom: {outfit.bottom.name}</Text>
            <Text style={styles.outfitItem}>Shoes: {outfit.shoes.name}</Text>
            {outfit.outerwear && (
              <Text style={styles.outfitItem}>Outerwear: {outfit.outerwear.name}</Text>
            )}
            {includeAccessories && outfit.accessories.length > 0 && (
              <Text style={styles.outfitItem}>
                Accessories: {outfit.accessories.map(a => a.name).join(', ')}
              </Text>
            )}
            
            <TextInput
              style={styles.nameInput}
              placeholder="Name this outfit (optional)"
              value={outfitName}
              onChangeText={setOutfitName}
            />
            
            <Text style={styles.labelsText}>
              Style Tags: {[
                ...new Set([
                  ...outfit.top.labels,
                  ...outfit.bottom.labels,
                  ...outfit.shoes.labels,
                  ...(outfit.outerwear?.labels || []),
                  ...outfit.accessories.flatMap(a => a.labels)
                ])
              ].filter(label => 
                selectedStyle === 'all' || 
                STYLE_CATEGORIES[selectedStyle].primaryLabels.includes(label) || 
                STYLE_CATEGORIES[selectedStyle].secondaryLabels.includes(label)
              ).join(', ')}
            </Text>
          </View>
        ))}
      </ScrollView>
      
      {/* Saved Outfits */}
      {savedOutfits.length > 0 && (
        <View style={styles.savedSection}>
          <Text style={styles.sectionTitle}>Saved Outfits</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {savedOutfits.map((outfit) => (
              <View key={outfit.id} style={styles.savedOutfitCard}>
                <Text style={styles.savedOutfitTitle}>{outfit.name}</Text>
                <Text style={styles.savedOutfitItem}>Top: {outfit.top.name}</Text>
                <Text style={styles.savedOutfitItem}>Bottom: {outfit.bottom.name}</Text>
                <Text style={styles.savedOutfitItem}>Shoes: {outfit.shoes.name}</Text>
                {outfit.outerwear && (
                  <Text style={styles.savedOutfitItem}>Outerwear: {outfit.outerwear.name}</Text>
                )}
                {outfit.accessories.length > 0 && (
                  <Text style={styles.savedOutfitItem}>
                    Accessories: {outfit.accessories.map(a => a.name).join(', ')}
                  </Text>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      )}
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
  styleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  selectedStyleButton: {
    backgroundColor: '#6200ee',
  },
  styleButtonText: {
    color: '#333',
  },
  selectedStyleText: {
    color: 'white',
  },
  accessoryToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 4,
  },
  outfitsContainer: {
    flex: 1,
    marginBottom: 16,
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
  outfitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  outfitTitle: {
    fontWeight: 'bold',
    fontSize: 16,
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
  nameInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  savedSection: {
    marginBottom: 20,
  },
  savedOutfitCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    width: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  savedOutfitTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#6200ee',
  },
  savedOutfitItem: {
    marginBottom: 4,
    color: '#555',
  },
});

export default EnhancedRecommender;