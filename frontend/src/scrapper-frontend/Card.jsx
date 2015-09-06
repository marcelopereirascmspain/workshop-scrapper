import React from "react";
import R from "ramda";

const cardStyles = {
  background: "#fff",
  boxShadow: "0 1px 4px rgba(0,0,0,.15)",
  fontFamily: "Source Sans Pro",
  fontWeight: 300,
  fontSize: 16,
  lineHeight: 1.45
};

const cardContentStyles = {
  padding: 10
};

const cardImageStyles = {
  margin: 0,
  verticalAlign: "bottom",
  width: "100%"
};

const cardTitleStyles = {
  fontSize: 22,
  fontWeight: 700,
  margin: "10px 0 0",
  borderTop: "1px solid #f1f1f1",
  paddingTop: 10
};

const cardComments = {
  color: "#bbb",
  fontSize: 12,
  float: "right"
};

const cardTextStyles = {
  fontSize: 15,
  margin: 0
};

const labelStyles = {
  textTransform: "uppercase",
  display: "inline-block",
  fontWeight: 700,
  lineHeight: "20px",
  color: "#fff",
  borderRadius: 3,
  padding: "0 5px",
  fontSize: 14,
  background: "#6891C9"
};

const backgroundColors = {
  "novedades": "#ffb400",
  "presentación": "#83c3d6",
  "actualidad": "#70c0bf"
};

class CardLabel extends React.Component {
  render() {
    const text = this.props.text;
    const type = text.toLowerCase();
    const background = R.propOr("#6891C9", type)(backgroundColors);
    const styles = R.merge(labelStyles, {background: background});

    return (
      <span style={styles}>{text}</span>
    );
  }
}


export default class Card extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <article style={cardStyles}>
        <div>
          <a href={data.href}>
            <img style={cardImageStyles} src={data.imageURL} />
          </a>
        </div>
        <div style={cardContentStyles}>
          <div>
            <CardLabel text={data.label} />
            <span style={cardComments}>{data.commentCount}</span>
          </div>
          <h1 style={cardTitleStyles}>{data.title}</h1>
          <p style={cardTextStyles}>{data.text}</p>
        </div>
      </article>
    );
  }
}
