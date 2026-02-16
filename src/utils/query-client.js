import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
            cacheTime: 1000 * 60 * 10, // Keep unused data in cache for 10 minutes
            refetchOnMount: false,
            refetchOnWindowFocus: false
        },
  },
})