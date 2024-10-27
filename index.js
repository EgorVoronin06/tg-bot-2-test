require('dotenv').config();
const { Bot } = require('grammy');


const bot = new Bot (process.env.BOT_API_KEY);

bot.api.setMyCommands([
    { command: 'start', description: 'Запуск бота' },
    { command: 'material1', description: 'Механика⚙️' },
    { command: 'material2', description: 'Электричество💡' },
    { command: 'material3', description: 'Термодинамика⚠️' },
    ]);

bot.command('start', async (ctx) => { await ctx.react('🙉');
    await ctx.reply('Привет! Я твой карманный помощник по физике 🤖');
    });

bot.command('material1', async (ctx) => {
    await ctx.reply(
     'C:\Users\Пользователь\Desktop\механика.jpg'
    );
   });

bot.on("message", async (ctx) => {
 await ctx.reply('Надо подумать...');
});


bot.start();
