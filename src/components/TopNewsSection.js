import React from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection } from './common';
import { SectionTopBorder } from "./common";

const trendinNews = {
  artist: "Taylor Swift",
  image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
  title: "Taylor Swift first artist to beat Micheal Jackson.",
  url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
  info: "After tinkering with the structure for awhile, this structure represents what I wanna achieve best logically...",
}

const images = [
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
  }
]

class TopNewsSection extends React.Component {

  state = {
    imageUrl: ''
  }

  componentDidMount() {
    // var self = this;
    // setInterval(function () {
    //   var random = (Math.floor(Math.random() * Math.floor(3)));
    //   self.setState({ imageUrl: images[random] })
    // }, 4000)
  }
  
  render() {
    const {
      mainContainer,
      titleStyle,
      authorStyle,
      imageStyle,
      infoStyle,
    } = styles;

    return (
      <CardSection style={mainContainer}>
        <Image source={{ uri: this.state.imageUrl.image }} style={imageStyle} />
        <SectionTopBorder />
        <Text style={authorStyle}>{trendinNews.artist}</Text>
        <Text style={titleStyle}>{trendinNews.title}</Text>
        <Text style={infoStyle}>{trendinNews.info}</Text>
      </CardSection>
    );

  }
}


const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: '#46044D',
    backgroundColor: '#37003C',
  },
  imageStyle: {
    // resizeMode: 'cover',
    height: 250,
    flex: 1,
    marginBottom: 5,
  },
  authorStyle: {
    fontSize: 13,
    fontStyle: 'italic', fontWeight: "600",
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 15,
    color: '#FE1F7C',
    // color: '#EA247B',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "500",
    padding: 8,
    paddingTop: 0,
    color: '#fff',
  },
  infoStyle: {
    fontSize: 15,
    paddingVertical: 5,
    paddingBottom: 0,
    paddingHorizontal: 8,
    color: '#CCA5CF',
  }
}

export default TopNewsSection;