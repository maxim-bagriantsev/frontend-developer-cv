import { ReactElement } from 'react';
import { createRoute } from '../helpers';

const baseUrl = '';
const uploadsFolder = 'downloads';

export const termsOfUse = `${baseUrl}/${uploadsFolder}/terms-of-use.pdf`;

export const forgetPassword = (routeTitle: string): ReactElement =>
  createRoute(routeTitle, '/reset_password');

export const registerUser = (routeTitle: string): ReactElement =>
  createRoute(routeTitle, '/user/registration');

export const backToAuthLeft = (routeTitle: string): ReactElement =>
  createRoute(routeTitle, '/user/auth', {
    textAlign: 'left',
  });

export const backToAuth = (routeTitle: string): ReactElement =>
  createRoute(routeTitle, '/user/auth');

export const alreadyHasAccount = (routeTitle: string): ReactElement =>
  createRoute(routeTitle, '/user/auth');

export const backToForm = (routeTitle: string): ReactElement =>
  createRoute(routeTitle, '/questionary');

export const backToMain = (routeTitle: string): ReactElement =>
  createRoute(routeTitle, '/', {
    textAlign: 'left',
    fontSize: '20px',
  });
export const backToUserProfile = (routeTitle: string): ReactElement =>
    createRoute(routeTitle, '/user/profile', {
      textAlign: 'left',
      fontSize: '20px',
    });


export const mechanicaLink = 'https://mechanica.agency/';

export const socialLinks = {
  vk: 'https://vk.com/clubrusvinyl',
};

export const mainPageRoute = '/';
export const registrationUserRoute = '/user/registration';
export const registrationInviteUserRoute = '/user/registration/invite/';
export const authUserRoute = '/user/auth';
export const subsRoute = '/user/subs';
export const getEmailAddress = '/user/getEmail';
export const resetPasswordRoute = '/reset_password';
export const specializationsRoute = '/specializations';
export const skillPageRoute = '/skill';
export const resumePageRoute = '/resume';
export const userProfileRoute = '/user/profile';
export const userFeedbackRoute = '/user/feedback';
export const questionaryRoute = '/questionary';
export const emailSucceedRoute = '/email_succeed';
export const adminRoutes = {
  addSpecialization: '/admin/addSpecialization',
  addSkill: '/admin/addSkill',
  addMaterial: '/admin/addMaterial',
  editSpecialization: '/admin/editSpecialization',
  editSkill: '/admin/editSkill',
  editMaterial: '/admin/editMaterial',
  specializationList: '/admin/specializations',
  skillList: '/admin/skills',
  materialList: '/admin/materials',
  ticketList: '/admin/tickets',
  ticket: '/admin/ticket',
  feedback: '/admin/feedback',
  troubleList: '/admin/feedback?type=troubles',
  feedbackList: '/admin/feedback?type=feedback',
  newItemList: '/admin/feedback?type=newItem',
  users: '/admin/users',
    usersAnalytics: '/admin/users/users-analytics'
};
export const userActivationRoute = '/user/activation';

export const newSource = '/user/feedback?sources=new-sources';
