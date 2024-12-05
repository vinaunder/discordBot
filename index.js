const { Client, GatewayIntentBits, EmbedBuilder, Partials } = require('discord.js');
const keep_alive = require('./keep_alive.js');
require('dotenv').config();
const translate = require('google-translate-api-x');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Gerenciamento de guilds
        GatewayIntentBits.GuildMessages, // Gerenciamento de mensagens
        GatewayIntentBits.MessageContent, // Conteúdo de mensagens (obrigatório para capturar mensagens)
        GatewayIntentBits.GuildMessageReactions // Para reações
    ],
    partials: [Partials.Message, Partials.Reaction, Partials.User], // Necessário para reações
});

const TOKEN = process.env.DISCORD_TOKEN;
//const DEEPL_API_KEY = process.env.DEEPL_API_KEY;

// Mapeamento de idiomas e emojis
const idiomas = {
    "🇺🇸": "en", // Inglês (Estados Unidos)
    "🇧🇷": "pt", // Português (Brasil)
    "🇫🇷": "fr", // Francês
    "🇪🇸": "es", // Espanhol
    "🇩🇪": "de", // Alemão
    "🇮🇹": "it", // Italiano
    "🇷🇺": "ru", // Russo
    "🇮🇳": "hi", // Hindi
    "🇦🇪": "ar", // Árabe
    "🇹🇷": "tr", // Turco
    "🇵🇱": "pl", // Polonês
    "🇳🇱": "nl", // Holandês
    "🇸🇪": "sv", // Sueco
    "🇳🇴": "no", // Norueguês
    "🇩🇰": "da", // Dinamarquês
    "🇫🇮": "fi", // Finlandês
    "🇬🇷": "el", // Grego
    "🇭🇺": "hu", // Húngaro
    "🇨🇿": "cs", // Tcheco
};

async function traduzirTexto(texto, idiomaDestino) {
    try {
        const res = await translate(texto, { to: idiomaDestino });
        return res.text; // Texto traduzido
    } catch (error) {
        console.error('Erro ao traduzir:', error.message);
        return 'Erro na tradução.';
    }
}

