import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, CardSection, Spinner, } from './common';

class AllNews extends React.Component {

  renderContent = () => {
    const {
      mainConatiner,
      textContainer,
      imageStyles,
      authorStyles,
      titleStyles } = styles;

    return (this.props.news.map((item, i) => {
      return (<CardSection key={i} style={mainConatiner}>
        <Image source={{ uri: item.image }} style={imageStyles} />
        <View style={textContainer}>
          <Text style={authorStyles}>{item.artist}</Text>
          <Text style={titleStyles}>{item.title}</Text>
        </View>
      </CardSection>)
    }))
  }

  render() {
    console.log(this.props)
    return (
      <ScrollView>
        {this.renderContent()}
      </ScrollView>
    );
  }
}

const styles = {
  mainConatiner: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: '#46044D',
    // backgroundColor: '#37003C',
    // backgroundColor: '#FFF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    // marginTop: 5,
  },
  imageStyles: {
    resizeMode: 'cover',
    flex: 1,
    height: 100,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    // backgroundColor: '#46044D',
    // backgroundColor: '#37003C',
    // backgroundColor: '#FFF',
    justifyContent: "center",
    flex: 2,
    paddingHorizontal: 20
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: "500",
    // color: '#fff'
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


export default AllNews;