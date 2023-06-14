
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`${ssd}QUEEN  HENTAI WA BOT
                 PING  

pong : ${latensi.toFixed(4)} ms    

Created By  Dinuwa
                    Official²⁰²³

🔊  https://github.com/dinuwah/QUEEN-HENTAI`);
            });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler
