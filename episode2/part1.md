


npm 

package.json - config for npm , track of dependencies

Dev dependencies 


^ - minor version
~ - patch version
* - any version


npm install -D 

transitive dependencies - dependencies of dependencies


bundler 
parcel
webpack 
rollup 


package.lock - lock the version of the dependencies


semantic versioning
![semantic versioning](image.png)


Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format, e.g. 1.0.0-alpha.




npm vs npx

npx - execute npm package binaries

npm vs pnpm vs yarn 





parcel -


browserList 



 build , host on localhost , watch for changes , hot reload

npx parcel index.html

browser error - browser scripts normal javascript cant have imports and exports 
how to resolve - use type module in script tag

< script type="module" scr="./App.js" >




TODO:https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658