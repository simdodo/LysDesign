import type { Locale } from '../i18n/ui';

/**
 * "The story" page. A narrative, not a CV — the compact record sits at the
 * bottom for labels and production managers doing due diligence. Every fact
 * comes from Dorian's CV or what he has confirmed; nothing invented.
 */

export interface AboutCopy {
  metaTitle: string;
  metaDescription: string;
  label: string;
  title: string;
  paragraphs: string[];
  recordLabel: string;
  groups: { label: string; items: string }[];
  cvLine: string;
}

export const about: Record<Locale, AboutCopy> = {
  en: {
    metaTitle: 'The story — Dorian De Freitas, lighting designer · Oslo',
    metaDescription:
      'Eighteen years in live production: from loading trucks in Clermont-Ferrand to designing, previsualising and operating light for concerts and dance in Oslo and on tour.',
    label: 'The story',
    title: 'Eighteen years of rooms.',
    paragraphs: [
      'I started in 2008 in Clermont-Ferrand, France, loading trucks and hanging fixtures for a rental company. Not the romantic way in — the useful one. When you begin at the bottom of the chain, you learn what every job above you actually needs from the light.',
      'Since then I have held all of those jobs: roadie, rigger, technician, operator, programmer, designer. Thirteen years of touring across France and Europe — JAIN, Tim Dup, Les Tambours du Bronx, and the dance piece “Traversée” with Wejna — taught me the discipline: the show must feel like the same artist in every room, on whatever rig is waiting there.',
      'Today I live in Oslo. I am on staff at Dansens Hus, Norway’s national house for dance — on paper as a lighting technician, in practice as operator, rigger, video tech and designer. Around it, I design and previsualise shows in 3D, program GrandMA, and run consoles live across the city’s venues, from Rockefeller to Parkteatret.',
    ],
    recordLabel: 'The record',
    groups: [
      {
        label: 'Tours',
        items:
          'JAIN · Tim Dup · Les Tambours du Bronx · By The Fall · Lafayette Regency · Wejna “Traversée” · Kaleidoscope — Shi Pratt',
      },
      {
        label: 'Designs',
        items:
          'Soul Sessions · Roller Disco · Queer the Wack — Dansens Hus · Panta Rei Danseteater',
      },
      {
        label: 'Rooms — Oslo',
        items:
          'Rockefeller · Sentrum Scene · John Dee · Parkteatret · Blå · Chateau Neuf · Vulkan · Sentralen · Youngs · Dansens Hus',
      },
      {
        label: 'Rooms — France',
        items: 'La Coopérative de Mai · Le Tremplin · Maison de la Culture — Clermont-Ferrand',
      },
      {
        label: 'Tools',
        items: 'GrandMA2 · GrandMA3 · ETC Eos · Wysiwyg · Unreal · Resolume · Ableton · Video · Networking',
      },
      {
        label: 'Languages',
        items: 'Français · English · Norsk · Português',
      },
    ],
    cvLine: 'Full CV and references on request:',
  },
  fr: {
    metaTitle: "L'histoire — Dorian De Freitas, concepteur lumière · Oslo",
    metaDescription:
      "Dix-huit ans de spectacle vivant : du chargement de camions à Clermont-Ferrand à la conception, la previz 3D et l'opération lumière pour concerts et danse, à Oslo et en tournée.",
    label: "L'histoire",
    title: 'Dix-huit ans de salles.',
    paragraphs: [
      "J'ai commencé en 2008 à Clermont-Ferrand, à charger des camions et accrocher des projecteurs pour un prestataire. Pas l'entrée romantique — l'entrée utile. Quand on commence en bas de la chaîne, on apprend ce que chaque poste au-dessus attend vraiment de la lumière.",
      'Depuis, je les ai tous occupés : roadie, rigger, technicien, opérateur, programmeur, concepteur. Treize ans de tournées en France et en Europe — JAIN, Tim Dup, Les Tambours du Bronx, et la pièce « Traversée » de Wejna — m’ont appris la discipline : le show doit ressembler au même artiste dans chaque salle, sur le kit qui s’y trouve.',
      "Aujourd'hui je vis à Oslo. Je suis en poste à Dansens Hus, la maison nationale de la danse en Norvège — technicien lumière sur le papier, opérateur, rigger, technicien vidéo et concepteur dans les faits. Autour, je conçois et prévisualise des shows en 3D, je programme sur GrandMA, et j'opère en direct dans les salles de la ville, de Rockefeller à Parkteatret.",
    ],
    recordLabel: 'Le palmarès',
    groups: [
      {
        label: 'Tournées',
        items:
          'JAIN · Tim Dup · Les Tambours du Bronx · By The Fall · Lafayette Regency · Wejna « Traversée » · Kaleidoscope — Shi Pratt',
      },
      {
        label: 'Créations',
        items:
          'Soul Sessions · Roller Disco · Queer the Wack — Dansens Hus · Panta Rei Danseteater',
      },
      {
        label: 'Salles — Oslo',
        items:
          'Rockefeller · Sentrum Scene · John Dee · Parkteatret · Blå · Chateau Neuf · Vulkan · Sentralen · Youngs · Dansens Hus',
      },
      {
        label: 'Salles — France',
        items: 'La Coopérative de Mai · Le Tremplin · Maison de la Culture — Clermont-Ferrand',
      },
      {
        label: 'Outils',
        items: 'GrandMA2 · GrandMA3 · ETC Eos · Wysiwyg · Unreal · Resolume · Ableton · Vidéo · Réseau',
      },
      {
        label: 'Langues',
        items: 'Français · English · Norsk · Português',
      },
    ],
    cvLine: 'CV complet et références sur demande :',
  },
  no: {
    metaTitle: 'Historien — Dorian De Freitas, lysdesigner · Oslo',
    metaDescription:
      'Atten år i livebransjen: fra lasting av trailere i Clermont-Ferrand til design, 3D-previz og lyskjøring for konserter og dans, i Oslo og på turné.',
    label: 'Historien',
    title: 'Atten år med rom.',
    paragraphs: [
      'Jeg begynte i 2008 i Clermont-Ferrand i Frankrike, med å laste trailere og henge lamper for et utleiefirma. Ikke den romantiske veien inn — den nyttige. Når du begynner nederst i kjeden, lærer du hva hvert ledd over deg faktisk trenger fra lyset.',
      'Siden har jeg hatt alle de jobbene: roadie, rigger, tekniker, operatør, programmerer, designer. Tretten år på turné i Frankrike og Europa — JAIN, Tim Dup, Les Tambours du Bronx, og danseforestillingen «Traversée» med Wejna — lærte meg disiplinen: showet skal kjennes som samme artist i hvert rom, på den riggen som venter der.',
      'I dag bor jeg i Oslo. Jeg er ansatt på Dansens Hus — lystekniker på papiret, i praksis operatør, rigger, videotekniker og designer. Ved siden av designer og previsualiserer jeg show i 3D, programmerer GrandMA, og kjører pult live på byens scener, fra Rockefeller til Parkteatret.',
    ],
    recordLabel: 'Merittlisten',
    groups: [
      {
        label: 'Turnéer',
        items:
          'JAIN · Tim Dup · Les Tambours du Bronx · By The Fall · Lafayette Regency · Wejna «Traversée» · Kaleidoscope — Shi Pratt',
      },
      {
        label: 'Design',
        items:
          'Soul Sessions · Roller Disco · Queer the Wack — Dansens Hus · Panta Rei Danseteater',
      },
      {
        label: 'Rom — Oslo',
        items:
          'Rockefeller · Sentrum Scene · John Dee · Parkteatret · Blå · Chateau Neuf · Vulkan · Sentralen · Youngs · Dansens Hus',
      },
      {
        label: 'Rom — Frankrike',
        items: 'La Coopérative de Mai · Le Tremplin · Maison de la Culture — Clermont-Ferrand',
      },
      {
        label: 'Verktøy',
        items: 'GrandMA2 · GrandMA3 · ETC Eos · Wysiwyg · Unreal · Resolume · Ableton · Video · Nettverk',
      },
      {
        label: 'Språk',
        items: 'Français · English · Norsk · Português',
      },
    ],
    cvLine: 'Full CV og referanser på forespørsel:',
  },
};
