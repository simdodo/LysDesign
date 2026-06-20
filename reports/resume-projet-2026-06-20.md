# Résumé du projet De Freitas Lys Design

Date du rapport : 20 juin 2026  
Projet : defreitaslysdesign.com  
Stack : Astro statique, déploiement o2switch via upload du contenu de `dist/` dans `public_html`.

---

## 1. État actuel

Le site est en production, validé et stable.

Dernier commit :

- `881cc31` — `Add remote showfile support service page`

Dernier tag production :

- `production-cinematic-home-2026-06-19`

Statut technique récent :

- Build Astro OK.
- `astro check` OK.
- 20 pages générées après ajout de la page Remote Showfile.
- Sitemap généré correctement.
- `/design-lab/` reste privée : `noindex,nofollow`, absente du sitemap.
- `/home-v2/` a été supprimée après remplacement de la homepage publique.
- FormSubmit configuré avec `hello@defreitaslysdesign.com`.
- GA4 et consentement cookies en place.
- o2switch compatible en statique.

---

## 2. Architecture actuelle

Structure principale :

```text
src/
  assets/
  components/
  content/
    portfolio/
  data/
    service-pages.js
  layouts/
  pages/
    index.astro
    services.astro
    services/[slug].astro
    portfolio.astro
    portfolio/[slug].astro
    about.astro
    contact.astro
    design-lab.astro
  styles/
    tokens.css
    base.css
    layout.css
    portfolio.css
    services.css
    forms.css
    global.css
public/
  .htaccess
  favicon / app icons
  robots.txt
```

Le site reste statique :

- Pas de SSR.
- Pas d’API Astro.
- Pas de serveur Node.
- Pas de dépendance lourde ajoutée.
- Déploiement par upload complet du contenu de `dist/`.

---

## 3. Pages publiques

Pages principales :

- `/`
- `/portfolio/`
- `/services/`
- `/about/`
- `/contact/`
- `/lighting-designer-oslo/`

Pages portfolio :

- `/portfolio/touring-lighting-showfiles/`
- `/portfolio/contemporary-dance-lighting/`
- `/portfolio/festival-venue-adaptation/`
- `/portfolio/visual-direction/`
- `/portfolio/unreal-visualization/`
- `/portfolio/special-projects/`

Pages services :

- `/services/lighting-design/`
- `/services/lighting-programming/`
- `/services/touring-showfiles/`
- `/services/festival-lighting/`
- `/services/dance-theatre-lighting/`
- `/services/unreal-previs/`
- `/services/remote-showfile-support/`

Page privée :

- `/design-lab/` — page expérimentale privée, `noindex,nofollow`, exclue du sitemap.

---

## 4. Travail design réalisé

Le site est passé d’un portfolio sombre simple à une direction plus spécifique au lighting design.

Éléments mis en place :

- Homepage cinématique publique avec ligne forte : `LIGHT THAT SURVIVES THE ROOM.`
- Direction artistique blackout / fade up.
- Langage de cue et showfile utilisé de manière plus structurée.
- Palette contrôlée : noir profond, blanc froid, cyan technique, accents tungsten / violet limités.
- Typographie renforcée : display, body et mono technique.
- Portfolio plus visuel, moins template.
- Cartes et hover states calmés pour éviter l’effet “dark tech interface”.
- Hero responsive corrigé pour éviter les mots coupés sur mobile.
- Favicon et app icons créés pour correspondre à l’identité sombre, technique et premium.
- CSS modularisé : tokens, base, layout, portfolio, services, forms.

---

## 5. Travail contenu / copywriting réalisé

La voix éditoriale a été réalignée vers :

- direct ;
- humble ;
- calme ;
- techniquement crédible ;
- artistique sans être mystique ;
- orientée conditions réelles de production.

Ligne centrale conservée :

> LIGHT THAT SURVIVES THE ROOM.

Positionnement clarifié :

> Lighting design, GrandMA programming and FOH operation for concerts, dance and festivals — shaped around the room, the rig and the time available.

Motto interne utilisé dans la direction copy :

```text
Fast programming.
Calm decisions.
Readable light.
Real rooms.
```

Pages retravaillées :

- Homepage.
- About.
- Services.
- Portfolio landing.
- Études de cas portfolio.
- Contact.
- Pages services détaillées.

