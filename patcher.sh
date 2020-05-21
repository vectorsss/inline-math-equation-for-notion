( cd /Applications/Notion.app/Contents/Resources; asar extract app.asar app )
echo "\n" >> /Applications/Notion.app/Contents/Resources/app/renderer/preload.js
cat inlinemath.js >> /Applications/Notion.app/Contents/Resources/app/renderer/preload.js