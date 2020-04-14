import React from 'react';

import { StyleSheet, Dimensions, View } from 'react-native';

import Pdf from 'react-native-pdf';

export default function TestePdf() {
  const source = {
    uri:
      'http://media.ldscdn.org/pdf/lds-scriptures/holy-bible/holy-bible-83800-por.pdf',
    cache: true,
  };
  return (
    ///
    //const source = require('./test.pdf');  // pdf dentro do arquivo (apenas Ios)
    //const source = {uri:'bundle-assets://test.pdf'};
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
