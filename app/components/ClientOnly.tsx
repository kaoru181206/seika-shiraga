'use client'

import { createContext, useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

interface TglNavClrContextType {
    tglNavClr: boolean;
    setTglNavClr: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TglSideBarContextType {
    tglSidebar: boolean;
    setTglSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TglNavClrContext = createContext<TglNavClrContextType>({
    tglNavClr: false,
    setTglNavClr: () => { },
});

export const TglSidebarContext = createContext<TglSideBarContextType>({
    tglSidebar: false,
    setTglSidebar: () => { },
});

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);
    const [tglNavClr, setTglNavClr] = useState(false);
    const [tglSidebar, setTglSidebar] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) {
        return null;
    }


    return (
        <TglNavClrContext.Provider value={{ tglNavClr, setTglNavClr }}>
            <TglSidebarContext.Provider value={{ tglSidebar, setTglSidebar }}>
                {children}
            </TglSidebarContext.Provider>
        </TglNavClrContext.Provider>
    )
}

export default ClientOnly;