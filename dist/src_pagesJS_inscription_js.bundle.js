"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_inscription_js"],{

/***/ "./src/pagesJS/inscription.js":
/*!************************************!*\
  !*** ./src/pagesJS/inscription.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app); \r\n\r\nconst handleRegistration = async (event) => {\r\n  event.preventDefault();\r\n  \r\n  const emailInput = document.getElementById(\"email\");\r\n  const passwordInput = document.getElementById(\"password\");\r\n  const nomInput = document.getElementById(\"nom\");\r\n  const prenomInput = document.getElementById(\"prenom\");\r\n  const statusInput = document.getElementById(\"status\");\r\n  const adresseInput = document.getElementById(\"adresse\");\r\n  const telInput = document.getElementById(\"tel\");\r\n  const adresseecoleInput = document.getElementById(\"adresseecole\");\r\n  const emailecoleInput = document.getElementById(\"emailecole\");\r\n  const secteurInput = document.getElementById(\"secteur\");\r\n  const nomecoleInput = document.getElementById(\"nomecole\");\r\n  \r\n    const email = emailInput.value;\r\n    const password = passwordInput.value;\r\n    const nom = nomInput.value;\r\n    const prenom = prenomInput.value;\r\n    const status = statusInput.value;\r\n    const adresse = adresseInput.value;\r\n    const tel = telInput.value;\r\n    const adresseecole = adresseecoleInput.value;\r\n    const emailecole = emailecoleInput.value;\r\n    const secteur = secteurInput.value;\r\n    const nomecole = nomInput.value;\r\n    \r\n    try {\r\n      const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(\r\n        auth,\r\n        email,\r\n        password\r\n        );\r\n        const user = userCredential.user;\r\n        \r\n        const userData = {\r\n          nom: nom,\r\n        prenom: prenom,\r\n        status: status,\r\n        adresse: adresse,\r\n        tel: tel,\r\n        adresseecole: adresseecole,\r\n        emailecole: emailecole,\r\n        secteur: secteur,\r\n        nomecole: nomecole,\r\n        email: email,\r\n        password: password,\r\n      };\r\n      \r\n      const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"utilisateurs\");\r\n      await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(userRef, userData);\r\n      \r\n      alert(\"Utilisateur enregistré avec succès\");\r\n      \r\n      // Vous pouvez rediriger l'utilisateur vers une autre page ici si nécessaire\r\n    } catch (error) {\r\n      const errorCode = error.code;\r\n      const errorMessage = error.message;\r\n      console.error(\"Erreur lors de l'inscription :\", errorCode, errorMessage);\r\n    }\r\n    emailInput.value = \"\"\r\n    passwordInput.value = \"\"\r\n    nomInput.value = \"\"\r\n    prenomInput.value = \"\"\r\n    statusInput.value = \"\"\r\n    adresseInput.value = \"\"\r\n    telInput.value = \"\"\r\n    adresseecoleInput.value = \"\"\r\n    emailecoleInput.value = \"\"\r\n    secteurInput.value = \"\"\r\n    nomecoleInput.value = \"\"\r\n\r\n  };\r\n\r\nconsole.log('page inscription')\r\nconst registrationForm = document.getElementById(\"registration-form\");\r\nregistrationForm.addEventListener(\"submit\", handleRegistration);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9pbnNjcmlwdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFNQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9zcmMvcGFnZXNKUy9pbnNjcmlwdGlvbi5qcz8zMWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RmlyZXN0b3JlLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgYWRkRG9jLFxyXG4gIGRvYyxcclxuICBnZXREb2MsXHJcbiAgb25TbmFwc2hvdCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly92YWxpZGF0aW9uLWF0ZWxpZXItanMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInZhbGlkYXRpb24tYXRlbGllci1qc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDY2MzMyMDYyMDkwXCIsXHJcbiAgYXBwSWQ6IFwiMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzNcIixcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApOyBcclxuXHJcbmNvbnN0IGhhbmRsZVJlZ2lzdHJhdGlvbiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XHJcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XHJcbiAgY29uc3Qgbm9tSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbVwiKTtcclxuICBjb25zdCBwcmVub21JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlbm9tXCIpO1xyXG4gIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XHJcbiAgY29uc3QgYWRyZXNzZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHJlc3NlXCIpO1xyXG4gIGNvbnN0IHRlbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWxcIik7XHJcbiAgY29uc3QgYWRyZXNzZWVjb2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkcmVzc2VlY29sZVwiKTtcclxuICBjb25zdCBlbWFpbGVjb2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsZWNvbGVcIik7XHJcbiAgY29uc3Qgc2VjdGV1cklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0ZXVyXCIpO1xyXG4gIGNvbnN0IG5vbWVjb2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWVjb2xlXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xyXG4gICAgY29uc3Qgbm9tID0gbm9tSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBwcmVub20gPSBwcmVub21JbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHN0YXR1c0lucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgYWRyZXNzZSA9IGFkcmVzc2VJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IHRlbCA9IHRlbElucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgYWRyZXNzZWVjb2xlID0gYWRyZXNzZWVjb2xlSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBlbWFpbGVjb2xlID0gZW1haWxlY29sZUlucHV0LnZhbHVlO1xyXG4gICAgY29uc3Qgc2VjdGV1ciA9IHNlY3RldXJJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IG5vbWVjb2xlID0gbm9tSW5wdXQudmFsdWU7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgICAgIGF1dGgsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgbm9tOiBub20sXHJcbiAgICAgICAgcHJlbm9tOiBwcmVub20sXHJcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgYWRyZXNzZTogYWRyZXNzZSxcclxuICAgICAgICB0ZWw6IHRlbCxcclxuICAgICAgICBhZHJlc3NlZWNvbGU6IGFkcmVzc2VlY29sZSxcclxuICAgICAgICBlbWFpbGVjb2xlOiBlbWFpbGVjb2xlLFxyXG4gICAgICAgIHNlY3RldXI6IHNlY3RldXIsXHJcbiAgICAgICAgbm9tZWNvbGU6IG5vbWVjb2xlLFxyXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB1c2VyUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1dGlsaXNhdGV1cnNcIik7XHJcbiAgICAgIGF3YWl0IGFkZERvYyh1c2VyUmVmLCB1c2VyRGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBhbGVydChcIlV0aWxpc2F0ZXVyIGVucmVnaXN0csOpIGF2ZWMgc3VjY8Ooc1wiKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFZvdXMgcG91dmV6IHJlZGlyaWdlciBsJ3V0aWxpc2F0ZXVyIHZlcnMgdW5lIGF1dHJlIHBhZ2UgaWNpIHNpIG7DqWNlc3NhaXJlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdpbnNjcmlwdGlvbiA6XCIsIGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGVtYWlsSW5wdXQudmFsdWUgPSBcIlwiXHJcbiAgICBwYXNzd29yZElucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgbm9tSW5wdXQudmFsdWUgPSBcIlwiXHJcbiAgICBwcmVub21JbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIHN0YXR1c0lucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgYWRyZXNzZUlucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgdGVsSW5wdXQudmFsdWUgPSBcIlwiXHJcbiAgICBhZHJlc3NlZWNvbGVJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIGVtYWlsZWNvbGVJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIHNlY3RldXJJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIG5vbWVjb2xlSW5wdXQudmFsdWUgPSBcIlwiXHJcblxyXG4gIH07XHJcblxyXG5jb25zb2xlLmxvZygncGFnZSBpbnNjcmlwdGlvbicpXHJcbmNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdHJhdGlvbi1mb3JtXCIpO1xyXG5yZWdpc3RyYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUmVnaXN0cmF0aW9uKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pagesJS/inscription.js\n");

/***/ })

}]);