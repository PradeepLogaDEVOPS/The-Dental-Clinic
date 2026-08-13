import fs from 'fs';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F4C81"/>
      <stop offset="100%" stop-color="#0B3A63"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#17A2B8"/>
      <stop offset="100%" stop-color="#138496"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F4C430"/>
      <stop offset="100%" stop-color="#D4AF37"/>
    </linearGradient>
    <filter id="crispShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>

  <g transform="translate(15, 15)">
    <!-- Outer Shield/Oval Ring -->
    <ellipse cx="80" cy="85" rx="72" ry="80" fill="none" stroke="url(#blueGrad)" stroke-width="7"/>
    <ellipse cx="80" cy="85" rx="63" ry="71" fill="url(#blueGrad)"/>

    <!-- Gold Star Orbit Swoosh -->
    <path d="M 140,40 C 160,15 135,80 145,130" fill="none" stroke="url(#goldGrad)" stroke-width="5" stroke-linecap="round"/>
    <!-- 5-Point Star -->
    <polygon points="145,22 148,31 157,32 150,38 152,47 145,42 138,47 140,38 133,32 142,31" fill="url(#goldGrad)"/>

    <!-- Doctor & Family Silhouettes (White) -->
    <!-- Primary Doctor Figure -->
    <circle cx="62" cy="58" r="15" fill="#FFFFFF"/>
    <path d="M 40,118 C 40,88 50,80 62,80 C 74,80 84,88 84,118 Z" fill="#FFFFFF"/>
    <!-- Medical Cross Badge on Chest -->
    <path d="M 59,92 H 65 V 104 H 59 Z M 56,95 H 68 V 101 H 56 Z" fill="#0F4C81"/>

    <!-- Child / Secondary Figure -->
    <circle cx="98" cy="70" r="12" fill="#FFFFFF"/>
    <path d="M 82,118 C 82,95 90,88 98,88 C 106,88 114,95 114,118 Z" fill="#FFFFFF"/>
  </g>

  <!-- Typography: "THE DENTAL CLINICS" -->
  <g transform="translate(185, 25)">
    <!-- Main Title "THE DENTAL CLINICS" -->
    <text x="0" y="82" font-family="'Playfair Display', 'Cinzel', 'Times New Roman', serif" font-size="38" font-weight="900" letter-spacing="2" fill="#0F4C81" filter="url(#crispShadow)">
      THE DENTAL CLINICS
    </text>

    <!-- Subtitle Tagline -->
    <text x="4" y="116" font-family="'Poppins', 'Inter', 'Segoe UI', sans-serif" font-size="13" font-weight="700" letter-spacing="4.5" fill="#17A2B8">
      MULTI-SPECIALITY DENTAL CARE
    </text>

    <!-- Teal Dynamic Underline -->
    <path d="M 0,132 C 120,140 260,138 395,130" fill="none" stroke="url(#tealGrad)" stroke-width="4.5" stroke-linecap="round"/>
  </g>
</svg>`;

const srcSvgPath = 'C:/Users/pradeep/.gemini/antigravity/scratch/the-dental-clinics/src/assets/logo.svg';
const publicSvgPath = 'C:/Users/pradeep/.gemini/antigravity/scratch/the-dental-clinics/public/logo.svg';

fs.writeFileSync(srcSvgPath, svgContent);
fs.writeFileSync(publicSvgPath, svgContent);
console.log('SVG logos generated successfully!');
