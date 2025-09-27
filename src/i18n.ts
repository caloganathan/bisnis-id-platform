import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'id'];
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale)) {
    locale = 'id';
  }
 
  return {
    locale,
    messages: (await import(`./i18n/${locale}.json`)).default
  };
});

export { locales };
