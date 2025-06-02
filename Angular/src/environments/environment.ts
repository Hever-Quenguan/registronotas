// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultauth: 'fakebackend',
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  },

  apiUrl: "http://190.147.110.153:8082/api/",
  //apiUrl: "https://localhost:7042/api/",
  //apiUrl: "http://localhost:8085/api/",
  credentialsKey: 'ZX$JMv6ddlOiCId5QxHpTdEg98&g5w2Te4GOX#RN6TyTxA5q@vp0gJ!$CX3HSXba$ofXi64xxdHqlO4DQt&vUe0ibIYs%2Yz0*Bv',
  credentialsApiKey: 'h%DY7tPw*MG22lBMdcnWHQPSKQ4S#TfnY5hfYH1D26z9QhFnR#'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
