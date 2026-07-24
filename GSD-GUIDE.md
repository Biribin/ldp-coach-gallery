# Guide GSD (Get Shit Done) — comment bien l'utiliser

> **Installé :** GSD Core `v1.7.0` — pour **Claude Code**, en **global** (dispo dans tous tes projets).
> Emplacement : `~/.claude/` (skills, agents, hooks, statusline).
> **Redémarre Claude Code** une fois pour que tout soit pris en compte.

---

## 1. C'est quoi GSD ?

GSD est un système de **développement piloté par spécifications** (spec-driven) et d'**ingénierie de contexte** pour Claude Code. Le problème qu'il résout : quand une session Claude se remplit, la qualité baisse (le « context rot »). GSD contourne ça en :

- gardant la **session principale légère** ;
- déléguant la recherche, la planification et l'exécution à des **sous-agents** qui démarrent chacun avec un contexte propre (~200k tokens) ;
- conservant l'état du projet dans des **fichiers artefacts** (`STATE.md`, `PROJECT.md`, `ROADMAP.md`, `PLAN.md`, etc.) dans un dossier `.planning/` — ce qui te permet de reprendre le travail après un reset de contexte sans rien perdre.

Le tout tourne autour d'une **boucle en 5 phases**, répétée pour chaque étape (« phase ») du projet.

---

## 2. La boucle en 5 phases (le cœur de GSD)

```
  Discuss  →  Plan  →  Execute  →  Verify  →  Ship
     ↑                                          |
     └──────────  phase suivante  ←─────────────┘
```

| Phase | Commande | Ce qui se passe |
|-------|----------|-----------------|
| 1. **Discuss** | `/gsd-discuss-phase` | On capture les décisions d'implémentation *avant* de planifier (questions ciblées). |
| 2. **Plan** | `/gsd-plan-phase` | Recherche + découpage du travail + vérification que ça tient dans un contexte propre. Produit `PLAN.md`. |
| 3. **Execute** | `/gsd-execute-phase` | Exécution des plans en vagues parallèles ; chaque exécuteur part d'un contexte neuf. |
| 4. **Verify** | `/gsd-verify-work` | On teste ce qui a été construit (UAT), on diagnostique, on génère des correctifs. |
| 5. **Ship** | `/gsd-ship` | Crée la PR GitHub, archive la phase, passe à la suivante. (`gh` CLI requis.) |

**Comment lancer une commande :** tape simplement `/gsd-plan-phase` dans Claude Code, ou demande en langage naturel « lance le skill gsd-plan-phase ».

---

## 3. Démarrage rapide

### A. Nouveau projet (greenfield)
```
/gsd-new-project
```
Pose des questions pour construire le contexte du projet et écrit `PROJECT.md`.

### B. Projet existant (brownfield)
```
/gsd-onboard
```
Cartographie le code existant, ingère éventuellement la doc, puis initialise GSD.

### C. Ensuite, la boucle
```
/gsd-discuss-phase      # 1. décider
/gsd-plan-phase         # 2. planifier
/gsd-execute-phase      # 3. construire
/gsd-verify-work        # 4. tester
/gsd-ship               # 5. livrer
```

### D. Si tu ne sais pas quoi faire ensuite
```
/gsd-next               # détecte l'état du projet et te route vers la bonne commande
/gsd-progress           # statut + prochaines étapes
/gsd-progress --next    # avance automatiquement d'une étape
/gsd-help               # aide (ajoute --full pour tout voir)
```

---

## 4. Workflow recommandé (LE chemin à suivre)

### Pour ton projet ici (`Ldp_coach`)
C'est un projet existant → commence par :

```
1. /gsd-onboard          → GSD analyse le code et crée .planning/
2. /gsd-plan-phase       → planifie la première phase de travail
3. /gsd-execute-phase    → GSD construit
4. /gsd-verify-work      → tu valides que ça marche
5. /gsd-ship             → PR (si tu utilises git/GitHub)
```

À chaque fois que tu es perdu ou que tu reviens après une pause : `/gsd-next` ou `/gsd-resume-work`.

---

## 5. Commandes les plus utiles au quotidien

### Boucle principale
| Commande | Usage |
|----------|-------|
| `/gsd-new-project` | Démarrer un projet neuf |
| `/gsd-onboard` | Intégrer GSD dans un code existant |
| `/gsd-discuss-phase` | Décider avant de planifier |
| `/gsd-plan-phase` | Planifier une phase |
| `/gsd-execute-phase` | Exécuter les plans (vagues parallèles) |
| `/gsd-verify-work` | Tester / valider (UAT) |
| `/gsd-ship` | Créer la PR et archiver la phase |

