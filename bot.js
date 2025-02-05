const { Telegraf } = require("telegraf");

const bot = new Telegraf("7867348692:AAHlniTUQPD8vtge_ydzrQ_31HLDOZHmJHE");

bot.start((ctx) => {
    ctx.reply("Нажмите кнопку ниже, чтобы открыть игру!", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "🎮 Играть", web_app: { url: "https://nezax128.github.io/Gmae/" } }]
            ]
        }
    });
});

bot.launch();

