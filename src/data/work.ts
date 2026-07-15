import type { Locale } from '../i18n/ui';

/**
 * Case study data. Copy is deliberately short and factual — venue, role,
 * type of show. Depth (numbers, anecdotes, real previz frames) is added
 * only when Dorian provides and validates it. Nothing invented.
 */

export interface CaseCopy {
  title: string;
  context: string;
  meta: string;
  paragraphs: string[];
}

export interface WorkEntry {
  slug: string;
  /** Folder name under src/assets/portfolio/ — placeholder images for now */
  image: string;
  imageAlt: string;
  /** Show the Imaginé/Réel module (Dansens Hus designs with previz) */
  hasPreviz: boolean;
  copy: Record<Locale, CaseCopy>;
}

export const work: WorkEntry[] = [
  {
    slug: 'queer-the-wack',
    image: 'special',
    imageAlt: 'Stage lighting placeholder image',
    hasPreviz: true,
    copy: {
      en: {
        title: 'Queer the Wack',
        context: 'Dansens Hus, Oslo — design, previz and operation',
        meta: 'Dansens Hus, Oslo · Lighting design, previz, operation',
        paragraphs: [
          'A night at Dansens Hus where performance and party share the same floor, and the audience is part of the picture. The light had to hold both: a show you watch, and a room you are inside of.',
          'The design was drawn in 3D before load-in, then programmed and operated live. What the house approved on screen is what the room got on the night.',
        ],
      },
      fr: {
        title: 'Queer the Wack',
        context: 'Dansens Hus, Oslo — conception, previz et opération',
        meta: 'Dansens Hus, Oslo · Conception lumière, previz, opération',
        paragraphs: [
          "Une soirée à Dansens Hus où la performance et la fête partagent le même sol, et où le public fait partie de l'image. La lumière devait tenir les deux : un show que l'on regarde, et une salle dans laquelle on est.",
          "Le design a été dessiné en 3D avant le montage, puis programmé et opéré en direct. Ce que la maison a validé à l'écran est ce que la salle a reçu le soir même.",
        ],
      },
      no: {
        title: 'Queer the Wack',
        context: 'Dansens Hus, Oslo — design, previz og kjøring',
        meta: 'Dansens Hus, Oslo · Lysdesign, previz, kjøring',
        paragraphs: [
          'En kveld på Dansens Hus der forestilling og fest deler samme gulv, og publikum er en del av bildet. Lyset måtte holde begge deler: et show du ser på, og et rom du er inne i.',
          'Designet ble tegnet i 3D før opprigg, deretter programmert og kjørt live. Det huset godkjente på skjermen, var det rommet fikk samme kveld.',
        ],
      },
    },
  },
  {
    slug: 'roller-disco',
    image: 'dance',
    imageAlt: 'Dance floor lighting placeholder image',
    hasPreviz: true,
    copy: {
      en: {
        title: 'Roller Disco',
        context: 'Dansens Hus, Oslo — design, previz and operation',
        meta: 'Dansens Hus, Oslo · Lighting design, previz, operation',
        paragraphs: [
          'A dance house turned into a roller rink. No front row, no fixed stage — the audience is the show, moving in circles, and the light has to move with them.',
          'Designed in previz first, so the house could see the rink before a single fixture went up. Then programmed and operated live, reading the floor all night.',
        ],
      },
      fr: {
        title: 'Roller Disco',
        context: 'Dansens Hus, Oslo — conception, previz et opération',
        meta: 'Dansens Hus, Oslo · Conception lumière, previz, opération',
        paragraphs: [
          "Une maison de la danse transformée en piste de roller. Pas de premier rang, pas de scène fixe — le public est le show, il tourne, et la lumière doit tourner avec lui.",
          "Conçu d'abord en previz, pour que la maison voie la piste avant qu'un seul projecteur soit accroché. Puis programmé et opéré en direct, en lisant la piste toute la soirée.",
        ],
      },
      no: {
        title: 'Roller Disco',
        context: 'Dansens Hus, Oslo — design, previz og kjøring',
        meta: 'Dansens Hus, Oslo · Lysdesign, previz, kjøring',
        paragraphs: [
          'Et dansehus gjort om til rulleskøytebane. Ingen første rad, ingen fast scene — publikum er showet, i sirkler, og lyset må bevege seg med dem.',
          'Designet først i previz, slik at huset kunne se banen før en eneste lampe ble hengt opp. Deretter programmert og kjørt live, med blikket på gulvet hele kvelden.',
        ],
      },
    },
  },
  {
    slug: 'soul-sessions',
    image: 'artist',
    imageAlt: 'Concert lighting placeholder image',
    hasPreviz: false,
    copy: {
      en: {
        title: 'Soul Sessions',
        context: 'Dansens Hus, Oslo — lighting design',
        meta: 'Dansens Hus, Oslo · Lighting design',
        paragraphs: [
          'A music night at Dansens Hus built around voices and presence. The kind of show where light works close to the skin: warm, patient, never louder than the song.',
          'Lighting design shaped with the house and the artists — portraits first, effects only where the music asks for them.',
        ],
      },
      fr: {
        title: 'Soul Sessions',
        context: 'Dansens Hus, Oslo — conception lumière',
        meta: 'Dansens Hus, Oslo · Conception lumière',
        paragraphs: [
          "Une soirée musicale à Dansens Hus construite autour des voix et de la présence. Le genre de show où la lumière travaille près de la peau : chaude, patiente, jamais plus forte que la chanson.",
          'Une conception façonnée avec la maison et les artistes — le portrait d’abord, les effets seulement là où la musique les demande.',
        ],
      },
      no: {
        title: 'Soul Sessions',
        context: 'Dansens Hus, Oslo — lysdesign',
        meta: 'Dansens Hus, Oslo · Lysdesign',
        paragraphs: [
          'En musikkveld på Dansens Hus bygget rundt stemmer og nærvær. Den typen show der lyset jobber tett på huden: varmt, tålmodig, aldri høyere enn sangen.',
          'Lysdesign formet sammen med huset og artistene — portrettet først, effekter bare der musikken ber om dem.',
        ],
      },
    },
  },
  {
    slug: 'kaleidoscope-shi-pratt',
    image: 'festival',
    imageAlt: 'Touring show lighting placeholder image',
    hasPreviz: false,
    copy: {
      en: {
        title: 'Kaleidoscope — Shi Pratt',
        context: 'Norwegian tour — design and operation',
        meta: 'Norway tour · Lighting design and operation',
        paragraphs: [
          'A tour across Norwegian venues, where every room changes and the piece cannot. Design and operation travelled together: one person responsible for the picture, from the drawing to the desk.',
          'The work is the same everywhere — keep the identity of the show intact while the walls, the rig and the get-in time keep changing.',
        ],
      },
      fr: {
        title: 'Kaleidoscope — Shi Pratt',
        context: 'Tournée norvégienne — conception et opération',
        meta: 'Tournée en Norvège · Conception lumière et opération',
        paragraphs: [
          "Une tournée dans les salles norvégiennes, où chaque salle change et où la pièce, elle, ne doit pas changer. Conception et opération ont voyagé ensemble : une seule personne responsable de l'image, du dessin à la console.",
          "Le travail est le même partout : garder l'identité du spectacle intacte pendant que les murs, le kit et le temps de montage changent sans arrêt.",
        ],
      },
      no: {
        title: 'Kaleidoscope — Shi Pratt',
        context: 'Norgesturné — design og kjøring',
        meta: 'Norgesturné · Lysdesign og kjøring',
        paragraphs: [
          'En turné gjennom norske scener, der hvert rom endrer seg og forestillingen ikke kan gjøre det. Design og kjøring reiste sammen: én person med ansvar for bildet, fra tegning til lyspult.',
          'Jobben er den samme overalt — holde identiteten til showet intakt mens veggene, riggen og opprigg-tiden stadig endrer seg.',
        ],
      },
    },
  },
  {
    slug: 'panta-rei',
    image: 'unreal',
    imageAlt: 'Contemporary dance lighting placeholder image',
    hasPreviz: false,
    copy: {
      en: {
        title: 'Panta Rei Danseteater',
        context: 'Oslo — lighting for contemporary dance',
        meta: 'Oslo · Contemporary dance lighting',
        paragraphs: [
          'Light for bodies, silence and timing. In dance, a cue is part of the choreography — half a second early and the moment is gone.',
          'Cues built inside the rehearsal process, close to the movement, so the light breathes with the performers instead of decorating them.',
        ],
      },
      fr: {
        title: 'Panta Rei Danseteater',
        context: 'Oslo — lumière pour la danse contemporaine',
        meta: 'Oslo · Lumière pour la danse contemporaine',
        paragraphs: [
          'De la lumière pour des corps, du silence et du tempo. En danse, un cue fait partie de la chorégraphie — une demi-seconde trop tôt et le moment est perdu.',
          'Des cues construits au cœur des répétitions, au plus près du mouvement, pour que la lumière respire avec les interprètes au lieu de les décorer.',
        ],
      },
      no: {
        title: 'Panta Rei Danseteater',
        context: 'Oslo — lys for samtidsdans',
        meta: 'Oslo · Lys for samtidsdans',
        paragraphs: [
          'Lys for kropper, stillhet og timing. I dans er et lyskue en del av koreografien — et halvt sekund for tidlig, og øyeblikket er borte.',
          'Kuer bygget inne i prøveprosessen, tett på bevegelsen, slik at lyset puster med utøverne i stedet for å pynte dem.',
        ],
      },
    },
  },
  {
    slug: 'touring-france',
    image: 'touring',
    imageAlt: 'Front of house view of a touring concert placeholder image',
    hasPreviz: false,
    copy: {
      en: {
        title: 'Touring years — France and Europe',
        context: 'JAIN · Tim Dup · Les Tambours du Bronx · Wejna — 2008–2021',
        meta: 'France, Switzerland, Luxembourg, England · 2008–2021',
        paragraphs: [
          'Thirteen years of touring: JAIN, Tim Dup, Les Tambours du Bronx, By The Fall, Lafayette Regency, and the dance piece "Traversée" with Wejna. Rigging, design, programming, operating — every job on the chain, learned from the bottom of the truck.',
          'Touring teaches one thing above all: the file has to be clear when time disappears. The show must feel like the same artist in every room, on whatever rig is waiting there.',
        ],
      },
      fr: {
        title: 'Les années de tournée — France et Europe',
        context: 'JAIN · Tim Dup · Les Tambours du Bronx · Wejna — 2008–2021',
        meta: 'France, Suisse, Luxembourg, Angleterre · 2008–2021',
        paragraphs: [
          'Treize ans de tournée : JAIN, Tim Dup, Les Tambours du Bronx, By The Fall, Lafayette Regency, et la pièce « Traversée » de Wejna. Accroche, conception, programmation, pupitre — tous les postes de la chaîne, appris depuis le fond du camion.',
          "La tournée apprend une chose avant tout : le fichier doit rester lisible quand le temps disparaît. Le show doit ressembler au même artiste dans chaque salle, sur le kit qui s'y trouve.",
        ],
      },
      no: {
        title: 'Turnéårene — Frankrike og Europa',
        context: 'JAIN · Tim Dup · Les Tambours du Bronx · Wejna — 2008–2021',
        meta: 'Frankrike, Sveits, Luxembourg, England · 2008–2021',
        paragraphs: [
          'Tretten år på turné: JAIN, Tim Dup, Les Tambours du Bronx, By The Fall, Lafayette Regency, og danseforestillingen «Traversée» med Wejna. Rigging, design, programmering, kjøring — hvert ledd i kjeden, lært fra bunnen av lastebilen.',
          'Turné lærer deg én ting fremfor alt: fila må være tydelig når tiden forsvinner. Showet skal kjennes som samme artist i hvert rom, på den riggen som venter der.',
        ],
      },
    },
  },
];

