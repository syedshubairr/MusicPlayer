import {View, Text} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {useProgress} from 'react-native-track-player';
import {styles} from './styles';
const SongSlider = () => {
  const {position, duration} = useProgress();
  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor="white"
        maximumTrackTintColor="white"
        style={styles.sliderContainer}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {new Date(position * 1000).toLocaleString().substring(15, 19)}
        </Text>
        <Text style={styles.time}>
          {new Date((duration - position) * 1000)
            .toLocaleString()
            .substring(15, 19)}
        </Text>
      </View>
    </View>
  );
};

export default SongSlider;
