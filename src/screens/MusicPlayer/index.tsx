import {View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {styles} from './styles';
import {playListData} from '../../constants';
import SongInfo from '../../components/SongInfo';
import SongSlider from '../../components/SongSlider';
import ControlCenter from '../../components/ControlCenter';

const MusicPlayer = () => {
  const [shu, setTrack] = useState<Track | null>();
  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        const playingTrack = await TrackPlayer.getTrack(event?.track?.id + 1);
        setTrack(playingTrack);
        break;
    }
  });
  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {shu?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{uri: shu?.artwork?.toString()}}
            />
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />
      <SongInfo track={shu} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

export default MusicPlayer;
