import React, { createContext, useContext, useState } from 'react';

interface SubscriptionContextProps {
    count: number;
    incrementCount: () => void;
    resetCount: () => void;
}

interface SubscriptionProps {
    children?: React.ReactNode;
}

const SubscriptionContext = createContext<SubscriptionContextProps | undefined>(undefined);

export const useSubscription = () => {
    const context = useContext(SubscriptionContext);
    if (!context) {
        throw new Error('useSubscription must be used within a SubscriptionProvider');
    }

    return context;
};

export const SubscriptionProvider: React.FC = ({ children }: SubscriptionProps) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount((c) => c + 1);
    const resetCount = () => setCount(0);

    return (
        <SubscriptionContext.Provider value={{ count, incrementCount, resetCount }}>
            {children}
        </SubscriptionContext.Provider>
    );
};
