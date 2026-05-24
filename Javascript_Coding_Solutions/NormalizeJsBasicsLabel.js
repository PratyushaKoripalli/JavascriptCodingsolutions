function normalizeJsBasicsLabel(label) {
  const cleaned = label.trim().toLowerCase();
  const withHyphen = cleaned.replace(/[^a-z0-9]+/g, '-');
  return `js-basic-${withHyphen}`;
}

normalizeJsBasicsLabel(" Login Button ")