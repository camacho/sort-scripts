const sortScripts = require('./index.js');

describe('sortScripts', () => {
  it('sorts based on prefix and suffix', () => {
    const scripts = {
      test: 'jest',
      pretest: 'check-engines',
      postmerge: 'lint-staged',
      docs: 'markdown-magic',
      postdocs: 'echo "\'.md\' files updated"',
    };

    expect(sortScripts(scripts)).toMatchSnapshot();
  });
});
