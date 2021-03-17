// 来访信息相关API
import request from 'umi-request';
import Cookies from 'js-cookie';
import { detailsObj } from '@/pages/Detail/Detail';

export type createRule = {
  name: string;
  phone: string;
  purpose: string;
  visit_date: Date;
  require_description: string;
};

export async function createVisit(params: createRule) {
  return request<API.createVisitStateType>('/capi/v2/visit', {
    method: 'POST',
    data: params,
    headers: { 'x-csrf-token': Cookies.get('csrfToken') },
  });
}

// 创建入住
export async function createLive(params: detailsObj) {
  return request<API.createVisitStateType>('/capi/v2/live', {
    method: 'POST',
    data: params,
    headers: { 'x-csrf-token': Cookies.get('csrfToken') },
  });
}

// 获取单个
export async function getVisit(mobile: string) {
  return request(`/capi/v2/visit/${mobile}`);
}

export async function getVisitList() {
  return request('/capi/v2/visit');
}
