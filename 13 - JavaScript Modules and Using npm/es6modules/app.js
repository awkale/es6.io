import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';

import User, { createURL, gravatar } from './src/user';

const alex = new User('Alex Kale', 'alex.kale@gmail.com', 'awkale.me');

const profile = createURL(alex.name);

const image = gravatar(alex.email);
console.log(image);