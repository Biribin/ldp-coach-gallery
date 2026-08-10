# Galerie de 25 styles de design, une seule page d'accueil

**[Voir la galerie en ligne](https://biribin.github.io/ldp-coach-gallery/)**

Un même brief, vingt-cinq exécutions visuelles. Chaque page est une page d'accueil complète
pour la même coach sportive, avec le même contenu et le même parcours, et chacune est
rendue dans un style de design nommé et différent.

La coach est **fictive**. C'est un exercice de direction artistique, pas un site client :
aucune donnée réelle, aucune adresse, aucun numéro.

## Pourquoi cet exercice

La question à laquelle il répond est celle que pose un client au moment de choisir :
« à quoi ça va ressembler ? » Montrer vingt-cinq réponses au même besoin est plus utile
qu'un long argumentaire, et ça oblige à savoir ce qui distingue vraiment un style d'un
autre. Si deux pages se ressemblent, l'exercice est raté.

Le contrat que chaque page doit tenir : une seule page à défilement continu, avec un
enchaînement hero, présentation de la coach, méthode, offres, bénéfices, résultats, appel
à l'action, contact. Ce qui change d'une page à l'autre, c'est la typographie, la palette,
la densité, le rythme et le mouvement.

## Les 25 styles

| | | |
|---|---|---|
| [Art déco](https://biribin.github.io/ldp-coach-gallery/art-deco/) | [Bauhaus](https://biribin.github.io/ldp-coach-gallery/bauhaus/) | [Corporate](https://biribin.github.io/ldp-coach-gallery/corporate-professional/) |
| [Dark mode first](https://biribin.github.io/ldp-coach-gallery/dark-mode-first/) | [Éditorial](https://biribin.github.io/ldp-coach-gallery/editorial/) | [Flat](https://biribin.github.io/ldp-coach-gallery/flat/) |
| [Glassmorphisme](https://biribin.github.io/ldp-coach-gallery/glassmorphism/) | [Dégradés modernes](https://biribin.github.io/ldp-coach-gallery/gradient-modern/) | [Japandi](https://biribin.github.io/ldp-coach-gallery/japandi/) |
| [Kinétique](https://biribin.github.io/ldp-coach-gallery/kinetic/) | [Luxe minimal](https://biribin.github.io/ldp-coach-gallery/luxury-minimal/) | [Material](https://biribin.github.io/ldp-coach-gallery/material/) |
| [Metropolitan](https://biribin.github.io/ldp-coach-gallery/metropolitan/) | [Minimal](https://biribin.github.io/ldp-coach-gallery/minimal/) | [Moderniste](https://biribin.github.io/ldp-coach-gallery/modernist/) |
| [Monochrome](https://biribin.github.io/ldp-coach-gallery/monochromatic/) | [Neo geo](https://biribin.github.io/ldp-coach-gallery/neo-geo/) | [Néobrutaliste](https://biribin.github.io/ldp-coach-gallery/neobrutalist/) |
| [Neumorphique](https://biribin.github.io/ldp-coach-gallery/neumorphic/) | [Organique](https://biribin.github.io/ldp-coach-gallery/organic-fluid/) | [Rétrofuturiste](https://biribin.github.io/ldp-coach-gallery/retro-futuristic/) |
| [Scandinave](https://biribin.github.io/ldp-coach-gallery/scandinavian/) | [Suisse international](https://biribin.github.io/ldp-coach-gallery/swiss-international/) | [Tech forward](https://biribin.github.io/ldp-coach-gallery/tech-forward/) |
| [Typographique](https://biribin.github.io/ldp-coach-gallery/typography-first/) | | |

## Comment c'est fait

Next.js en export statique, Tailwind, publié sur GitHub Pages par une GitHub Action à
chaque poussée sur `main`. Le site est entièrement statique : pas de serveur, pas de base,
pas de dépendance à l'exécution.

Le `basePath` est conditionné par une variable d'environnement posée par le workflow de
déploiement, pour que les liens et les ressources résolvent sous le sous-chemin
`/ldp-coach-gallery/` en production tout en gardant `next dev` fonctionnel à la racine.

## Comment j'ai travaillé

Je ne suis pas développeur front. Ces pages ont été écrites par des agents de code, sous
ma spécification, et mon travail a porté sur trois choses : définir le brief de chaque
style assez précisément pour qu'il ne ressemble à aucun autre, relire le rendu page par
page, et faire corriger ce qui ne tenait pas. Le cadrage, les briefs de design et les
revues de chaque phase sont dans [`.planning/`](.planning/).

C'est aussi pour ça que le dépôt est public : le processus est aussi intéressant que le
résultat.

## En local

```bash
cd ldp-coach-app
npm ci
npm run dev
```
