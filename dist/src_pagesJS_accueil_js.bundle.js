"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_accueil_js"],{

/***/ "./src/pagesJS/accueil.js":
/*!********************************!*\
  !*** ./src/pagesJS/accueil.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\r\n\r\n// Importation des  services\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Your web app's Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\"\r\n};\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app);\r\n\r\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, (user) => {\r\n  if (user) {\r\n    // console.log(\"Utilisateur connecté\");\r\n    var userEmail = user.email;\r\n    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"utilisateurs\");\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(userRef, (snapshot) => {\r\n      let userRef = [];\r\n      snapshot.docs.forEach((doc) => {\r\n        userRef.push({ ...doc.data(), id: doc.id });\r\n      });\r\n      userRef.forEach((utilisateur) => {\r\n        // Créez une référence au document de l'utilisateur dans Firestore\r\n        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, \"utilisateurs\", utilisateur.id);\r\n\r\n        if (utilisateur.email == userEmail) {\r\n          const ProfilNav = document.querySelector(\".ProfilNav\");\r\n          const profilVoir = document.querySelector(\".profilVoir\");\r\n          const nomUser = document.querySelector(\".nomUser\");\r\n          const statusUser = document.querySelector(\".statusUser\");\r\n          ProfilNav.src = utilisateur.url;\r\n          profilVoir.src = utilisateur.url;\r\n          nomUser.innerText = utilisateur.prenom + \" \" + utilisateur.nom;\r\n          statusUser.innerText = utilisateur.status;\r\n        }\r\n      });\r\n    });\r\n  } else {\r\n    console.log(\"Aucun utilisateur connecté\");\r\n  }\r\n});\r\n\r\nfunction deconnexion() {\r\n  console.log(\"function deconnexion\");\r\n  const btnGreen = document.querySelector(\".btnGreen\");\r\n  btnGreen.addEventListener(\"click\", function () {\r\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\r\n    signOut(auth)\r\n      .then(() => {\r\n        console.log(\"Utilisateur déconnecté\");\r\n        window.location.href = \"../../pages/auth/login/login.html\";\r\n      })\r\n      .catch((error) => {\r\n        console.error(\"Erreur lors de la déconnexion :\", error);\r\n      });\r\n  });\r\n}\r\ndeconnexion();\r\n\r\n// Récupérer la collection\r\nconst eleve = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"inscScolarite\");\r\nconst certiesRef2 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"mensualites\");\r\nlet sum = 0;\r\n\r\nlet effectifClass6;\r\nlet effectifClass5;\r\nlet effectifClass4;\r\nlet effectifClass3;\r\n\r\nconst effectif6 = document.getElementById(\"effectif6\");\r\nconst effectif5 = document.getElementById(\"effectif5\");\r\nconst effectif4 = document.getElementById(\"effectif4\");\r\nconst effectif3 = document.getElementById(\"effectif3\");\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(eleve, (snapshot) => {\r\n  let eleves = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleves.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  eleves.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n  // console.log(eleves);\r\n  effectifClass6 = eleves.filter((utili) => utili.classe === \"6ème\").length;\r\n  effectifClass5 = eleves.filter((utili) => utili.classe === \"5ème\").length;\r\n  effectifClass4 = eleves.filter((utili) => utili.classe === \"4ème\").length;\r\n  effectifClass3 = eleves.filter((utili) => utili.classe === \"3ème\").length;\r\n\r\n  effectif6.innerHTML = effectifClass6 + \" élèves\";\r\n  effectif5.innerHTML = effectifClass5 + \" élèves\";\r\n  effectif4.innerHTML = effectifClass4 + \" élèves\";\r\n  effectif3.innerHTML = effectifClass3 + \" élèves\";\r\n});\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(certiesRef2, (snapshot) => {\r\n  let certiesRef2 = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    certiesRef2.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n  // console.log(certiesRef2);\r\n  let PaiementsEffec6 = certiesRef2.filter(\r\n    (utili) => utili.classe === \"6ème\" && utili.mois === \"novembre\"\r\n  );\r\n  let PaiementsEffec5 = certiesRef2.filter(\r\n    (utili) => utili.classe === \"5ème\" && utili.mois === \"novembre\"\r\n  );\r\n  let PaiementsEffec4 = certiesRef2.filter(\r\n    (utili) => utili.classe === \"4ème\" && utili.mois === \"novembre\"\r\n  );\r\n  let PaiementsEffec3 = certiesRef2.filter(\r\n    (utili) => utili.classe === \"3ème\" && utili.mois === \"novembre\"\r\n  );\r\n\r\n  paiement6.innerHTML =\r\n    Math.round((PaiementsEffec6.length / effectifClass6) * 100) + \"%\";\r\n  paiement5.innerHTML =\r\n    Math.round((PaiementsEffec5.length / effectifClass5) * 100) + \"%\";\r\n  paiement4.innerHTML =\r\n    Math.round((PaiementsEffec4.length / effectifClass4) * 100) + \"%\";\r\n  paiement3.innerHTML =\r\n    Math.round((PaiementsEffec3.length / effectifClass3) * 100) + \"%\";\r\n  // console.log(paiement3.innerHTML);\r\n  sum =\r\n    parseFloat(paiement6.innerHTML) +\r\n    parseFloat(paiement5.innerHTML) +\r\n    parseFloat(paiement4.innerHTML) +\r\n    parseFloat(paiement3.innerHTML);\r\n\r\n    sum = sum / 4;\r\n    sum = sum.toFixed(0);\r\n    \r\n    // console.log(sum);\r\n    // console.log(Number.isNaN(sum));\r\n  \r\n    /*****PARTIE PROGRESS BAR****/\r\n  \r\n    let circularProgress = document.querySelector(\".circular-progress\");\r\n    let progressValue = document.querySelector(\".progress-value\");\r\n  \r\n    let progressStartValue = 0;\r\n    let progressEndValue = typeof sum !== \"undefined\" ? sum : 0;\r\n    let speed = 70;\r\n  \r\n    if (isNaN(sum)) {\r\n      \r\n    } else if (sum === \"0\") {\r\n      progressStartValue = 0;\r\n      progressValue.textContent = `${progressStartValue}%`;\r\n      circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n        progressStartValue * 3.6\r\n      }deg, #ededed 0deg)`;\r\n    } else if (!isNaN(sum) && sum !== \"0\") {\r\n      let progress = setInterval(() => {\r\n        progressStartValue++;\r\n  \r\n        progressValue.textContent = `${progressStartValue}%`;\r\n        circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n          progressStartValue * 3.6\r\n        }deg, #ededed 0deg)`;\r\n  \r\n        if (progressStartValue == progressEndValue) {\r\n          clearInterval(progress);\r\n        }\r\n      }, speed);\r\n      sum = \"\"\r\n      console.log(sum);\r\n    }\r\n\r\n});\r\n\r\nconst selectMois = document.getElementById(\"selectMois\");\r\n\r\n// const dateDuJour = new Date();\r\n// const moisActuel = dateDuJour.getMonth() + 1;\r\n\r\n// console.log(dateDuJour, moisActuel);\r\n// selectMois.value = moisActuel.toString();\r\n\r\nselectMois.addEventListener(\"change\", (e) => {\r\n  const moisSelectionne = selectMois.value;\r\n  // const mois = e.target.value;\r\n  console.log(moisSelectionne);\r\n  sum = \"0\"\r\n  ;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(certiesRef2, (snapshot) => {\r\n    let certiesRef2 = [];\r\n    snapshot.docs.forEach((doc) => {\r\n      certiesRef2.push({ ...doc.data(), id: doc.id });\r\n    });\r\n    certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n    let PaiementsEffec6 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"6ème\" && utili.mois === moisSelectionne\r\n    );\r\n    let PaiementsEffec5 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"5ème\" && utili.mois === moisSelectionne\r\n    );\r\n    let PaiementsEffec4 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"4ème\" && utili.mois === moisSelectionne\r\n    );\r\n    let PaiementsEffec3 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"3ème\" && utili.mois === moisSelectionne\r\n    );\r\n\r\n    paiement6.innerHTML =\r\n      Math.round((PaiementsEffec6.length / effectifClass6) * 100) + \"%\";\r\n    paiement5.innerHTML =\r\n      Math.round((PaiementsEffec5.length / effectifClass5) * 100) + \"%\";\r\n    paiement4.innerHTML =\r\n      Math.round((PaiementsEffec4.length / effectifClass4) * 100) + \"%\";\r\n    paiement3.innerHTML =\r\n      Math.round((PaiementsEffec3.length / effectifClass3) * 100) + \"%\";\r\n  });\r\n  sum = \"\"\r\n  sum =\r\n    parseFloat(paiement6.innerHTML) +\r\n    parseFloat(paiement5.innerHTML) +\r\n    parseFloat(paiement4.innerHTML) +\r\n    parseFloat(paiement3.innerHTML);\r\n\r\n  sum = sum / 4;\r\n  sum = sum.toFixed(0);\r\n  \r\n  // console.log(sum);\r\n  // console.log(Number.isNaN(sum));\r\n\r\n  /*****PARTIE PROGRESS BAR****/\r\n\r\n  let circularProgress = document.querySelector(\".circular-progress\");\r\n  let progressValue = document.querySelector(\".progress-value\");\r\n\r\n  let progressStartValue = 0;\r\n  let progressEndValue = typeof sum !== \"undefined\" ? sum : 0;\r\n  let speed = 70;\r\n\r\n  if (isNaN(sum)) {\r\n    \r\n  } else if (sum === \"0\") {\r\n    progressStartValue = 0;\r\n    progressValue.textContent = `${progressStartValue}%`;\r\n    circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n      progressStartValue * 3.6\r\n    }deg, #ededed 0deg)`;\r\n  } else if (!isNaN(sum) && sum !== \"0\") {\r\n    let progress = setInterval(() => {\r\n      progressStartValue++;\r\n\r\n      progressValue.textContent = `${progressStartValue}%`;\r\n      circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n        progressStartValue * 3.6\r\n      }deg, #ededed 0deg)`;\r\n\r\n      if (progressStartValue == progressEndValue) {\r\n        clearInterval(progress);\r\n      }\r\n    }, speed);\r\n    sum = \"\"\r\n    console.log(sum);\r\n  }\r\n\r\n  //  }\r\n\r\n  // }\r\n\r\n  // let progress = setInterval(() => {\r\n  //         progressStartValue++;\r\n\r\n  //         progressValue.textContent = `${progressStartValue}%`;\r\n  //         circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n  //           progressStartValue * 3.6\r\n  //         }deg, #ededed 0deg)`;\r\n\r\n  //         if (progressStartValue == progressEndValue) {\r\n  //           clearInterval(progress);\r\n  //         }\r\n  //       }, speed);\r\n});\r\n\r\n// partie ladji HISTORIQUE\r\nlet date = new Date();\r\nlet year = date.getFullYear();\r\nlet month = date.getMonth() + 1;\r\nlet day = date.getDate();\r\n\r\nconst myTbody1 = document.querySelector(\".myTd1\");\r\nconst myTbody2 = document.querySelector(\".myTd2\");\r\nconst totalIns = document.querySelector(\".totalIns\");\r\nconst totalMens = document.querySelector(\".totalMens\");\r\n\r\nmyTbody1.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`;\r\nmyTbody2.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`;\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(eleve).then((snapshot) => {\r\n  let eleve = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleve.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  let totalInscription = 0;\r\n  eleve.forEach((utili) => {\r\n    totalInscription += parseInt(utili.montantInsc);\r\n  });\r\n\r\n  totalIns.innerHTML = `<b>${totalInscription.toLocaleString('en-US')} Fcfa</b>`;\r\n});\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(certiesRef2).then((snapshot) => {\r\n  let certiesRef2 = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    certiesRef2.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  let totalMensualiter = 0;\r\n  certiesRef2.forEach((utili) => {\r\n    totalMensualiter += parseInt(utili.montantpay);\r\n  });\r\n\r\n  // console.log(certiesRef2);\r\n  totalMens.innerHTML = `<b>${totalMensualiter.toLocaleString('en-US')} Fcfa</b>`;\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9hY2N1ZWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL2FjY3VlaWwuanM/MzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbi8vIEltcG9ydGF0aW9uIGRlcyAgc2VydmljZXNcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmLCB1cGxvYWRCeXRlcywgZ2V0RG93bmxvYWRVUkwgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmIGFzIHJlZkRhdGFiYXNlLCBzZXQsIGdldCB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxuICB1cGRhdGVQcm9maWxlLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGRvYyxcclxuICB1cGRhdGVEb2MsXHJcbiAgYWRkRG9jLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgZG9jdW1lbnRJZCxcclxuICBnZXREb2NzLFxyXG4gIGdldEZpcmVzdG9yZSxcclxuICBvblNuYXBzaG90LFxyXG4gIHNlcnZlclRpbWVzdGFtcCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDU1JvMkVad281TFFJTzc1RmV2SUJ2RUtiREQ2MUhOdVlcIixcclxuICBhdXRoRG9tYWluOiBcInZhbGlkYXRpb24tYXRlbGllci1qcy5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3ZhbGlkYXRpb24tYXRlbGllci1qcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NjYzMzIwNjIwOTBcIixcclxuICBhcHBJZDogXCIxOjQ2NjMzMjA2MjA5MDp3ZWI6ZmZiZTQ1ZWY0YTczNzFhN2I1Yjg3M1wiXHJcbn07XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICBpZiAodXNlcikge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJVdGlsaXNhdGV1ciBjb25uZWN0w6lcIik7XHJcbiAgICB2YXIgdXNlckVtYWlsID0gdXNlci5lbWFpbDtcclxuICAgIGNvbnN0IHVzZXJSZWYgPSBjb2xsZWN0aW9uKGRiLCBcInV0aWxpc2F0ZXVyc1wiKTtcclxuICAgIG9uU25hcHNob3QodXNlclJlZiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgIGxldCB1c2VyUmVmID0gW107XHJcbiAgICAgIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgdXNlclJlZi5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHVzZXJSZWYuZm9yRWFjaCgodXRpbGlzYXRldXIpID0+IHtcclxuICAgICAgICAvLyBDcsOpZXogdW5lIHLDqWbDqXJlbmNlIGF1IGRvY3VtZW50IGRlIGwndXRpbGlzYXRldXIgZGFucyBGaXJlc3RvcmVcclxuICAgICAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKGRiLCBcInV0aWxpc2F0ZXVyc1wiLCB1dGlsaXNhdGV1ci5pZCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlsaXNhdGV1ci5lbWFpbCA9PSB1c2VyRW1haWwpIHtcclxuICAgICAgICAgIGNvbnN0IFByb2ZpbE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsTmF2XCIpO1xyXG4gICAgICAgICAgY29uc3QgcHJvZmlsVm9pciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsVm9pclwiKTtcclxuICAgICAgICAgIGNvbnN0IG5vbVVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vbVVzZXJcIik7XHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXNVc2VyXCIpO1xyXG4gICAgICAgICAgUHJvZmlsTmF2LnNyYyA9IHV0aWxpc2F0ZXVyLnVybDtcclxuICAgICAgICAgIHByb2ZpbFZvaXIuc3JjID0gdXRpbGlzYXRldXIudXJsO1xyXG4gICAgICAgICAgbm9tVXNlci5pbm5lclRleHQgPSB1dGlsaXNhdGV1ci5wcmVub20gKyBcIiBcIiArIHV0aWxpc2F0ZXVyLm5vbTtcclxuICAgICAgICAgIHN0YXR1c1VzZXIuaW5uZXJUZXh0ID0gdXRpbGlzYXRldXIuc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coXCJBdWN1biB1dGlsaXNhdGV1ciBjb25uZWN0w6lcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGRlY29ubmV4aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiZnVuY3Rpb24gZGVjb25uZXhpb25cIik7XHJcbiAgY29uc3QgYnRuR3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bkdyZWVuXCIpO1xyXG4gIGJ0bkdyZWVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgc2lnbk91dChhdXRoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVdGlsaXNhdGV1ciBkw6ljb25uZWN0w6lcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4uLy4uL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4uaHRtbFwiO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIGTDqWNvbm5leGlvbiA6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZGVjb25uZXhpb24oKTtcclxuXHJcbi8vIFLDqWN1cMOpcmVyIGxhIGNvbGxlY3Rpb25cclxuY29uc3QgZWxldmUgPSBjb2xsZWN0aW9uKGRiLCBcImluc2NTY29sYXJpdGVcIik7XHJcbmNvbnN0IGNlcnRpZXNSZWYyID0gY29sbGVjdGlvbihkYiwgXCJtZW5zdWFsaXRlc1wiKTtcclxubGV0IHN1bSA9IDA7XHJcblxyXG5sZXQgZWZmZWN0aWZDbGFzczY7XHJcbmxldCBlZmZlY3RpZkNsYXNzNTtcclxubGV0IGVmZmVjdGlmQ2xhc3M0O1xyXG5sZXQgZWZmZWN0aWZDbGFzczM7XHJcblxyXG5jb25zdCBlZmZlY3RpZjYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVmZmVjdGlmNlwiKTtcclxuY29uc3QgZWZmZWN0aWY1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZlY3RpZjVcIik7XHJcbmNvbnN0IGVmZmVjdGlmNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWZmZWN0aWY0XCIpO1xyXG5jb25zdCBlZmZlY3RpZjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVmZmVjdGlmM1wiKTtcclxuXHJcbm9uU25hcHNob3QoZWxldmUsIChzbmFwc2hvdCkgPT4ge1xyXG4gIGxldCBlbGV2ZXMgPSBbXTtcclxuICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgZWxldmVzLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gIH0pO1xyXG4gIGVsZXZlcy5zb3J0KChhLCBiKSA9PiBiLmRhdGVEYWpvdXQgLSBhLmRhdGVEYWpvdXQpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhlbGV2ZXMpO1xyXG4gIGVmZmVjdGlmQ2xhc3M2ID0gZWxldmVzLmZpbHRlcigodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCI2w6htZVwiKS5sZW5ndGg7XHJcbiAgZWZmZWN0aWZDbGFzczUgPSBlbGV2ZXMuZmlsdGVyKCh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjXDqG1lXCIpLmxlbmd0aDtcclxuICBlZmZlY3RpZkNsYXNzNCA9IGVsZXZlcy5maWx0ZXIoKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiNMOobWVcIikubGVuZ3RoO1xyXG4gIGVmZmVjdGlmQ2xhc3MzID0gZWxldmVzLmZpbHRlcigodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCIzw6htZVwiKS5sZW5ndGg7XHJcblxyXG4gIGVmZmVjdGlmNi5pbm5lckhUTUwgPSBlZmZlY3RpZkNsYXNzNiArIFwiIMOpbMOodmVzXCI7XHJcbiAgZWZmZWN0aWY1LmlubmVySFRNTCA9IGVmZmVjdGlmQ2xhc3M1ICsgXCIgw6lsw6h2ZXNcIjtcclxuICBlZmZlY3RpZjQuaW5uZXJIVE1MID0gZWZmZWN0aWZDbGFzczQgKyBcIiDDqWzDqHZlc1wiO1xyXG4gIGVmZmVjdGlmMy5pbm5lckhUTUwgPSBlZmZlY3RpZkNsYXNzMyArIFwiIMOpbMOodmVzXCI7XHJcbn0pO1xyXG5cclxub25TbmFwc2hvdChjZXJ0aWVzUmVmMiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgbGV0IGNlcnRpZXNSZWYyID0gW107XHJcbiAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIGNlcnRpZXNSZWYyLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gIH0pO1xyXG4gIGNlcnRpZXNSZWYyLnNvcnQoKGEsIGIpID0+IGIuZGF0ZURham91dCAtIGEuZGF0ZURham91dCk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNlcnRpZXNSZWYyKTtcclxuICBsZXQgUGFpZW1lbnRzRWZmZWM2ID0gY2VydGllc1JlZjIuZmlsdGVyKFxyXG4gICAgKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiNsOobWVcIiAmJiB1dGlsaS5tb2lzID09PSBcIm5vdmVtYnJlXCJcclxuICApO1xyXG4gIGxldCBQYWllbWVudHNFZmZlYzUgPSBjZXJ0aWVzUmVmMi5maWx0ZXIoXHJcbiAgICAodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCI1w6htZVwiICYmIHV0aWxpLm1vaXMgPT09IFwibm92ZW1icmVcIlxyXG4gICk7XHJcbiAgbGV0IFBhaWVtZW50c0VmZmVjNCA9IGNlcnRpZXNSZWYyLmZpbHRlcihcclxuICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjTDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gXCJub3ZlbWJyZVwiXHJcbiAgKTtcclxuICBsZXQgUGFpZW1lbnRzRWZmZWMzID0gY2VydGllc1JlZjIuZmlsdGVyKFxyXG4gICAgKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiM8OobWVcIiAmJiB1dGlsaS5tb2lzID09PSBcIm5vdmVtYnJlXCJcclxuICApO1xyXG5cclxuICBwYWllbWVudDYuaW5uZXJIVE1MID1cclxuICAgIE1hdGgucm91bmQoKFBhaWVtZW50c0VmZmVjNi5sZW5ndGggLyBlZmZlY3RpZkNsYXNzNikgKiAxMDApICsgXCIlXCI7XHJcbiAgcGFpZW1lbnQ1LmlubmVySFRNTCA9XHJcbiAgICBNYXRoLnJvdW5kKChQYWllbWVudHNFZmZlYzUubGVuZ3RoIC8gZWZmZWN0aWZDbGFzczUpICogMTAwKSArIFwiJVwiO1xyXG4gIHBhaWVtZW50NC5pbm5lckhUTUwgPVxyXG4gICAgTWF0aC5yb3VuZCgoUGFpZW1lbnRzRWZmZWM0Lmxlbmd0aCAvIGVmZmVjdGlmQ2xhc3M0KSAqIDEwMCkgKyBcIiVcIjtcclxuICBwYWllbWVudDMuaW5uZXJIVE1MID1cclxuICAgIE1hdGgucm91bmQoKFBhaWVtZW50c0VmZmVjMy5sZW5ndGggLyBlZmZlY3RpZkNsYXNzMykgKiAxMDApICsgXCIlXCI7XHJcbiAgLy8gY29uc29sZS5sb2cocGFpZW1lbnQzLmlubmVySFRNTCk7XHJcbiAgc3VtID1cclxuICAgIHBhcnNlRmxvYXQocGFpZW1lbnQ2LmlubmVySFRNTCkgK1xyXG4gICAgcGFyc2VGbG9hdChwYWllbWVudDUuaW5uZXJIVE1MKSArXHJcbiAgICBwYXJzZUZsb2F0KHBhaWVtZW50NC5pbm5lckhUTUwpICtcclxuICAgIHBhcnNlRmxvYXQocGFpZW1lbnQzLmlubmVySFRNTCk7XHJcblxyXG4gICAgc3VtID0gc3VtIC8gNDtcclxuICAgIHN1bSA9IHN1bS50b0ZpeGVkKDApO1xyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdW0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coTnVtYmVyLmlzTmFOKHN1bSkpO1xyXG4gIFxyXG4gICAgLyoqKioqUEFSVElFIFBST0dSRVNTIEJBUioqKiovXHJcbiAgXHJcbiAgICBsZXQgY2lyY3VsYXJQcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY3VsYXItcHJvZ3Jlc3NcIik7XHJcbiAgICBsZXQgcHJvZ3Jlc3NWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3MtdmFsdWVcIik7XHJcbiAgXHJcbiAgICBsZXQgcHJvZ3Jlc3NTdGFydFZhbHVlID0gMDtcclxuICAgIGxldCBwcm9ncmVzc0VuZFZhbHVlID0gdHlwZW9mIHN1bSAhPT0gXCJ1bmRlZmluZWRcIiA/IHN1bSA6IDA7XHJcbiAgICBsZXQgc3BlZWQgPSA3MDtcclxuICBcclxuICAgIGlmIChpc05hTihzdW0pKSB7XHJcbiAgICAgIFxyXG4gICAgfSBlbHNlIGlmIChzdW0gPT09IFwiMFwiKSB7XHJcbiAgICAgIHByb2dyZXNzU3RhcnRWYWx1ZSA9IDA7XHJcbiAgICAgIHByb2dyZXNzVmFsdWUudGV4dENvbnRlbnQgPSBgJHtwcm9ncmVzc1N0YXJ0VmFsdWV9JWA7XHJcbiAgICAgIGNpcmN1bGFyUHJvZ3Jlc3Muc3R5bGUuYmFja2dyb3VuZCA9IGBjb25pYy1ncmFkaWVudChyZ2IoMzIsIDIxNSwgMzIpICR7XHJcbiAgICAgICAgcHJvZ3Jlc3NTdGFydFZhbHVlICogMy42XHJcbiAgICAgIH1kZWcsICNlZGVkZWQgMGRlZylgO1xyXG4gICAgfSBlbHNlIGlmICghaXNOYU4oc3VtKSAmJiBzdW0gIT09IFwiMFwiKSB7XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBwcm9ncmVzc1N0YXJ0VmFsdWUrKztcclxuICBcclxuICAgICAgICBwcm9ncmVzc1ZhbHVlLnRleHRDb250ZW50ID0gYCR7cHJvZ3Jlc3NTdGFydFZhbHVlfSVgO1xyXG4gICAgICAgIGNpcmN1bGFyUHJvZ3Jlc3Muc3R5bGUuYmFja2dyb3VuZCA9IGBjb25pYy1ncmFkaWVudChyZ2IoMzIsIDIxNSwgMzIpICR7XHJcbiAgICAgICAgICBwcm9ncmVzc1N0YXJ0VmFsdWUgKiAzLjZcclxuICAgICAgICB9ZGVnLCAjZWRlZGVkIDBkZWcpYDtcclxuICBcclxuICAgICAgICBpZiAocHJvZ3Jlc3NTdGFydFZhbHVlID09IHByb2dyZXNzRW5kVmFsdWUpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgc3BlZWQpO1xyXG4gICAgICBzdW0gPSBcIlwiXHJcbiAgICAgIGNvbnNvbGUubG9nKHN1bSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbmNvbnN0IHNlbGVjdE1vaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdE1vaXNcIik7XHJcblxyXG4vLyBjb25zdCBkYXRlRHVKb3VyID0gbmV3IERhdGUoKTtcclxuLy8gY29uc3QgbW9pc0FjdHVlbCA9IGRhdGVEdUpvdXIuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhkYXRlRHVKb3VyLCBtb2lzQWN0dWVsKTtcclxuLy8gc2VsZWN0TW9pcy52YWx1ZSA9IG1vaXNBY3R1ZWwudG9TdHJpbmcoKTtcclxuXHJcbnNlbGVjdE1vaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gIGNvbnN0IG1vaXNTZWxlY3Rpb25uZSA9IHNlbGVjdE1vaXMudmFsdWU7XHJcbiAgLy8gY29uc3QgbW9pcyA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKG1vaXNTZWxlY3Rpb25uZSk7XHJcbiAgc3VtID0gXCIwXCJcclxuICBvblNuYXBzaG90KGNlcnRpZXNSZWYyLCAoc25hcHNob3QpID0+IHtcclxuICAgIGxldCBjZXJ0aWVzUmVmMiA9IFtdO1xyXG4gICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgY2VydGllc1JlZjIucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgICB9KTtcclxuICAgIGNlcnRpZXNSZWYyLnNvcnQoKGEsIGIpID0+IGIuZGF0ZURham91dCAtIGEuZGF0ZURham91dCk7XHJcblxyXG4gICAgbGV0IFBhaWVtZW50c0VmZmVjNiA9IGNlcnRpZXNSZWYyLmZpbHRlcihcclxuICAgICAgKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiNsOobWVcIiAmJiB1dGlsaS5tb2lzID09PSBtb2lzU2VsZWN0aW9ubmVcclxuICAgICk7XHJcbiAgICBsZXQgUGFpZW1lbnRzRWZmZWM1ID0gY2VydGllc1JlZjIuZmlsdGVyKFxyXG4gICAgICAodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCI1w6htZVwiICYmIHV0aWxpLm1vaXMgPT09IG1vaXNTZWxlY3Rpb25uZVxyXG4gICAgKTtcclxuICAgIGxldCBQYWllbWVudHNFZmZlYzQgPSBjZXJ0aWVzUmVmMi5maWx0ZXIoXHJcbiAgICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjTDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gbW9pc1NlbGVjdGlvbm5lXHJcbiAgICApO1xyXG4gICAgbGV0IFBhaWVtZW50c0VmZmVjMyA9IGNlcnRpZXNSZWYyLmZpbHRlcihcclxuICAgICAgKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiM8OobWVcIiAmJiB1dGlsaS5tb2lzID09PSBtb2lzU2VsZWN0aW9ubmVcclxuICAgICk7XHJcblxyXG4gICAgcGFpZW1lbnQ2LmlubmVySFRNTCA9XHJcbiAgICAgIE1hdGgucm91bmQoKFBhaWVtZW50c0VmZmVjNi5sZW5ndGggLyBlZmZlY3RpZkNsYXNzNikgKiAxMDApICsgXCIlXCI7XHJcbiAgICBwYWllbWVudDUuaW5uZXJIVE1MID1cclxuICAgICAgTWF0aC5yb3VuZCgoUGFpZW1lbnRzRWZmZWM1Lmxlbmd0aCAvIGVmZmVjdGlmQ2xhc3M1KSAqIDEwMCkgKyBcIiVcIjtcclxuICAgIHBhaWVtZW50NC5pbm5lckhUTUwgPVxyXG4gICAgICBNYXRoLnJvdW5kKChQYWllbWVudHNFZmZlYzQubGVuZ3RoIC8gZWZmZWN0aWZDbGFzczQpICogMTAwKSArIFwiJVwiO1xyXG4gICAgcGFpZW1lbnQzLmlubmVySFRNTCA9XHJcbiAgICAgIE1hdGgucm91bmQoKFBhaWVtZW50c0VmZmVjMy5sZW5ndGggLyBlZmZlY3RpZkNsYXNzMykgKiAxMDApICsgXCIlXCI7XHJcbiAgfSk7XHJcbiAgc3VtID0gXCJcIlxyXG4gIHN1bSA9XHJcbiAgICBwYXJzZUZsb2F0KHBhaWVtZW50Ni5pbm5lckhUTUwpICtcclxuICAgIHBhcnNlRmxvYXQocGFpZW1lbnQ1LmlubmVySFRNTCkgK1xyXG4gICAgcGFyc2VGbG9hdChwYWllbWVudDQuaW5uZXJIVE1MKSArXHJcbiAgICBwYXJzZUZsb2F0KHBhaWVtZW50My5pbm5lckhUTUwpO1xyXG5cclxuICBzdW0gPSBzdW0gLyA0O1xyXG4gIHN1bSA9IHN1bS50b0ZpeGVkKDApO1xyXG4gIFxyXG4gIC8vIGNvbnNvbGUubG9nKHN1bSk7XHJcbiAgLy8gY29uc29sZS5sb2coTnVtYmVyLmlzTmFOKHN1bSkpO1xyXG5cclxuICAvKioqKipQQVJUSUUgUFJPR1JFU1MgQkFSKioqKi9cclxuXHJcbiAgbGV0IGNpcmN1bGFyUHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmN1bGFyLXByb2dyZXNzXCIpO1xyXG4gIGxldCBwcm9ncmVzc1ZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy12YWx1ZVwiKTtcclxuXHJcbiAgbGV0IHByb2dyZXNzU3RhcnRWYWx1ZSA9IDA7XHJcbiAgbGV0IHByb2dyZXNzRW5kVmFsdWUgPSB0eXBlb2Ygc3VtICE9PSBcInVuZGVmaW5lZFwiID8gc3VtIDogMDtcclxuICBsZXQgc3BlZWQgPSA3MDtcclxuXHJcbiAgaWYgKGlzTmFOKHN1bSkpIHtcclxuICAgIFxyXG4gIH0gZWxzZSBpZiAoc3VtID09PSBcIjBcIikge1xyXG4gICAgcHJvZ3Jlc3NTdGFydFZhbHVlID0gMDtcclxuICAgIHByb2dyZXNzVmFsdWUudGV4dENvbnRlbnQgPSBgJHtwcm9ncmVzc1N0YXJ0VmFsdWV9JWA7XHJcbiAgICBjaXJjdWxhclByb2dyZXNzLnN0eWxlLmJhY2tncm91bmQgPSBgY29uaWMtZ3JhZGllbnQocmdiKDMyLCAyMTUsIDMyKSAke1xyXG4gICAgICBwcm9ncmVzc1N0YXJ0VmFsdWUgKiAzLjZcclxuICAgIH1kZWcsICNlZGVkZWQgMGRlZylgO1xyXG4gIH0gZWxzZSBpZiAoIWlzTmFOKHN1bSkgJiYgc3VtICE9PSBcIjBcIikge1xyXG4gICAgbGV0IHByb2dyZXNzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBwcm9ncmVzc1N0YXJ0VmFsdWUrKztcclxuXHJcbiAgICAgIHByb2dyZXNzVmFsdWUudGV4dENvbnRlbnQgPSBgJHtwcm9ncmVzc1N0YXJ0VmFsdWV9JWA7XHJcbiAgICAgIGNpcmN1bGFyUHJvZ3Jlc3Muc3R5bGUuYmFja2dyb3VuZCA9IGBjb25pYy1ncmFkaWVudChyZ2IoMzIsIDIxNSwgMzIpICR7XHJcbiAgICAgICAgcHJvZ3Jlc3NTdGFydFZhbHVlICogMy42XHJcbiAgICAgIH1kZWcsICNlZGVkZWQgMGRlZylgO1xyXG5cclxuICAgICAgaWYgKHByb2dyZXNzU3RhcnRWYWx1ZSA9PSBwcm9ncmVzc0VuZFZhbHVlKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwcm9ncmVzcyk7XHJcbiAgICAgIH1cclxuICAgIH0sIHNwZWVkKTtcclxuICAgIHN1bSA9IFwiXCJcclxuICAgIGNvbnNvbGUubG9nKHN1bSk7XHJcbiAgfVxyXG5cclxuICAvLyAgfVxyXG5cclxuICAvLyB9XHJcblxyXG4gIC8vIGxldCBwcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAvLyAgICAgICAgIHByb2dyZXNzU3RhcnRWYWx1ZSsrO1xyXG5cclxuICAvLyAgICAgICAgIHByb2dyZXNzVmFsdWUudGV4dENvbnRlbnQgPSBgJHtwcm9ncmVzc1N0YXJ0VmFsdWV9JWA7XHJcbiAgLy8gICAgICAgICBjaXJjdWxhclByb2dyZXNzLnN0eWxlLmJhY2tncm91bmQgPSBgY29uaWMtZ3JhZGllbnQocmdiKDMyLCAyMTUsIDMyKSAke1xyXG4gIC8vICAgICAgICAgICBwcm9ncmVzc1N0YXJ0VmFsdWUgKiAzLjZcclxuICAvLyAgICAgICAgIH1kZWcsICNlZGVkZWQgMGRlZylgO1xyXG5cclxuICAvLyAgICAgICAgIGlmIChwcm9ncmVzc1N0YXJ0VmFsdWUgPT0gcHJvZ3Jlc3NFbmRWYWx1ZSkge1xyXG4gIC8vICAgICAgICAgICBjbGVhckludGVydmFsKHByb2dyZXNzKTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9LCBzcGVlZCk7XHJcbn0pO1xyXG5cclxuLy8gcGFydGllIGxhZGppIEhJU1RPUklRVUVcclxubGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5sZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxubGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxubGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuY29uc3QgbXlUYm9keTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15VGQxXCIpO1xyXG5jb25zdCBteVRib2R5MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlUZDJcIik7XHJcbmNvbnN0IHRvdGFsSW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3RhbEluc1wiKTtcclxuY29uc3QgdG90YWxNZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3RhbE1lbnNcIik7XHJcblxyXG5teVRib2R5MS5pbm5lckhUTUwgPSBgPHNwYW4+JHtkYXl9PC9zcGFuPjxzcGFuPi8ke21vbnRofTxzYXBuPi8ke3llYXJ9PC9zcGFuPmA7XHJcbm15VGJvZHkyLmlubmVySFRNTCA9IGA8c3Bhbj4ke2RheX08L3NwYW4+PHNwYW4+LyR7bW9udGh9PHNhcG4+LyR7eWVhcn08L3NwYW4+YDtcclxuXHJcbmdldERvY3MoZWxldmUpLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgbGV0IGVsZXZlID0gW107XHJcbiAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIGVsZXZlLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gIH0pO1xyXG4gIGxldCB0b3RhbEluc2NyaXB0aW9uID0gMDtcclxuICBlbGV2ZS5mb3JFYWNoKCh1dGlsaSkgPT4ge1xyXG4gICAgdG90YWxJbnNjcmlwdGlvbiArPSBwYXJzZUludCh1dGlsaS5tb250YW50SW5zYyk7XHJcbiAgfSk7XHJcblxyXG4gIHRvdGFsSW5zLmlubmVySFRNTCA9IGA8Yj4ke3RvdGFsSW5zY3JpcHRpb24udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9IEZjZmE8L2I+YDtcclxufSk7XHJcblxyXG5nZXREb2NzKGNlcnRpZXNSZWYyKS50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gIGxldCBjZXJ0aWVzUmVmMiA9IFtdO1xyXG4gIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBjZXJ0aWVzUmVmMi5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICB9KTtcclxuICBsZXQgdG90YWxNZW5zdWFsaXRlciA9IDA7XHJcbiAgY2VydGllc1JlZjIuZm9yRWFjaCgodXRpbGkpID0+IHtcclxuICAgIHRvdGFsTWVuc3VhbGl0ZXIgKz0gcGFyc2VJbnQodXRpbGkubW9udGFudHBheSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNlcnRpZXNSZWYyKTtcclxuICB0b3RhbE1lbnMuaW5uZXJIVE1MID0gYDxiPiR7dG90YWxNZW5zdWFsaXRlci50b0xvY2FsZVN0cmluZygnZW4tVVMnKX0gRmNmYTwvYj5gO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pagesJS/accueil.js\n");

/***/ })

}]);