const {Telegraf, Input} = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_KEY)
bot.start((ctx) => ctx.reply('alo'))

bot.hears('algun pene arepa porai', (ctx) => {
    ctx.replyWithVideo(Input.fromLocalFile('./media/videos/pene_arepa.mp4'))
})
bot.hears('pido replica', (ctx) => {
    ctx.reply('han dado una réplica pero qué coño es eso si lo he partido entero le he metido el pollón tieso y he dejado un borbotón de leche tan espeso que voy a regular el calcio que falta en sus huesos')
})
bot.hears('llamen a sans', (ctx) => {
    ctx.replyWithVideoNote(Input.fromLocalFile('./media/videos/llamada.mp4'))
})

bot.hears('alo sans', (ctx) => {
    ctx.replyWithVideoNote(Input.fromLocalFile('./media/videos/alosans.mp4'))
})

bot.hears('algun pelotero arepa porai', (ctx) => {
    ctx.replyWithPhoto(Input.fromLocalFile('./media/images/pelotero.jpg'))
})

bot.hears('alguna hembra arepa porai', (ctx) => {
    ctx.replyWithPhoto(Input.fromLocalFile('./media/images/mami.jpg'))
})

bot.launch()