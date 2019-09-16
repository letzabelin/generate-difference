import prettyRender from './prettyRender';
import plainRender from './plainRender';

const formatters = {
  pretty: prettyRender,
  plain: plainRender,
};

export default (diff, format) => formatters[format](diff);
