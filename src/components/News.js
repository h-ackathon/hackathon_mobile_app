import React from 'react';
import { ScrollView, Text, View, Image, Platform, TouchableWithoutFeedback } from 'react-native';
import { connect } from "react-redux";
import NewsItems from "./NewsItems";
import TrendingNews from "./TrendingNews";
import TopNewsSection from "./TopNewsSection";
import { newsList, setActiveRoute, setHeaderTitle, teamsRanking } from "../actions";
import { Actions } from 'react-native-router-flux';
import { SectionTopBorder, SectionBreak, Card, CardSection } from './common';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const trendinNews = {
  artist: "Taylor Swift",
  image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg",
  title: "Taylor Swift first artist to beat Micheal Jackson.",
  url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
  info: "After tinkering with the structure for awhile, this structure represents what I wanna achieve best logically...",
}

class News extends React.Component {


  componentDidMount() {
    this.props.setActiveRoute('Dashboard');
    this.props.setHeaderTitle('News');
    this.props.newsList();
    // this.props.teamsRanking();
  }

  renderNews(name) {
    if (name === 'News') {
      return this.props.news && this.props.news.map((row, i) => {
        if (i <= 2) {
          return (<NewsItems key={i} news={row} videoBtn={false} />);
        }
      });
    }
    return this.props.news && this.props.news.map((row, i) => {
      if (i <= 2) {
        return (<NewsItems key={i} news={row} videoBtn={true} />);
      }
    });
  }

  render() {
    // console.log(this.props.news);
    const {
      mainContainer,
      titleContainer,
      titleTextStyles,
      allConatinerStyles,
      allTextStyles,
      allIconStyles,
    } = styles;
    return (
      <ScrollView>

        <TopNewsSection />
        <TrendingNews />
        <TrendingNews />

        <View style={mainContainer}>
          <SectionTopBorder />
          <CardSection style={titleContainer}>
            <Text style={titleTextStyles}>
              Latest News
            </Text>
          </CardSection>
          <View style={{ paddingBottom: 15, backgroundColor: "#fff" }}>
            <SectionBreak />
          </View>
          {this.renderNews('News')}
          <View style={{ paddingTop: 15, backgroundColor: "#fff" }}>
            <SectionBreak />
          </View>
          <CardSection
            style={allConatinerStyles}
          >
            <TouchableWithoutFeedback onPress={() => Actions.allnews({ news: this.props.news, videoBtn: false })}>
              <Text style={allTextStyles}>All News</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Actions.allnews({ news: this.props.news, videoBtn: false })}>
              <MaterialIcon style={allIconStyles} name="arrow-right" size={15} />
            </TouchableWithoutFeedback>
          </CardSection>
        </View>

        <View style={mainContainer}>
          <SectionTopBorder />
          <CardSection style={titleContainer}>
            <Text style={titleTextStyles}>
              Latest Videos
            </Text>
          </CardSection>
          <View style={{ paddingBottom: 15, backgroundColor: "#fff" }}>
            <SectionBreak />
          </View>
          {this.renderNews('Videos')}
          <View style={{ paddingTop: 15, backgroundColor: "#fff" }}>
            <SectionBreak />
          </View>
          <CardSection
            style={allConatinerStyles}
          >
            <TouchableWithoutFeedback onPress={() => Actions.allvideos({ news: this.props.news, videoBtn: true })}>
              <Text style={allTextStyles}>All Videos</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Actions.allvideos({ news: this.props.news, videoBtn: true })}>
              <MaterialIcon style={allIconStyles} name="arrow-right" size={15} />
            </TouchableWithoutFeedback>
          </CardSection>
        </View>

      </ScrollView>
    );
  };
}


const styles = {
  mainContainer: {
    marginBottom: 40,
    marginTop: 40,
    position: 'relative'
  },
  titleContainer: {
    flexDirection: 'column'
  },
  titleTextStyles: {
    fontSize: 15,
    fontWeight: "600",
    padding: 10,
  },
  allConatinerStyles: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'space-around',
    paddingVertical: 10,
  },
  allTextStyles: {
    fontSize: 11,
    marginRight: 5,
  },
  allIconStyles: {
    marginRight: 5,
  }

}

const mapStateToProps = state => {
  return {
    news: state.news.news,
  };
}

export default connect(mapStateToProps, { newsList, setActiveRoute, setHeaderTitle, teamsRanking })(News);