const url = require('url');

const mUrl = new url.URL('http://www.google.com:4042?q=node&fav=true');

// Serialised url
console.log(mUrl.toString());

// Root domain
console.log(mUrl.host);

// Hostname
console.log(mUrl.hostname);

// Pathname
console.log(mUrl.pathname);

// Serailised query
console.log(mUrl.search);

// Params object
console.log(mUrl.searchParams);

// Add params
mUrl.searchParams.append('fast', 'yes');
console.log(mUrl.searchParams);

// Loop through params
mUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});