Éléments nettoyés :

- Suppression ou réduction du wording agency.
- Suppression de phrases placeholder visibles.
- Suppression de wording trop admin comme “Current public image shows…”.
- Remplacement de labels trop génériques.
- Pas de faux clients, faux chiffres, faux témoignages ou faux crédits.

---

## 6. Portfolio

Le portfolio a été construit puis enrichi autour de 6 axes :

- Touring Lighting / Showfiles.
- Contemporary Dance Lighting.
- Festival / Venue Adaptation.
- Visual Direction.
- Unreal Visualization.
- Special Projects.

Travail réalisé :

- Données portfolio structurées.
- Images réelles intégrées.
- Pages case study créées.
- Layout case study avec panel technique.
- Sections narratives ajoutées.
- Scaffolding `lightStates` mis en place.
- `LightStateGallery`, `SceneGallery` et systèmes visuels associés ajoutés.
- Nettoyage des textes placeholder.
- Touring light states peuplés avec vraies images `opening`, `build`, `peak`.
- Portfolio rendu plus image-led, moins répétitif, moins “interface tech”.

---

## 7. Services

Page `/services/` transformée en hub de décision.

Ajouts réalisés :

- Bloc “Choose by pressure”.
- Comparaison des services.
- Process global : brief → advance → design/programming → adaptation/show day.
- Pages services détaillées générées depuis `src/data/service-pages.js`.
- Copy orientée production réelle : rig, room, schedule, showfile, FOH, Capture, GrandMA2, MA3 transition support.

Dernier ajout :

- `/services/remote-showfile-support/`
- Offre : `Remote Showfile & Previs Support`
- Cible : artistes, groupes sans LD, LDs débordés, venues, festivals, productions avant répétition.
- Contenu : showfile review, cleanup, busking layout, GrandMA2 base, MA3 transition support, Capture previs, plot drawing, touring adaptation.

---

## 8. Contact / conversion

Page contact construite pour recevoir des briefs de production utiles.

Éléments en place :

- Formulaire HTML statique compatible o2switch.
- FormSubmit activé.
- Email correct : `hello@defreitaslysdesign.com`.
- Ancien email `.design` supprimé.
- Fallback `mailto` visible.
- `_next` configuré vers `/contact/?sent=true`.
- `_subject` présent.
- Honeypot anti-spam présent.
- Message de succès sur `?sent=true`.
- Champs orientés production : type de projet, dates, venue, système/console, brief.

---

## 9. SEO

SEO de base puis SEO production renforcés.

Mis en place :

- Titres et meta descriptions sur les pages principales.
- Canonical URLs.
- Open Graph metadata.
- JSON-LD.
- Sitemap via `@astrojs/sitemap`.
- `robots.txt` valide.
- Domaine configuré : `https://defreitaslysdesign.com`.
- Redirections canonicals HTTP / www vers HTTPS non-www validées en production.
- HSTS actif après confirmation HTTPS.
- CSP en mode `Content-Security-Policy-Report-Only`.
- `/design-lab/` exclue du sitemap et noindex.
- `/home-v2/` supprimée après promotion.

Résultats production reportés :

- PageSpeed mobile : 98.
- Desktop : 100.
- Accessibility : 100.
- Best Practices : 100.
- SEO : 100.
- LCP mobile : environ 2.3s.
- CLS : 0.

---

## 10. Analytics / consentement

Google Analytics 4 ajouté avec consentement.

GA4 ID :

- `G-3SGMFRGL79`

Mis en place :

- Chargement global via Layout.
- Consent Mode : analytics denied par défaut.
- Cookie banner compact.
- Accept / Reject sans dark pattern.
- Persistance localStorage : `dfld_cookie_consent`.
- Lien footer “Cookie settings”.
- Tracking conversion consent-aware.

Événements GA4 ajoutés :

- `cta_start_project`
- `cta_view_work`
- `contact_form_submit`
- `contact_email_click`
- `social_instagram_click`
- `social_youtube_click`
- `portfolio_case_study_click`

---

## 11. Déploiement o2switch

Le site est préparé pour o2switch en statique.

Réalisé :

