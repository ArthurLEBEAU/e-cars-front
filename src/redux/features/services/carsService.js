import { apiSlice } from "../apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Queries
  
    getRequestId: builder.query({
      query: (name) => `/request/${name}`,
    
    }),
    //Mutations
    requestCar: builder.mutation({
      query: (initialExemple) => ({
        url: "/request",
        method: "POST",
        body: {
          ...initialExemple,
        },
      }),
    }),
  }),
});

export const {
  useGetCarsQuery,
useGetRequestIdQuery,
  useRequestCarMutation,
} = extendedApiSlice;