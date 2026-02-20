// dataFetcher.js
// Intentional async bug

async function fetchProjectData() {

    const data = fetch("https://api.example.com/projects"); 
    // ❌ Missing await

    return data.json(); // This will fail
}

module.exports = fetchProjectData;
