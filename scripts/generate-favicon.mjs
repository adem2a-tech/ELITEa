import toIco from 'to-ico'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pngPath = path.join(__dirname, '../public/images/creations/elite-logo.png')
const icoPath = path.join(__dirname, '../public/favicon.ico')

// Resize to 32x32 for ICO (to-ico needs small images)
const resized = await sharp(pngPath)
  .resize(32, 32)
  .png()
  .toBuffer()

const ico = await toIco([resized])
fs.writeFileSync(icoPath, ico)
console.log('Favicon generated:', icoPath)