/** UI strings for case pages and the Imaginé/Réel module */
export const caseUi: Record<
  Locale,
  {
    back: string;
    imagined: string;
    real: string;
    dragHint: string;
    placeholderNote: string;
    ctaTitle: string;
    ctaButton: string;
    placeholderPhoto: string;
  }
> = {
  en: {
    back: 'Back to the room',
    imagined: 'Imagined',
    real: 'Real',
    dragHint: 'Drag to compare the 3D previz with the night itself',
    placeholderNote: 'Placeholder frames — the real previz and show photos are on their way.',
    ctaTitle: 'And if it was your music?',
    ctaButton: 'Send me one track',
    placeholderPhoto: 'Placeholder image — production photos coming.',
  },
  fr: {
    back: 'Retour à la salle',
    imagined: 'Imaginé',
    real: 'Réel',
    dragHint: 'Glisse pour comparer la previz 3D et le soir même',
    placeholderNote: 'Images provisoires — la vraie previz et les photos du show arrivent.',
    ctaTitle: "Et si c'était ta musique ?",
    ctaButton: 'Envoie-moi un morceau',
    placeholderPhoto: "Image provisoire — les photos de production arrivent.",
  },
  no: {
    back: 'Tilbake til salen',
    imagined: 'Tenkt',
    real: 'Ekte',
    dragHint: 'Dra for å sammenligne 3D-previzen med selve kvelden',
    placeholderNote: 'Midlertidige bilder — ekte previz og showbilder er på vei.',
    ctaTitle: 'Og hvis det var din musikk?',
    ctaButton: 'Send meg et spor',
    placeholderPhoto: 'Midlertidig bilde — produksjonsbilder kommer.',
  },
};
