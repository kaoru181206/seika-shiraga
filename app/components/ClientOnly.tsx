'use client'

import { createContext, useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

interface TglNavClrContextType {
    tglNavClr: boolean;
    setTglNavClr: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TglNavClrContext = createContext<TglNavClrContextType>({
    tglNavClr: false,
    setTglNavClr: () => { },
});

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);
    const [tglNavClr, setTglNavClr] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) {
        return null;
    }


    return (
        <TglNavClrContext.Provider value={{ tglNavClr, setTglNavClr }}>
            {children}
        </TglNavClrContext.Provider>
    )
}

export default ClientOnly;