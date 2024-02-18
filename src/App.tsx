import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar, View} from 'react-native';
import {setupPlayer, addTrack} from '../musicPlayerService';
import {styles} from './styles';
import MusicPlayer from './screens/MusicPlayer';

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let setup = await setupPlayer();
    if (setup) {
      addTrack();
    }
    setIsPlayerReady(setup);
  }

  useEffect(() => {
    setup();
  }, []);
  // if (!isPlayerReady) {
  //   return (
  //     <SafeAreaView>
  //       <ActivityIndicator size={'large'} />
  //     </SafeAreaView>
  //   );
  // }
  return (
    <SafeAreaView>
      {isPlayerReady ? (
        <SafeAreaView>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.container}>
            <MusicPlayer />
          </View>
        </SafeAreaView>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </SafeAreaView>
  );
}

export default App;
