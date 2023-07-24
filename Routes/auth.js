import express from 'express';
const Routes = express.Router();

import { GetAuth, GetLogin, GetRegister } from '../Controller/auth.js';

Routes.route('/').get(GetAuth);
Routes.route('/login').get(GetLogin);
Routes.route('/register').get(GetRegister);

export default Routes;