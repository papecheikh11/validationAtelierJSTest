"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_autentification_js"],{

/***/ "./src/pagesJS/autentification.js":
/*!****************************************!*\
  !*** ./src/pagesJS/autentification.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\r\n    \r\nconst userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"utilisateurs\");\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(userRef, (snapshot) => {\r\n        let userRef = [];\r\n        snapshot.docs.forEach((doc) => {\r\n         userRef.push({...doc.data(), id: doc.id })\r\n        })\r\n        userRef.forEach((utilisateur => {\r\n            let ligne = document.createElement(\"tr\");\r\n            ligne.innerHTML = `\r\n                        <td class=\"mx-auto text-center d-none d-lg-block m-0\">${utilisateur.nom}</td>\r\n                        <td class=\"mx-auto text-center m-0\">${utilisateur.prenom}</td>\r\n                        <td class=\"mx-auto text-center m-0 d-none d-lg-block\">${utilisateur.status}</td>\r\n                        <td class=\"mx-auto text-center m-0\">${utilisateur.secteur}</td>\r\n                        <td class=\"mx-auto text-center m-0 d-none d-lg-block\">${utilisateur.adresse}</td>\r\n                    `;\r\n    \r\n            container.appendChild(ligne);\r\n        }))\r\n    });\r\n\r\n  \r\nlet rechercheUser = document.getElementById('inputRecherche')\r\nfunction myFunction() {\r\n    let filter = rechercheUser.value.toUpperCase() || rechercheUser.value.toLowerCase();\r\n    let tableBody = document.getElementById(\"container\");\r\n    let tr = tableBody.getElementsByTagName(\"tr\");\r\n       \r\n    for (let i = 0; i < tr.length; i++) {\r\n        for (let j = 0; j < tr[i].getElementsByTagName(\"td\").length; j++) {\r\n            let txtValue = tr[i].getElementsByTagName(\"td\")[j].innerText;\r\n            let nomComplet = tr[i].getElementsByTagName(\"td\")[1].innerText + \" \"+ tr[i].getElementsByTagName(\"td\")[0].innerText || tr[i].getElementsByTagName(\"td\")[0].innerText + \" \"+ tr[i].getElementsByTagName(\"td\")[1].innerText  \r\n            if (txtValue) {\r\n                if (txtValue.toUpperCase().indexOf(filter) > -1 || nomComplet.toUpperCase().indexOf(filter) > -1) {\r\n                    tr[i].style.display = \"\";\r\n                    break;\r\n                } else {\r\n                    tr[i].style.display = \"none\";\r\n                }\r\n            }     \r\n        }\r\n    }\r\n}\r\n\r\n       \r\nrechercheUser.addEventListener('input', function(){\r\n    myFunction()\r\n})\r\nconsole.log('authentification');\r\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9hdXRlbnRpZmljYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBTUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL2F1dGVudGlmaWNhdGlvbi5qcz84MjJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RmlyZXN0b3JlLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgYWRkRG9jLFxyXG4gIGRvYyxcclxuICBnZXREb2MsXHJcbiAgb25TbmFwc2hvdCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly92YWxpZGF0aW9uLWF0ZWxpZXItanMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInZhbGlkYXRpb24tYXRlbGllci1qc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDY2MzMyMDYyMDkwXCIsXHJcbiAgYXBwSWQ6IFwiMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzNcIixcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG4gICAgXHJcbmNvbnN0IHVzZXJSZWYgPSBjb2xsZWN0aW9uKGRiLCBcInV0aWxpc2F0ZXVyc1wiKTtcclxuICAgIG9uU25hcHNob3QodXNlclJlZiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJSZWYgPSBbXTtcclxuICAgICAgICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICB1c2VyUmVmLnB1c2goey4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHVzZXJSZWYuZm9yRWFjaCgodXRpbGlzYXRldXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGlnbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIGxpZ25lLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibXgtYXV0byB0ZXh0LWNlbnRlciBkLW5vbmUgZC1sZy1ibG9jayBtLTBcIj4ke3V0aWxpc2F0ZXVyLm5vbX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJteC1hdXRvIHRleHQtY2VudGVyIG0tMFwiPiR7dXRpbGlzYXRldXIucHJlbm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIm14LWF1dG8gdGV4dC1jZW50ZXIgbS0wIGQtbm9uZSBkLWxnLWJsb2NrXCI+JHt1dGlsaXNhdGV1ci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibXgtYXV0byB0ZXh0LWNlbnRlciBtLTBcIj4ke3V0aWxpc2F0ZXVyLnNlY3RldXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibXgtYXV0byB0ZXh0LWNlbnRlciBtLTAgZC1ub25lIGQtbGctYmxvY2tcIj4ke3V0aWxpc2F0ZXVyLmFkcmVzc2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaWduZSk7XHJcbiAgICAgICAgfSkpXHJcbiAgICB9KTtcclxuXHJcbiAgXHJcbmxldCByZWNoZXJjaGVVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UmVjaGVyY2hlJylcclxuZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcclxuICAgIGxldCBmaWx0ZXIgPSByZWNoZXJjaGVVc2VyLnZhbHVlLnRvVXBwZXJDYXNlKCkgfHwgcmVjaGVyY2hlVXNlci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xyXG4gICAgbGV0IHRyID0gdGFibGVCb2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidHJcIik7XHJcbiAgICAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRyW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIikubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IHR4dFZhbHVlID0gdHJbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVtqXS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIGxldCBub21Db21wbGV0ID0gdHJbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVsxXS5pbm5lclRleHQgKyBcIiBcIisgdHJbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVswXS5pbm5lclRleHQgfHwgdHJbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVswXS5pbm5lclRleHQgKyBcIiBcIisgdHJbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVsxXS5pbm5lclRleHQgIFxyXG4gICAgICAgICAgICBpZiAodHh0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eHRWYWx1ZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyKSA+IC0xIHx8IG5vbUNvbXBsZXQudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cltpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuICAgICAgIFxyXG5yZWNoZXJjaGVVc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIG15RnVuY3Rpb24oKVxyXG59KVxyXG5jb25zb2xlLmxvZygnYXV0aGVudGlmaWNhdGlvbicpO1xyXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/autentification.js\n");

/***/ })

}]);