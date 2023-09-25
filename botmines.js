const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6448658819:AAF94w0XiXOz8AQ9HB4uUvMuW0ht2endT7Y', {polling: true});
const chatId = '-1001634381085';

function enviarMensagemProgramada(horario, mensagem) {
    const horarioEnvio = new Date();
    horarioEnvio.setHours(horario.horas, horario.minutos, 0, 0);

    const delay = horarioEnvio.getTime() - Date.now();

    setTimeout(() => {
        bot.sendMessage(chatId, mensagem);
    }, delay);
}

const mensagensProgramadas = [
    {
        horario: { horas: 0, minutos: 11 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 00:13\n⏱️ Válido até: 00:15\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 0, minutos: 24 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 00:26\n⏱️ Válido até: 00:28\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 0, minutos: 43 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 00:45\n⏱️ Válido até: 00:47\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 0, minutos: 58 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 01:00\n⏱️ Válido até: 01:02\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⭐️⬛️⬛️⭐️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 1, minutos: 18 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 01:20\n⏱️ Válido até: 01:23\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⭐️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 1, minutos: 55 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 01:57\n⏱️ Válido até: 01:59\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⭐️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {   
        horario: { horas: 2, minutos: 10 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 02:12\n⏱️ Válido até: 02:14\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⭐️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 4, minutos: 8 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 04:10\n⏱️ Válido até: 04:12\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 4, minutos: 28 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 04:30\n⏱️ Válido até: 04:32\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 4, minutos: 48 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 04:50\n⏱️ Válido até: 04:52\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 5, minutos: 8 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 05:10\n⏱️ Válido até: 05:12\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 5, minutos: 28 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 05:30\n⏱️ Válido até: 05:32\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 5, minutos: 48 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 05:50\n⏱️ Válido até: 05:52\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 6, minutos: 32 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 06:34\n⏱️ Válido até: 06:36\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⬛️⭐️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 6, minutos: 46 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 06:48\n⏱️ Válido até: 06:50\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⬛️\n⭐️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 7, minutos: 0 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 07:02\n⏱️ Válido até: 07:04\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⭐️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⭐️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 7, minutos: 17 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 07:19\n⏱️ Válido até: 07:21\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⭐️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
    {
        horario: { horas: 7, minutos: 37 },
        mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 07:39\n⏱️ Válido até: 07:41\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⭐️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
    },
        {
            horario: { horas: 7, minutos: 57 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 07:59\n⏱️ Válido até: 08:01\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⭐️⭐️⬛️⬛️\n⬛️⬛️⭐️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 8, minutos: 9 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 08:11\n⏱️ Válido até: 08:13\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⭐️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 8, minutos: 20 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 08:22\n⏱️ Válido até: 08:24\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⛤⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 8, minutos: 33 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 08:35\n⏱️ Válido até: 08:37\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 8, minutos: 52 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 08:54\n⏱️ Válido até: 08:56\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 9, minutos: 7 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 09:09\n⏱️ Válido até: 09:11\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⭐️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 9, minutos: 26 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 09:28\n⏱️ Válido até: 09:30\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⭐️⭐️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 9, minutos: 44 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 09:46\n⏱️ Válido até: 09:48\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⭐️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 10, minutos: 0 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 10:02\n⏱️ Válido até: 10:04\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⭐️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 10, minutos: 13 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 10:15\n⏱️ Válido até: 10:17\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⭐️⭐️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 10, minutos: 27 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 10:29\n⏱️ Válido até: 10:31\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 10, minutos: 43 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 10:45\n⏱️ Válido até: 10:47\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⭐️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 11, minutos: 3 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 11:05\n⏱️ Válido até: 11:07\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⭐️⬛️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 11, minutos: 23 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 11:25\n⏱️ Válido até: 11:27\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⭐️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 11, minutos: 37 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 11:39\n⏱️ Válido até: 11:41\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⬛️\n⭐️⬛️⭐️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 11, minutos: 52 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 11:54\n⏱️ Válido até: 11:56\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⭐️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 12, minutos: 10 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 12:12\n⏱️ Válido até: 12:14\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⭐️⬛️⬛️⬛️⭐️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 12, minutos: 23 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 12:25\n⏱️ Válido até: 12:27\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 12, minutos: 37 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 12:39\n⏱️ Válido até: 12:41\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⭐️⭐️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⭐️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 12, minutos: 48 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 12:50\n⏱️ Válido até: 12:52\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⭐️⬛️⭐️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 13, minutos: 2 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 13:04\n⏱️ Válido até: 13:06\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⭐️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 13, minutos: 17 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 13:19\n⏱️ Válido até: 13:21\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⬛️\n⭐️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 13, minutos: 37 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 13:39\n⏱️ Válido até: 13:41\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⭐️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 13, minutos: 50 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 13:52\n⏱️ Válido até: 13:54\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⬛️⬛️⬛️\n⭐️⬛️⭐️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 14, minutos: 4 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 14:06\n⏱️ Válido até: 14:08\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 14, minutos: 23 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 14:25\n⏱️ Válido até: 14:27\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⭐️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 14, minutos: 41 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 14:43\n⏱️ Válido até: 14:45\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⭐️⬛️⭐️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 15, minutos: 1 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 15:03\n⏱️ Válido até: 15:05\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⭐️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 15, minutos: 12 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 15:14\n⏱️ Válido até: 15:16\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 15, minutos: 26 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 15:28\n⏱️ Válido até: 15:30\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⭐️⬛️⭐️⬛️⬛️\n⬛️⬛️⭐️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 15, minutos: 40 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 15:42\n⏱️ Válido até: 15:44\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⭐️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 15, minutos: 58 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 16:00\n⏱️ Válido até: 16:02\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⬛️⬛️⭐️⭐️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 16, minutos: 10 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 16:12\n⏱️ Válido até: 16:14\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⭐️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 16, minutos: 30 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 16:32\n⏱️ Válido até: 16:34\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 16, minutos: 47 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 16:49\n⏱️ Válido até: 16:51\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⭐️⬛️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 17, minutos: 3 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 17:05\n⏱️ Válido até: 17:07\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⭐️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 17, minutos: 19 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 17:21\n⏱️ Válido até: 17:23\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⭐️⬛️⭐️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 17, minutos: 35 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 17:37\n⏱️ Válido até: 17:39\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⭐️\n⬛️⬛️⬛️⭐️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 17, minutos: 53 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 17:55\n⏱️ Válido até: 17:57\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⭐️\n⬛️⭐️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 18, minutos: 10 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 18:12\n⏱️ Válido até: 18:14\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⭐️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 18, minutos: 24 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 18:26\n⏱️ Válido até: 18:28\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⭐️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 18, minutos: 40 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 18:42\n⏱️ Válido até: 18:44\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 19, minutos: 1 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 19:03\n⏱️ Válido até: 19:05\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⭐️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 19, minutos: 20 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 19:23\n⏱️ Válido até: 19:25\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⭐️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 19, minutos: 35 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 19:37\n⏱️ Válido até: 19:39\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⭐️⭐️⭐️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 19, minutos: 47 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 19:49\n⏱️ Válido até: 19:51\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⭐️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⭐️⬛️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 20, minutos: 3 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 20:05\n⏱️ Válido até: 20:07\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⭐️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 20, minutos: 21 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 20:23\n⏱️ Válido até: 20:25\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⭐️⬛️⬛️⬛️⬛️\n⭐️⭐️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 20, minutos: 34 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 20:36\n⏱️ Válido até: 20:38\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⭐️\n⬛️⭐️⬛️⭐️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 20, minutos: 50 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 20:52\n⏱️ Válido até: 20:54\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⭐️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 21, minutos: 11 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 21:13\n⏱️ Válido até: 21:15\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⭐️\n⬛️⭐️⬛️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 21, minutos: 23 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 21:25\n⏱️ Válido até: 21:27\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⬛️⭐️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 21, minutos: 38 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 21:40\n⏱️ Válido até: 21:42\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⭐️⬛️⭐️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 21, minutos: 58 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 22:00\n⏱️ Válido até: 22:02\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⭐️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⭐️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 22, minutos: 15 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 22:17\n⏱️ Válido até: 22:19\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⭐️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 22, minutos: 30 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 22:32\n⏱️ Válido até: 22:34\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⭐️⬛️⬛️⬛️⬛️\n⭐️⭐️⬛️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 22, minutos: 44 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 22:46\n⏱️ Válido até: 22:48\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⬛️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⭐️⭐️\n⭐️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 22, minutos: 59 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 23:01\n⏱️ Válido até: 23:03\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⬛️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⭐️⬛️\n⬛️⭐️⬛️⭐️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 23, minutos: 19 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 23:21\n⏱️ Válido até: 23:23\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⭐️⭐️⬛️⭐️\n⭐️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 23, minutos: 33 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 23:35\n⏱️ Válido até: 23:37\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⭐️⭐️⬛️\n⬛️⬛️⭐️⭐️⭐️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        },
        {
            horario: { horas: 23, minutos: 51 },
            mensagem: '⭐️ Oportunidade encontrada ⭐️\n\n⏰ Horário do Sinal: 23:53\n⏱️ Válido até: 23:55\n💣 Minas: 3\n🎯 Fazer de 2 a 3 entradas\n\n⬛️⬛️⬛️⭐️⬛️\n⬛️⬛️⭐️⬛️⭐️\n⬛️⭐️⬛️⬛️⬛️\n⬛️⬛️⭐️⬛️⬛️\n⬛️⬛️⬛️⬛️⬛️\n⬇️Plataforma⬇️\n☘️https://winslots.win/ykrnnqyfz☘️'
        }
                 
];

for (const mensagemProgramada of mensagensProgramadas) {
    enviarMensagemProgramada(mensagemProgramada.horario, mensagemProgramada.mensagem);
}

console.log('Bot está funcionando...');

