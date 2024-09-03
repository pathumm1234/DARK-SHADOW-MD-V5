const _0x25fa3f = function () {
  let _0x10873f = true;
  return function (_0x2f18f6, _0x58073f) {
    const _0x2be2a5 = _0x10873f ? function () {
      if (_0x58073f) {
        const _0x1ceea5 = _0x58073f.apply(_0x2f18f6, arguments);
        _0x58073f = null;
        return _0x1ceea5;
      }
    } : function () {};
    _0x10873f = false;
    return _0x2be2a5;
  };
}();
const _0xc543bf = _0x25fa3f(this, function () {
  return _0xc543bf.toString().search("(((.+)+)+)+$").toString().constructor(_0xc543bf).search("(((.+)+)+)+$");
});
_0xc543bf();
const _0x44cc04 = function () {
  let _0x12e82d = true;
  return function (_0x214e70, _0x35b295) {
    const _0x2ccee9 = _0x12e82d ? function () {
      if (_0x35b295) {
        const _0xc27e83 = _0x35b295.apply(_0x214e70, arguments);
        _0x35b295 = null;
        return _0xc27e83;
      }
    } : function () {};
    _0x12e82d = false;
    return _0x2ccee9;
  };
}();
(function () {
  let _0x2f48d7;
  try {
    const _0x165765 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2f48d7 = _0x165765();
  } catch (_0x3bc03b) {
    _0x2f48d7 = window;
  }
  _0x2f48d7.setInterval(_0x1b78a6, 4000);
})();
(function () {
  _0x44cc04(this, function () {
    const _0x376b99 = new RegExp("function *\\( *\\)");
    const _0x4c746e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x10b7c1 = _0x1b78a6("init");
    if (!_0x376b99.test(_0x10b7c1 + "chain") || !_0x4c746e.test(_0x10b7c1 + "input")) {
      _0x10b7c1('0');
    } else {
      _0x1b78a6();
    }
  })();
})();
const _0x29e375 = function () {
  let _0x3d1c0c = true;
  return function (_0xa391c0, _0x3c6b88) {
    const _0x48cf0d = _0x3d1c0c ? function () {
      if (_0x3c6b88) {
        const _0x27e655 = _0x3c6b88.apply(_0xa391c0, arguments);
        _0x3c6b88 = null;
        return _0x27e655;
      }
    } : function () {};
    _0x3d1c0c = false;
    return _0x48cf0d;
  };
}();
const _0xd5bff2 = _0x29e375(this, function () {
  const _0x34c550 = function () {
    let _0x2bf96f;
    try {
      _0x2bf96f = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x4fb5b1) {
      _0x2bf96f = window;
    }
    return _0x2bf96f;
  };
  const _0x494007 = _0x34c550();
  const _0x5788d5 = _0x494007.console = _0x494007.console || {};
  const _0x4ac467 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x6ef28b = 0; _0x6ef28b < _0x4ac467.length; _0x6ef28b++) {
    const _0x1d9e5e = _0x29e375.constructor.prototype.bind(_0x29e375);
    const _0x3c587f = _0x4ac467[_0x6ef28b];
    const _0x2a811e = _0x5788d5[_0x3c587f] || _0x1d9e5e;
    _0x1d9e5e.__proto__ = _0x29e375.bind(_0x29e375);
    _0x1d9e5e.toString = _0x2a811e.toString.bind(_0x2a811e);
    _0x5788d5[_0x3c587f] = _0x1d9e5e;
  }
});
_0xd5bff2();
import _0x4ed3e9 from 'axios';
import _0x1b179b from 'yt-search';
const fetchVideoDetails = async _0x31c1e8 => {
  try {
    const _0x3ef6fa = await _0x4ed3e9.get("https://api.neoxr.eu/api/youtube?url=" + _0x31c1e8 + "&type=video&quality=360p&apikey=" + "mcandy");
    if (_0x3ef6fa.data && _0x3ef6fa.data.status) {
      const _0x48ba14 = {
        title: _0x3ef6fa.data.title,
        videoURL: _0x3ef6fa.data.data.url,
        duration: _0x3ef6fa.data.duration,
        quality: _0x3ef6fa.data.data.quality,
        size: _0x3ef6fa.data.data.size,
        channel: _0x3ef6fa.data.channel,
        views: _0x3ef6fa.data.views,
        publish: _0x3ef6fa.data.publish
      };
      return _0x48ba14;
    } else {
      throw new Error("Error fetching video details.");
    }
  } catch (_0x397833) {
    throw new Error("Error fetching video details.");
  }
};
const video = async (_0x15e11e, _0x1ac51f) => {
  const _0x30b9a2 = _0x15e11e.body.match(/^[\\/!#.]/);
  const _0x574eb2 = _0x30b9a2 ? _0x30b9a2[0] : '/';
  const _0x2a5adb = _0x15e11e.body.startsWith(_0x574eb2) ? _0x15e11e.body.slice(_0x574eb2.length).split(" ")[0].toLowerCase() : '';
  const _0x104dba = _0x15e11e.body.slice(_0x574eb2.length + _0x2a5adb.length).trim();
  const _0x304a4b = ["video", "ytmp4", "vid", "ytmp4doc"];
  if (_0x304a4b.includes(_0x2a5adb)) {
    if (!_0x104dba) {
      return _0x15e11e.reply("Give a YouTube URL or search query.");
    }
    try {
      await _0x15e11e.React('🕘');
      const _0x309310 = _0x104dba.includes("youtube.com") || _0x104dba.includes("youtu.be");
      await _0x15e11e.React('⬇️');
      const _0x12af06 = async (_0x3ad593, _0x4f6c49) => {
        const _0x5a195d = {
          responseType: "arraybuffer"
        };
        const _0x418002 = await _0x4ed3e9.get(_0x4f6c49, _0x5a195d);
        if (_0x2a5adb === "ytmp4doc") {
          const _0x38b2a1 = {
            'document': Buffer.from(_0x418002.data),
            'mimetype': "video/mp4",
            'fileName': _0x3ad593.title + ".mp4",
            'caption': "> " + _0x3ad593.title + "\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ-ᴍᴅ"
          };
          await _0x1ac51f.sendMessage(_0x15e11e.from, _0x38b2a1, {
            'quoted': _0x15e11e
          });
        } else {
          const _0x26f413 = {
            'video': Buffer.from(_0x418002.data),
            'mimetype': "video/mp4",
            'caption': "> " + _0x3ad593.title + "\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ-ᴍᴅ"
          };
          await _0x1ac51f.sendMessage(_0x15e11e.from, _0x26f413, {
            'quoted': _0x15e11e
          });
        }
        await _0x15e11e.React('✅');
      };
      if (_0x309310) {
        const _0x2d2c85 = await fetchVideoDetails(_0x104dba);
        await _0x12af06(_0x2d2c85, _0x2d2c85.videoURL);
      } else {
        const _0x302d7d = await _0x1b179b(_0x104dba);
        const _0x443931 = _0x302d7d.videos[0];
        await _0x15e11e.React('⬇️');
        if (!_0x443931) {
          _0x15e11e.reply("Video not found.");
          await _0x15e11e.React('❌');
          return;
        }
        const _0x4743bc = await fetchVideoDetails(_0x443931.url);
        await _0x12af06(_0x4743bc, _0x4743bc.videoURL);
      }
    } catch (_0x469a5e) {
      console.error("Error generating response:", _0x469a5e);
      _0x15e11e.reply("An error occurred while processing your request.");
      await _0x15e11e.React('❌');
    }
  }
};
export default video;
function _0x1b78a6(_0x90d10e) {
  function _0x32b3aa(_0xf5e653) {
    if (typeof _0xf5e653 === "string") {
      return function (_0x26274f) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0xf5e653 / _0xf5e653).length !== 1 || _0xf5e653 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x32b3aa(++_0xf5e653);
  }
  try {
    if (_0x90d10e) {
      return _0x32b3aa;
    } else {
      _0x32b3aa(0);
    }
  } catch (_0x5327cb) {}
}
