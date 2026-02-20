// riskEngine.js
// Intentional runtime bug

function calculateRisk(score, threshold) {

    let riskLevel = score / threshold;

    if (riskLevel > 1) {
        alertMessage = "High Risk";  // ❌ undefined variable (no let/const)
    }

    return alertMessage;
}

module.exports = calculateRisk;
