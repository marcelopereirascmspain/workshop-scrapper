import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import Frontend from '../src/scrapper-frontend';

describe('scrapper-frontend component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(Frontend).toNotBe(undefined);
    });
  });

  describe('scrapper-frontend renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(Frontend);
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
