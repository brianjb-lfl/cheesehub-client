import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
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

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);