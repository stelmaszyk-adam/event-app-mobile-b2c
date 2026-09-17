import React from 'react';
import ReactTestRenderer, { act } from 'react-test-renderer';
import { Image } from 'react-native';
import { ProgressiveImage, CategoryPlaceholder } from './ProgressiveImage';
import { categories } from '../theme/tokens';

async function render(
  element: React.ReactElement,
): Promise<ReactTestRenderer.ReactTestRenderer> {
  let renderer!: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(element);
  });
  return renderer;
}

describe('CategoryPlaceholder', () => {
  it.each(categories)('renders a placeholder icon for %s', async category => {
    const renderer = await render(<CategoryPlaceholder category={category} />);

    expect(
      renderer.root.findByProps({
        accessibilityLabel: `${category} placeholder image`,
      }),
    ).toBeTruthy();
  });
});

describe('ProgressiveImage', () => {
  it('shows the category placeholder when there is no imageUrl', async () => {
    const renderer = await render(<ProgressiveImage category="music" />);

    expect(renderer.root.findAllByType(Image)).toHaveLength(0);
    expect(
      renderer.root.findByProps({
        accessibilityLabel: 'music placeholder image',
      }),
    ).toBeTruthy();
  });

  it('renders the full image when an imageUrl is given', async () => {
    const renderer = await render(
      <ProgressiveImage
        category="music"
        imageUrl="https://example.com/photo.jpg"
      />,
    );

    const image = renderer.root.findByType(Image);
    expect(image.props.source).toEqual({
      uri: 'https://example.com/photo.jpg',
    });
  });

  it('fades the full image in from 0 to 1 opacity once it loads', async () => {
    const renderer = await render(
      <ProgressiveImage
        category="music"
        imageUrl="https://example.com/photo.jpg"
      />,
    );

    const imageBefore = renderer.root.findByType(Image);
    expect(imageBefore.props.style).toEqual({ opacity: 0 });

    await act(() => {
      imageBefore.props.onLoad();
    });
    // A fresh element (not the same reference) forces React to re-render
    // rather than bail out on referentially-equal props.
    await act(() => {
      renderer.update(
        <ProgressiveImage
          category="music"
          imageUrl="https://example.com/photo.jpg"
        />,
      );
    });

    const imageAfter = renderer.root.findByType(Image);
    expect(imageAfter.props.style).toEqual({ opacity: 1 });
  });

  it('renders the LQIP layer behind the full image, hidden from accessibility', async () => {
    const renderer = await render(
      <ProgressiveImage
        category="music"
        imageUrl="https://example.com/photo.jpg"
        lqipUri="https://example.com/photo-lqip.jpg"
      />,
    );

    const images = renderer.root.findAllByType(Image);
    expect(images).toHaveLength(2);

    const lqip = images.find(
      img => img.props.source?.uri === 'https://example.com/photo-lqip.jpg',
    );
    expect(lqip).toBeTruthy();
    expect(lqip!.props.blurRadius).toBe(2);
    expect(lqip!.props.accessibilityElementsHidden).toBe(true);

    const full = images.find(
      img => img.props.source?.uri === 'https://example.com/photo.jpg',
    );
    expect(full).toBeTruthy();
  });

  it('hides the category placeholder background from accessibility when no lqipUri is given', async () => {
    const renderer = await render(
      <ProgressiveImage
        category="music"
        imageUrl="https://example.com/photo.jpg"
      />,
    );

    expect(
      renderer.root.findAllByProps({
        accessibilityLabel: 'music placeholder image',
      }),
    ).toHaveLength(0);
  });

  it('swaps to the placeholder when the image fails to load', async () => {
    const renderer = await render(
      <ProgressiveImage
        category="music"
        imageUrl="https://example.com/broken.jpg"
      />,
    );

    const image = renderer.root.findByType(Image);
    expect(image.props.source).toEqual({
      uri: 'https://example.com/broken.jpg',
    });

    await act(() => {
      image.props.onError();
    });

    expect(renderer.root.findAllByType(Image)).toHaveLength(0);
    expect(
      renderer.root.findByProps({
        accessibilityLabel: 'music placeholder image',
      }),
    ).toBeTruthy();
  });

  it('recovers when a new imageUrl is provided after a previous load failed', async () => {
    const renderer = await render(
      <ProgressiveImage
        category="music"
        imageUrl="https://example.com/broken.jpg"
      />,
    );

    const brokenImage = renderer.root.findByType(Image);
    await act(() => {
      brokenImage.props.onError();
    });

    expect(renderer.root.findAllByType(Image)).toHaveLength(0);

    const nextElement = (
      <ProgressiveImage
        category="music"
        imageUrl="https://example.com/new-photo.jpg"
      />
    );
    await act(() => {
      renderer.update(nextElement);
    });

    const nextImage = renderer.root.findByType(Image);
    expect(nextImage.props.source).toEqual({
      uri: 'https://example.com/new-photo.jpg',
    });
    expect(nextImage.props.style).toEqual({ opacity: 0 });
  });
});
