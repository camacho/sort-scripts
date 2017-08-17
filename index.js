module.exports = function sortScripts(scripts) {
  return Object.keys(scripts)
    .sort((a, b) => {
      const regex = /^(pre|post)?(.*)$/;
      let [, prefixA, suffixA] = a.match(regex);
      let [, prefixB, suffixB] = b.match(regex);

      // Disregard the prefix if there is no suffix method
      // (mostly for npm hook scripts)
      if (!scripts[suffixA]) suffixA = a;
      if (!scripts[suffixB]) suffixB = b;

      let response = 0;

      if (suffixA === suffixB) {
        // A should come before B
        if (prefixA === 'pre' || prefixB === 'post') response = -1;
        // B should come before A
        if (prefixA === 'post' || prefixB === 'pre') response = 1;
      } else {
        // Straight compared
        response = suffixA < suffixB ? -1 : 1;
      }

      return response;
    })
    .map(key => [key, scripts[key]]);
};
