console.log(process.env.TOKEN)

const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)
bot.start((ctx) => ctx.reply('Здарова жопа'))
bot.help((ctx) => ctx.reply('Отправь мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()