import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {setupPlayer, addTrack} from '../musicPlayerService';

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
          <StatusBar />
          <Text>hey there</Text>
        </SafeAreaView>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </SafeAreaView>
  );
}

export default App;
