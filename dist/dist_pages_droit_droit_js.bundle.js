"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["dist_pages_droit_droit_js"],{

/***/ "./dist/pages/droit/droit.js":
/*!***********************************!*\
  !*** ./dist/pages/droit/droit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\ndocument.getElementById(\"bouton\").addEventListener(\"click\", (e) => {\r\n    \r\n    const one = document.querySelector(\".one\");\r\n    one.classList.add(\"transition-left\");\r\n\r\n    \r\n    setTimeout(() => {\r\n        one.style.display = \"none\";\r\n        one.classList.remove(\"transition-left\");\r\n    }, 500); \r\n\r\n   \r\n    document.querySelector(\".center2\").style.display = \"block\";\r\n});\r\n\r\n\r\n// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin\r\n\r\n\r\n\r\n// Configuration de votre application web Firebase\r\nconst firebaseConfig = {\r\n  apiKey: 'AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY',\r\n  authDomain: 'validation-atelier-js.firebaseapp.com',\r\n  projectId: 'validation-atelier-js',\r\n  storageBucket: 'validation-atelier-js.appspot.com',\r\n  messagingSenderId: '466332062090',\r\n  appId: '1:466332062090:web:ffbe45ef4a7371a7b5b873',\r\n};\r\n\r\n// Initialiser Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\r\n\r\n// Référence Firestore\r\nconst contenuRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'droit', 'sZDG74DM390mi6mkW5Zg');\r\n\r\nfunction enregistrerModifications() {\r\n  // Récupérer le contenu de la div\r\n  const contenuDiv = document.getElementById('editor-container').textContent;\r\n\r\n\r\n  // Enregistrer le contenu dans Firestore\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(contenuRef, {\r\n    contenu: contenuDiv,\r\n    timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)(),\r\n  })\r\n  .then(() => {\r\n    console.log('Contenu enregistré avec succès dans Firestore!');\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Erreur lors de l'enregistrement du contenu:\", error);\r\n  });\r\n}\r\n\r\ndocument.getElementById(\"modif\").addEventListener(\"click\", enregistrerModifications);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kaXN0L3BhZ2VzL2Ryb2l0L2Ryb2l0LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9kaXN0L3BhZ2VzL2Ryb2l0L2Ryb2l0LmpzPzRiNTEiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3V0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lXCIpO1xyXG4gICAgb25lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLWxlZnRcIik7XHJcblxyXG4gICAgXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvbmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvbi1sZWZ0XCIpO1xyXG4gICAgfSwgNTAwKTsgXHJcblxyXG4gICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VudGVyMlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KTtcclxuXHJcblxyXG4vLyBJbXBvcnRlciBsZXMgZm9uY3Rpb25zIGRvbnQgdm91cyBhdmV6IGJlc29pbiDDoCBwYXJ0aXIgZGVzIFNES3MgZG9udCB2b3VzIGF2ZXogYmVzb2luXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgc2V0RG9jLCBzZXJ2ZXJUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBkZSB2b3RyZSBhcHBsaWNhdGlvbiB3ZWIgRmlyZWJhc2VcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiAnQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZJyxcclxuICBhdXRoRG9tYWluOiAndmFsaWRhdGlvbi1hdGVsaWVyLWpzLmZpcmViYXNlYXBwLmNvbScsXHJcbiAgcHJvamVjdElkOiAndmFsaWRhdGlvbi1hdGVsaWVyLWpzJyxcclxuICBzdG9yYWdlQnVja2V0OiAndmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tJyxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzQ2NjMzMjA2MjA5MCcsXHJcbiAgYXBwSWQ6ICcxOjQ2NjMzMjA2MjA5MDp3ZWI6ZmZiZTQ1ZWY0YTczNzFhN2I1Yjg3MycsXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXNlciBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG4vLyBSw6lmw6lyZW5jZSBGaXJlc3RvcmVcclxuY29uc3QgY29udGVudVJlZiA9IGRvYyhkYiwgJ2Ryb2l0JywgJ3NaREc3NERNMzkwbWk2bWtXNVpnJyk7XHJcblxyXG5mdW5jdGlvbiBlbnJlZ2lzdHJlck1vZGlmaWNhdGlvbnMoKSB7XHJcbiAgLy8gUsOpY3Vww6lyZXIgbGUgY29udGVudSBkZSBsYSBkaXZcclxuICBjb25zdCBjb250ZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250YWluZXInKS50ZXh0Q29udGVudDtcclxuXHJcblxyXG4gIC8vIEVucmVnaXN0cmVyIGxlIGNvbnRlbnUgZGFucyBGaXJlc3RvcmVcclxuICBzZXREb2MoY29udGVudVJlZiwge1xyXG4gICAgY29udGVudTogY29udGVudURpdixcclxuICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgfSlcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQ29udGVudSBlbnJlZ2lzdHLDqSBhdmVjIHN1Y2PDqHMgZGFucyBGaXJlc3RvcmUhJyk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdlbnJlZ2lzdHJlbWVudCBkdSBjb250ZW51OlwiLCBlcnJvcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kaWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVucmVnaXN0cmVyTW9kaWZpY2F0aW9ucyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dist/pages/droit/droit.js\n");

/***/ })

}]);