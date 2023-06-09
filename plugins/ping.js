var os = require("os")
var speed = require("performance-now");

var {
 spawn,
 exec, 
execSync 
} = require("child_process");

var handler = async (m, { 
conn 
}) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr, json) => {
          let child = stdout.toString("utf-8");
          let ssd =
 child.replace(/Memory:/, "Ram:");
          m.reply(`*Kecepatan* : ${latensi.toFixed(4)} _ms_`);
            });
}
handler.command = handler.help = ['ping'];
handler.tags = ['main'];
module.exports = handler