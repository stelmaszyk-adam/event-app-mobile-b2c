import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MapPin, MapMiniCard, ClusterIndicator } from './Map';
import { categories, mapPinColors, categoryIcons } from '../theme/tokens';

async function render(
  element: React.ReactElement,
): Promise<ReactTestRenderer.ReactTestRenderer> {
  let renderer!: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(element);
  });
  return renderer;
}

describe('MapPin', () => {
  it.each(categories)(
    'renders the pin color and icon for %s',
    async category => {
      const renderer = await render(
        <MapPin category={category} label={category} />,
      );

      const pin = renderer.root.findByProps({ accessibilityLabel: category });
      expect(pin.props.style.backgroundColor).toBe(mapPinColors[category]);

      const icon = renderer.root.findByType(MaterialCommunityIcons);
      expect(icon.props.name).toBe(categoryIcons[category]);
    },
  );
});

describe('MapMiniCard', () => {
  it('renders the name, time and distance', async () => {
    const renderer = await render(
      <MapMiniCard name="Jazz Night" time="20:00" distanceLabel="1.2 km" />,
    );

    expect(renderer.root.findByProps({ children: 'Jazz Night' })).toBeTruthy();
    expect(renderer.root.findByProps({ children: '20:00' })).toBeTruthy();
    expect(renderer.root.findByProps({ children: '1.2 km' })).toBeTruthy();
  });

  it('falls back to a placeholder block without an image', async () => {
    const renderer = await render(
      <MapMiniCard name="Jazz Night" time="20:00" distanceLabel="1.2 km" />,
    );

    expect(renderer.root.findAllByType(Image)).toHaveLength(0);
  });

  it('renders the photo when an imageUrl is given', async () => {
    const renderer = await render(
      <MapMiniCard
        name="Jazz Night"
        time="20:00"
        distanceLabel="1.2 km"
        imageUrl="https://example.com/photo.jpg"
      />,
    );

    expect(renderer.root.findAllByType(Image)).toHaveLength(1);
  });
});

describe('ClusterIndicator', () => {
  it('renders the given count', async () => {
    const renderer = await render(<ClusterIndicator count={12} />);

    expect(renderer.root.findByProps({ children: 12 })).toBeTruthy();
  });
});
