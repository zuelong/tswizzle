import React, { Component } from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

class CardSection extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

export default CardSection;