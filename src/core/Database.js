import fs from 'fs';
import path from 'path';
import jade from 'jade';
import fm from 'front-matter';
import Dispatcher from './Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const CONTENT_DIR = path.join(__dirname, './content');
fs.exists(CONTENT_DIR, (exists) => {
  if (!exists) {
    console.error(`Error: Directory '${CONTENT_DIR}' does not exist.`);
  }
});

function parseJade(uri, jadeContent) {
  let content = fm(jadeContent);
  let html = jade.render(content.body, null, '  ');
  let page = Object.assign({path: uri, content: html}, content.attributes);
  return page;
}

export default {
  getPage: (uri) => {
    return new Promise((resolve) => {
      let fileName = path.join(CONTENT_DIR, (uri === '/' ? '/index' : uri) + '.jade');
      fs.readFile(fileName, {encoding: 'utf8'}, (err, data) => {
        if (err) {
          fileName = path.join(CONTENT_DIR, uri + '/index.jade');
          fs.readFile(fileName, {encoding: 'utf8'}, (err2, data2) => {
            resolve(err2 ? null : parseJade(uri, data2));
          });
        }
        resolve(parseJade(uri, data));
      });
    }).then((page) => {
      Dispatcher.dispatch({
        type: ActionTypes.RECEIVE_PAGE,
        page: page});
      return Promise.resolve(page);
    });
  }
};
