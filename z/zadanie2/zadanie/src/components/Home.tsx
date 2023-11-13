import React from 'react';
import {SafeAreaView, FlatList, Dimensions} from 'react-native';
import {Sections} from '../data/homeSections';
import SectionView from './SectionView';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={Sections}
        renderItem={section => {
          return (
            <SectionView
              section={section.item}
              size={Dimensions.get('window').width}
              navigation={navigation}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
