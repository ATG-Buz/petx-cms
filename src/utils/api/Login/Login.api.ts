import { AxiosResponseData, commonAxios } from "@/utils/axios";
import { PostLoginPayLoad } from "./Login.api.types";

const LoginApi = {
  postLogin: (body: PostLoginPayLoad) => {
    return commonAxios.post<AxiosResponseData>("/auth/signIn", body)
  },
}
// const LoginApi = {
//   postLogin: async (body: { email: string; password: string }) => {
//     console.log('ádfadf')
//     const response = await fetch('https://mswharndhuwnyovnltyz.supabase.co/functions/v1/auth/signIn', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token-petX')}`
//       },
//       body: JSON.stringify(body),
//     });

//     const data = await response.json();
//     return {
//       status: response.status,
//       data,
//     };
//   },
// };
export default LoginApi;