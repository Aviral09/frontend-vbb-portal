import moment from 'moment';
import 'moment-timezone';
import { MENTOR, COMMIT } from '../actions';

const BookingInitialState = {
    time_zone: moment.tz.guess(), 
    language: 1,
    weekday: 0, 
    displayDay: '',
    library: 0, 
    time: false,
    displayTime: '',
    isReturning: true,
    isCommitted: false,
    sameAppointment: 'no',
};

export const booking = (state = BookingInitialState, action) => {
  switch (action.type) {
    case MENTOR:
        const newLibrary = !state.isReturning ? 0 : state.library
        return {
            ...state,
            isReturning: !state.isReturning,
            library: newLibrary
        }
    case COMMIT:
        return {
            ...state,
            isCommitted: !state.isCommitted
        }
    default:
      return state;
  }
};