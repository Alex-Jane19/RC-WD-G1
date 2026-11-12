import User from './User.js';

import { log as logger } from './analytics.js';

const user = new User('Alex');
logger(user.greet());