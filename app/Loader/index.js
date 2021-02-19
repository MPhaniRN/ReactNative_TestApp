/**
 * OVE Clone App
 * @author: SEJEETH S
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal'
import {
  UIActivityIndicator,
  BallIndicator,
  SkypeIndicator,
  MaterialIndicator
} from 'react-native-indicators';

export default class Loader extends Component {
  render() {
    const { animationType, modalVisible } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent
        visible={modalVisible}
      >
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <MaterialIndicator
            trackWidth={2}
            color = {'rgb(1,245,255)'}
            animationDuration={2500}

            size={40}>
            </MaterialIndicator>
            {/* <Image
              style={styles.loaderImage}
              //tintColor={'black'}
              source={{uri:'https://flevix.com/wp-content/uploads/2019/07/Round-Line-Loading.gif'}}
            /> */}
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
   // zIndex: 9,
   // backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderContainer: {
    width: 90,
    height: 90,
   // backgroundColor: '#ffffff',
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45,
    justifyContent:'center',
    alignItems:'center'
  },
  loaderImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
    // position: 'relative',
    // left: '50%',
    // marginLeft: -35,
    // top: '50%',
    // marginTop: -35,
  },
});