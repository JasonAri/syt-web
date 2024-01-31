// api/home
import request from "@/utils/request";

// 通过枚举管理首页模块的接口地址
enum API {
  HOSPITAL_URL = "/hosp/hospital/",
}

export const reqHospital = (page: number, limit: number) => {
  request.get(API.HOSPITAL_URL);
};
