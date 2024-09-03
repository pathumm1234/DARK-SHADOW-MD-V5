const _0x285024 = function () {
  let _0x386c09 = true;
  return function (_0x361029, _0x1ad51d) {
    const _0x1b1195 = _0x386c09 ? function () {
      if (_0x1ad51d) {
        const _0x38817b = _0x1ad51d.apply(_0x361029, arguments);
        _0x1ad51d = null;
        return _0x38817b;
      }
    } : function () {};
    _0x386c09 = false;
    return _0x1b1195;
  };
}();
const _0x39f499 = _0x285024(this, function () {
  return _0x39f499.toString().search("(((.+)+)+)+$").toString().constructor(_0x39f499).search("(((.+)+)+)+$");
});
_0x39f499();
const _0x1235f9 = function () {
  let _0x1ff93e = true;
  return function (_0x121138, _0x5a1a26) {
    const _0x41f5fc = _0x1ff93e ? function () {
      if (_0x5a1a26) {
        const _0x572148 = _0x5a1a26.apply(_0x121138, arguments);
        _0x5a1a26 = null;
        return _0x572148;
      }
    } : function () {};
    _0x1ff93e = false;
    return _0x41f5fc;
  };
}();
(function () {
  _0x1235f9(this, function () {
    const _0x116256 = new RegExp("function *\\( *\\)");
    const _0x36d9d1 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x17c8d5 = _0x25c3d0("init");
    if (!_0x116256.test(_0x17c8d5 + "chain") || !_0x36d9d1.test(_0x17c8d5 + "input")) {
      _0x17c8d5('0');
    } else {
      _0x25c3d0();
    }
  })();
})();
const _0x4a91f5 = function () {
  let _0x1c15ff = true;
  return function (_0x55d598, _0x48d687) {
    const _0x410f76 = _0x1c15ff ? function () {
      if (_0x48d687) {
        const _0x53c3a5 = _0x48d687.apply(_0x55d598, arguments);
        _0x48d687 = null;
        return _0x53c3a5;
      }
    } : function () {};
    _0x1c15ff = false;
    return _0x410f76;
  };
}();
(function () {
  let _0x36bc40;
  try {
    const _0x32d52b = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x36bc40 = _0x32d52b();
  } catch (_0x4acca8) {
    _0x36bc40 = window;
  }
  _0x36bc40.setInterval(_0x25c3d0, 4000);
})();
const _0x548f5f = _0x4a91f5(this, function () {
  const _0x461e65 = function () {
    let _0x1395ec;
    try {
      _0x1395ec = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5cf856) {
      _0x1395ec = window;
    }
    return _0x1395ec;
  };
  const _0x2f14b7 = _0x461e65();
  const _0x3774e8 = _0x2f14b7.console = _0x2f14b7.console || {};
  const _0x56eecf = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x5e0bab = 0; _0x5e0bab < _0x56eecf.length; _0x5e0bab++) {
    const _0x49805d = _0x4a91f5.constructor.prototype.bind(_0x4a91f5);
    const _0x37083b = _0x56eecf[_0x5e0bab];
    const _0x230d08 = _0x3774e8[_0x37083b] || _0x49805d;
    _0x49805d.__proto__ = _0x4a91f5.bind(_0x4a91f5);
    _0x49805d.toString = _0x230d08.toString.bind(_0x230d08);
    _0x3774e8[_0x37083b] = _0x49805d;
  }
});
_0x548f5f();
import _0x367e00 from 'axios';
import _0x95c98a from 'yt-search';
const fetchAudioDetails = async _0x3d21f5 => {
  try {
    const _0x5e0772 = await _0x367e00.get("https://api.neoxr.eu/api/youtube?url=" + _0x3d21f5 + "&type=audio&quality=128kbps&apikey=mcandy");
    return _0x5e0772.data;
  } catch (_0x1e6088) {
    throw new Error("Error fetching audio details.");
  }
};
const song = async (_0x20d871, _0x2a5082) => {
  const _0x2e142f = _0x20d871.body.match(/^[\\/!#.]/);
  const _0x432422 = _0x2e142f ? _0x2e142f[0] : '/';
  const _0xed41c2 = _0x20d871.body.startsWith(_0x432422) ? _0x20d871.body.slice(_0x432422.length).split(" ")[0].toLowerCase() : '';
  const _0x15151 = _0x20d871.body.slice(_0x432422.length + _0xed41c2.length).trim();
  const _0x3554d4 = ["song", "ytmp3", "music", "ytmp3doc"];
  if (_0x3554d4.includes(_0xed41c2)) {
    if (!_0x15151) {
      return _0x20d871.reply("Please provide a YT URL or search query.");
    }
    try {
      await _0x20d871.React('🕘');
      const _0x510b10 = _0x15151.includes("youtube.com") || _0x15151.includes("youtu.be");
      const _0x3b898e = async (_0x4a47b9, _0x2ee867) => {
        const _0x46e87c = {
          responseType: "arraybuffer"
        };
        const _0x150fc3 = await _0x367e00.get(_0x2ee867, _0x46e87c);
        if (_0xed41c2 === "ytmp3doc") {
          const _0xd1a75a = {
            'document': Buffer.from(_0x150fc3.data),
            'mimetype': "audio/mpeg",
            'fileName': _0x4a47b9.title + ".mp3",
            'contextInfo': {
              'mentionedJid': [_0x20d871.sender],
              'externalAdReply': {
                'title': "↺ |◁   II   ▷|   ♡",
                'body': "Now playing: " + _0x4a47b9.title,
                'thumbnailUrl': _0x4a47b9.thumbnail,
                'sourceUrl': _0x4a47b9.url,
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            }
          };
          await _0x2a5082.sendMessage(_0x20d871.from, _0xd1a75a, {
            'quoted': _0x20d871
          });
        } else {
          const _0x33a4ac = {
            'audio': Buffer.from(_0x150fc3.data),
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'mentionedJid': [_0x20d871.sender],
              'externalAdReply': {
                'title': "↺ |◁   II   ▷|   ♡",
                'body': "Now playing: " + _0x4a47b9.title,
                'thumbnailUrl': _0x4a47b9.thumbnail,
                'sourceUrl': _0x4a47b9.url,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          };
          await _0x2a5082.sendMessage(_0x20d871.from, _0x33a4ac, {
            'quoted': _0x20d871
          });
        }
        await _0x20d871.React('✅');
      };
      if (_0x510b10) {
        const {
          data: _0x32c2b5
        } = await fetchAudioDetails(_0x15151);
        const _0x4eb41c = _0x32c2b5.data.url;
        await _0x3b898e(_0x32c2b5, _0x4eb41c);
      } else {
        const _0x1089b7 = await _0x95c98a(_0x15151);
        const _0x5759f5 = _0x1089b7.videos[0];
        if (!_0x5759f5) {
          _0x20d871.reply("Audio not found.");
          await _0x20d871.React('❌');
          return;
        }
        const {
          data: _0x2852cf
        } = await fetchAudioDetails(_0x5759f5.url);
        const _0x3d235e = _0x2852cf.data.url;
        await _0x3b898e(_0x2852cf, _0x3d235e);
      }
    } catch (_0x59823b) {
      console.error("Error generating response:", _0x59823b);
      _0x20d871.reply("Error processing your request.");
      await _0x20d871.React('❌');
    }
  }
};
export default song;
function _0x25c3d0(_0x178623) {
  function _0x5b9452(_0x40f1cf) {
    if (typeof _0x40f1cf === "string") {
      return function (_0x296d0a) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x40f1cf / _0x40f1cf).length !== 1 || _0x40f1cf % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x5b9452(++_0x40f1cf);
  }
  try {
    if (_0x178623) {
      return _0x5b9452;
    } else {
      _0x5b9452(0);
    }
  } catch (_0xe42a0d) {}
}
