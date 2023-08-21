import { apiSlice } from "../apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Queries
    getCars: builder.query({
      query: () => "exemple",
      providesTags: ["exemple"],
    }),
    searchCar: builder.query({
      query: (name) => `/exemple/${name}`,
      providesTags: ["exemple"],
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
  useSearchCarQuery,
  useRequestCarMutation,
} = extendedApiSlice;