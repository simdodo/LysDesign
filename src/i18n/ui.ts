export const locales = ['en', 'fr', 'no'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  no: 'Norsk',
};

export function pathForLocale(locale: Locale, path = '/'): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if ((locales as readonly string[]).includes(first)) return first as Locale;
  return defaultLocale;
}

interface HomeCopy {
  metaTitle: string;
  metaDescription: string;
  houseLine: string;
  heroLabel: string;
  heroTitleA: string;
  heroTitleB: string;
  heroSub: string;
  scrollHint: string;
  chapters: {
    id: string;
    light: string;
    label: string;
    title: string;
    body: string[];
  }[];
  work: {
    label: string;
    title: string;
    intro: string;
    touringLabel: string;
    touring: string;
    roomsLabel: string;
    rooms: string;
    proofNote: string;
  };
  busking: {
    label: string;
    title: string;
    body: string[];
    watch: string;
    watchCta: string;
  };
  song: {
    label: string;
    title: string;
    body: string;
    promise: string;
    placeholderLink: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderNote: string;
    submit: string;
    directLine: string;
  };
  footer: {
    role: string;
    based: string;
    watch: string;
  };
}

export const home: Record<Locale, HomeCopy> = {
  en: {
    metaTitle: 'Dorian De Freitas — Lighting designer, GrandMA programmer, FOH operator · Oslo',
    metaDescription:
      'Lighting design, GrandMA programming and FOH operation for concerts, dance and festivals. Send one track, get a light moodboard back. Based in Oslo, working internationally.',
    houseLine: 'Oslo — house lights down.',
    heroLabel: 'De Freitas Lysdesign',
    heroTitleA: 'Light that listens.',
    heroTitleB: 'Music you can see.',
    heroSub:
      'Lighting design, GrandMA programming and FOH operation for concerts, dance and festivals — shaped around the room, the rig and the time available.',
    scrollHint: 'The show starts below',
    chapters: [
      {
        id: 'the-wait',
        light: 'wait',
        label: 'Chapter one',
        title: 'The wait',
        body: [
          'Your audience starts feeling something before you play a single note. The dark, the haze, one warm point of light on a mic stand.',
          'That minute belongs to the light. I have spent eighteen years learning what to do with it.',
        ],
      },
      {
        id: 'the-first-note',
        light: 'impact',
        label: 'Chapter two',
        title: 'The first note',
        body: [
          'When the first note lands, light is half of what people will remember.',
          'My job is simple to say and hard to do: make sure they remember your show — in every room, on every rig, every night of the tour.',
        ],
      },
      {
        id: 'the-portrait',
        light: 'portrait',
        label: 'Chapter three',
        title: 'The portrait',
        body: [
          'One face, lit right, can hold a full room silent.',
          'Light is not decoration on top of your music. It is what your music looks like.',
        ],
      },
    ],
    work: {
      label: 'The finale — the proof',
      title: 'Seen before it exists.',
      intro:
        'I draw the show in 3D before load-in, light by light. Then I program it, and I operate it from front of house. What you approve on screen is what your audience gets in the room.',
      touringLabel: 'Touring history',
      touring:
        'JAIN · Tim Dup · Les Tambours du Bronx · Wejna — France, Switzerland, Luxembourg, England, 2008–2021.',
      roomsLabel: 'Rooms I work in',
      rooms:
        'Rockefeller · Sentrum Scene · John Dee · Parkteatret · Blå · Chateau Neuf · Vulkan · Sentralen · Dansens Hus — Oslo.',
      proofNote: 'Case studies with previz-versus-stage comparisons are being assembled now.',
    },
    busking: {
      label: 'The encore — played live',
      title: 'No rehearsal. No net.',
      body: [
        'Not every show can be drawn in advance. Festival changeovers, support slots, club nights: the band starts, and the light has to answer — live, by hand, song after song.',
        'The trade has a word for it: busking. Eighteen years of rooms taught me to read a band the way a rhythm section reads a singer. On those nights the console is an instrument, and I play it.',
      ],
      watch: 'Full concerts, lit live and filmed from front of house — unedited:',
      watchCta: 'Watch on YouTube',
    },
    song: {
      label: 'Your turn',
      title: 'And if it was your music?',
      body: 'Send me one track — a link is enough. I listen, then you get a light moodboard back: what I would see, in what texture, in what kind of dark.',
      promise: 'It takes you a minute. It commits neither of us to anything.',
      placeholderLink: 'Spotify, YouTube or SoundCloud link',
      placeholderName: 'Your name or artist name',
      placeholderEmail: 'Where I can reach you',
      placeholderNote: 'Anything I should know — optional',
      submit: 'Send the track',
      directLine: 'No robot, no automatic quote. I do the listening. Or simply write:',
    },
    footer: {
      role: 'Lighting designer · GrandMA programmer · FOH operator',
      based: 'Based in Oslo — working wherever the show is.',
      watch: 'Full shows, filmed from front of house:',
    },
  },
  fr: {
    metaTitle: 'Dorian De Freitas — Concepteur lumière, programmeur GrandMA, opérateur façade · Oslo',
    metaDescription:
      'Conception lumière, programmation GrandMA et opération façade pour concerts, danse et festivals. Envoyez un morceau, recevez un moodboard lumière. Basé à Oslo, disponible partout.',
    houseLine: 'Oslo — le noir se fait dans la salle.',
    heroLabel: 'De Freitas Lysdesign',
    heroTitleA: 'Une lumière qui écoute.',
    heroTitleB: "Une musique qu'on voit.",
    heroSub:
      'Conception lumière, programmation GrandMA et opération façade pour concerts, danse et festivals — pensées pour la salle, le kit et le temps réellement disponible.',
    scrollHint: 'Le show commence plus bas',
    chapters: [
      {
        id: 'l-attente',
        light: 'wait',
        label: 'Chapitre un',
        title: "L'attente",
        body: [
          'Ton public ressent déjà quelque chose avant la première note. Le noir, la brume, un point chaud sur un pied de micro.',
          "Cette minute-là appartient à la lumière. J'ai passé dix-huit ans à apprendre quoi en faire.",
        ],
      },
      {
        id: 'la-premiere-note',
        light: 'impact',
        label: 'Chapitre deux',
        title: 'La première note',
        body: [
          'Quand la première note tombe, la lumière est la moitié de ce que les gens retiendront.',
          'Mon travail est simple à dire et difficile à faire : que l’on se souvienne de ton show — dans chaque salle, sur chaque kit, chaque soir de tournée.',
        ],
      },
      {
        id: 'le-portrait',
        light: 'portrait',
        label: 'Chapitre trois',
        title: 'Le portrait',
        body: [
          'Un visage, bien éclairé, peut tenir une salle entière en silence.',
          "La lumière n'est pas une décoration posée sur ta musique. C'est le visage de ta musique.",
        ],
      },
    ],
    work: {
      label: 'Le final — la preuve',
      title: "Vu avant d'exister.",
      intro:
        "Je dessine le show en 3D avant le montage, lumière par lumière. Puis je le programme, et je l'opère depuis la façade. Ce que tu valides à l'écran est ce que ton public reçoit dans la salle.",
      touringLabel: 'Historique de tournées',
      touring:
        'JAIN · Tim Dup · Les Tambours du Bronx · Wejna — France, Suisse, Luxembourg, Angleterre, 2008–2021.',
      roomsLabel: 'Salles où je travaille',
      rooms:
        'Rockefeller · Sentrum Scene · John Dee · Parkteatret · Blå · Chateau Neuf · Vulkan · Sentralen · Dansens Hus — Oslo.',
      proofNote: 'Les études de cas avec comparaison previz / scène sont en cours de montage.',
    },
    busking: {
      label: 'Le rappel — joué en direct',
      title: 'Sans répétition. Sans filet.',
      body: [
        "Tous les shows ne peuvent pas être dessinés à l'avance. Changements de plateau en festival, premières parties, soirées club : le groupe démarre, et la lumière doit répondre — en direct, à la main, morceau après morceau.",
        "Le métier a un mot pour ça : le busking. Dix-huit ans de salles m'ont appris à lire un groupe comme une section rythmique lit un chanteur. Ces soirs-là, la console est un instrument, et j'en joue.",
      ],
      watch: 'Des concerts entiers, éclairés en direct et filmés depuis la façade — sans montage :',
      watchCta: 'Regarder sur YouTube',
    },
    song: {
      label: 'À toi',
      title: "Et si c'était ta musique ?",
      body: "Envoie-moi un morceau — un lien suffit. J'écoute, puis tu reçois un moodboard lumière : ce que je verrais, dans quelle matière, dans quel noir.",
      promise: "Ça te prend une minute. Ça n'engage ni toi ni moi.",
      placeholderLink: 'Lien Spotify, YouTube ou SoundCloud',
      placeholderName: "Ton nom ou nom d'artiste",
      placeholderEmail: 'Où te répondre',
      placeholderNote: 'Ce que je devrais savoir — optionnel',
      submit: 'Envoyer le morceau',
      directLine: "Pas de robot, pas de devis automatique. C'est moi qui écoute. Ou simplement :",
    },
    footer: {
      role: 'Concepteur lumière · Programmeur GrandMA · Opérateur façade',
      based: 'Basé à Oslo — disponible partout où le show se joue.',
      watch: 'Des concerts entiers, filmés depuis la façade :',
    },
  },
  no: {
    metaTitle: 'Dorian De Freitas — Lysdesigner, GrandMA-programmerer, FOH-operatør · Oslo',
    metaDescription:
      'Lysdesign, GrandMA-programmering og FOH-kjøring for konserter, dans og festivaler. Send et spor, få et lys-moodboard tilbake. Basert i Oslo, jobber internasjonalt.',
    houseLine: 'Oslo — lyset i salen dempes.',
    heroLabel: 'De Freitas Lysdesign',
    heroTitleA: 'Lys som lytter.',
    heroTitleB: 'Musikk du kan se.',
    heroSub:
      'Lysdesign, GrandMA-programmering og FOH-kjøring for konserter, dans og festivaler — formet etter rommet, riggen og den tilgjengelige tiden.',
    scrollHint: 'Showet starter lenger ned',
    chapters: [
      {
        id: 'ventetiden',
        light: 'wait',
        label: 'Kapittel én',
        title: 'Ventetiden',
        body: [
          'Publikum føler allerede noe før du spiller en eneste tone. Mørket, disen, et varmt lyspunkt på et mikrofonstativ.',
          'Det minuttet tilhører lyset. Jeg har brukt atten år på å lære hva jeg skal gjøre med det.',
        ],
      },
      {
        id: 'forste-tone',
        light: 'impact',
        label: 'Kapittel to',
        title: 'Første tone',
        body: [
          'Når første tone treffer, er lyset halvparten av det folk kommer til å huske.',
          'Jobben min er enkel å beskrive, men vanskelig å gjøre: å sørge for at de husker showet ditt — i hvert rom, på hver rigg, hver kveld på turné.',
        ],
      },
      {
        id: 'portrettet',
        light: 'portrait',
        label: 'Kapittel tre',
        title: 'Portrettet',
        body: [
          'Et ansikt, riktig belyst, kan holde en hel sal stille.',
          'Lys er ikke pynt på toppen av musikken din. Det er slik musikken din ser ut.',
        ],
      },
    ],
    work: {
      label: 'Finalen — beviset',
      title: 'Sett før det finnes.',
      intro:
        'Jeg tegner showet i 3D før opprigg, lys for lys. Så programmerer jeg det, og kjører det fra FOH. Det du godkjenner på skjermen er det publikum får i salen.',
      touringLabel: 'Turnéhistorikk',
      touring:
        'JAIN · Tim Dup · Les Tambours du Bronx · Wejna — Frankrike, Sveits, Luxembourg, England, 2008–2021.',
      roomsLabel: 'Rom jeg jobber i',
      rooms:
        'Rockefeller · Sentrum Scene · John Dee · Parkteatret · Blå · Chateau Neuf · Vulkan · Sentralen · Dansens Hus — Oslo.',
      proofNote: 'Casestudier med previz-mot-scene-sammenligninger settes sammen nå.',
    },
    busking: {
      label: 'Ekstranummeret — spilt live',
      title: 'Ingen prøve. Ikke noe sikkerhetsnett.',
      body: [
        'Ikke alle show kan tegnes på forhånd. Scenebytter på festivaler, support-sett, klubbkvelder: bandet starter, og lyset må svare — live, for hånd, låt etter låt.',
        'Faget har et ord for det: busking. Atten år med rom har lært meg å lese et band slik et komp leser en vokalist. De kveldene er lyspulten et instrument, og jeg spiller på det.',
      ],
      watch: 'Hele konserter, lyssatt live og filmet fra FOH — uredigert:',
      watchCta: 'Se på YouTube',
    },
    song: {
      label: 'Din tur',
      title: 'Og hva om det var din musikk?',
      body: 'Send meg et spor — en lenke holder. Jeg lytter, og du får et lys-moodboard tilbake: hva jeg ville sett, i hvilken tekstur, i hva slags mørke.',
      promise: 'Det tar deg et minutt. Det forplikter ingen av oss til noe.',
      placeholderLink: 'Spotify-, YouTube- eller SoundCloud-lenke',
      placeholderName: 'Navnet ditt eller artistnavn',
      placeholderEmail: 'Hvor jeg kan nå deg',
      placeholderNote: 'Noe jeg bør vite — valgfritt',
      submit: 'Send sporet',
      directLine: 'Ingen robot, ingen automatisk pris. Det er jeg som lytter. Eller bare skriv:',
    },
    footer: {
      role: 'Lysdesigner · GrandMA-programmerer · FOH-operatør',
      based: 'Basert i Oslo — jobber der showet er.',
      watch: 'Hele konserter, filmet fra FOH:',
    },
  },
};

export const nav: Record<
  Locale,
  { home: string; work: string; about: string; send: string }
> = {
  en: { home: 'The room', work: 'The work', about: 'The story', send: 'Send a track' },
  fr: { home: 'La salle', work: 'Les projets', about: "L'histoire", send: 'Envoyer un morceau' },
  no: { home: 'Salen', work: 'Prosjektene', about: 'Historien', send: 'Send et spor' },
};

export const contact = {
  email: 'hello@defreitaslysdesign.com',
  youtube: 'https://www.youtube.com/@dodo_lightd',
  instagram: 'https://www.instagram.com/dodo_lightd',
};
