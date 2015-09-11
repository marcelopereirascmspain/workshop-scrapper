/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} = React;
var Card = require("./src/Card");

var data = [{
  "title": "Mazda MX-5",
  "imageURL": "http://a.ccdn.es/cnet/contents/media/mazda/mx5/1118139.jpg/380x218cut/150_229_1200_819/",
  "href": "http://www.coches.net/nuevo-mazda-mx5-presentacion-barcelona",
  "label": "Pruebas",
  "commentCount": "27",
  "text": "Por 22.387 euros será difícil no caer en la tentación"
}];

var mobile = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount() {
    fetch("http://localhost:3000").then(function (res) {
      return res.json();
    }).then(function (json) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.entries),
        loaded: true
      });
    }.bind(this)).done();
  },

  renderCard: function (cardData) {
    return <Card data={cardData} />;
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderCard} />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



AppRegistry.registerComponent('mobile', (entries) => mobile);


