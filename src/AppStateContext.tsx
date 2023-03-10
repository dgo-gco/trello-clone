import { randomUUID } from "crypto";
import React, { createContext, useReducer, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { findItemIndexById } from "./findItemIndexById";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Learn Typescript" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c1", text: "Learn javascript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c2", text: "Begin to use static typing" }],
    },
  ],
};
interface Task {
  id: string;
  text: string;
}
interface List {
  id: string;
  text: string;
  tasks: Task[];
}
export interface AppState {
  lists: List[];
}
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, appData)
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
export const useAppState = () => {
  return useContext(AppStateContext);
};

type Action = {
    type: 'ADD_LIST';
    payload: string;
}
| {
    type: 'ADD_TASK';
    payload: {text: string, taskId: string};
}

const appStateReducer = (state: AppState, action: Action): AppState => {
    switch(action.type){
        case "ADD_LIST": {
            const visibility = "too visible";
            return  {...state,
                lists:
                [...state.lists, {id: uuidv4(), text: action.payload, tasks: []}]
            }
        }
 
        case "ADD_TASK": {
            const targetLaneIndex = findItemIndexById(
                state.lists,
                action.payload.taskId,
            )
            state.lists[targetLaneIndex].tasks.push({
                id: uuidv4(),
                text: action.payload.text
            });
            return  {
                ...state
            }
        }
           default: {
               return state
           }
    }
}