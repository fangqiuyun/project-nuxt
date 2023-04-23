import en_us from '../assets/lang/en_us.js'
import zh_cn from '../assets/lang/zh_cn.js'

const i18n = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'zh',
      iso: 'zh-CN',
      name: '中文',
    },
  ],//有多少地区的语言就添加多少种
  defaultLocale: 'en',//默认的地区语言
  vueI18n: {
    fallbackLocale: 'en',//回退策略，指定的locale中没有找到对应资源的情况下使用的locale
    messages: { //要渲染的信息，有多少语言就添加多少种
      en: en_us,
      zh: zh_cn
    }
  }
}

console.log("i18n", i18n);
export default i18n
