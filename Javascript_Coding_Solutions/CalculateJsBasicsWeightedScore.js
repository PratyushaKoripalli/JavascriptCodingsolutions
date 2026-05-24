function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    const finalScore = (passed * 2) - (failed * 1) + (skipped * 0);
    return finalScore;
}

calculateJsBasicsWeightedScore(2, 2, 1)