import {View, Text} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {Track} from 'react-native-track-player';
import {styles} from './styles';

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

const SongInfo: FC<SongInfoProps> = ({track}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{track?.title}</Text>
        <Text style={styles.artist}>
          {track?.artist} . {track?.album}
        </Text>
      </View>
    </View>
  );
};

export default SongInfo;
