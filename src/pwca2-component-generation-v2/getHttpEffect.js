import {createHttpEffect} from '@servicenow/ui-effect-http';
import { API_PATH } from './constants';

export const getHttpEffect = ({successActionType, errorActionType}) => {
	return createHttpEffect(API_PATH, {
		queryParams: ["id"],
		successActionType,
		errorActionType
	});
};