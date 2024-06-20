"use client"
import {QueryClient, QueryClientProvider} from "react-query";

interface ReactQueryClientProviderProps {
    children: React.ReactNode
}

export default function ReactQueryClientProvider({children}: ReactQueryClientProviderProps) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
