import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    // borderColor: "green",
    // borderWidth: 1,
    // flex: 1, justifyContent: 'center', flexDirection: 'row',
    // width: 200
  },
  textContainer: {
    alignSelf: 'stretch',
    position: 'relative',
    minHeight: 40,
    maxHeight: 140,
  },
  input: {
    fontSize: 16,
    // color: "#000",
    // fontWeight: "400",
    // paddingHorizontal: 20,
    // marginLeft: 8,
    // marginRight: 8,
    minHeight: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    color: 'transparent',
    // color: "green",
    alignSelf: 'stretch',
    // width: '100%',
    // borderColor: "green",
    // borderWidth: 1,
  },
  formmatedTextWrapper: {
    minHeight: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginLeft: 8,
    // marginRight: 8,
    // paddingHorizontal: 20,
    // display: 'none',
    // paddingVertical: 5,
    // width: '100%',
  },
  formmatedText: {
    fontSize: 16,
    // color: 'red',
    // fontWeight: "400",
  },
  mention: {
    fontSize: 16,
    // fontWeight: "400",
    backgroundColor: 'rgba(36, 77, 201, 0.05)',
    color: '#244dc9',
  },
  placeholderText: {
    color: 'rgba(0, 0, 0, 0.1)',
    fontSize: 16,
  },
});
