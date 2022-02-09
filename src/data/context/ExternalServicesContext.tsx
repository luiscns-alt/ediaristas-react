import {
    ExternalServicesReducerInterface,
    initialState,
    useExternalServiceReducer,
} from 'data/reducers/ExtrenalServicesReducer';
import React, { createContext } from 'react';
import { UserProvider } from './UserContext';

const initialValue: ExternalServicesReducerInterface = {
    externalServicesState: initialState,
    externalServicesDispatch: () => {},
};

export const ExternalServicesContext = createContext(initialValue);

export const ExternalServicesProvider: React.FC = ({ children }) => {
    const reducer = useExternalServiceReducer();

    return (
        <ExternalServicesContext.Provider value={reducer}>
            <UserProvider>{children}</UserProvider>
        </ExternalServicesContext.Provider>
    );
};
