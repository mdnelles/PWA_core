module.exports = {
   "globDirectory": "build/",
   "globPatterns": ["**/*.{json,png,ico,svg,html,js,css,txt}"],
   "swSrc": "src/sw.js",
   "swDest": "build/sw.js",
   "globIgnores": ["../workbox-config.js"],
};
