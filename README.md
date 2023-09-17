# Websites


[Site List](https://aneeverse.github.io/WebSites/)


const dirTree = require('directory-tree');
const path = require('path');

const projets = dirTree(path.join(__dirname, '../projets'), {extensions:/\.md/});

module.exports = {
    [...] // Shortened for lisibility
    themeConfig: {
        sidebar: {
          '/projets/': projets.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '' ),
        },
    }
};