### Navigation & état (à retenir)
| Commande | Usage |
|----------|-------|
| `/gsd-next` | « Que faire maintenant ? » — route intelligemment |
| `/gsd-progress` | Statut + prochaines étapes (`--next`, `--next --auto`) |
| `/gsd-resume-work` | Reprendre après un reset de contexte |
| `/gsd-pause-work` | Sauver un point de reprise avant de couper |
| `/gsd-help` | Liste des commandes (`--full` pour tout) |
| `/gsd-health` | Vérifier l'intégrité du dossier `.planning/` (`--repair`) |

### Tâches rapides (sans toute la machinerie)
| Commande | Usage |
|----------|-------|
| `/gsd-fast` | Tâche triviale inline (typo, petit refactor) — sans sous-agents |
| `/gsd-quick` | Tâche ad-hoc mais avec les garanties GSD (commits atomiques, suivi d'état). Flags : `--discuss`, `--research`, `--validate`, `--full` |
| `/gsd-capture` | Noter une idée / tâche / backlog rapidement |

### Qualité & debug
| Commande | Usage |
|----------|-------|
| `/gsd-code-review` | Revue des fichiers modifiés (`--fix` pour auto-corriger) |
| `/gsd-debug` | Débogage systématique avec état persistant |
| `/gsd-audit-fix` | Pipeline audit → classification → correction → test |
| `/gsd-secure-phase` | Vérifier les mitigations de sécurité d'une phase |

### Exploration / avant de coder
| Commande | Usage |
|----------|-------|
| `/gsd-explore` | Session d'idéation socratique |
| `/gsd-sketch` | Maquettes HTML jetables pour comparer des designs |
| `/gsd-spike` | 2–5 expériences de faisabilité (verdict VALIDATED/INVALIDATED) |
| `/gsd-ui-phase` | Contrat de design UI (`UI-SPEC.md`) pour phases frontend |

### Milestones (versions)
| Commande | Usage |
|----------|-------|
| `/gsd-new-milestone` | Démarrer un nouveau cycle de version |
| `/gsd-audit-milestone` | Vérifier que le milestone atteint son « definition of done » |
| `/gsd-complete-milestone` | Archiver le milestone + tag git |

### Automatisation (avancé)
| Commande | Usage |
|----------|-------|
| `/gsd-autonomous` | Exécute toutes les phases restantes en autonomie (`--from`/`--to`, `--converge`) |
| `/gsd-manager` | Centre de commande interactif multi-phases |

> Liste complète : `/gsd-help --full`.

---

## 6. Configuration

```
/gsd-settings          # config visuelle par sections (planning, exécution, docs, modèle…)
/gsd-config            # config en une commande
/gsd-config --profile  # bascule rapide qualité / équilibré / budget
/gsd-config --integrations   # clés d'API
```

Les réglages sont stockés dans ton dossier de config GSD (`~/.claude/gsd-core/`).

---

## 7. Mettre à jour / désinstaller

```bash
# Mettre à jour (depuis Claude Code)
/gsd-update
# ou en ligne de commande :
npx @opengsd/gsd-core@latest --claude --global

# Désinstaller complètement
npx @opengsd/gsd-core@latest --uninstall
```

---

## 8. Les 5 réflexes à garder en tête

1. **Toujours passer par la boucle** : Discuss → Plan → Execute → Verify → Ship. Ne saute pas Plan/Verify sauf pour du trivial (`/gsd-fast`).
2. **Perdu ? → `/gsd-next`.** Il détecte où tu en es et te dit quoi faire.
3. **Tu reviens après une pause ? → `/gsd-resume-work`.** L'état est dans `.planning/`, rien n'est perdu.
4. **Ne modifie pas les fichiers `.planning/` à la main.** Laisse les commandes GSD les gérer (utilise `/gsd-health --repair` si besoin).
5. **Tâche minuscule ? → `/gsd-fast`.** Pas besoin de sortir toute l'artillerie.

---

## Ressources
- Repo actif : https://github.com/open-gsd/gsd-core
- Package npm : `@opengsd/gsd-core`
- Communauté Discord : https://discord.gg/mYgfVNfA2r
