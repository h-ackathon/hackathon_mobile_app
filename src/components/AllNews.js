import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, CardSection, Spinner, } from './common';
import LineIcon from "react-native-vector-icons/SimpleLineIcons";

class AllNews extends React.Component {

  renderContent = () => {
    const {
      mainConatiner,
      textContainer,
      imageStyles,
      authorStyles,
      videoIconContainer,
      videoDurationStyles,
      titleStyles } = styles;

    return (this.props.news.map((item, i) => {
      return (<CardSection key={i} style={mainConatiner}>
        <Image source={{ uri: item.image }} style={imageStyles} />
        <View style={textContainer}>
          <Text style={authorStyles}>{item.artist}</Text>
          <Text style={titleStyles}>{item.title}</Text>
        </View>
        {this.props.videoBtn ?
          <View style={videoIconContainer}>
            <LineIcon name="control-play" size={12} style={{ backgroundColor: '#FE1F7C', padding: 3 }} color="#fff" />
            <Text style={videoDurationStyles}>2:53</Text>
          </View> :
          null
        }
      </CardSection>)
    }))
  }

  render() {
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
  videoIconContainer: {
		position: 'absolute',
		backgroundColor: '#37003C',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 5,
		paddingLeft: 0,
		bottom: 10,
		left: 10,
	},
	videoDurationStyles: {
		marginLeft: 5,
		color: '#fff',
		fontSize: 11,
		fontWeight: "600",
	},
}


export default AllNews;