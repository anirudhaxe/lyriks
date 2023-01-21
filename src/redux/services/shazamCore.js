import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '01849ed71fmsha9a151f062f08a9p14b62cjsn04a5b6cc0242');
            
                return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
        }),
    })

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;