- `public/.htaccess` ajouté.
- Compression et règles cache prudentes.
- Pas de rewrite SPA vers `index.html`.
- Pas de SSR / serverless.
- Pas de Netlify Forms.
- Pas d’API route Astro.
- Déploiement : upload du contenu de `dist/`, pas du dossier `dist` lui-même.

Checklist de déploiement utilisée :

1. `npm.cmd run build`
2. Upload de tout le contenu de `dist/` vers `public_html`
3. Inclure fichiers cachés comme `.htaccess`
4. Vider XtremCache
5. Hard refresh / navigation privée
6. Vérifier homepage, portfolio, contact, sitemap, robots, analytics/cookies

---

## 12. Validations récurrentes effectuées

Commandes utilisées régulièrement :

```bash
npm.cmd run build
npm.cmd run check
git status --short
```

Contrôles faits à plusieurs étapes :

- Routes principales générées.
- Routes portfolio générées.
- Routes services générées.
- Sitemap contient uniquement les URLs publiques.
- `/design-lab/` absent du sitemap.
- `/home-v2/` absent puis supprimé.
- Ancien email `.design` absent de `src` et `dist`.
- FormSubmit inchangé après patches.
- Data-track principaux présents.
- Liens internes cassés : 0 sur audits statiques.
- H1 unique sur pages principales.
- Canonicals corrects.

---

## 13. Commits importants récents

```text
881cc31 Add remote showfile support service page
ed53873 Polish editorial voice and portfolio metadata copy
2ca95ab Align site copy with live-room positioning
e014ba1 Replace homepage with cinematic home v2
47fb5a4 Prepare home v2 for public replacement
82dd800 Harden private home v2 candidate
f900818 Align hero image preload with optimized asset
08142ed Fix SEO accessibility and Lighthouse cleanup items
f9a1cc1 Add private cinematic home v2 prototype
24d9fba Improve mobile conversion flow
f56927c Add case study narrative and light state scaffolding
d5b4aee Move residual responsive CSS into style modules
8add093 Modularize global CSS into tokens, base, layout, portfolio, services, forms
8377771 Add private design lab prototypes
792a344 Refine portfolio card layout and motion
e09299c Add Astro check validation baseline
04d9453 Fix empty Scope section on all service pages
ae06cc0 Add cinematic scene system, favicon set, and site-wide component updates
4da3a00 Add consent-aware GA4 conversion event tracking
29cf5f2 Fix contact email domain
ca29e79 Clean placeholder portfolio case study copy
2817223 Add o2switch static hosting htaccess
4cb521a Extract homepage sections and improve cinematic hero image
db48fd6 Validate cinematic Astro portfolio baseline
```

---

## 14. Risques restants / points à surveiller

À surveiller après upload production :

- Search Console : indexation, canonical détecté, couverture sitemap.
- GA4 : confirmer que les événements remontent après acceptation cookies.
- FormSubmit : envoyer régulièrement un vrai message test.
- Portfolio : enrichir les case studies uniquement quand de vraies images et infos sont publiables.
- CSP : passer de Report-Only à enforcement uniquement après observation des violations.
- Images : continuer à éviter les images lourdes au-dessus de la fold.

---

## 15. Roadmap recommandée

Court terme :

- Uploader le dernier `dist/` après chaque build validé.
- Tester `/services/remote-showfile-support/` en production.
- Demander indexation Search Console pour la nouvelle page service.
- Vérifier events GA4 sur la nouvelle page.

Moyen terme :

- Ajouter plus de vraies images portfolio si disponibles.
- Continuer les `lightStates` sur festival, dance, visual direction, unreal et special projects.
- Ajouter liens contextuels depuis case studies vers la nouvelle page Remote Showfile si pertinent.

Plus tard :

- Durcir CSP si aucune violation utile n’apparaît.
- Optimiser CSS si PageSpeed baisse.
- Créer d’autres pages service seulement si elles répondent à une vraie demande commerciale.

---

## 16. Résumé final

Le projet est passé d’un portfolio Astro existant à un site statique production-ready, plus spécifique, plus crédible et plus aligné avec le travail réel de Dorian De Freitas : lighting design, GrandMA programming, FOH operation, touring workflows, dance, festivals, venues, previs et support showfile.

Le site reste rapide, statique, SEO-safe, compatible o2switch, sans dépendances inutiles, avec une architecture maintenant plus modulaire et maintenable.
