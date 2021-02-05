// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDnmbvk9wnElWBgucr5Rwl1jsVHnGOFmKc",
    authDomain: "lic-helper.firebaseapp.com",
    databaseURL: "https://lic-helper.firebaseio.com",
    projectId: "lic-helper",
    storageBucket: "lic-helper.appspot.com",
    messagingSenderId: "705456202172",
    appId: "1:705456202172:web:3f44fe3507d15ce68c4bb9"
  }
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
