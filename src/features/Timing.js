import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utils/sizes';

export const Timing = ({ onChangeTiming }) => {
  return (
    <>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title="10"
          size={50}
          onPress={() => onChangeTiming(10)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title="15"
          size={50}
          onPress={() => onChangeTiming(15)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title="20"
          size={50}
          onPress={() => onChangeTiming(20)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper : {
    padding : spacing.lg
  }
})
