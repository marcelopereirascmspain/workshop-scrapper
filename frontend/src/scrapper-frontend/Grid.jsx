import React from 'react';
import R from "ramda";

const itemStyles = {
  marginBottom: 20
};

const rowStyles = {
  overflow: "hidden",
  margin: "0 -10px"
};

const columnStyles = {
  float: "left",
  boxSizing: "border-box",
  padding: 10,
  width: "33.33333%"
};

export default class Grid extends React.Component {
  render() {
    const items = this.props.items;
    const columnWidths = this.props.columns;
    const itemPerColumn = Math.ceil(items.length / columnWidths.length);

    const partitions = R.splitEvery(itemPerColumn, items);

    console.log(partitions);

    var columns = R.map((item, idx) => {
      return item.map((entry) => {
        return (
          <div style={itemStyles}>
            {entry}
          </div>
        );
      })
    }, partitions);

    const dom = R.addIndex(R.map)((column, idx) => {
      return (
        <div style={R.merge(columnStyles, {width: `${columnWidths[idx]}%`})}>
          {column}
        </div>
      );
    }, columns);

    return (
      <div style={rowStyles}>
        {dom}
      </div>
    );
  }
}
