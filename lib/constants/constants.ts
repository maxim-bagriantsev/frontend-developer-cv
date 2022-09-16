export const siteProtocol = process.env.NEXT_PUBLIC_SITE_PROTOCOL || '';
export const siteProtocolNoSsr =
  process.env.NEXT_PUBLIC_SITE_PROTOCOL_NO_SSR || '';
export const siteDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN || '';
export const apiURL = `${process.env.NEXT_PUBLIC_SITE_PROTOCOL}${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}`;

//SEO - Title
export const defaultPageTitle = 'Skillmaps — сервис развития профессиональных компетенций и навыков';
export const registrationUserPageTitle = 'Регистрация — Skillmaps';
export const authUserPageTitle = 'Вход — Skillmaps';
export const emailSucceedPageTitle = 'Восстановление пароля — Skillmaps';
export const userProfilePageTitle = 'Платформа развития компетенций и навыков — Skillmaps';

//SEO - Description
export const defaultMeta = 'Skillmaps — это уникальный инструмент для развития профессиональных навыков. Карты компетенций для Junior, Middle и Senior, подтвержденные экспертами.';

const uploadsFolder = 'downloads';

// export const privacyPolicy = `${siteProtocol}${siteDomain}/${uploadsFolder}/privacy-policy.pdf`;
export const privacyPolicy = `/downloads/privacy-policy.pdf`;

export const buttonType = ['google', 'facebook', 'github', 'atlassian'];

export const levels = ['Junior', 'Middle', 'Senior'];

export const selectData = [
  {
    name: 'sphere',
  },
  {
    name: 'whoareyou',
  },
  {
    name: 'languages',
  },
  {
    name: 'direction',
  },
];

export const monthList = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

