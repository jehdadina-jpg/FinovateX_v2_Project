import os

with open("src/App.jsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if line.startswith("const LOGO_B64 ="):
        # check if missing quotes
        if 'const LOGO_B64 = "' not in line and "const LOGO_B64 = `" not in line and "const LOGO_B64 = '" not in line:
            b64_val = line[16:].strip().strip(';')
            lines[i] = f'const LOGO_B64 = "{b64_val}";\n'
            break

with open("src/App.jsx", "w", encoding="utf-8") as f:
    f.writelines(lines)
