import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';
import { setStack, loadStacks } from '../actions';

export class StackList extends Component {
  componentDidMount() {
    if(this.props.stacks.length === 0) this.props.loadStacks(stacks);
  }
  render() {
    return (
      <div>
        {
          this.props.stacks.map(stack => {
            return (
              <Link
                key={stack.id}
                to="/stack"
                onClick={() => this.props.setStack(stack)}
              >
                <h4>{stack.title}</h4>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stacks: state.stacks
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     setStack
//   }, dispatch);
// }

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);
