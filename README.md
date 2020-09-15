## <a name="webapp"></a>L'Application Web

Lien vers l'Application Web: <a href="https://xenodochial-lamarr-55e1b6.netlify.app/" target="_blank">https://xenodochial-lamarr-55e1b6.netlify.app/</a>

## Sommaire

- [Description](#description)
- [Objectif](#objectif)
- [Démarrage](#demarrage)
- [License](#license)

## <a name="description"></a>Description

La résistance à la compression est la capacité d'un matériau ou d'une structure à résister à des charges tendant à réduire la taille, par opposition à la résistance à la traction, qui représente la capacité de matériau à résister aux charges tendant à l'allonger.

La résistance à la compression est l'une des propriétés techniques les plus importantes du béton. C'est une pratique industrielle standard que le béton soit classé en fonction des grades. Cette qualité n'est rien d'autre que la résistance à la compression du cube ou du cylindre de béton. Les échantillons de cube ou de cylindre sont généralement testés sous une machine d'essai de compression pour obtenir la résistance à la compression du béton. Les conditions de test varient d'un pays à l'autre en fonction du code de conception.

La résistance à la compression du béton est une fonction hautement non linéaire de l'âge et des ingrédients. Ces ingrédients comprennent le ciment, le laitier de haut fourneau, les cendres volantes, l'eau, le superplastifiant, l'agrégat grossier et l'agrégat fin.

La résistance à la compression réelle du béton (MPa) pour un mélange donné sous un âge spécifique (jours) a été déterminée en laboratoire. Les données sont sous forme brute (non mises à l'échelle).

La résistance à la compression du béton peut être calculée par la charge de rupture divisée par la section transversale résistant à la charge et rapportée en livres par pouce carré en unités usuelles aux États-Unis et en méga pascals (MPa) en unités SI. Les exigences de résistance à la compression du béton peuvent varier de 2500 psi (17 MPa) pour le béton résidentiel à 4000 psi (28 MPa) et plus dans les structures commerciales. Des résistances plus élevées allant jusqu'à 70 MPa (10 000 psi) sont spécifiées pour certaines applications.

## <a name="objectif"></a>Objectif

L'objectif de l'Application est de pouvoir prédire la résistance à la compression du béton grâce à une base de donnée d'Essais en Laboratoire de 1030 échantillons sur laquelle a tourné des algorithmes de Machine Learning et de Deep Learning.
Base de données: <a href="https://esilab.s3.eu-west-3.amazonaws.com/datasets_compressive_strength_concrete.csv" target="_blank">datasets_compressive_strength_concrete.csv</a>

Le Notebook suivant présente l'analyse:
Testez l'application directement: <a href="https://colab.research.google.com/drive/1okQIlRNIpAuLSbKngyIhBIzj4aXyVOl2?usp=sharing" target="_blank">lien vers le notebook</a>


## <a name="demarrage"></a>Démarrage

Clonez le projet, puis, entrez dans le dossier, lancez l'installation des modules **Node.js** via la commande `npm install` et enfin démarrez l'application avec `npm start`:

```shell
$ cd ./predicting-concrete-compressive-strength
$ npm install
$ npm start
```
Notez que notre application a dû s'ouvrir automatiquement dans notre navigateur (si ce n'est pas le cas, ouvrez un nouvel onglet dans votre navigateur et saisissez l'URL indiquée par la commande dans le terminal, normalement  http://localhost:3000/ ).

Cette application permet de prédire la résistance à la compression suivant la composition du béton.


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://www.tridyme.com/fr" target="_blank">TriDyme</a>.