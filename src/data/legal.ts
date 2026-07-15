import type { Locale } from '../i18n/ui';

/**
 * Legal notice + privacy, kept short and honest. The Norwegian
 * organisasjonsnummer slot is filled once Dorian provides it.
 */

export interface LegalCopy {
  metaTitle: string;
  metaDescription: string;
  title: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const legal: Record<Locale, LegalCopy> = {
  en: {
    metaTitle: 'Legal notice — De Freitas Lysdesign',
    metaDescription:
      'Publisher, hosting and privacy information for defreitaslysdesign.com.',
    title: 'Legal notice',
    sections: [
      {
        heading: 'Publisher',
        paragraphs: [
          'This site is published by Dorian De Freitas, operating as De Freitas Lysdesign, a Norwegian sole proprietorship (enkeltpersonforetak) based in Oslo, Norway.',
          'Contact: hello@defreitaslysdesign.com',
        ],
      },
      {
        heading: 'Hosting',
        paragraphs: [
          'The site is hosted by o2switch SAS, 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France — o2switch.fr.',
        ],
      },
      {
        heading: 'Privacy',
        paragraphs: [
          'This site uses no cookies, no analytics and no trackers of any kind.',
          'The only personal data collected is what you choose to send through the contact form: your name, an email address and a music link. It is transmitted by formsubmit.co (the form processor) directly to my inbox, used solely to reply to you, and never shared or added to any mailing list.',
          'To access or delete anything you have sent, one email is enough: hello@defreitaslysdesign.com.',
        ],
      },
      {
        heading: 'Content',
        paragraphs: [
          'All texts, images and the visual identity of this site belong to Dorian De Freitas unless credited otherwise. Production photos are published with the relevant credits and permissions.',
        ],
      },
    ],
  },
  fr: {
    metaTitle: 'Mentions légales — De Freitas Lysdesign',
    metaDescription:
      'Éditeur, hébergement et confidentialité du site defreitaslysdesign.com.',
    title: 'Mentions légales',
    sections: [
      {
        heading: 'Éditeur',
        paragraphs: [
          "Ce site est édité par Dorian De Freitas, exerçant sous le nom De Freitas Lysdesign, entreprise individuelle de droit norvégien (enkeltpersonforetak) établie à Oslo, Norvège.",
          'Contact : hello@defreitaslysdesign.com',
        ],
      },
      {
        heading: 'Hébergement',
        paragraphs: [
          'Le site est hébergé par o2switch SAS, 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France — o2switch.fr.',
        ],
      },
      {
        heading: 'Confidentialité',
        paragraphs: [
          "Ce site n'utilise aucun cookie, aucune mesure d'audience et aucun traceur d'aucune sorte.",
          "Les seules données personnelles collectées sont celles que tu choisis d'envoyer via le formulaire : ton nom, un email et un lien musical. Elles sont transmises par formsubmit.co (prestataire du formulaire) directement vers ma boîte mail, utilisées uniquement pour te répondre, jamais partagées ni ajoutées à une liste de diffusion.",
          'Pour consulter ou supprimer ce que tu as envoyé, un email suffit : hello@defreitaslysdesign.com.',
        ],
      },
      {
        heading: 'Contenus',
        paragraphs: [
          "Les textes, images et l'identité visuelle de ce site appartiennent à Dorian De Freitas sauf mention contraire. Les photos de production sont publiées avec les crédits et autorisations nécessaires.",
        ],
      },
    ],
  },
  no: {
    metaTitle: 'Juridisk informasjon — De Freitas Lysdesign',
    metaDescription:
      'Utgiver, drift og personvern for defreitaslysdesign.com.',
    title: 'Juridisk informasjon',
    sections: [
      {
        heading: 'Utgiver',
        paragraphs: [
          'Dette nettstedet utgis av Dorian De Freitas, som driver De Freitas Lysdesign, et norsk enkeltpersonforetak med base i Oslo.',
          'Kontakt: hello@defreitaslysdesign.com',
        ],
      },
      {
        heading: 'Drift',
        paragraphs: [
          'Nettstedet driftes av o2switch SAS, 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, Frankrike — o2switch.fr.',
        ],
      },
      {
        heading: 'Personvern',
        paragraphs: [
          'Dette nettstedet bruker ingen informasjonskapsler, ingen analyseverktøy og ingen sporing av noe slag.',
          'De eneste personopplysningene som samles inn, er det du selv velger å sende via kontaktskjemaet: navnet ditt, en e-postadresse og en musikklenke. De overføres av formsubmit.co (skjemaleverandøren) direkte til innboksen min, brukes kun til å svare deg, og deles aldri videre.',
          'For innsyn eller sletting holder én e-post: hello@defreitaslysdesign.com.',
        ],
      },
      {
        heading: 'Innhold',
        paragraphs: [
          'Tekster, bilder og den visuelle identiteten på dette nettstedet tilhører Dorian De Freitas med mindre annet er kreditert. Produksjonsbilder publiseres med nødvendige krediteringer og tillatelser.',
        ],
      },
    ],
  },
};

export const legalNavLabel: Record<Locale, string> = {
  en: 'Legal',
  fr: 'Mentions légales',
  no: 'Juridisk',
};
