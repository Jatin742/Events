import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; // Named import
import { composeWithDevTools } from "redux-devtools-extension";
import { userEventsReducer, userReducer } from "./Reducers/userReducer";
import { eventDetailsReducer, eventsReducer, newEventReducer, registerationReducer } from "./Reducers/eventReducer";

const reducer = combineReducers({
  user: userReducer,
  userEvents: userEventsReducer,
  events: eventsReducer,
  eventDetails: eventDetailsReducer,
  newEvent: newEventReducer,
  registeration: registerationReducer
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
