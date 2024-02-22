const {Telegraf, Input} = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_KEY)
bot.start((ctx) => ctx.reply('alo'))

bot.command('penearepa', (ctx) => {
    ctx.replyWithVideo(Input.fromLocalFile('./media/videos/pene_arepa.mp4'))
})
bot.command('replica', (ctx) => {
    ctx.reply('han dado una réplica pero qué coño es eso si lo he partido entero le he metido el pollón tieso y he dejado un borbotón de leche tan espeso que voy a regular el calcio que falta en sus huesos')
})
bot.command('alosans', (ctx) => {
    ctx.replyWithVideoNote(Input.fromLocalFile('./media/videos/llamada.mp4'))
})

bot.command('sans', (ctx) => {
    ctx.replyWithVideoNote(Input.fromLocalFile('./media/videos/alosans.mp4'))
})

bot.command('pelotero', (ctx) => {
    ctx.replyWithPhoto(Input.fromLocalFile('./media/images/pelotero.jpg'))
})

bot.command('mami', (ctx) => {
    ctx.replyWithPhoto(Input.fromLocalFile('./media/images/mami.jpg'))
})

bot.launch()