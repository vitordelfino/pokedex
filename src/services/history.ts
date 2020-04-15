import { createBrowserHistory } from 'history';
import ga from './ga';

const history = createBrowserHistory();

history.listen(location => {
  ga.set({ page: location.pathname }, ['pokemon-tracker']);
  ga.pageview(location.pathname, ['pokemon-tracker']);
});

export default history;
