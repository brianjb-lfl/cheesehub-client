import React from 'react';

export default class CheeseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.cheeses);
      const cheeseItems = this.props.cheeses.map((cheese, index) =>
      <li key={index}>
        {cheese}
      </li>
    );

    return (
      <div>
        <ul>
          {cheeseItems}
        </ul>
      </div>
    );
  }
}
