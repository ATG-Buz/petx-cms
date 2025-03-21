import { API_HOST } from '../config/common';
import axios from "axios";

import { commonConfig } from "../config";
import { commonHelpers } from "../helpers";
import router from 'next/router';
import { gotoPage } from '../helpers/common';
import { toast } from 'react-toastify';
import { i18n } from 'next-i18next';

const commonAxios = axios.create({
  baseURL: commonConfig.API_HOST,
});

commonAxios.interceptors.request.use(
  (req) => {
    if (!req['headers'].Language) {
      const language = "vi";
      req['headers'].Language = language;
    }

    switch ((req.method as string).toUpperCase()) {
      case "GET": {
        req.params = req.params || {};
        break;
      }
      case "POST": {
        if (!(req.data ) && !!req.data) {
          req.data = commonHelpers.formatFormData(req.data);
        }
        break;
      }
      case "PUT": {
        if (!(req.data instanceof FormData) && !!req.data) {
          req.data = commonHelpers.formatFormData(req.data);
        }
        break;
      }
    }
    return req;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

commonAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const { status, data } = err.response;
    if (status === 401) {
    }
    else if (data && data.message) {
      toast.error(data.message);
    }
    else {
      toast.error('Network error');
    }
    return Promise.reject(err);
  }
);

export default commonAxios;
