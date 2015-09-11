var React = require("react-native");
var R = require("ramda");

var {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    fontFamily: "Source Sans Pro",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 1.45,
    marginBottom: 20
  },

  cardContent: {
    padding: 10
  },

  cardImage: {
    width: 380,
    height: 240
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#f1f1f1",
    paddingTop: 10
  },

  cardComments: {
    color: "#bbb",
    fontSize: 12
  },

  cardText: {
    fontSize: 15,
    lineHeight: 20,
    margin: 0
  }
});

var backgroundColors = {
  "novedades": "#ffb400",
  "presentación": "#83c3d6",
  "actualidad": "#70c0bf"
};

var cardLabelStyles = StyleSheet.create({
  root: {
    fontWeight: "700",
    borderRadius: 3,
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
    backgroundColor: "#6891C9"
  },

  text: {
    fontSize: 14,
    lineHeight: 14,
    color: "#fff"
  }
});

class CardLabel extends React.Component {
  render() {
    var text = this.props.text;
    var type = text.toLowerCase();
    var background = R.propOr("#6891C9", type)(backgroundColors);

    return (
      <View style={[cardLabelStyles.root, {backgroundColor: background}]}>
        <Text style={cardLabelStyles.text}>{text}</Text>
      </View>
    );
  }
}

module.exports = React.createClass({
  render: function () {
    var data = this.props.data;
    
    return (
      <View style={styles.card}>
        <View>
          <Image
            source={{uri: data.imageURL}}
            style={styles.cardImage} />
        </View>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardComments}>{data.commentCount}</Text>
            <CardLabel text={data.label} />
          </View>
          <Text style={styles.cardTitle}>{data.title}</Text>
          <Text style={styles.cardText}>{data.text}</Text>
        </View>
      </View>
    );
  }
});
