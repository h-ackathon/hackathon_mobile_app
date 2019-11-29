import React from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection } from './common';

const trendinNews = {
  artist: "Taylor Swift",
  image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
  title: "Taylor Swift first artist to beat Micheal Jackson.",
  url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
  info: "After tinkering with the structure for awhile, this structure represents what I wanna achieve best logically...",
}

class TrendingNews extends React.Component {
  render() {
    const {
      mainConatiner,
      textContainer,
      imageStyles, 
      authorStyles,
      titleStyles } = styles;
    return (
      <CardSection style={mainConatiner}>
        <Image source={{ uri: trendinNews.image }} style={imageStyles} />
        <View style={textContainer}>
          <Text style={authorStyles}>{trendinNews.artist}</Text>
          <Text style={titleStyles}>{trendinNews.title}</Text>
        </View>
      </CardSection>
    );
  }
}

const styles = {
  mainConatiner: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: '#46044D',
    backgroundColor: '#37003C',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  },
  imageStyles: {
    // resizeMode: 'cover',
    flex: 1,
    height: 100,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    // backgroundColor: '#46044D',
    backgroundColor: '#37003C',
    justifyContent: "center",
    flex: 2,
    paddingHorizontal: 20
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: "500",
    color: '#fff'
  },
  authorStyles: {
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: "600",
    color: '#FE1F7C',
    // color: '#EA247B',
    marginBottom: 5,
  },
}


export default TrendingNews;