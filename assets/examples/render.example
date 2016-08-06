import ReactDOM from 'react-dom';
import { curry } from 'ramda';

const renderer = curry((node, component, props) => {
  ReactDOM.render(component(props), node);
});

export default renderer;
