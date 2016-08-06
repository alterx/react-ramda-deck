import App from './app';
import { stateManager, actions, actionConnect, renderer } from './lib';

const initialState = {
  name: 'Carlos',
  items: []
};

const store = stateManager(initialState);
const bindedActions = actions(store);
const ConnectedApp = actionConnect(bindedActions, App);
const render = renderer(document.getElementById('app'), ConnectedApp);
render(initialState);

store.subscribe((state) => {
  render(state);
});
