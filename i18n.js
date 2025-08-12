import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {
          page_status: "Puesta a Punto del Portal",
          attribution_by: "Por",
          pillar1_title: "El ruido se desvanece",
          pillar1_subtitle: "Hasta que solo queda lo importante.",
          pillar2_title: "Lo complejo se vuelve simple",
          pillar2_subtitle: "Datos clasificados en su escala correcta aseguran la navegación intuitiva.",
          pillar3_title: "Lo esencial, finalmente visible",
          pillar3_subtitle: "Nitidez, sentido y confianza. El portal que preparamos va en esa dirección.",
          pillar4_title: "Inteligencia Operativa",
          pillar4_subtitle: "Integramos el análisis de eventos y la validación normativa para que operes con seguridad y en pleno cumplimiento."
        }
      },
      en: {
        translation: {
          page_status: "Portal Tuning",
          attribution_by: "By",
          pillar1_title: "The noise fades away",
          pillar1_subtitle: "Until only the essential remains.",
          pillar2_title: "The complex becomes simple",
          pillar2_subtitle: "Data, classified at the right scale, ensures intuitive navigation.",
          pillar3_title: "The essential, finally visible",
          pillar3_subtitle: "Clarity, meaning, and confidence. The portal we are building moves in that direction.",
          pillar4_title: "Operational Intelligence.",
          pillar4_subtitle: "We integrate event analysis and regulatory validation so you can operate securely and in full compliance."
        }
      }
    }
  });


export default i18n;
