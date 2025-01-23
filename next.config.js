const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = isGithubActions ? '/github-portifolio' : ''; 

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: repo,
};
