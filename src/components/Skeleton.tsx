import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface SkeletonProps {
  className?: string;
}

function SkeletonBox({ className = '' }: SkeletonProps) {
  const opacity = useSharedValue(0.4);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      className={`bg-surface-container-high rounded-md ${className}`}
      style={animatedStyle}
    />
  );
}

export function EventCardSkeleton() {
  return (
    <View className="bg-surface-container-lowest rounded-xl overflow-hidden">
      <SkeletonBox className="w-full h-48 rounded-none" />
      <View className="p-4">
        <SkeletonBox className="h-6 w-3/4 mb-2" />
        <SkeletonBox className="h-4 w-1/3 mb-2" />
        <SkeletonBox className="h-4 w-1/2" />
      </View>
    </View>
  );
}

export function ListItemSkeleton() {
  return (
    <View className="flex-row items-center p-4">
      <SkeletonBox className="w-12 h-12 rounded-full" />
      <View className="ml-3 flex-1">
        <SkeletonBox className="h-5 w-2/3 mb-2" />
        <SkeletonBox className="h-4 w-1/2" />
      </View>
    </View>
  );
}

export function MapCardSkeleton() {
  return (
    <View className="bg-surface-container-lowest rounded-lg flex-row items-center p-2">
      <SkeletonBox className="w-12 h-12 rounded-md" />
      <View className="ml-3 flex-1">
        <SkeletonBox className="h-4 w-2/3 mb-1" />
        <SkeletonBox className="h-3 w-1/2" />
      </View>
    </View>
  );
}

export { SkeletonBox as Skeleton };
