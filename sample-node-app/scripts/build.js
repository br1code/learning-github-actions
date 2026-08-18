const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const distDirectory = path.join(projectRoot, 'dist');
const sourceDirectory = path.join(projectRoot, 'src');

fs.rmSync(distDirectory, { recursive: true, force: true });
fs.mkdirSync(distDirectory, { recursive: true });

for (const fileName of ['app.js', 'math.js']) {
  fs.copyFileSync(
    path.join(sourceDirectory, fileName),
    path.join(distDirectory, fileName),
  );
}

const packageManifest = JSON.parse(
  fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'),
);

fs.writeFileSync(
  path.join(distDirectory, 'package.json'),
  `${JSON.stringify(
    {
      name: packageManifest.name,
      version: packageManifest.version,
      private: true,
      main: 'app.js',
      dependencies: packageManifest.dependencies,
    },
    null,
    2,
  )}
`,
);

console.log(`Build output created in ${path.relative(projectRoot, distDirectory)}/`);
