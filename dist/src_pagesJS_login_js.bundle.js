"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_login_js"],{

/***/ "./src/pagesJS/login.js":
/*!******************************!*\
  !*** ./src/pagesJS/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"../../node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"../../node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\n  projectId: \"validation-atelier-js\",\n  storageBucket: \"validation-atelier-js.appspot.com\",\n  messagingSenderId: \"466332062090\",\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\n};\n\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app); \nconst handleLogin = async (event) => {\n    event.preventDefault();\n  \n    const email = document.getElementById(\"email\").value;\n    const password = document.getElementById(\"password\").value;\n  \n    try {\n      const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(\n        auth,\n        email,\n        password\n      );\n      const user = userCredential.user;\n      console.log(\"Utilisateur connecté\");\n      window.location.href = \"../../accueil/acceuil.html\";\n    } catch (error) {\n      const errorCode = error.code;\n      const errorMessage = error.message;\n      alert(`Erreur lors de la connexion :\nidentifiants incorrects`);\n    }\n  };\n  \n  const loginForm = document.getElementById(\"signup\");\n  console.log(\"page connexion\");\n  loginForm.addEventListener(\"submit\", handleLogin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFNQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxpZGF0aW9uYXRlbGllcmpzLy4vc3JjL3BhZ2VzSlMvbG9naW4uanM/ZWFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHtcbiAgZ2V0QXV0aCxcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHtcbiAgZ2V0RmlyZXN0b3JlLFxuICBjb2xsZWN0aW9uLFxuICBhZGREb2MsXG4gIGRvYyxcbiAgZ2V0RG9jLFxuICBvblNuYXBzaG90LFxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZXCIsXG4gIGF1dGhEb21haW46IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3ZhbGlkYXRpb24tYXRlbGllci1qcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcInZhbGlkYXRpb24tYXRlbGllci1qc1wiLFxuICBzdG9yYWdlQnVja2V0OiBcInZhbGlkYXRpb24tYXRlbGllci1qcy5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NjYzMzIwNjIwOTBcIixcbiAgYXBwSWQ6IFwiMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzNcIixcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7IFxuY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpLnZhbHVlO1xuICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgYXV0aCxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICApO1xuICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XG4gICAgICBjb25zb2xlLmxvZyhcIlV0aWxpc2F0ZXVyIGNvbm5lY3TDqVwiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIuLi8uLi9hY2N1ZWlsL2FjY2V1aWwuaHRtbFwiO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgIGFsZXJ0KGBFcnJldXIgbG9ycyBkZSBsYSBjb25uZXhpb24gOlxuaWRlbnRpZmlhbnRzIGluY29ycmVjdHNgKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cFwiKTtcbiAgY29uc29sZS5sb2coXCJwYWdlIGNvbm5leGlvblwiKTtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlTG9naW4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/login.js\n");

/***/ })

}]);