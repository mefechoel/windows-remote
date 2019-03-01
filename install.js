const fs = require('fs');
const path = require('path');

const data = `
cd ${__dirname}\\backend
npm start
`;

const desktop = path.resolve(process.argv[2] + '\\Desktop');

fs.writeFileSync(desktop + '\\remote-control.bat', data, 'utf-8');