client.once('ready', () => {
    console.log(`Bot online - ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;
    if (commandName === 'help_vs_event') {
        const day = interaction.options.getString('day').toLowerCase();
        if (!['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].includes(day)) {
            return interaction.reply({ content: 'Invalid day. Please inform a valid day of the week.', ephemeral: true });
        }
        const user = interaction.options.getUser('user');
        let embed = new EmbedBuilder().setColor(0x0099ff) // Cor da barra lateral
            .setTitle('Help: VS - ' + day) // Título
            .setDescription('Here is the detailed information about VS ' + day + '!') // Descrição
        if (day === 'monday') {
            embed
                .setThumbnail('https://i.ibb.co/6FNV1LH/vs-monday.webp') // Imagem no canto superior
                .addFields(
                    { name: 'Tip 1', value: 'Buy all the universal currency gas pedals from the vip store, Vip 6 cost: 5k diamonds for 3 daysVip 8: 9.5k diamonds for 9 days /2 , Vip 10: 13k diamonds for 10 days' },
                    { name: 'Tip 2', value: 'Stock up on radar on Sunday for Monday start stocking up at 10am' },
                    { name: 'Tip 3', value: 'stock up on radar on Sunday for Monday start stocking up at 10am, number of points:70 radar task > 1. 750M points' },
                    { name: 'Tip 4', value: 'Mine for 4H minimum with each team > (~500k) point' },
                    { name: 'Tip 5', value: 'UP the drone using experience and use drone parts > ~1M point' },
                    { name: 'Tip 6', value: 'Spent 150M hero experience > (~450K) point' },
                    { name: 'Results', value: 'For a total of 3. 7M point VS minimum' }
                )
                .setFooter({ text: 'Requested by you', iconURL: interaction.user.avatarURL() });

        } else if (day === 'tuesday') {
            embed
                .setThumbnail('https://i.ibb.co/gMWJZjr/vs-tuesday.webp') // Imagem no canto superior
                .addFields(
                    { name: 'Tip 1', value: 'Store radar again for Wednesday (from 10am)' },
                    { name: 'Tip 2', value: 'UR truck x4 > 800k points' },
                    { name: 'Tip 3', value: 'Orange secret task 8x > 1.2M points' },
                    { name: 'Tip 4', value: 'Survivor ticket > 300k points' },
                    { name: 'Tip 5', value: '4 days construction/ universal > 180K points excl. construction power' },
                    { name: 'Results', value: 'For total 2. 5M excl. power bonus' }
                )
                .setFooter({ text: 'Requested by you', iconURL: interaction.user.avatarURL() });

        } else if (day === 'wednesday') {
            embed
                .setThumbnail('https://i.ibb.co/PTQ8zPH/vs-wed.webp') // Imagem no canto superior
                .addFields(
                    { name: 'Tip 1', value: '70 radar task > 1.750M points' },
                    { name: 'Tip 2', value: '4 days of technology/ universal > 180K points excl. technology power and value badge' },
                    { name: 'Tip 3', value: 'If value badge consumption ( 3K ) > 1.8M points' },
                    { name: 'Tip 4', value: 'Drone pack opening all levels > 750K points' },
                    { name: 'Results', value: 'For a total of 4.480M points VS' },
                )
                .setFooter({ text: 'Requested by you', iconURL: interaction.user.avatarURL() });

        } else if (day === 'thursday') {
            embed
                .setThumbnail('https://i.ibb.co/smYkN1K/vs-thursday.webp') // Imagem no canto superior
                .addFields(
                    { name: 'Tip 1', value: 'To have radar stocked from 10am.' },
                    { name: 'Tip 2', value: 'Hero recruitments > 565K bridges' },
                    { name: 'Tip 3', value: 'Hero experience (1G) > 1.5M points' },
                    { name: 'Tip 4', value: 'Legendary hero fragment > 3.6M points ' },
                    { name: 'Tip 5', value: 'Epic hero fragment > 1.050M points ' },
                    { name: 'Tip 6', value: 'Rare hero fragment > 80K points ' },
                    { name: 'Tip 7', value: 'Skill medals > 2M points' },
                    { name: 'Results', value: 'For a total of 7.745M points VS' },
                )
                .setFooter({ text: 'Requested by you', iconURL: interaction.user.avatarURL() });

        } else if (day === 'friday') {
            embed
                .setThumbnail('https://i.ibb.co/JBmMTxC/vs-friday.webp') // Imagem no canto superior
                .addFields(
                    { name: 'Tip 1', value: '70 radar task > 1.750M points' },
                    { name: 'Tip 2', value: 'Accelerator turn combined: 1.8M points without building power/technology bonus.' },
                    { name: 'Tip 3', value: 'Hero training: 2.5M' },
                    { name: 'Results', value: 'For a total of 6.5M points VS' },
                )
                .setFooter({ text: 'Requested by you', iconURL: interaction.user.avatarURL() });

        } else if (day === 'saturday') {
            embed
                .setThumbnail('https://i.ibb.co/fXrDHvK/vs-saturday.webp') // Imagem no canto superior
                .addFields(
                    { name: 'Tip 1', value: 'UR truck x4 > 800k points' },
                    { name: 'Tip 2', value: 'Secret orange task 8x > 1.2M points' },
                    { name: 'Tip 3', value: 'Remaining points depend on your enemy unit kill rate' },
                    { name: 'Results', value: 'Total 2M points VS minimum' },
                )
                .setFooter({ text: 'Requested by you', iconURL: interaction.user.avatarURL() });

        } else if (day === 'sunday') {
            embed
                .setThumbnail('https://i.ibb.co/jVm9skd/vs-sunday.webp') // Imagem no canto superior
                .addFields(
                    { name: 'Tip 1', value: 'Stock radar tasks for Monday' },
                    { name: 'Tip 2', value: 'Send your Squads for RSS,for them to finish the tasks after the server resets on Monday morning' },
                )
                .setFooter({ text: 'Requested by you', iconURL: interaction.user.avatarURL() });
        }
        // Enviar o embed como resposta
        if (user) {
            try {
                // Envia mensagem para o usuário mencionado
                await user.send({ embeds: [embed] });

                // Responde ao autor do comando informando que foi enviado
                await interaction.reply({ content: `A mensagem foi enviada para ${user.username}.`, ephemeral: true });
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'Não consegui enviar a mensagem privada. Verifique se as DMs do usuário estão habilitadas.', ephemeral: true });
            }
        } else {
            const msg = await interaction.reply({ embeds: [embed], fetchReply: true });

            for (const emoji of Object.keys(idiomas)) {
                await msg.react(emoji);
            }

            const filter = (reaction, user) => {
                return Object.keys(idiomas).includes(reaction.emoji.name) && !user.bot;
            };

            const collector = msg.createReactionCollector({ filter, time: 60000 });

            collector.on('collect', async (reaction, user) => {
                const idiomaDestino = idiomas[reaction.emoji.name];

                try {
                    // Traduzir os campos e a descrição do Embed
                    embed.data.title = await traduzirTexto(embed.data.title, idiomaDestino);
                    for (const field of embed.data.fields) {
                        field.name = await traduzirTexto(field.name, idiomaDestino);
                        field.value = await traduzirTexto(field.value, idiomaDestino);
                    }
                    embed.data.description = await traduzirTexto(embed.data.description, idiomaDestino);

                    // Enviar Embed traduzido para o usuário que reagiu
                    await user.send({ embeds: [embed] });
                    console.log(`Mensagem traduzida enviada para ${user.username} (${idiomaDestino})`);
                } catch (error) {
                    console.error('Erro ao enviar tradução:', error);
                    await user.send('Houve um erro ao traduzir a mensagem.');
                }
            });

            collector.on('end', () => {
                console.log('Coletor de reações encerrado.');
            });

        }
    } else if (commandName === 'temporary_notice') {
        const canal = interaction.channel; // O canal onde o comando foi executado
        const mensagem = interaction.options.getString('message'); // Mensagem a ser enviada
        const tempo = interaction.options.getInteger('time'); // Tempo em segundos

        if (tempo <= 0) {
            return interaction.reply({ content: 'The time must be greater than 0 seconds.', ephemeral: true });
        }

        try {
            // Envia o aviso no canal
            const aviso = await canal.send(mensagem);

            // Responde ao autor do comando que o aviso foi enviado
            await interaction.reply({ content: `Warning sent! It will be deleted in ${tempo} seconds.`, ephemeral: true });

            // Aguarda o tempo especificado e apaga a mensagem
            setTimeout(async () => {
                await aviso.delete();
            }, tempo * 1000);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error sending the notice.', ephemeral: true });
        }
    } else if (commandName === 'alert') {
        const mensagem = interaction.options.getString('message'); // Mensagem do alerta
        const destaque = interaction.options.getBoolean('highlight'); // Se deve mencionar @everyone

        try {
            // Formata o conteúdo da mensagem
            const conteudo = destaque ? `@everyone ${mensagem}` : mensagem;

            // Envia o alerta no canal
            await interaction.channel.send({
                content: conteudo,
                embeds: [
                    new EmbedBuilder()
                        .setColor(0xff0000) // Cor de destaque (vermelho)
                        .setTitle('⚠️ Important warning ⚠️')
                        .setDescription(mensagem)
                        .setFooter({ text: 'Requested by you', iconURL: interaction.user.avatarURL() })
                ],
            });

            // Responde ao autor do comando
            await interaction.reply({ content: 'Alert sent successfully!', ephemeral: true });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error sending the alert.', ephemeral: true });
        }
    }
});

// Evento de reação adicionada
client.on('messageReactionAdd', async (reaction, user) => {
    try {
        if (user.bot) return; // Ignora reações de bots

        // Garante que a mensagem e o canal estão carregados
        if (reaction.partial) {
            await reaction.fetch(); // Busca a reação parcial
        }

        if (reaction.message.partial) {
            await reaction.message.fetch(); // Busca a mensagem parcial
        }

        if (reaction.message.channel.partial) {
            await reaction.message.channel.fetch(); // Busca o canal parcial
        }

        // Verifica se a reação é uma bandeira
        const idiomaDestino = idiomas[reaction.emoji.name];
        if (!idiomaDestino) return; // Ignora reações que não são bandeiras

        // Traduz o conteúdo da mensagem
        const textoOriginal = reaction.message.content;
        if (!textoOriginal) return; // Ignora mensagens sem texto

        const traducao = await traduzirTexto(textoOriginal, idiomaDestino);

        // Responde com a tradução no mesmo canal
        await reaction.message.channel.send({
            content: `${user}, ${reaction.emoji.name}: "${traducao}"`,
            allowedMentions: { repliedUser: false },
        });
    } catch (error) {
        console.error('Erro ao processar a reação:', error);
    }
});

client.on('guildMemberAdd', async (member) => {
    try {
        // Nome do canal onde a mensagem será enviada
        const channelName = 'welcome'; // Substitua pelo nome do seu canal de boas-vindas
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === channelName);

        if (!welcomeChannel) {
            console.error(`Canal "${channelName}" não encontrado.`);
            return;
        }

        // Mensagem de boas-vindas
        const welcomeMessage = `🎉 Hello, ${member}! Welcome to the server **${member.guild.name}**! 
We hope you have a great experience. Don't forget to check out the server rules! 😊`;

        // Enviar a mensagem no canal
        await welcomeChannel.send(welcomeMessage);
        console.log(`Mensagem de boas-vindas enviada para ${member.user.tag}`);
    } catch (error) {
        console.error('Erro ao enviar mensagem de boas-vindas:', error);
    }
});


client.login(TOKEN);