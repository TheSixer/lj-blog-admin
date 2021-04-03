// import qs from 'qs';
import * as Art from '../types/article';
import request from './fetch';

export const newArticle = (params: Art.QueryParams): any => request.post('/article/new', params);

export default {};
