import React from 'react';
import { Image, Pressable, View, type PressableProps } from 'react-native';
import { Typography } from './Typography';

interface EventCardProps extends Omit<PressableProps, 'children'> {
  title: string;
  imageUrl?: string;
  date: string;
  venue: string;
  category?: string;
}

export function EventCard({
  title,
  imageUrl,
  date,
  venue,
  category: _category,
  ...props
}: EventCardProps) {
  return (
    <Pressable
      className="bg-surface-container-lowest rounded-xl overflow-hidden"
      accessibilityRole="button"
      accessibilityLabel={`${title} at ${venue}, ${date}`}
      {...props}
    >
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-48"
          resizeMode="cover"
        />
      ) : (
        <View className="w-full h-48 bg-surface-container-low items-center justify-center">
          <Typography variant="body-md" color="variant">
            No image
          </Typography>
        </View>
      )}
      <View className="p-4">
        <Typography variant="title-lg">{title}</Typography>
        <Typography variant="label-md" color="variant" className="mt-1">
          {date}
        </Typography>
        <Typography variant="body-md" color="variant" className="mt-1">
          {venue}
        </Typography>
      </View>
    </Pressable>
  );
}

interface VenueCardProps extends Omit<PressableProps, 'children'> {
  name: string;
  imageUrl?: string;
  address: string;
  eventsCount?: number;
}

export function VenueCard({
  name,
  imageUrl,
  address,
  eventsCount,
  ...props
}: VenueCardProps) {
  return (
    <Pressable
      className="bg-surface-container-lowest rounded-xl overflow-hidden flex-row"
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${address}`}
      {...props}
    >
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          className="w-20 h-20 rounded-lg m-3"
          resizeMode="cover"
        />
      ) : (
        <View className="w-20 h-20 rounded-lg m-3 bg-surface-container-low items-center justify-center">
          <Typography variant="body-sm" color="variant">
            No img
          </Typography>
        </View>
      )}
      <View className="flex-1 py-3 pr-4 justify-center">
        <Typography variant="title-md">{name}</Typography>
        <Typography variant="body-sm" color="variant" className="mt-1">
          {address}
        </Typography>
        {eventsCount !== undefined && (
          <Typography variant="label-sm" color="primary" className="mt-1">
            {eventsCount} events
          </Typography>
        )}
      </View>
    </Pressable>
  );
}

interface MiniCardProps extends Omit<PressableProps, 'children'> {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export function MiniCard({
  title,
  subtitle,
  imageUrl,
  ...props
}: MiniCardProps) {
  return (
    <Pressable
      className="bg-surface-container-lowest rounded-lg flex-row items-center p-2"
      accessibilityRole="button"
      accessibilityLabel={`${title}, ${subtitle}`}
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
          {title}
        </Typography>
        <Typography variant="body-sm" color="variant" numberOfLines={1}>
          {subtitle}
        </Typography>
      </View>
    </Pressable>
  );
}
