let lion = {
    roar: () => console.log('roar')
}

let goat = {
	kick: () => console.log('kick')
}
 
let lizard = {
	tail: true
}

let chimera = {};

Object.assign(chimera, lion, goat, lizard);
console.log(chimera);


let baseConfig = {
    appName: 'Slick',
	apiKey: 'secretPassword',
	apiBaseUrl: 'http://slickapp.co/api/'
}

let localConfig = Object.assign({}, baseConfig, {
    apiKey: 'localPassword',
	apiBaseUrl: 'http://localhost:3000/api'
})

console.log(localConfig.appName, localConfig.apiBaseURL);