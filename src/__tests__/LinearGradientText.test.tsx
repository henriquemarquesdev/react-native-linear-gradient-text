import React from 'react';
import { TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { render } from '@testing-library/react-native';
import { LinearGradientText } from '../components/LinearGradientText';

describe('LinearGradientText', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<LinearGradientText text="Hello" colors={['#fff', '#000']} />);

    const textElement = getByTestId('gradient-text');
    expect(textElement).toBeTruthy();
    expect(textElement.props.children).toBe('Hello');

    const gradientElement = getByTestId('gradient-element');

    // Integer values ​​corresponding to#fff and #000
    const expectedColors = [4294967295, 4278190080];
    expect(gradientElement.props.colors).toEqual(expectedColors);
  });

  it('applies custom textStyle', () => {
    const customStyle: TextStyle = { fontSize: 20, fontWeight: 'bold' };
    const { getByTestId } = render(
      <LinearGradientText text="Styled Text" colors={['#ff0', '#f0f']} textStyle={customStyle} />
    );

    const textElement = getByTestId('gradient-text');
    expect(textElement.props.style).toContainEqual(customStyle);
  });

  it('applies custom textProps', () => {
    const { getByTestId } = render(
      <LinearGradientText
        text="Props Test"
        colors={['#ff0', '#0ff']}
        textProps={{ numberOfLines: 1 }}
      />
    );

    const textElement = getByTestId('gradient-text');
    expect(textElement.props.numberOfLines).toBe(1);
  });

  it('renders with custom gradient start and end', () => {
    const { getByTestId } = render(
      <LinearGradientText
        text="Gradient Test"
        colors={['#123456', '#654321']}
        start={{ x: 0.2, y: 0.8 }}
        end={{ x: 0.8, y: 0.2 }}
      />
    );

    const textElement = getByTestId('gradient-text');
    expect(textElement).toBeTruthy();
  });

  it('renders gradient with provided colors', () => {
    const { UNSAFE_getAllByType } = render(
      <LinearGradientText text="Color Test" colors={['#111111', '#222222', '#333333']} />
    );

    const expectedColors = ['#111111', '#222222', '#333333'];

    const gradients = UNSAFE_getAllByType(LinearGradient);
    expect(gradients[0].props.colors).toEqual(expectedColors);
  });

  it('applies maskText styling correctly', () => {
    const { getByTestId } = render(
      <LinearGradientText text="Masked Text" colors={['#000', '#fff']} />
    );

    const maskedText = getByTestId('mask-text');
    expect(maskedText.props.style).toContainEqual({ backgroundColor: 'transparent' });
  });
});
