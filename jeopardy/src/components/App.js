import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories, pickCategory } from '../actions';
import { Link } from 'react-router-dom';

export class App extends Component {
  async componentDidMount() {
    if(this.props.categories.length === 0) {
      const result = await fetch('http://jservice.io/api/categories?count=100');
      const json = await result.json();

      this.props.setCategories(json);
    }
  }
  render() {
    return (
      <div>
        <h2>Jeopardy!</h2>
        {
          this.props.categories.map(category => {
            return (
              <div key = {category.id}>
                <Link
                  to="/category"
                  onClick={() => this.props.pickCategory(category)}
                >
                  <h4>{category.title}</h4>
                </Link>
              </div>
            )
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}
export default connect(mapStateToProps, { setCategories, pickCategory })(App);
