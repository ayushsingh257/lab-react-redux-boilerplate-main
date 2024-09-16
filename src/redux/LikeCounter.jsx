// LikeCounter.jsx
import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'; // Import createStore
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

// Create the Redux store
const store = createStore(reducer);

const LikeCounter = ({ count, incrementLike, decrementLike }) => {
  return (
    <div>
      <h2>Like Counter: {count}</h2>
      <button onClick={incrementLike}>Like</button>
      <button onClick={decrementLike}>Unlike</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  incrementLike,
  decrementLike
};

const ConnectedLikeCounter = connect(mapStateToProps, mapDispatchToProps)(LikeCounter);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedLikeCounter />
    </Provider>
  );
};

export default App;
