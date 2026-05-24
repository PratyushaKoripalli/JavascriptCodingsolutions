function classifyJsBasicsScore(score) {
    if (score >= 90) {
        return "EXCELLENT"
    }
    if (score >= 75) {
        return "GOOD"
    }
    if (score >= 50) {
        return "NEEDS_PRACTICE"
    }
    if (score < 50) {
        return "REVISIT"
    }

}

classifyJsBasicsScore(91);