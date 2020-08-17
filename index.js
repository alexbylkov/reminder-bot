const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)
bot.start((ctx) => {
  console.log(ctx.message.chat.first_name)
  ctx.reply(`Привет, ${ctx.message.chat.first_name}! Я бот Напоминалкин, могу ли чем-то помочь?`)
})
bot.use((ctx) => {
  console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Я бот Напоминалкин, ты меня создал, чтобы ничего не забывать.'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()