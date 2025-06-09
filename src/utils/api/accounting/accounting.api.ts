import { AxiosResponseData, commonAxios } from "@/utils/axios";
import { PostLoginPayLoad } from "./accounting.api.types";

const LoginApi = {
  postLogin: (payload: PostLoginPayLoad) => {
    return commonAxios.post<AxiosResponseData>("/auth/signIn",
      payload.params,
    )
  },
}
export default LoginApi;