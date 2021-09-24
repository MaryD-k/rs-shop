import { LocationState } from './location/location.reducer';
import { UserState } from './user/user.reducers';

export interface State {
  userState: UserState;
  locationState: LocationState;
}
