import {configureStore} from '@reduxjs/toolkit';
import user, {User} from './user';

export interface GlobeStore {
  user: User;
}

export default configureStore({
  reducer: {user},
});
