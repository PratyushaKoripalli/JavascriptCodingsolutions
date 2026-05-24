function isValidJsBasicsIdentifier(name) {

  const trimmed = name.trim();
  if (trimmed.length === 0) return false;
  const reservedWords = ["let", "const", "var", "class", "function", "return"];
  if (reservedWords.includes(trimmed)) return false;

  const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
  return identifierRegex.test(trimmed) ;
}
