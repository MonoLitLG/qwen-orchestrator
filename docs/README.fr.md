> 🌐 Version Française | [Lire en English](../README.md)

**[English](../README.md)** · **[Español](README.es.md)** · **[中文](README.zh.md)** · **[日本語](README.ja.md)** · **[한국어](README.ko.md)** · **[Português](README.pt.md)** · **Français** · **[العربية](README.ar.md)**

# Qwen Orchestrator — Équipe de Développement IA Multi-Agent pour Qwen Code

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../LICENSE)
[![Version: 0.0.1](https://img.shields.io/badge/version-0.0.1-green.svg)](../package.json)
[![Qwen Code Extension](https://img.shields.io/badge/Qwen%20Code-Extension-orange.svg)](https://github.com/QwenLM/qwen-code)
[![Agents: 22](https://img.shields.io/badge/agents-22-blue.svg)]
[![Skills: 22](https://img.shields.io/badge/skills-22-purple.svg)]

> 🤖 **L'extension d'orchestration IA multi-agent de niveau entreprise construite exclusivement pour [Qwen Code CLI](https://github.com/QwenLM/qwen-code)**
>
> Transformez votre assistant de codage IA en un **département complet de développement logiciel** — avec 22 agents spécialisés, 22 compétences professionnelles, 6 commandes slash, mémoire persistante et intégration d'outils MCP.
>
> **Auteur :** [Omar-Obando](https://github.com/Omar-Obando) · **Licence :** MIT · **Version :** 0.0.1

---

## ⚡ Qu'est-ce que Qwen Orchestrator ?

**Qwen Orchestrator** est une extension puissante construite exclusivement pour **[Qwen Code](https://github.com/QwenLM/qwen-code)** — le CLI de codage IA open source d'Alibaba. Il transforme un seul assistant de codage IA en une **équipe coordonnée de 22 agents IA spécialisés** qui travaillent ensemble comme un département professionnel de développement logiciel.

### Pourquoi Qwen Orchestrator ?

Imaginez avoir une équipe d'ingénierie complète à portée de main : un **Commander** qui orchestre, un **Planner** qui conçoit l'architecture, des **Développeurs Frontend et Backend** qui codent en parallèle, un **Reviewer** qui contrôle la qualité, un **QA Engineer** qui teste, un **Cybersecurity Engineer** qui audite les vulnérabilités, un **DevOps Engineer** qui déploie — et 14 spécialistes supplémentaires, tous coordonnés automatiquement.

**Aucune autre extension de codage IA ne fournit ce niveau d'orchestration multi-agent professionnelle.**

> ⚠️ **Cette extension fonctionne UNIQUEMENT avec [Qwen Code CLI](https://github.com/QwenLM/qwen-code)**. Ce n'est PAS un outil autonome, PAS une extension VS Code, et NON compatible avec d'autres assistants de codage IA. Si vous n'avez pas Qwen Code installé, [installez-le d'abord](https://github.com/QwenLM/qwen-code#installation).

---

## 🎯 Aperçu

Qwen Orchestrator transforme Qwen Code en un **département IT professionnel** avec **22 agents IA spécialisés**, **22 compétences expertes**, **6 commandes slash**, **mémoire persistante (Knowledge Graph)** et un **serveur d'outils MCP**.

### Garanties Clés

| Garantie                          | Comment C'est Appliqué                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Pas de mockups/placeholders**   | Les agents sont interdits d'écrire des stubs ; la compétence anti-pattern détecte les violations           |
| **Pas de verrouillage de modèle** | Tous les agents utilisent le modèle par défaut de l'utilisateur ; le remplacement par agent est facultatif |
| **Protection contre les boucles** | L'agent Monitor détecte et casse les boucles LLM automatiquement                                           |
| **Prévention N+1**                | Compétence SQL best-practices + agent Database Architect forcent l'eager loading                           |
| **Formatage SQL**                 | Mots-clés en majuscules, une colonne par ligne, JOINs indentés                                             |
| **Sécurité d'abord**              | Conformité OWASP Top 10 via la compétence security-audit et l'agent Reviewer                               |
| **Complétude CRUD**               | Le Tech Lead vérifie que chaque entité a Create/Read/Update/Delete/Restore                                 |
| **Multi-langage**                 | Supporte TypeScript, PHP, Python, Dart, Rust, Go, Java, C#                                                 |
| **Context7 facultatif**           | Fonctionne sans Context7 ; avec lui, les agents accèdent à la documentation en temps réel                  |
| **Récupération de compaction**    | L'état persiste dans `.qwen-orchestrator/` — survit à la compression du contexte                           |

---

## Équipe d'Agents (22 Agents Spécialisés)

| #   | Agent                  | Couleur     | Rôle                      | Super-pouvoir                                            |
| --- | ---------------------- | ----------- | ------------------------- | -------------------------------------------------------- |
| 1   | **Commander**          | 🔴 Rouge    | Orchestrateur Maître      | Délégation parallèle, exécution implacable               |
| 2   | **Planner**            | 🔵 Bleu     | Recherche et Architecture | Planification au niveau fichier, décisions de conception |
| 3   | **Frontend Developer** | 🔵 Cyan     | Implémentation UI/UX      | Composants, responsive, accessible, rapide               |
| 4   | **Backend Developer**  | 🟢 Vert     | Logique Côté Serveur      | APIs, auth, cache, opérations de base de données         |
| 5   | **Reviewer**           | 🟣 Violet   | Gardien de Qualité        | SEUL agent pouvant approuver les tâches                  |
| 6   | **QA Engineer**        | 🟠 Orange   | Assurance Qualité         | Stratégie de test, découverte de cas limites             |
| 7   | **Project Manager**    | 🔵 Cyan     | Gestion de Livraison      | Contrôle de portée, évaluation des risques               |
| 8   | **Doc Researcher**     | 🟣 Magenta  | Connaissances Context7    | Consultation de docs en direct, anti-hallucination       |
| 9   | **Tech Lead**          | 🟡 Or       | Standards et Orientation  | Complétude des modules, vérification CRUD                |
| 10  | **Database Architect** | 🟢 Sarcelle | Spécialiste Données       | Conception de schéma, sécurité des migrations            |
| 11  | **Product Owner**      | 🟡 Ambre    | Valeur Métier             | User stories, critères d'acceptation                     |
| 12  | **DevOps Engineer**    | 🔘 Ardoise  | Infrastructure            | CI/CD, Docker, automatisation du déploiement             |
| 13  | **Code Quality Guard** | 🌹 Rose     | Sentinelle Qualité        | Vérification syntaxe, lint, typecheck                    |
| 14  | **Monitor**            | 🛡️ Bouclier | Gardien de Boucles        | Détecte/casse les boucles LLM, watchdog runtime          |
| 15  | **SEO Specialist**     | 🔵 Bleu     | SEO et Performance Web    | Meta tags, données structurées, Core Web Vitals          |
| 16  | **Tech Selector**      | 🟣 Violet   | Conseiller Technologique  | Sélection framework/BD avec avantages/inconvénients      |
| 17  | **Cybersecurity Eng.** | 🔴 Cramoisi | Sécurité Applicative      | OWASP, modélisation des menaces, audit de dépendances    |
| 18  | **Performance Eng.**   | ⚡ Ambre    | Vitesse et Échelle        | Profiling, optimisation de requêtes, tests de charge     |
| 19  | **Release Manager**    | 🏷️ Indigo   | Release et Versioning     | SemVer, changelogs, planification de rollback            |
| 20  | **API Specialist**     | 🔗 Sarcelle | API et Intégration        | REST/GraphQL, versioning, APIs tierces                   |
| 21  | **Mobile Engineer**    | 📱 Ciel     | Apps Mobiles              | Flutter, React Native, offline-first                     |
| 22  | **Localization Eng.**  | 🌐 Citron   | i18n/L10n                 | Multi-langue, RTL, adaptation culturelle                 |

---

## Compétences (22 Compétences Professionnelles)

| #   | Compétence              | Objectif                                                                                          |
| --- | ----------------------- | ------------------------------------------------------------------------------------------------- |
| 1   | **Code Review**         | Revue systématique OWASP + SOLID + Clean Code                                                     |
| 2   | **Architect**           | Conception d'architecture avec enregistrements ADR                                                |
| 3   | **TDD Workflow**        | Développement Piloté par les Tests (Red/Green/Refactor)                                           |
| 4   | **Security Audit**      | Détection de vulnérabilités OWASP Top 10                                                          |
| 5   | **Performance**         | Profiling, optimisation, benchmarks                                                               |
| 6   | **Debugging**           | Méthodologie d'investigation systématique                                                         |
| 7   | **Deployment**          | CI/CD, Docker, gestion des releases                                                               |
| 8   | **Context7 Docs**       | Facultatif — consultation de documentation en direct via Context7 MCP                             |
| 9   | **Domain-Driven**       | Constructeur complet de modules métier                                                            |
| 10  | **API Design**          | Standards RESTful, enveloppes de réponse, pagination                                              |
| 11  | **Refactoring**         | Transformations de code sûres préservant le comportement                                          |
| 12  | **Compaction Recovery** | Préservation du contexte à travers la compaction de session                                       |
| 13  | **Git Workflow**        | Stratégies de branching, conventions de commit, templates de PR                                   |
| 14  | **Database Design**     | Conception de schéma, indexation, sécurité des migrations                                         |
| 15  | **Anti-Pattern**        | Interdit mockups, placeholders, requêtes N+1, code mort                                           |
| 16  | **Multi-Language**      | 8+ langages : TS, PHP, Python, Dart, Rust, Go, Java, C#                                           |
| 17  | **SQL Best Practices**  | Indentation, prévention N+1, requêtes paramétrées                                                 |
| 18  | **Design System**       | Architecture multi-pages, palettes de couleurs, typographie, espacement, Astro + Cloudflare Pages |
| 19  | **Flutter Web**         | Layouts responsifs, widgets adaptatifs, gestion d'état                                            |
| 20  | **Laravel**             | Eloquent ORM, Form Requests, files d'attente, patterns API backend                                |
| 21  | **NestJS**              | Modules, guards, pipes, interceptors, cycle de vie des requêtes                                   |
| 22  | **Supabase**            | Politiques RLS, Edge Functions, auth, APIs auto-générées                                          |

---

## Commandes (6 Commandes Slash)

| Commande                       | Description                                                                |
| ------------------------------ | -------------------------------------------------------------------------- |
| **`/orchestrator [objectif]`** | ⭐ **Point d'entrée principal** — Équipe complète avec protocole de clarté |
| `/orchestrate [mission]`       | Exécution directe de mission (sans questions de clarté)                    |
| `/plan [fonctionnalité]`       | Créer uniquement un plan d'implémentation                                  |
| `/review [cible]`              | Revue de code complète                                                     |
| `/test [cible]`                | Exécuter et analyser la suite de tests                                     |
| `/deploy [cible]`              | Déployer avec vérification pré/post                                        |

---

## Clarté Utilisateur : Demander Avant de Construire

L'orchestrateur **ne suppose jamais** ce que vous voulez. Lorsqu'une mission démarre, les agents Commander et Planner utilisent l'outil `AskUserQuestion` pour clarifier les exigences avant d'écrire une seule ligne de code.

### Exemple d'Interaction

```
👤 Utilisateur : /orchestrator Construire un checkout e-commerce

🤖 Commander : Je dois clarifier quelques points avant de planifier :

   📋 Fournisseur de Paiement (Question 1/3)
   Quelle passerelle de paiement dois-je intégrer ?
   ○ Stripe       — Standard de l'industrie, excellente API
   ○ PayPal       — Largement confiance, support international
   ○ MercadoPago  — Meilleur pour les marchés latino-américains
```

---

## Installation

### Installation Rapide (Recommandée)

```bash
qwen extensions install https://github.com/Omar-Obando/qwen-orchestrator
```

### Installation Manuelle

```bash
git clone https://github.com/Omar-Obando/qwen-orchestrator.git
```

```json
{
  "extensions": ["./path/to/qwen-orchestrator"]
}
```

---

## Configuration du Modèle

**Par défaut, tous les agents utilisent votre modèle Qwen Code par défaut.** Pas de modèle codé en dur — zéro verrouillage.

```yaml
---
name: commander
# model: décommentez ci-dessous pour remplacer le modèle par défaut de l'utilisateur
model: qwen-max # ← Décommentez et définissez votre modèle préféré
---
```

---

## Auteur

**Omar Obando**

- GitHub : [@Omar-Obando](https://github.com/Omar-Obando)
- Licence : MIT

---

<div align="center">

**Construit avec ❤️ pour la communauté [Qwen Code](https://github.com/QwenLM/qwen-code)**

[⬆ Retour en haut](#qwen-orchestrator--équipe-de-développement-ia-multi-agent-pour-qwen-code)

</div>
