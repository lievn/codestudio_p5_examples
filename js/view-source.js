// This script provides a link back to the original source code on GitHub.
const scriptId = document.location.pathname.split('/')[1];
const gitHubUrl = `https://github.com/lievn/codestudio_p5_examples/blob/main/${scriptId}/sketch.js`
const wrapperDiv = document.createElement('div');
wrapperDiv.className="view-source";
wrapperDiv.innerHTML = `<a href="${gitHubUrl}" target="_blank">View Source</a>`
document.body.appendChild(wrapperDiv)