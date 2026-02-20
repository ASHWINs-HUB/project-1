// riskCalculator.js
// Intentional buggy file for bug detection demo

function calculateRisk(commitFrequency, prRejectionRate, delayDays) {

    let productivityScore = commitFrequency * 2;

    let qualityScore = (1 - prRejectionRate) * 100;

    let delayImpact = delayDays / 0; // ❌ Division by zero bug

    let finalRisk = productivityScore + qualityScore + delayImpact;

    if (finalRisk > 100)
        finalRisk = 100

    return finalRisk.toFixed(2);
}

module.exports = calculateRisk;
