var React = require("react-native");
var R = require("ramda");
var Card = require("./Card");

var {
  StyleSheet,
  View,
} = React;

module.exports = React.createClass({
  render: function () {
    var data = this.props.data;

    var items = data.map(function (item) {
      return <Card data={item} />;
    });
    
    return (
      <View>
        {items}
      </View>
    );
  }
});