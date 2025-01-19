import React, { FC } from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { TextProps } from 'react-native';

interface Props {
  text: string;
  textStyle?: TextStyle;
  textProps?: TextProps;
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export const LinearGradientText: FC<Props> = (props) => {
  const {
    text,
    textStyle = {},
    textProps = {},
    colors,
    start = { x: 0, y: 1 },
    end = { x: 1, y: 1 },
  } = props;

  return (
    <MaskedView
      maskElement={
        <Text style={[styles.maskText, textStyle]} testID="mask-text">
          {text}
        </Text>
      }
    >
      <LinearGradient colors={colors} start={start} end={end} testID="gradient-element">
        <Text style={[styles.text, textStyle]} testID="gradient-text" {...textProps}>
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskText: {
    backgroundColor: 'transparent',
  },
  text: {
    opacity: 0,
  },
});
