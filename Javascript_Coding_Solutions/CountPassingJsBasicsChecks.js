function countPassingJsBasicsChecks(results) {
    const passingItems = results.filter(item =>
        item.toLowerCase().includes('pass'));
    return passingItems.length;
}

countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"])