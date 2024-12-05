const { REST, Routes } = require('discord.js');
require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN; // Substitua pelo seu token se não usar dotenv
const CLIENT_ID = process.env.DISCORD_CLIENT_ID; // Substitua pelo seu ID de aplicação
const GUILD_ID = '5611'; // Substitua pelo ID do servidor onde quer testar

const commands = [
    {
        name: 'help_vs_event',
        description: 'ex: /help_vs_event Monday or /help_vs_event Monday GODVINA',
        options: [
            {
                name: 'day',
                type: 3,
                description: 'Day of the event',
                required: true,
            },
            {
                name: 'user',
                type: 6, // Tipo USER
                description: 'User to receive the help message',
                required: false,
            },
        ],
    },
    {
        name: 'temporary_notice',
        description: 'Sends a temporary warning on the channel.',
        options: [
            {
                name: 'message',
                type: 3, // Tipo STRING
                description: 'The content of the notice.',
                required: true,
            },
            {
                name: 'time',
                type: 4, // Tipo INTEGER
                description: 'The time in seconds before the warning is deleted.',
                required: true,
            },
        ],
        default_member_permissions: 0x00000008,
    },
    {
        name: 'alert',
        description: 'Sends an important alert on the channel.',
        options: [
            {
                name: 'message',
                type: 3, // Tipo STRING
                description: 'The content of the alert.',
                required: true,
            },
            {
                name: 'highlight',
                type: 5, // Tipo BOOLEAN
                description: 'Mention everyone on the channel with @everyone?',
                required: false,
            },
        ],
        default_member_permissions: 0x00000008,
    },

];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Iniciando o registro de comandos...');

        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: commands }
        );

        console.log('Comandos registrados com sucesso!');
    } catch (error) {
        console.error(error);
    }
})();
