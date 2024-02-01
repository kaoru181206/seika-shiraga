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

    // scroll表示・非表示
    const body = document.getElementById("body") || null;
    if (body != null) {
        body.classList.remove("overflow-visible", "overflow-hidden", "lg:overflow-auto");
        if (tglSidebar) {
            body.classList.add("overflow-hidden", "lg:overflow-visible");
        } else {
            body.classList.add("overflow-visible");
        }
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