We will have a dispatch that send an action (that has a type), the Reducer o function will take it 
and do something with that data (apply some logic perhaps) and then it can also modify the state of the app which in 
turn will trigger the re-render.

Is just a pattern, more like Redux or Flux. 

The reducer is just an object, that has a type, and some propossed changes to the state (the payload)

dispatch this {type: "ADD_BOOK", book:{}} and the reducer will take it:

the reducer takes the action and the state.
check the action type
update the state object (if needed)
return the state

reducer(state, action)

