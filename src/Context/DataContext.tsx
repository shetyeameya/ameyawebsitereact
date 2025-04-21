import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define the state type
type DataStateType = {
  data: any;
};

// Define the actions type
type DataActions = {
  addData: (data: any) => void;
};

// Create the contexts
const DataStateContext = createContext<DataStateType | undefined>(undefined);
const DataActionsContext = createContext<DataActions | undefined>(undefined);

// Reducer function to handle state changes
const dataReducer = (state: DataStateType, action: any): DataStateType => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Define the Props interface for the provider component
interface Props {
  children: ReactNode;
}

// Provider component
export const DataProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, { data: [] });

  const addData = (data: any) => {
    dispatch({ type: "ADD_DATA", payload: data });
  };

  return (
    <DataStateContext.Provider value={state}>
      <DataActionsContext.Provider value={{ addData }}>
        {children}
      </DataActionsContext.Provider>
    </DataStateContext.Provider>
  );
};

// Custom hooks
export const useDataState = () => {
  const context = useContext(DataStateContext);
  if (context === undefined) {
    throw new Error("useDataState must be used within a DataProvider");
  }
  return context;
};

export const useDataActions = () => {
  const context = useContext(DataActionsContext);
  if (context === undefined) {
    throw new Error("useDataActions must be used within a DataProvider");
  }
  return context;
};
