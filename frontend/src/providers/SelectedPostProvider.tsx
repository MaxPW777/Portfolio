"use client"
import {createContext, ReactNode, useContext, useState} from 'react';
import {IPost, IPostDocument} from "@common/types/IPost";
import {IComment} from "@common/types/IComment";

interface SelectedPostProviderProps {
    children: ReactNode;
}

interface SelectedPostContextType {
    selectedPost: IPostDocument | null;
    setSelectedPost: (post: IPostDocument) => void;
}

const SelectedPostContext = createContext<SelectedPostContextType>({} as SelectedPostContextType);

export const SelectedPostProvider = ({children}: SelectedPostProviderProps) => {
    const [selectedPost, setSelectedPost] = useState<IPostDocument | null>(null);
    return (
        <SelectedPostContext.Provider value={{selectedPost, setSelectedPost}}>
            {children}
        </SelectedPostContext.Provider>
    );
};

export const useSelectedPost = (): SelectedPostContextType => useContext(SelectedPostContext);
