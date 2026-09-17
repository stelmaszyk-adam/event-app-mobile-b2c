import React from 'react';
import { Image, Pressable, View, type PressableProps } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Typography } from './Typography';
import { mapPinColors, categoryIcons, type Category } from '../theme/tokens';

interface MapPinProps {
  category: Category;
  label: string;
  size?: number;
}

export function MapPin({ category, label, size = 36 }: MapPinProps) {
  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={label}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: mapPinColors[category],
      }}
      className="items-center justify-center border-2 border-surface-container-lowest"
    >
      <MaterialCommunityIcons
        name={categoryIcons[category]}
        size={Math.round(size * 0.55)}
        color="#ffffff"
      />
    </View>
  );
}

interface MapMiniCardProps extends Omit<PressableProps, 'children'> {
  name: string;
  time: string;
  distanceLabel: string;
  imageUrl?: string;
}

export function MapMiniCard({
  name,
  time,
  distanceLabel,
  imageUrl,
  ...props
}: MapMiniCardProps) {
  return (
    <Pressable
      className="bg-surface-container-lowest rounded-lg flex-row items-center p-2"
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${time}, ${distanceLabel}`}
      {...props}
    >
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          className="w-12 h-12 rounded-md"
          resizeMode="cover"
        />
      ) : (
        <View className="w-12 h-12 rounded-md bg-surface-container-low" />
      )}
      <View className="ml-3 flex-1">
        <Typography variant="title-sm" numberOfLines={1}>
          {name}
        </Typography>
        <View className="flex-row items-center mt-1">
          <Typography variant="label-sm" color="variant" numberOfLines={1}>
            {time}
          </Typography>
          <Typography
            variant="label-sm"
            color="variant"
            className="ml-2"
            numberOfLines={1}
          >
            {distanceLabel}
          </Typography>
        </View>
      </View>
    </Pressable>
  );
}

interface ClusterIndicatorProps {
  count: number;
  size?: number;
}

export function ClusterIndicator({ count, size = 44 }: ClusterIndicatorProps) {
  return (
    <View
      accessibilityRole="text"
      accessibilityLabel={`${count} events in this area`}
      style={{ width: size, height: size, borderRadius: size / 2 }}
      className="bg-primary items-center justify-center border-2 border-surface-container-lowest"
    >
      <Typography variant="label-lg" className="text-on-primary">
        {count}
      </Typography>
    </View>
  );
}
