import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Clue from './Clue';
export class Category extends Component {
  constructor() {
    super();
    this.state = {
      clues: []
    };
  }
  async componentDidMount() {
    try {
      const result = await fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`);
      const json = await result.json();

      this.setState({
        clues: json
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log('clue length is', this.state.clues)
    return (
      <div>
        <h2>{this.props.category.title}</h2>
        {
          this.state.clues.map(clue => {
            return (
              <Clue key={clue.id} clue={clue}/>
            );
          })
        }
      </div>
    );
  }
}

class LinkedCategory extends Component {
  render() {
    return (
      <div>
        <Link className="link-home" to="/"><h4>Home</h4></Link>
        <Category category={this.props.category} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    category: state.category
  };
}

export default connect(mapStateToProps, null)(LinkedCategory);
