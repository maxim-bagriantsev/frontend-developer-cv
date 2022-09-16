import axios from 'axios';
import { apiURL } from '../lib/constants';

export const routes = {
  getSpecializationDetail: 'specialization/detail',
  getSpecList: 'specialization/getSpecializationList',
  getSkillList: 'skill/list',
  getSkillDetail: 'skill',
  getQuestionList: 'answer/questions',
  getMaterialList: 'material/list',
  getMaterial: 'material/get',
  getTicketList: 'ticket/list',
  getFeedbackList: 'ticket/feedbackList',
  getTicket: 'ticket/get',
  getFeedbackItem: 'ticket/getFeedback',
  addSpecialization: 'specialization/add',
  addMaterial: 'material/add',
  addSkillToUser: 'map/addSkill',
  addMaterialToUser: 'map/addMaterial',
  addAnswer: 'answer/add',
  addSkill: 'skill/add',
  addTicket: 'ticket/add',
  usePromocode: 'sub/usePromocode',
  addFeedback: 'ticket/addFeedback',
  addPromocode: 'sub/addPromocode',
  setSubNotifStatus: 'sub/setSubNotifStatus',
  buyNewSub: 'sub/buy',
  addPromocodeForSharedLink: 'sub/addPromocodeForSharedLink',
  updateProfile: 'user/updateProfile',
  updateAvatarData: 'user/update-avatar-data',
  updateSpecialization: 'specialization/updateSpecialization',
  updateMaterial: 'material/update',
  updateSkill: 'skill/update',
  signIn: 'user/signin',
  signUp: 'user/registration',
  userData: 'user',
  removeSkillFromUser: 'map/removeSkill',
  removeMaterialFromUser: 'map/removeMaterial',
  removeSpecialization: 'specialization/remove',
  removeSkill: 'skill/remove',
  removeMaterial: 'material/remove',
  authedUserData: 'user/getUserData',
  confirmUser: 'user/confirm',
  sendResetPasswordCode: 'user/resetPassword/send',
  confirmResetPasswordCode: 'user/resetPassword/confirm',
  repeatConfirmationEmail: 'user/repeatSendEmail',
  closeTicket: 'ticket/close',
  closeFeedback: 'ticket/closeFeedback',
};

const config = {
  headers: { 'Content-Type': 'application/json' },
};
const configMultipart = {
  headers: { 'Content-Type': 'multipart/form-data' },
};

export const getData = async (route: string, token: string): Promise<any> => {
  const res = await axios.get(
    `${apiURL}${route}`,
    token
      ? {
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        }
      : config
  );
  return res.data;
};

export const postData = async (
  route: string,
  data: any,
  token?: string
): Promise<any> => {
  const res = await axios.post(
    `${apiURL}${route}`,
    data,
    token
      ? {
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        }
      : config
  );
  return res;
};

export const putData = async (
  route: string,
  data: any,
  token?: string
): Promise<any> => {
  const res = await axios.put(`${apiURL}${route}`, data, {
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const postFormData = async (
  route: string,
  data: any,
  token?: string
): Promise<any> => {
  const res = await axios.post(`${apiURL}${route}`, data, {
    headers: {
      ...configMultipart.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
