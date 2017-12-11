'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

// build.task('upload-to-sharepoint', { 
//     execute: (config) => {
//         return new Promise((resolve, reject) => {
//             const deployFolder = require('./config/copy-assets.json');
//             const folderLocation = `./${deployFolder.deployCdnPath}/**/*.*`;
//             return gulp.src(folderLocation)
//             .pipe(spsync({
//                 "username": "<username>",
//                 "password": "<password>",
//                 "site": "https://<tenant>.sharepoint.com/<relative-site-path>",
//                 "libraryPath": "<document-library-URL>",
//                 "publish": true
//             }))
//             .on('finish', resolve);
//         });
//     }
// });

build.initialize(gulp);
