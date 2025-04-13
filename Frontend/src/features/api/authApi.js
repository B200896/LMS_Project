import { userLoggedIn } from '@/features/authSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const USER_API = "http://localhost:8080/api/user";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: USER_API,
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "register",
                method: "POST",
                body: inputData
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {  
                try {
                    const { data } = await queryFulfilled;
                    dispatch(userLoggedIn({ user: data.user }));
                } catch (error) {
                    console.error("Registration error:", error);
                }
            }
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "login",
                method: "POST",
                body: inputData
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {  
                try {
                    const { data } = await queryFulfilled;
                    dispatch(userLoggedIn({ user: data.user }));
                } catch (error) {
                    console.error("Login error:", error);
                }
            }
        }),
        loadUser:builder.query({
            query:()=>({
                url:"profile",
                method:"GET"
            })

        }),
        
        updateUser:builder.mutation({
            query:(formData)=>({
                url:"profile/update",
                method:"PUT",
                credentials:"include"
            })
        })
    })
});

export const { useRegisterUserMutation, useLoginUserMutation ,useLoadUserQuery,useUpdateUserMutation} = authApi;
