import React from 'react';
import Card from "./Card";
import Grid from "./Grid";
import R from "ramda";

const cardListStyles = {
  overflow: "hidden"
};

const itemStyles = {
  marginBottom: 20
};

export default class Frontend extends React.Component {
  render() {
    var items = this.props.entries.map((entry) => {
      return <Card data={entry} />;
    });

    return (
      <div className='scrapper-Frontend'>
        <Grid columns={[42, 26, 32]} items={items} />
      </div>
    );
  }
}
