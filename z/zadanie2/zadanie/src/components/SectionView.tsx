import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {SectionsType} from '../data/homeSections';
import SeeMoreButton from './SeeMoreButton';

const SectionView = ({
  section,
  size,
  navigation,
}: {
  section: SectionsType;
  size: number;
  navigation: any;
}) => {
  const {title, image, subTitle, body, moreButton, sections, placeholder, id} =
    section;

  const onPress = () => {
    navigation.navigate('PostList');
  };

  return (
    <View key={id}>
      {image && (
        <Image
          style={{...styles.image, height: size, width: size}}
          source={{
            uri: image,
          }}
        />
      )}
      {placeholder && <View style={{...styles.placeholder, height: size}} />}
      {sections ? (
        <FlatList
          data={sections}
          numColumns={2}
          renderItem={section => {
            return (
              <View
                key={id}
                style={{
                  flexDirection: 'column',
                }}>
                {section.item.image && (
                  <Image
                    style={{
                      ...styles.image,
                      height: size / 2,
                      width: size / 2,
                    }}
                    source={{
                      uri: section.item.image,
                    }}
                  />
                )}
                {section.item.placeholder && (
                  <View style={{...styles.placeholder, height: size / 4}} />
                )}
                <View
                  style={{
                    ...styles.container,
                    height: size / 4,
                  }}>
                  {section.item.title && (
                    <Text style={styles.title}>{section.item.title}</Text>
                  )}
                  {section.item.subTitle && (
                    <Text style={styles.subTitle}>{section.item.subTitle}</Text>
                  )}
                  {section.item.body && (
                    <Text style={styles.body}>{section.item.body}</Text>
                  )}
                </View>
              </View>
            );
          }}
        />
      ) : (
        <View style={{...styles.container, height: size}}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          {body && <Text style={styles.body}>{body}</Text>}
          {moreButton && <SeeMoreButton onPress={onPress} />}
        </View>
      )}
    </View>
  );
};

export default SectionView;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
  placeholder: {
    backgroundColor: 'white',
  },
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 30,
  },
  subTitle: {
    fontSize: 20,
    color: 'blue',
  },
  body: {
    paddingTop: 20,
    textAlign: 'center',
  },
});
