import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mapPinColors, categoryIcons, type Category } from '../theme/tokens';

interface CategoryPlaceholderProps {
  category: Category;
  className?: string;
  hiddenFromAccessibility?: boolean;
}

export function CategoryPlaceholder({
  category,
  className = '',
  hiddenFromAccessibility = false,
}: CategoryPlaceholderProps) {
  return (
    <View
      accessibilityRole={hiddenFromAccessibility ? undefined : 'image'}
      accessibilityLabel={
        hiddenFromAccessibility ? undefined : `${category} placeholder image`
      }
      accessibilityElementsHidden={hiddenFromAccessibility}
      importantForAccessibility={
        hiddenFromAccessibility ? 'no-hide-descendants' : 'auto'
      }
      style={{ backgroundColor: `${mapPinColors[category]}1a` }}
      className={`items-center justify-center ${className}`}
    >
      <MaterialCommunityIcons
        name={categoryIcons[category]}
        size={32}
        color={mapPinColors[category]}
      />
    </View>
  );
}

interface ProgressiveImageProps {
  imageUrl?: string;
  lqipUri?: string;
  category: Category;
  className?: string;
  accessibilityLabel?: string;
}

export function ProgressiveImage({
  imageUrl,
  lqipUri,
  category,
  className = '',
  accessibilityLabel,
}: ProgressiveImageProps) {
  const [failed, setFailed] = useState(false);
  const opacity = useSharedValue(0);

  useEffect(() => {
    setFailed(false);
    opacity.value = 0;
  }, [imageUrl, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  if (!imageUrl || failed) {
    return <CategoryPlaceholder category={category} className={className} />;
  }

  return (
    <View className={`overflow-hidden ${className}`}>
      {lqipUri ? (
        <Image
          source={{ uri: lqipUri }}
          className="absolute inset-0 w-full h-full"
          resizeMode="cover"
          blurRadius={2}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
      ) : (
        <CategoryPlaceholder
          category={category}
          className="absolute inset-0 w-full h-full"
          hiddenFromAccessibility
        />
      )}
      <Animated.Image
        source={{ uri: imageUrl }}
        className="w-full h-full"
        style={animatedStyle}
        resizeMode="cover"
        accessibilityRole="image"
        accessibilityLabel={accessibilityLabel}
        onLoad={() => {
          opacity.value = withTiming(1, { duration: 300 });
        }}
        onError={() => setFailed(true)}
      />
    </View>
  );
}
