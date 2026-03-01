const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');
let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('const LOGO_B64 =')) {
        if (!lines[i].includes('const LOGO_B64 = "') && !lines[i].includes('const LOGO_B64 = `')) {
            let b64 = lines[i].substring(16).trim();
            if (b64.endsWith(';')) b64 = b64.slice(0, -1);
            lines[i] = `const LOGO_B64 = "${b64}";`;
            break;
        }
    }
}

fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
