import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "why": "Why",
      "why_large": "Why",
      "what": "What",
      "what_large": "What",
      "how": "How",
      "how_large": "How",
      "who": "Join Us",
      "title_home": "Supporting innovation for parents and caregivers",
      "paragraph_home": "Growth Spurt is a new incubator to support innovation for parents and caregivers in two geographic regions in the Netherlands: Tilburg and Amsterdam Zuidoost. It has a focus on new initiatives for parents and caregivers that may need further support and are not adequately supported by the current system.",
      "email_submit": "Enter your email",
      "submit_button": "Submit",
      "submit_description": "Sign up to our mailing list and receive notifications on upcoming events and materials.",
      "why_title": "Why is more support for parents and caregivers needed in the Netherlands? ",
      "wallet_paragraph": "The Netherlands is one of the most prosperous nations in the world. Despite this, many families in the Netherlands are underserved by the system, they may struggle financially and with balancing the demands of parenting with work and keeping themselves and their family healthy and well. As many as 144,000 parents both couples and single parents live below the low-income threshold* [Source Statistics Netherlands (CBS)]",
      "cloud_paragraph": "Many other families experience a range of sources of stress or challenges with physical and mental health of themselves or their children, some families may feel isolated or that they do not have enough support with parenting responsibilities.",
      "pig_paragraph": "Parenting is immensely rewarding but hard. There is no manual to be a parent or caregiver. Parenting and caregiving brings many challenges. Challenges may be exacerbated through financial difficulties, child mental health difficulties, parental/caregiver physical and mental illness, an absence of childcare, barriers to accessing services, and transitions. When parents and caregivers are mentally and physically well this has a positive impact on the mental and emotional health of children. This is because when parents are supported they are better able to provide responsive care to balance the needs of families.",
      "what_title": "What change is the incubator aiming to create for families?",
      "what_description": "Growth Spurt aspires to demonstrate that complex challenges can be rapidly tackled by a small, determined group of actors designing innovative programmes and interventions. Our goal is to rapidly develop, test, and deploy interventions for improving the lives of 4,000 parents and caregivers within 12-months in two regions of the Netherlands.",
      "how_title": "How will the incubator work?",
      "how_description": "Growth Spurt will bring together <b>a group of 45 stakeholders to work in action-cycles of 6 months.</b> During each action cycle this team will split into four. Each team will be given the opportunity to develop innovative, low-cost, and fast interventions to support parents and caregivers. An Innovation Fund will support the work of these Teams. This means that the fund will enable change makers to fund new innovative projects to support parents and caregivers.",
      "who_title": "Growth Spurt is convened by the Bernard Van Leer Foundation and Ten in Ten. Over a six month period, we are extending an invitation to partners, established and new, to join Growth Spurt.",
      "who_subtitle": "We are seeking up to 45 individuals to join, including parents and caregivers, community-based organisations, civil society groups, as well as local and national government representatives. Caregivers include stepparents, aunties, grandparents, and any others that are directly involved in the care of children. These individuals will find partners and prototype new interventions that aim to improve parental wellbeing for a target population in the Netherlands. The scope of the incubator is broad to enable a range of stakeholders to participate.",
      "who_description": "Our intention is supporting diverse facets of parental and caregiver wellbeing. <b>These include:</b>",
      "who_list": "<li>Physical Health</li><li>Wellbeing</li><li>Parenting Skills and Confidence </i><li>Support and Childcare</li><li>Parental Psychological Wellbeing</li><li>Support in the Perinatal Period</i><li>Managing Stress</li><li>Protecting Against Mental Health Difficulties.</li>",
      "who_footer": "In Growth Spurt, participants will have the opportunity to either build new interventions or strengthen existing ones that improve parental and caregiver wellbeing.",
      "foundation_description": "Since 1949, the Van Leer Foundation has been dedicated to supporting young children, caregivers and communities worldwide. We work with our partners to achieve large-scale impact for inclusive societies.",
      "ten_description": "Our mission is to tackle ten complex challenges in ten years. We do this through building demonstrations - practical, real-world responses creating real benefits for real people. ",
      "footer_description": "Follow us on social media: ",
      "footer_email_description": "Sign up to our mailing list and receive notifications on upcoming events and materials.",
      "footer_copy": "Growth Spurt Incubator 2024 ©",
      "learn_more": "Learn More",
      "why_copy": ""
    }
  },
  nl: {
    translation: {
      "Welcome to React": "Welkom bij React en react-i18next",
      "why": "Waarom",
      "why_large": "Waarom doen we dit?",
      "what": "Wat",
      "what_large": "Wat doen we met GroeiSpurt?",
      "how": "Hoe",
      "how_large": "Hoe gaan we te werk?",
      "who": "Doe Mee",
      "title_home": "Innovatieve oplossingen voor & door ouders en verzorgers",
      "paragraph_home": "GroeiSpurt is een nieuw initiatief dat de positie van ouders en verzorgers in een kwetsbare positie structureel wil verbeteren. In Nederland: Tilburg and Amsterdam Zuidoost starten we hiermee in twee regio's.",
      "email_submit": "E-mailadres",
      "submit_button": "Ja ik doe graag mee",
      "submit_description": "Schrijf je in voor de nieuwsbrief en ontvang informatie over nieuwe evenementen en materialen.",
      "why_title": "Opvoeden is een mooie, maar ook uitdagende taak voor ouders en verzorgers. Vaak is het fijn hierbij ondersteund te worden zodat kinderen de best mogelijke start in het leven kunnen krijgen.",
      "wallet_paragraph": "Nederland is een van de welvarendste landen ter wereld. In 2021 groeiden 165.000 kinderen in Nederland (1 op de 15) op in armoede. Het blijkt dat veel gezinnen verschillende bronnen van stress ervaren. Ook zijn er andere uitdagingen die de fysieke en mentale gezondheid van ouders en kinderen beïnvloeden. Sommige gezinnen voelen zich geïsoleerd of ervaren dat zij onvoldoende steun krijgen bij de verantwoordelijkheden die bij opvoeding komen kijken.",
      "cloud_paragraph": "<b>Uitdagingen van ouders en verzorgers</b> <br><br> Ouderschap is een bijzondere en dankbare taak, maar ook een uitdagende. Er is geen handleiding die vertelt welke stappen je moet volgen om een goede ouder of verzorger te zijn. De uitdagingen van het ouderschap worden vergroot door armoede, mentale en fysieke gezondheidsproblemen, een gebrek aan kinderopvang, een scheiding, onveiligheid in het gezin of als men moeilijkheden ondervindt bij het krijgen van ondersteuning van de overheid of andere hulpbronnen.",
      "pig_paragraph": "Tegelijkertijd weten we dat als ouders en verzorgers zich goed voelen, dit een positief effect heeft op het welzijn van kinderen.",
      "what_title": "GroeiSpurt is een project dat ouders, verzorgers en organisaties helpt met financiële steun en deskundigheid, zodat zij initiatieven kunnen opzetten om ouders en verzorgers die wat extra hulp kunnen gebruiken, te ondersteunen.",
      "what_description": "GroeiSpurt wil laten zien dat complexe uitdagingen snel kunnen worden aangepakt door met een kleine, toegewijde en betrokken groep mensen innovatieve programma's en interventies te ontwerpen, ontwikkelen en uitvoeren. <br><br><br> <b>Aan welke oplossingen moet ik denken? </b> De ideeën die GroeiSpurt ondersteunt, hebben als doel bij te dragen aan verschillende facetten van welzijn van ouders en verzorgers. Denk aan fysieke gezondheid en welzijn, opvoedingsvaardigheden en zelfvertrouwen, steun en kinderopvang, psychologisch welzijn van ouders, steun in de perinatale periode, het omgaan met stress en bescherming tegen mentale gezondheidsproblemen.",
      "how_title": "We zoeken 45 deelnemers om deze uitdaging aan te gaan",
      "how_description": "GroeiSpurt gaat een team formeren van 45 betrokken mensen (ouders, verzorgers, maatschappelijke organisaties, overheden) die in actiegerichte cycli van zes maanden werken aan innovatieve oplossingen. Tijdens elke actiecyclus splitst dit team zich op in vier groepen. Elke groep krijgt de kans om innovatieve, laagdrempelige en snelle interventies te ontwikkelen die ouders en verzorgers ondersteunen bij de opvoeding. Een speciaal opgezet innovatiefonds helpt bij het realiseren van de ontwikkelde ideeën. Het GroeiSpurt fonds stelt ouders en verzorgers in staat om nieuwe innovatieve projecten te financieren. <br><br><br> In GroeiSpurt krijgen deelnemers de kans om ofwel nieuwe interventies te ontwikkelen of bestaande interventies te versterken die het welzijn van ouders en verzorgers vergroten.",
      "who_title": "GroeiSpurt is een incubator programma en een initiatief van de Van Leer Foundation en Ten in Ten. Gedurende een periode van zes maanden nodigen wij partners, zowel bestaande als toekomstige, uit om deel te nemen aan GroeiSpurt.",
      "who_subtitle": "Hoe kun je helpen? <br><br> We zoeken maximaal 45 mensen die mee willen doen, waaronder ouders/verzorgers, maatschappelijke organisaties en vertegenwoordigers van lokale en nationale overheden. Onder verzorgers vallen ook stiefouders, tantes, grootouders en anderen die direct betrokken zijn bij de zorg voor kinderen. Met elkaar gaan zij samenwerkingspartners vinden en nieuwe interventies ontwikkelen met als doel het welzijn van ouders in Nederland te verbeteren.  GroeiSpurt heeft de ambitie om het voor een breed scala aan belanghebbenden mogelijk te maken om deel te nemen aan dit initiatief. In GroeiSpurt kunnen deelnemers zowel nieuwe interventies ontwikkelen als bestaande interventies verbeteren. Alles met het doel het welzijn van ouders, verzorgers en daarmee ook de kinderen te verbeteren.",
      "who_description": "<b>Ja, dat wil ik!</b> <br> <br> <ul className='list-image-arrow list-test list-inside '> <li>Ja ik doe graag mee</li> <li> Stuur me meer informatie </li> </ul><br> Onze missie is het welzijn van ouders en verzorgers te ondersteunen. We werken samen aan voorwaarden die hiervoor nodig zijn zodat ouders en verzorgers zich goed voelen en de juiste steun krijgen. Daarbij besteden we aandacht aan aspecten zoals: ",
      "who_list": "<li>Fysieke gezondheid en welzijn</li><li>Zelfvertrouwen en vaardigheden als ouder/opvoeder/verzorger</li><li>Ondersteuning en kinderopvang</li><li>Ondersteuning en kinderopvang</li><li>Het mentale welzijn van ouders</li><li>Extra zorg tijdens de perinatale periode</li><li>Omgaan met stress</li><li>Bescherming tegen mentale gezondheidsproblemen</li>",
      "who_footer": "",
      "foundation_description": "Sinds 1949 zet de Van Leer Foundation zich in om wereldwijd jonge kinderen, hun ouders, andere verzorgers en gemeenschappen te ondersteunen. In partnerschap leveren we een grote bijdrage aan meer inclusieve samenlevingen.",
      "ten_description": "Onze missie is om tien complexe uitdagingen in tien jaar aan te pakken. Dit doen we door aan de slag te gaan met realistische, praktische oplossingen die een positief verschil maken voor echte mensen. We zetten onze ideeën in de praktijk door initiatieven op te zetten die een wezenlijke een bijdrage leveren.",
      "footer_description": "Volg ons op social media: ",
      "footer_email_description": "Schrijf je in voor de nieuwsbrief en ontvang informatie over nieuwe evenementen en materialen.",
      "footer_copy": "Groei Spurt Incubator 2024 ©",
      "learn_more": "Meer Informatie",
      "why_copy": "Bron: NJi<a href='https://www.nji.nl/cijfers/armoede-gezinnen'>https://www.nji.nl/cijfers/armoede-gezinnen</a>"
    }
  }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;