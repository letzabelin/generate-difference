import prettyRender from './prettyRender';
import plainRender from './plainRender';
import jsonRender from './jsonRender';

const formatters = {
  pretty: prettyRender,
  plain: plainRender,
  json: jsonRender,
};

export default (diff, format) => formatters[format](diff);
