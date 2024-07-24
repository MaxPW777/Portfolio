import {createContext, ReactNode, useContext, useState} from 'react';
import {IPost} from "@common/types/IPost";

interface SelectedPostProviderProps {
    children: ReactNode;
}

interface SelectedPostContextType {
    selectedPost: IPost | null;
    setSelectedPost: (post: IPost) => void;
}

const SelectedPostContext = createContext<SelectedPostContextType>({} as SelectedPostContextType);

export const SelectedPostProvider = ({children}: SelectedPostProviderProps) => {
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
    return (
        <SelectedPostContext.Provider value={{selectedPost, setSelectedPost}}>
            {children}
        </SelectedPostContext.Provider>
    );
};

export const useSelectedPost = (): SelectedPostContextType => useContext(SelectedPostContext);
