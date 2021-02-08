import { combineReducers } from 'redux';
import user from './user_reducer';

const rootReducer = combineReducers({
    user
});
//rootReducer에서 많은 리듀서들을 한 번에 관리한다, 묶어준다

export default rootReducer;