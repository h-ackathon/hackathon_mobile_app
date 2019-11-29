import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from './common';
import LineIcon from "react-native-vector-icons/SimpleLineIcons";

const NewsItems = ({ news, videoBtn }) => {

	const { title,
		artist,
		thumbnail_image,
		image,
		url } = news;
	const { headerContentStyle,
		thumbnailStyle,
		thumbnailContainerStyle,
		artistStyles,
		headerTextStyle,
		videoDurationStyles,
		videoIconContainer,
	} = styles;

	console.log(videoBtn);

	return (
		// // <View>
		// 	{/* <CardSection>
		// 		<Image style={artworkStyle} source={{ uri: image }} />
		// 	</CardSection> */}
		<CardSection style={{ flex: 1, position: 'relative' }}>
			<View style={thumbnailContainerStyle}>
				<Image
					style={thumbnailStyle}
					source={{ uri: image }}
				/>
			</View>
			<View style={headerContentStyle}>
				<Text style={artistStyles}>{artist}</Text>
				<Text style={headerTextStyle}>{title}</Text>
			</View>
			{videoBtn ?
				<View style={videoIconContainer}>
					<LineIcon name="control-play" size={12} style={{ backgroundColor: '#FE1F7C', padding: 3 }} color="#fff" />
					<Text style={videoDurationStyles}>2:53</Text>
				</View> :
				null
			}
		</CardSection>
		// 	{/* <CardSection>
		// 		<Button onPress={() => Linking.openURL(url)}>
		// 			View Now!
		// 		</Button>
		// 	</CardSection> */}
		// {/* </View> */}
	);
}

const styles = {
	thumbnailContainerStyle: {
		justifyContent: 'center',
		marginLeft: 10,
		flex: 1,
	},
	thumbnailStyle: {
		width: 100,
		height: 100,
		resizeMode: 'contain'
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
		flex: 2,
	},
	headerTextStyle: {
		fontSize: 17,
		fontWeight: '400',
		marginTop: 3,
	},
	artistStyles: {
		color: '#FE1F7C',
		fontWeight: '700',
		fontStyle: 'italic',
		fontSize: 12,
	},
	videoIconContainer: {
		position: 'absolute',
		backgroundColor: '#37003C',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 5,
		paddingLeft: 0,
		bottom: 15,
		left: 20,
	},
	videoDurationStyles: {
		marginLeft: 5,
		color: '#fff',
		fontSize: 11,
		fontWeight: "600",
	},
}

export default NewsItems;


