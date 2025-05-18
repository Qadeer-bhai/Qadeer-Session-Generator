const _0x8b1c = require('pastebin-js'), _0x3d4e = new _0x8b1c('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
const { makeid: _0x5f6g } = require('./id');
const _0x7h8i = require('express'), _0x9j0k = _0x7h8i.Router();
const _0x2l3m = require('fs'), _0x4n5o = require('pino');
const { default: _0x6p7q, useMultiFileAuthState: _0x8r9s, delay: _0x1t2u, makeCacheableSignalKeyStore: _0x3v4w, Browsers: _0x5x6y } = require('@whiskeysockets/baileys');

const _0x7z8a = (_0x9b) => {
    if (!_0x2l3m.existsSync(_0x9b)) return !1;
    _0x2l3m.rmSync(_0x9b, { recursive: !0, force: !0 });
};

_0x9j0k.get('/', async (_0x2c3d, _0x4e5f) => {
    const _0x6g7h = _0x5f6g(); let _0x8i9j = _0x2c3d.query.number;
    async function _0x1k2l() {
        const { state: _0x3m4n, saveCreds: _0x5o6p } = await _0x8r9s('./temp/' + _0x6g7h);
        try {
            let _0x7q8r = _0x6p7q({
                auth: { creds: _0x3m4n.creds, keys: _0x3v4w(_0x3m4n.keys, _0x4n5o({ level: 'fatal' }).child({ level: 'fatal' })) },
                printQRInTerminal: !1, logger: _0x4n5o({ level: 'fatal' }).child({ level: 'fatal' }), browser: _0x5x6y.macOS('Chrome')
            });
            if (!_0x7q8r.authState.creds.registered) {
                await _0x1t2u(1500); _0x8i9j = _0x8i9j.replace(/[^0-9]/g, '');
                const _0x9s1t = await _0x7q8r.requestPairingCode(_0x8i9j);
                if (!_0x4e5f.headersSent) await _0x4e5f.send({ code: _0x9s1t });
            }
            _0x7q8r.ev.on('creds.update', _0x5o6p);
            _0x7q8r.ev.on('connection.update', async (_0x2u3v) => {
                const { connection: _0x4w5x, lastDisconnect: _0x6y7z } = _0x2u3v;
                if (_0x4w5x === 'open') {
                    await _0x1t2u(5000); let _0x8a9b = _0x2l3m.readFileSync(__dirname + `/temp/${_0x6g7h}/creds.json`);
                    await _0x1t2u(800); let _0x1c2d = Buffer.from(_0x8a9b).toString('base64');
                    let _0x3e4f = await _0x7q8r.sendMessage(_0x7q8r.user.id, { text: '' + _0x1c2d });
                    let _0x5g6h = [
                        ' 💀 *_The Realm of Pain Welcomes You...* 💀',
                        '    ═════════════════════════════',
                        '    🤖 *_Connected by the QADEER KHAN* ',
                        '    🌩️ *VIP ENRT - Designed by the QADEER ',
                        '         QADEER KHAN KULACHI* 🌩️',
                        '    ╔════════════════════════',
                        '    ║ 🔥 *『 Welcome to the REAL 』* 🔥',
                        '    ║',
                        '    ║ You\'re foolish enough to make it here.',
                        '    ║  Congrats, I guess.  ',
                        '    ║ Let\'s see if you can survive *VRT*.  ',
                        '    ╚═════════════════════════',
                        '    ⚡ *『 BOT REPO - Don’t Dare to Fork Me! 』* ',
                        '    🔗 https://github.com/Qadeer-bhai/TOFAN-MD',
                        '    ═══════════════════════',
                        '    📢 *『 Join the Cult – WhatsApp Channel 』* ',
                        '    🔗 https://whatsapp.com/channel/0029Vaw6yRaBPzjZPtVtA80A',
                        '    ════════════════════════',
                        '    ⚠️ *_2025 - The Reign of QADEER\'S HACKING*',
                        '    *You’re weak if you don’t give my repo a ⭐*'
                    ].join('\n');
                    await _0x7q8r.sendMessage(_0x7q8r.user.id, { text: _0x5g6h }, { quoted: _0x3e4f });
                    await _0x1t2u(100); await _0x7q8r.ws.close();
                    return await _0x7z8a('./temp/' + _0x6g7h);
                } else if (_0x4w5x === 'close' && _0x6y7z && _0x6y7z.error && _0x6y7z.error.output.statusCode != 401) {
                    await _0x1t2u(10000); _0x1k2l();
                }
            });
        } catch (_0x9t0u) {
            console.log('s_r'); await _0x7z8a('./temp/' + _0x6g7h);
            if (!_0x4e5f.headersSent) await _0x4e5f.send({ code: 'S_U' });
        }
    }
    return await _0x1k2l();
});

module.exports = _0x9j0k;