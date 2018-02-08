import React from 'react';
import mdToHast from '../mdToHast';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={mdToHast(entry.getIn(['data', 'body']))} />
);

export default AboutPagePreview;
