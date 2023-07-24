import express from 'express';
const Routes = express.Router();

import { GetBlog, GetArticle } from '../Controller/blog.js';

Routes.route('/').get(GetBlog);
Routes.route('/article').get(GetArticle);

export default Routes;