/**
 * Created Date: Monday, January 28th 2019, 5:45:53 pm
 * Author: hanjingbo@ysstech.com | jingboup@gmail.com
 * -----
 * Last Modified: Thursday, January 31st 2019, 4:06:16 pm
 * Modified By: hanjingbo <hanjingbo@ysstech.com | jingboup@gmail.com>
 * -----
 * Copyright (c) 2019-present, #Lugia#.
 * ------------------------------------
 * JavaScript will save your soul!
 */

import { join } from 'path';
import { getConfig, build } from '../lib';

process.env.NODE_ENV = 'production';
process.env.COMPRESS = 'none';
process.env.ESLINT = 'none';
process.env.TSLINT = 'none';
process.env.__FROM_TEST = true;

describe('build', () => {
  test('useMemoryFS', done => {
    build({
      webpackConfig: getConfig({
        cwd: join(__dirname, './fixtures/normal'),
        entry: join(__dirname, './fixtures/normal/index.js'),
      }),
      useMemoryFS: true,
      success({ assets }) {
        expect(assets[0]).toMatchSnapshot({ path: expect.any(String) });
        done();
      },
      fail(err) {
        throw new Error(err);
      },
    });
  });
});