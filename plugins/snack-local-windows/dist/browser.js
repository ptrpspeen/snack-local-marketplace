var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// <define:process.env>
var define_process_env_default;
var init_define_process_env = __esm({
  "<define:process.env>"() {
    define_process_env_default = {};
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/defaults.js
var require_defaults = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/defaults.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.newestSdkVersion = exports.oldestSdkVersion = exports.defaultSdkVersion = void 0;
    exports.defaultSdkVersion = "54.0.0";
    exports.oldestSdkVersion = "50.0.0";
    exports.newestSdkVersion = "54.0.0";
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/constants.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/debug.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var debug = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/re.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var safeSrc = exports.safeSrc = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/parse-options.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/identifiers.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a === b ? 0 : a < b ? -1 : 1;
      }
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/classes/semver.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var isPrereleaseIdentifier = (prerelease, identifier) => {
      const identifiers = identifier.split(".");
      if (identifiers.length > prerelease.length) {
        return false;
      }
      for (let i = 0; i < identifiers.length; i++) {
        if (compareIdentifiers(prerelease[i], identifiers[i]) !== 0) {
          return false;
        }
      }
      return true;
    };
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.major < other.major) {
          return -1;
        }
        if (this.major > other.major) {
          return 1;
        }
        if (this.minor < other.minor) {
          return -1;
        }
        if (this.minor > other.minor) {
          return 1;
        }
        if (this.patch < other.patch) {
          return -1;
        }
        if (this.patch > other.patch) {
          return 1;
        }
        return 0;
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (isPrereleaseIdentifier(this.prerelease, identifier)) {
                const prereleaseBase = this.prerelease[identifier.split(".").length];
                if (isNaN(prereleaseBase)) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/parse.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/valid.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var parse = require_parse();
    var valid = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module.exports = valid;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/clean.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var parse = require_parse();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module.exports = clean;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/inc.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module.exports = inc;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/diff.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var parse = require_parse();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v2 = parse(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (lowVersion.compareMain(highVersion) === 0) {
          if (lowVersion.minor && !lowVersion.patch) {
            return "minor";
          }
          return "patch";
        }
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module.exports = diff;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/major.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module.exports = major;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/minor.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module.exports = minor;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/patch.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module.exports = patch;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/prerelease.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var parse = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module.exports = prerelease;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/compare.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module.exports = compare;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/rcompare.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compare = require_compare();
    var rcompare = (a, b, loose) => compare(b, a, loose);
    module.exports = rcompare;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/compare-loose.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compare = require_compare();
    var compareLoose = (a, b) => compare(a, b, true);
    module.exports = compareLoose;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/compare-build.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module.exports = compareBuild;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/sort.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module.exports = sort;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/rsort.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module.exports = rsort;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/gt.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module.exports = gt;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/lt.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module.exports = lt;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/eq.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module.exports = eq;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/neq.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module.exports = neq;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/gte.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module.exports = gte;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/lte.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module.exports = lte;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/cmp.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module.exports = cmp;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/coerce.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module.exports = coerce;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/truncate.js
var require_truncate = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/truncate.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var parse = require_parse();
    var constants = require_constants();
    var SemVer = require_semver();
    var truncate = (version, truncation, options) => {
      if (!constants.RELEASE_TYPES.includes(truncation)) {
        return null;
      }
      const clonedVersion = cloneInputVersion(version, options);
      return clonedVersion && doTruncation(clonedVersion, truncation);
    };
    var cloneInputVersion = (version, options) => {
      const versionStringToParse = version instanceof SemVer ? version.version : version;
      return parse(versionStringToParse, options);
    };
    var doTruncation = (version, truncation) => {
      if (isPrerelease(truncation)) {
        return version.version;
      }
      version.prerelease = [];
      switch (truncation) {
        case "major":
          version.minor = 0;
          version.patch = 0;
          break;
        case "minor":
          version.patch = 0;
          break;
      }
      return version.format();
    };
    var isPrerelease = (type) => {
      return type.startsWith("pre");
    };
    module.exports = truncate;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/internal/lrucache.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var LRUCache = class {
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module.exports = LRUCache;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/classes/range.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        range = range.replace(BUILDSTRIPRE, "");
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      src,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var BUILDSTRIPRE = new RegExp(src[t.BUILD], "g");
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      comp = comp.replace(re[t.BUILD], "");
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var invalidXRangeOrder = (M, m, p) => isX(M) && !isX(m) || isX(m) && p && !isX(p);
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        if (invalidXRangeOrder(M, m, p)) {
          return comp;
        }
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/classes/comparator.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/functions/satisfies.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module.exports = satisfies;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/to-comparators.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module.exports = toComparators;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/max-satisfying.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module.exports = maxSatisfying;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/min-satisfying.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module.exports = minSatisfying;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/min-version.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            /* fallthrough */
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            /* istanbul ignore next */
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module.exports = minVersion;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/valid.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module.exports = validRange;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/outside.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module.exports = outside;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/gtr.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module.exports = gtr;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/ltr.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module.exports = ltr;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/intersects.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module.exports = intersects;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/simplify.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var satisfies = require_satisfies();
    var compare = require_compare();
    module.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare(a, b, options));
      for (const version of v) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/ranges/subset.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER: for (const simpleSub of sub.set) {
        for (const simpleDom of dom.set) {
          const isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub) {
            continue OUTER;
          }
        }
        if (sawNonNull) {
          return false;
        }
      }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !c.test(gt.semver)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !c.test(lt.semver)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module.exports = subset;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/semver@7.8.5/node_modules/semver/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var truncate = require_truncate();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module.exports = {
      parse,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      truncate,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/sdks/index.js
var require_sdks = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/sdks/index.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    var assets = {
      // @expo/snack-static/react-native-logo.png is an alias that is
      // implemented in the runtime, and uses by the react-native image docs
      "@expo/snack-static/react-native-logo.png": "*"
    };
    var sdks = {
      "50.0.0": {
        version: "^50.0.0",
        coreModules: {
          ...assets,
          expo: "~50.0.17",
          react: "18.2.0",
          "react-dom": "*",
          "react-native": "0.73.6",
          "react-native-web": "*",
          // Used by @shopify/react-native-skia, on web only
          // See runtime/src/NativeModules/ReactNativeSkia.tsx for more info
          "@shopify/react-native-skia/lib/module/web": "*"
        },
        bundledModules: {
          "expo-asset": "*",
          "expo-font": "*",
          "react-native-gesture-handler": "*",
          "react-native-safe-area-context": "*",
          "@expo/vector-icons": "*",
          "expo-constants": "*",
          "expo-file-system": "*",
          "expo-updates": "*",
          "expo-modules-core": "*",
          "@react-native-async-storage/async-storage": "*",
          "react-native-reanimated": "*",
          "expo-router": "*",
          "expo-router/stack": "*",
          "expo-router/tabs": "*",
          "expo-router/drawer": "*",
          "expo-router/html": "*",
          "expo-router/head": "*",
          "expo-router/entry": "*",
          "react-native-pager-view": "*"
        },
        deprecatedModules: {}
      },
      "51.0.0": {
        version: "^51.0.0",
        coreModules: {
          ...assets,
          expo: "~51.0.31",
          react: "18.2.0",
          "react-dom": "*",
          "react-native": "0.74.5",
          "react-native-web": "*",
          // Used by @shopify/react-native-skia, on web only
          // See runtime/src/NativeModules/ReactNativeSkia.tsx for more info
          "@shopify/react-native-skia/lib/module/web": "*"
        },
        bundledModules: {
          "expo-asset": "*",
          "expo-font": "*",
          "react-native-gesture-handler": "*",
          "react-native-safe-area-context": "*",
          "@expo/vector-icons": "*",
          "expo-constants": "*",
          "expo-file-system": "*",
          "expo-updates": "*",
          "@react-native-async-storage/async-storage": "*",
          "react-native-reanimated": "*",
          "expo-router": "*",
          "expo-router/stack": "*",
          "expo-router/tabs": "*",
          "expo-router/drawer": "*",
          "expo-router/html": "*",
          "expo-router/head": "*",
          "expo-router/entry": "*",
          "react-native-pager-view": "*"
        },
        deprecatedModules: {}
      },
      "52.0.0": {
        version: "^52.0.0",
        coreModules: {
          ...assets,
          expo: "~52.0.2",
          react: "18.3.1",
          "react-dom": "18.3.1",
          "react-native": "0.76.3",
          "react-native-web": "*",
          // Used by @shopify/react-native-skia, on web only
          // See runtime/src/NativeModules/ReactNativeSkia.tsx for more info
          "@shopify/react-native-skia/lib/module/web": "*"
        },
        bundledModules: {
          "expo-asset": "*",
          "expo-font": "*",
          "react-native-gesture-handler": "*",
          "react-native-safe-area-context": "*",
          "@expo/vector-icons": "*",
          "expo-constants": "*",
          "expo-file-system": "*",
          "expo-updates": "*",
          "@react-native-async-storage/async-storage": "*",
          "react-native-reanimated": "*",
          "expo-router": "*",
          "expo-router/stack": "*",
          "expo-router/tabs": "*",
          "expo-router/drawer": "*",
          "expo-router/html": "*",
          "expo-router/head": "*",
          "expo-router/entry": "*",
          "react-native-pager-view": "*"
        },
        deprecatedModules: {}
      },
      "53.0.0": {
        version: "^53.0.0",
        coreModules: {
          ...assets,
          expo: "~53.0.22",
          react: "19.0.0",
          "react-dom": "19.0.0",
          "react-native": "0.79.5",
          "react-native-web": "*",
          // Used by @shopify/react-native-skia, on web only
          // See runtime/src/NativeModules/ReactNativeSkia.tsx for more info
          "@shopify/react-native-skia/lib/module/web": "*"
        },
        bundledModules: {
          "expo-asset": "*",
          "expo-font": "*",
          "react-native-gesture-handler": "*",
          "react-native-safe-area-context": "*",
          "@expo/vector-icons": "*",
          "expo-constants": "*",
          "expo-file-system": "*",
          "expo-updates": "*",
          "@react-native-async-storage/async-storage": "*",
          "react-native-reanimated": "*",
          "expo-router": "*",
          "expo-router/stack": "*",
          "expo-router/tabs": "*",
          "expo-router/drawer": "*",
          "expo-router/html": "*",
          "expo-router/head": "*",
          "expo-router/entry": "*",
          "react-native-pager-view": "*"
        },
        deprecatedModules: {}
      },
      "54.0.0": {
        version: "^54.0.0",
        coreModules: {
          ...assets,
          expo: "~54.0.32",
          react: "19.1.0",
          "react-dom": "19.1.0",
          "react-native": "0.81.5",
          "react-native-web": "*",
          // Used by @shopify/react-native-skia, on web only
          // See runtime/src/NativeModules/ReactNativeSkia.tsx for more info
          "@shopify/react-native-skia/lib/module/web": "*"
        },
        bundledModules: {
          "expo-asset": "*",
          "expo-font": "*",
          "react-native-gesture-handler": "*",
          "react-native-safe-area-context": "*",
          "@expo/vector-icons": "*",
          "expo-constants": "*",
          "expo-file-system": "*",
          "expo-updates": "*",
          "@react-native-async-storage/async-storage": "*",
          "react-native-reanimated": "*",
          "expo-router": "*",
          "expo-router/stack": "*",
          "expo-router/tabs": "*",
          "expo-router/drawer": "*",
          "expo-router/html": "*",
          "expo-router/head": "*",
          "expo-router/entry": "*",
          "react-native-pager-view": "*"
        },
        deprecatedModules: {}
      }
    };
    exports.default = sdks;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/sdks/features.js
var require_features = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/sdks/features.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    var features = {
      MULTIPLE_FILES: "21.0.0",
      PROJECT_DEPENDENCIES: "25.0.0",
      TYPESCRIPT: "31.0.0",
      UNIMODULE_IMPORTS: "33.0.0",
      POSTMESSAGE_TRANSPORT: "35.0.0",
      VERSIONED_SNACKAGER: "37.0.0"
    };
    exports.default = features;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/sdk.js
var require_sdk = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/sdk.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.standardizeDependencies = exports.isFeatureSupported = exports.isValidSemver = exports.getSupportedSDKVersions = exports.getDeprecatedModule = exports.validateSDKVersion = exports.getPreloadedModules = exports.isModulePreloaded = void 0;
    var semver_1 = __importDefault(require_semver2());
    var sdks_1 = __importDefault(require_sdks());
    var features_1 = __importDefault(require_features());
    function isModulePreloaded(name, sdkVersion, coreModulesOnly) {
      const sdk = sdks_1.default[sdkVersion];
      if (!sdk)
        return false;
      return !!(sdk.coreModules[name] || !coreModulesOnly && sdk.bundledModules[name]);
    }
    exports.isModulePreloaded = isModulePreloaded;
    function getPreloadedModules(sdkVersion, coreModulesOnly) {
      const sdk = sdks_1.default[sdkVersion];
      if (!sdk)
        return {};
      return coreModulesOnly ? sdk.coreModules : {
        ...sdk.coreModules,
        ...sdk.bundledModules
      };
    }
    exports.getPreloadedModules = getPreloadedModules;
    function validateSDKVersion(sdkVersion) {
      if (Object.keys(sdks_1.default).indexOf(sdkVersion) < 0) {
        throw new Error(`Invalid SDKVersion, the following versions are supported: ${Object.keys(sdks_1.default)}`);
      }
      return sdkVersion;
    }
    exports.validateSDKVersion = validateSDKVersion;
    function getDeprecatedModule(name, sdkVersion) {
      var _a, _b;
      return (_b = (_a = sdks_1.default[sdkVersion]) === null || _a === void 0 ? void 0 : _a.deprecatedModules) === null || _b === void 0 ? void 0 : _b[name];
    }
    exports.getDeprecatedModule = getDeprecatedModule;
    function getSupportedSDKVersions() {
      return Object.keys(sdks_1.default);
    }
    exports.getSupportedSDKVersions = getSupportedSDKVersions;
    function isValidSemver(version) {
      return version === "latest" || !!semver_1.default.validRange(version);
    }
    exports.isValidSemver = isValidSemver;
    function isFeatureSupported(feature, sdkVersion) {
      const featureVersion = features_1.default[feature];
      if (!featureVersion) {
        throw new Error(`Invalid SDKFeature, the following versions are supported: ${Object.keys(features_1.default)}`);
      }
      return semver_1.default.gte(sdkVersion, featureVersion);
    }
    exports.isFeatureSupported = isFeatureSupported;
    function standardizeDependencies(dependencies) {
      let result = dependencies;
      for (const name in dependencies) {
        const dep = dependencies[name];
        if (typeof dep === "string") {
          result = result === dependencies ? { ...dependencies } : result;
          result[name] = {
            version: dep
          };
        } else if (typeof dep === "object") {
          const peerDependencies = standardizePeerDependencies(dep.peerDependencies);
          if (dep.peerDependencies !== peerDependencies) {
            result = result === dependencies ? { ...dependencies } : result;
            result[name] = {
              ...dep,
              peerDependencies
            };
          }
        } else {
          result = result === dependencies ? { ...dependencies } : result;
          delete result[name];
        }
      }
      return result;
    }
    exports.standardizeDependencies = standardizeDependencies;
    function standardizePeerDependencies(peerDependencies) {
      if (!peerDependencies) {
        return peerDependencies;
      }
      let result = peerDependencies;
      for (const name in peerDependencies) {
        const peerDep = peerDependencies[name];
        if (typeof peerDep === "string" || peerDep === null) {
        } else if (typeof peerDep === "object" && typeof peerDep.version === "string") {
          result = result === peerDependencies ? { ...peerDependencies } : result;
          result[name] = peerDep.version;
        } else {
          result = result === peerDependencies ? { ...peerDependencies } : result;
          delete result[name];
        }
      }
      return result;
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/types.js
var require_types = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/types.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/urls.js
var require_urls = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/urls.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseRuntimeUrl = exports.createRuntimeUrl = exports.SNACK_RUNTIME_URL_PROTOCOL = exports.SNACK_RUNTIME_URL_ENDPOINT = void 0;
    exports.SNACK_RUNTIME_URL_ENDPOINT = "u.expo.dev/933fd9c0-1666-11e7-afca-d980795c5824";
    exports.SNACK_RUNTIME_URL_PROTOCOL = "exp";
    function createRuntimeUrl(options) {
      const protocol = options.protocol || exports.SNACK_RUNTIME_URL_PROTOCOL;
      const endpoint = options.endpoint || exports.SNACK_RUNTIME_URL_ENDPOINT;
      const parameters = new URLSearchParams();
      parameters.set("runtime-version", `exposdk:${options.sdkVersion}`);
      parameters.set("channel-name", "production");
      if (options.snack)
        parameters.set("snack", options.snack);
      if (options.channel)
        parameters.set("snack-channel", options.channel);
      return `${protocol}://${endpoint}?${parameters}`;
    }
    exports.createRuntimeUrl = createRuntimeUrl;
    function parseRuntimeUrl(uri) {
      var _a, _b, _c;
      const url = typeof uri === "string" ? (
        // Force non-standard protocols to `http`, avoiding Node-related parsing issues
        new URL(uri.replace(/^[a-zA-Z]+:/, "http:"))
      ) : uri;
      const snack2 = (_a = url.searchParams.get("snack")) !== null && _a !== void 0 ? _a : void 0;
      const channel = (_b = url.searchParams.get("snack-channel")) !== null && _b !== void 0 ? _b : void 0;
      const runtimeVersion = url.searchParams.get("runtime-version");
      const [, sdkVersion] = (_c = runtimeVersion === null || runtimeVersion === void 0 ? void 0 : runtimeVersion.match(/(?:exposdk:)?([0-9]+\.[0-9]+\.[0-9]+)/)) !== null && _c !== void 0 ? _c : [];
      if (!sdkVersion) {
        return null;
      }
      return {
        sdkVersion,
        snack: snack2,
        channel
      };
    }
    exports.parseRuntimeUrl = parseRuntimeUrl;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/index.js
var require_build = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-content@3.6.2/node_modules/snack-content/build/index.js"(exports) {
    "use strict";
    init_define_process_env();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sdks = void 0;
    __exportStar(require_defaults(), exports);
    __exportStar(require_sdk(), exports);
    var sdks_1 = require_sdks();
    Object.defineProperty(exports, "sdks", { enumerable: true, get: function() {
      return __importDefault(sdks_1).default;
    } });
    __exportStar(require_types(), exports);
    __exportStar(require_urls(), exports);
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_freeGlobal.js"(exports, module) {
    init_define_process_env();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js
var require_root = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_root.js"(exports, module) {
    init_define_process_env();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Symbol.js"(exports, module) {
    init_define_process_env();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getRawTag.js"(exports, module) {
    init_define_process_env();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_objectToString.js"(exports, module) {
    init_define_process_env();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetTag.js"(exports, module) {
    init_define_process_env();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObject.js"(exports, module) {
    init_define_process_env();
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isFunction.js"(exports, module) {
    init_define_process_env();
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_coreJsData.js"(exports, module) {
    init_define_process_env();
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isMasked.js"(exports, module) {
    init_define_process_env();
    var coreJsData = require_coreJsData();
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    })();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_toSource.js"(exports, module) {
    init_define_process_env();
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsNative.js"(exports, module) {
    init_define_process_env();
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getValue.js"(exports, module) {
    init_define_process_env();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getNative.js"(exports, module) {
    init_define_process_env();
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_defineProperty.js"(exports, module) {
    init_define_process_env();
    var getNative = require_getNative();
    var defineProperty = (function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    })();
    module.exports = defineProperty;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseAssignValue.js"(exports, module) {
    init_define_process_env();
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_createBaseFor.js"(exports, module) {
    init_define_process_env();
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseFor.js"(exports, module) {
    init_define_process_env();
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseTimes.js"(exports, module) {
    init_define_process_env();
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isObjectLike.js"(exports, module) {
    init_define_process_env();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsArguments.js"(exports, module) {
    init_define_process_env();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArguments.js"(exports, module) {
    init_define_process_env();
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArray.js"(exports, module) {
    init_define_process_env();
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/stubFalse.js"(exports, module) {
    init_define_process_env();
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isBuffer.js"(exports, module) {
    init_define_process_env();
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isIndex.js"(exports, module) {
    init_define_process_env();
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isLength.js"(exports, module) {
    init_define_process_env();
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    init_define_process_env();
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseUnary.js"(exports, module) {
    init_define_process_env();
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nodeUtil.js"(exports, module) {
    init_define_process_env();
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = (function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    })();
    module.exports = nodeUtil;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isTypedArray.js"(exports, module) {
    init_define_process_env();
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    init_define_process_env();
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isPrototype.js"(exports, module) {
    init_define_process_env();
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_overArg.js"(exports, module) {
    init_define_process_env();
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nativeKeys.js"(exports, module) {
    init_define_process_env();
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseKeys.js"(exports, module) {
    init_define_process_env();
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isArrayLike.js"(exports, module) {
    init_define_process_env();
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/keys.js
var require_keys = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/keys.js"(exports, module) {
    init_define_process_env();
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseForOwn.js"(exports, module) {
    init_define_process_env();
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheClear.js"(exports, module) {
    init_define_process_env();
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/eq.js
var require_eq2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/eq.js"(exports, module) {
    init_define_process_env();
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_assocIndexOf.js"(exports, module) {
    init_define_process_env();
    var eq = require_eq2();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheDelete.js"(exports, module) {
    init_define_process_env();
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheGet.js"(exports, module) {
    init_define_process_env();
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheHas.js"(exports, module) {
    init_define_process_env();
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_listCacheSet.js"(exports, module) {
    init_define_process_env();
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_ListCache.js"(exports, module) {
    init_define_process_env();
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackClear.js"(exports, module) {
    init_define_process_env();
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackDelete.js"(exports, module) {
    init_define_process_env();
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackGet.js"(exports, module) {
    init_define_process_env();
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackHas.js"(exports, module) {
    init_define_process_env();
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Map.js"(exports, module) {
    init_define_process_env();
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_nativeCreate.js"(exports, module) {
    init_define_process_env();
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashClear.js"(exports, module) {
    init_define_process_env();
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashDelete.js"(exports, module) {
    init_define_process_env();
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashGet.js"(exports, module) {
    init_define_process_env();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashHas.js"(exports, module) {
    init_define_process_env();
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hashSet.js"(exports, module) {
    init_define_process_env();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Hash.js"(exports, module) {
    init_define_process_env();
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheClear.js"(exports, module) {
    init_define_process_env();
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isKeyable.js"(exports, module) {
    init_define_process_env();
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getMapData.js"(exports, module) {
    init_define_process_env();
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    init_define_process_env();
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheGet.js"(exports, module) {
    init_define_process_env();
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheHas.js"(exports, module) {
    init_define_process_env();
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapCacheSet.js"(exports, module) {
    init_define_process_env();
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_MapCache.js"(exports, module) {
    init_define_process_env();
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stackSet.js"(exports, module) {
    init_define_process_env();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Stack.js"(exports, module) {
    init_define_process_env();
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_setCacheAdd.js"(exports, module) {
    init_define_process_env();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_setCacheHas.js"(exports, module) {
    init_define_process_env();
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_SetCache.js"(exports, module) {
    init_define_process_env();
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arraySome.js"(exports, module) {
    init_define_process_env();
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_cacheHas.js"(exports, module) {
    init_define_process_env();
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_equalArrays.js"(exports, module) {
    init_define_process_env();
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Uint8Array.js"(exports, module) {
    init_define_process_env();
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_mapToArray.js"(exports, module) {
    init_define_process_env();
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_setToArray.js"(exports, module) {
    init_define_process_env();
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_equalByTag.js"(exports, module) {
    init_define_process_env();
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq2();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayPush.js"(exports, module) {
    init_define_process_env();
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    init_define_process_env();
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayFilter.js"(exports, module) {
    init_define_process_env();
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/stubArray.js"(exports, module) {
    init_define_process_env();
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getSymbols.js"(exports, module) {
    init_define_process_env();
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getAllKeys.js"(exports, module) {
    init_define_process_env();
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_equalObjects.js"(exports, module) {
    init_define_process_env();
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_DataView.js"(exports, module) {
    init_define_process_env();
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module.exports = DataView2;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Promise.js"(exports, module) {
    init_define_process_env();
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_Set.js"(exports, module) {
    init_define_process_env();
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_WeakMap.js"(exports, module) {
    init_define_process_env();
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getTag.js"(exports, module) {
    init_define_process_env();
    var DataView2 = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    init_define_process_env();
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsEqual.js"(exports, module) {
    init_define_process_env();
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIsMatch.js"(exports, module) {
    init_define_process_env();
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isStrictComparable.js"(exports, module) {
    init_define_process_env();
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_getMatchData.js"(exports, module) {
    init_define_process_env();
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    init_define_process_env();
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseMatches.js"(exports, module) {
    init_define_process_env();
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isSymbol.js"(exports, module) {
    init_define_process_env();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_isKey.js"(exports, module) {
    init_define_process_env();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/memoize.js"(exports, module) {
    init_define_process_env();
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_memoizeCapped.js"(exports, module) {
    init_define_process_env();
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_stringToPath.js"(exports, module) {
    init_define_process_env();
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_arrayMap.js"(exports, module) {
    init_define_process_env();
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseToString.js"(exports, module) {
    init_define_process_env();
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js
var require_toString = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/toString.js"(exports, module) {
    init_define_process_env();
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_castPath.js"(exports, module) {
    init_define_process_env();
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_toKey.js"(exports, module) {
    init_define_process_env();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseGet.js"(exports, module) {
    init_define_process_env();
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/get.js
var require_get = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/get.js"(exports, module) {
    init_define_process_env();
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseHasIn.js"(exports, module) {
    init_define_process_env();
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_hasPath.js"(exports, module) {
    init_define_process_env();
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/hasIn.js"(exports, module) {
    init_define_process_env();
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    init_define_process_env();
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/identity.js
var require_identity = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/identity.js"(exports, module) {
    init_define_process_env();
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseProperty.js"(exports, module) {
    init_define_process_env();
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    init_define_process_env();
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/property.js
var require_property = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/property.js"(exports, module) {
    init_define_process_env();
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/_baseIteratee.js"(exports, module) {
    init_define_process_env();
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/mapValues.js"(exports, module) {
    init_define_process_env();
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value, key, object2) {
        baseAssignValue(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    module.exports = mapValues;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/nullthrows@1.1.1/node_modules/nullthrows/nullthrows.js
var require_nullthrows = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/nullthrows@1.1.1/node_modules/nullthrows/nullthrows.js"(exports, module) {
    "use strict";
    init_define_process_env();
    function nullthrows(x, message) {
      if (x != null) {
        return x;
      }
      var error = new Error(message !== void 0 ? message : "Got unexpected " + x);
      error.framesToPop = 1;
      throw error;
    }
    module.exports = nullthrows;
    module.exports.default = nullthrows;
    Object.defineProperty(module.exports, "__esModule", { value: true });
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/builtins@1.0.3/node_modules/builtins/builtins.json
var require_builtins = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/builtins@1.0.3/node_modules/builtins/builtins.json"(exports, module) {
    module.exports = [
      "assert",
      "buffer",
      "child_process",
      "cluster",
      "console",
      "constants",
      "crypto",
      "dgram",
      "dns",
      "domain",
      "events",
      "fs",
      "http",
      "https",
      "module",
      "net",
      "os",
      "path",
      "process",
      "punycode",
      "querystring",
      "readline",
      "repl",
      "stream",
      "string_decoder",
      "timers",
      "tls",
      "tty",
      "url",
      "util",
      "v8",
      "vm",
      "zlib"
    ];
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/validate-npm-package-name@3.0.0/node_modules/validate-npm-package-name/index.js
var require_validate_npm_package_name = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/validate-npm-package-name@3.0.0/node_modules/validate-npm-package-name/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var scopedPackagePattern = new RegExp("^(?:@([^/]+?)[/])?([^/]+?)$");
    var builtins = require_builtins();
    var blacklist = [
      "node_modules",
      "favicon.ico"
    ];
    var validate = module.exports = function(name) {
      var warnings = [];
      var errors2 = [];
      if (name === null) {
        errors2.push("name cannot be null");
        return done(warnings, errors2);
      }
      if (name === void 0) {
        errors2.push("name cannot be undefined");
        return done(warnings, errors2);
      }
      if (typeof name !== "string") {
        errors2.push("name must be a string");
        return done(warnings, errors2);
      }
      if (!name.length) {
        errors2.push("name length must be greater than zero");
      }
      if (name.match(/^\./)) {
        errors2.push("name cannot start with a period");
      }
      if (name.match(/^_/)) {
        errors2.push("name cannot start with an underscore");
      }
      if (name.trim() !== name) {
        errors2.push("name cannot contain leading or trailing spaces");
      }
      blacklist.forEach(function(blacklistedName) {
        if (name.toLowerCase() === blacklistedName) {
          errors2.push(blacklistedName + " is a blacklisted name");
        }
      });
      builtins.forEach(function(builtin) {
        if (name.toLowerCase() === builtin) {
          warnings.push(builtin + " is a core module name");
        }
      });
      if (name.length > 214) {
        warnings.push("name can no longer contain more than 214 characters");
      }
      if (name.toLowerCase() !== name) {
        warnings.push("name can no longer contain capital letters");
      }
      if (/[~'!()*]/.test(name.split("/").slice(-1)[0])) {
        warnings.push(`name can no longer contain special characters ("~'!()*")`);
      }
      if (encodeURIComponent(name) !== name) {
        var nameMatch = name.match(scopedPackagePattern);
        if (nameMatch) {
          var user = nameMatch[1];
          var pkg = nameMatch[2];
          if (encodeURIComponent(user) === user && encodeURIComponent(pkg) === pkg) {
            return done(warnings, errors2);
          }
        }
        errors2.push("name can only contain URL-friendly characters");
      }
      return done(warnings, errors2);
    };
    validate.scopedPackagePattern = scopedPackagePattern;
    var done = function(warnings, errors2) {
      var result = {
        validForNewPackages: errors2.length === 0 && warnings.length === 0,
        validForOldPackages: errors2.length === 0,
        warnings,
        errors: errors2
      };
      if (!result.warnings.length) delete result.warnings;
      if (!result.errors.length) delete result.errors;
      return result;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/nanoid@3.3.18/node_modules/nanoid/url-alphabet/index.js
var urlAlphabet;
var init_url_alphabet = __esm({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/nanoid@3.3.18/node_modules/nanoid/url-alphabet/index.js"() {
    init_define_process_env();
    urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/nanoid@3.3.18/node_modules/nanoid/index.browser.js
var index_browser_exports = {};
__export(index_browser_exports, {
  customAlphabet: () => customAlphabet,
  customRandom: () => customRandom,
  nanoid: () => nanoid,
  random: () => random,
  urlAlphabet: () => urlAlphabet
});
var random, customRandom, customAlphabet, nanoid;
var init_index_browser = __esm({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/nanoid@3.3.18/node_modules/nanoid/index.browser.js"() {
    init_define_process_env();
    init_url_alphabet();
    random = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
    customRandom = (alphabet, defaultSize, getRandom) => {
      let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
      let step = -~(1.6 * mask * defaultSize / alphabet.length);
      return (size = defaultSize) => {
        if (size <= 0) return "";
        let id = "";
        while (true) {
          let bytes = getRandom(step);
          let j = step | 0;
          while (j--) {
            id += alphabet[bytes[j] & mask] || "";
            if (id.length === size) return id;
          }
        }
      };
    };
    customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);
    nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
      byte &= 63;
      if (byte < 36) {
        id += byte.toString(36);
      } else if (byte < 62) {
        id += (byte - 26).toString(36).toUpperCase();
      } else if (byte > 62) {
        id += "-";
      } else {
        id += "_";
      }
      return id;
    }, "");
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/utils.js
var require_utils = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/utils.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUserHeader = exports.createError = exports.createURL = exports.createChannel = exports.setSnackSDKFetch = exports.fetch = void 0;
    var nanoid_1 = (init_index_browser(), __toCommonJS(index_browser_exports));
    var snack_content_1 = require_build();
    var fetchFn;
    var internalFetch = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (!fetchFn) {
        fetchFn = globalThis.fetch;
      }
      return fetchFn.apply(void 0, args);
    };
    exports.fetch = internalFetch;
    function setSnackSDKFetch(fn) {
      fetchFn = fn;
    }
    exports.setSnackSDKFetch = setSnackSDKFetch;
    var VALID_CHANNEL_CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var generateChannel = (0, nanoid_1.customAlphabet)(VALID_CHANNEL_CHARS, 10);
    function createChannel(channel) {
      channel = channel !== null && channel !== void 0 ? channel : generateChannel();
      if (channel.length < 6) {
        throw new Error("Please use a channel id with more characters (entropy)");
      }
      if (channel.length > 128) {
        throw new Error("Channel id too long, use a channel id thats shorter than 128 characters");
      }
      for (var _i = 0, channel_1 = channel; _i < channel_1.length; _i++) {
        var char = channel_1[_i];
        if (VALID_CHANNEL_CHARS.indexOf(char) < 0) {
          throw new Error('Channel id contains an invalid character "'.concat(char, '", only "[0-9a-zA-Z]" are allowed'));
        }
      }
      return channel;
    }
    exports.createChannel = createChannel;
    function createURL(endpoint, sdkVersion, channel, id) {
      return (0, snack_content_1.createRuntimeUrl)({ endpoint, channel, sdkVersion, snack: id });
    }
    exports.createURL = createURL;
    function createError(config) {
      var error = new Error(config.message);
      if (config.name)
        error.name = config.name;
      if (config.fileName)
        error.fileName = config.fileName;
      if (config.lineNumber)
        error.lineNumber = config.lineNumber;
      if (config.columnNumber)
        error.columnNumber = config.columnNumber;
      if (config.stack)
        error.stack = config.stack;
      return error;
    }
    exports.createError = createError;
    function createUserHeader(user) {
      if (user === null || user === void 0 ? void 0 : user.sessionSecret) {
        return { "Expo-Session": user.sessionSecret };
      }
      if (user === null || user === void 0 ? void 0 : user.accessToken) {
        return { Authorization: "Bearer ".concat(user.accessToken) };
      }
      return {};
    }
    exports.createUserHeader = createUserHeader;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/DependencyResolver.js
var require_DependencyResolver = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/DependencyResolver.js"(exports) {
    "use strict";
    init_define_process_env();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPackageName = exports.verifyDependency = exports.getMissingDependencies = void 0;
    var semver_1 = __importDefault(require_semver2());
    var snack_content_1 = require_build();
    var validate_npm_package_name_1 = __importDefault(require_validate_npm_package_name());
    var utils_1 = require_utils();
    function getKey(name, version) {
      return version ? "".concat(name, "@").concat(version) : name;
    }
    var DependencyResolver = (
      /** @class */
      (function() {
        function DependencyResolver2(options) {
          this.status = {};
          this.snackagerURL = options.snackagerURL;
          this.logger = options.logger;
          this.callback = options.callback;
        }
        DependencyResolver2.prototype.add = function(name, version, sdkVersion) {
          var key = getKey(name, version);
          this.status[key] = this.status[key] || this.resolve(key, name, version, sdkVersion);
          return this.status[key];
        };
        DependencyResolver2.prototype.remove = function(name, version, _sdkVersion) {
          delete this.status[getKey(name, version)];
        };
        DependencyResolver2.prototype.waitForCompletion = function() {
          return __awaiter(this, void 0, void 0, function() {
            var promises;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  promises = Object.values(this.status);
                  _a.label = 1;
                case 1:
                  if (!promises.length) return [3, 3];
                  return [4, Promise.all(promises)];
                case 2:
                  _a.sent();
                  promises = Object.values(this.status);
                  return [3, 1];
                case 3:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        DependencyResolver2.prototype.resolve = function(key, name, version, sdkVersion) {
          var _a, _b, _c, _d;
          return __awaiter(this, void 0, void 0, function() {
            var versionSnackager, url, i, res, data, error, e_1, error, promiseExists;
            return __generator(this, function(_e) {
              switch (_e.label) {
                case 0:
                  versionSnackager = sdkVersion >= "37.0.0" ? "version_snackager=true&" : "";
                  url = "".concat(this.snackagerURL, "/bundle/").concat(key, "?").concat(versionSnackager, "sdkVersion=").concat(sdkVersion, "&platforms=ios,android,web");
                  (_a = this.logger) === null || _a === void 0 ? void 0 : _a.module("Resolving dependency", key, "...");
                  _e.label = 1;
                case 1:
                  _e.trys.push([1, 12, , 13]);
                  i = 0;
                  _e.label = 2;
                case 2:
                  if (!(i < 30)) return [3, 11];
                  return [4, (0, utils_1.fetch)(url)];
                case 3:
                  res = _e.sent();
                  if (!this.status[key]) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                  if (!(res.status === 200)) return [3, 8];
                  return [4, res.json()];
                case 4:
                  data = _e.sent();
                  if (!data.pending) return [3, 6];
                  (_b = this.logger) === null || _b === void 0 ? void 0 : _b.module("Dependency is still being bundled", key, "trying again shortly");
                  return [4, new Promise(function(resolve) {
                    return setTimeout(resolve, 5e3);
                  })];
                case 5:
                  _e.sent();
                  if (!this.status[key]) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                  return [3, 7];
                case 6:
                  (_c = this.logger) === null || _c === void 0 ? void 0 : _c.module("Resolved dependency", key, data);
                  delete this.status[key];
                  try {
                    this.callback({
                      name,
                      version,
                      sdkVersion
                    }, data);
                    return [
                      2
                      /*return*/
                    ];
                  } catch (e) {
                    return [2, Promise.reject(e)];
                  }
                  _e.label = 7;
                case 7:
                  return [3, 10];
                case 8:
                  return [4, res.text()];
                case 9:
                  error = _e.sent();
                  throw new Error(error);
                case 10:
                  i++;
                  return [3, 2];
                case 11:
                  return [3, 13];
                case 12:
                  e_1 = _e.sent();
                  error = (0, utils_1.createError)({
                    message: "Failed to resolve dependency '".concat(key, "' (").concat(e_1.message, ")"),
                    fileName: key
                  });
                  (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error(error);
                  promiseExists = !!this.status[key];
                  if (promiseExists) {
                    delete this.status[key];
                    this.callback({
                      name,
                      version,
                      sdkVersion
                    }, void 0, error);
                  }
                  return [3, 13];
                case 13:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        return DependencyResolver2;
      })()
    );
    exports.default = DependencyResolver;
    function getMissingDependencies(dependencies, sdkVersion, wantedDependencyVersions) {
      var _a, _b;
      var result = {};
      for (var name_1 in dependencies) {
        var dep = dependencies[name_1];
        if (dep.peerDependencies) {
          for (var peerName in dep.peerDependencies) {
            if (!(0, snack_content_1.isModulePreloaded)(peerName, sdkVersion, true) && !dependencies[peerName]) {
              if (!result[peerName]) {
                result[peerName] = {
                  dependents: [name_1],
                  wantedVersion: (_b = (_a = wantedDependencyVersions === null || wantedDependencyVersions === void 0 ? void 0 : wantedDependencyVersions[peerName]) !== null && _a !== void 0 ? _a : dep.peerDependencies[peerName]) !== null && _b !== void 0 ? _b : "*"
                };
              } else {
                var wantedVersion = wantedDependencyVersions === null || wantedDependencyVersions === void 0 ? void 0 : wantedDependencyVersions[peerName];
                if (!wantedVersion) {
                  wantedVersion = result[peerName].wantedVersion;
                  var version = dep.peerDependencies[peerName] || "*";
                  if (wantedVersion === "*" || version === "latest" && wantedVersion === "latest" || version !== "*" && version !== "latest" && (wantedVersion === "latest" || semver_1.default.gt(semver_1.default.coerce(version), semver_1.default.coerce(wantedVersion)))) {
                    wantedVersion = version;
                  }
                }
                result[peerName] = {
                  dependents: __spreadArray(__spreadArray([], result[peerName].dependents, true), [name_1], false),
                  wantedVersion
                };
              }
            }
          }
        }
      }
      return result;
    }
    exports.getMissingDependencies = getMissingDependencies;
    function verifyDependency(name, version) {
      var _a = (0, validate_npm_package_name_1.default)(name), validForOldPackages = _a.validForOldPackages, errors2 = _a.errors;
      if (!validForOldPackages) {
        var names = name.split("/");
        if (names.length >= 2 && !name.startsWith("@")) {
          var result = (0, validate_npm_package_name_1.default)(names[0]);
          validForOldPackages = result.validForNewPackages;
          errors2 = result.errors;
        } else if (names.length >= 2 && name.startsWith("@")) {
          var result = (0, validate_npm_package_name_1.default)(names[0] + "/" + names[1]);
          validForOldPackages = result.validForNewPackages;
          errors2 = result.errors;
        }
        if (!validForOldPackages) {
          return (0, utils_1.createError)({
            message: "Invalid dependency '".concat(name, "' ").concat((errors2 === null || errors2 === void 0 ? void 0 : errors2.length) ? "(".concat(errors2[0], ")") : ""),
            fileName: name
          });
        }
      }
      if (!(0, snack_content_1.isValidSemver)(version)) {
        return (0, utils_1.createError)({
          message: "Invalid dependency '".concat(name, "' (version '").concat(version, "' is not a valid semver)"),
          fileName: name
        });
      }
      return void 0;
    }
    exports.verifyDependency = verifyDependency;
    function getPackageName(name) {
      var names = name.split("/");
      if (names[0].startsWith("@") && names.length >= 2) {
        return "".concat(names[0], "/").concat(names[1]);
      } else {
        return names[0];
      }
    }
    exports.getPackageName = getPackageName;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/DevSession.js
var require_DevSession = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/DevSession.js"(exports) {
    "use strict";
    init_define_process_env();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var DevSession = (
      /** @class */
      (function() {
        function DevSession2(options) {
          this.apiURL = options.apiURL;
          this.logger = options.logger;
          this.onSendBeaconCloseRequest = options.onSendBeaconCloseRequest;
        }
        DevSession2.prototype.setState = function(state, prevState) {
          var isCloseUser = prevState.user && (!state.online || state.url !== prevState.url || state.user !== prevState.user);
          var isCloseDevice = prevState.deviceId && (!state.online || state.url !== prevState.url || state.deviceId !== prevState.deviceId);
          if (prevState.online && (isCloseUser || isCloseDevice)) {
            this.close(prevState.url, isCloseUser ? prevState.user : void 0, isCloseDevice ? prevState.deviceId : void 0);
          }
          if (state.user !== prevState.user || state.online !== prevState.online || state.url !== prevState.url || state.deviceId !== prevState.deviceId || state.onlineName !== prevState.onlineName) {
            this.notify(state);
          }
        };
        DevSession2.prototype.setFocus = function(state) {
          this.notify(state, true);
        };
        DevSession2.prototype.getRequest = function(close, user, deviceId) {
          var suffix = deviceId ? "?deviceId=".concat(deviceId) : "";
          var endpoint = close ? "notify-close" : "notify-alive";
          var url = "".concat(this.apiURL, "/--/api/v2/development-sessions/").concat(endpoint).concat(suffix);
          return {
            url,
            method: "post",
            headers: __assign({ "Content-Type": "application/json" }, (0, utils_1.createUserHeader)(user))
          };
        };
        DevSession2.prototype.notify = function(state, setFocus) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, function() {
            var user, online, onlineURL, deviceId, onlineName, _c, url, data, response, json, e_1;
            return __generator(this, function(_d) {
              switch (_d.label) {
                case 0:
                  user = state.user, online = state.online, onlineURL = state.url, deviceId = state.deviceId, onlineName = state.onlineName;
                  if (!online || !user && !deviceId) {
                    this.focusedAt = void 0;
                    return [
                      2
                      /*return*/
                    ];
                  }
                  if (!this.focusedAt || setFocus) {
                    this.focusedAt = Date.now();
                  }
                  _d.label = 1;
                case 1:
                  _d.trys.push([1, 4, , 5]);
                  _c = this.getRequest(false, user, deviceId), url = _c.url, data = __rest(_c, ["url"]);
                  return [4, (0, utils_1.fetch)(url, __assign(__assign({}, data), { body: JSON.stringify({
                    data: {
                      session: {
                        description: onlineName,
                        hostname: "snack",
                        config: {},
                        url: onlineURL,
                        source: "snack",
                        openedAt: this.focusedAt
                      }
                    }
                  }) }))];
                case 2:
                  response = _d.sent();
                  if (!response.ok) {
                    throw Error(response.statusText);
                  }
                  return [4, response.json()];
                case 3:
                  json = _d.sent();
                  this.onSendBeaconCloseRequest({
                    url: this.getRequest(true, void 0, deviceId).url,
                    data: new Blob([
                      JSON.stringify(__assign({ session: {
                        url: onlineURL
                      } }, ((_a = json.data) === null || _a === void 0 ? void 0 : _a.auth) ? {
                        auth: json.data.auth
                      } : {}))
                    ], { type: "text/plain" })
                  });
                  return [3, 5];
                case 4:
                  e_1 = _d.sent();
                  (_b = this.logger) === null || _b === void 0 ? void 0 : _b.error("Failed to advertise", e_1);
                  return [3, 5];
                case 5:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        DevSession2.prototype.close = function(onlineURL, user, deviceId) {
          var _a;
          return __awaiter(this, void 0, void 0, function() {
            var _b, url, data, response, e_2;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _c.trys.push([0, 2, , 3]);
                  _b = this.getRequest(true, user, deviceId), url = _b.url, data = __rest(_b, ["url"]);
                  return [4, (0, utils_1.fetch)(url, __assign(__assign({}, data), { body: JSON.stringify({
                    session: {
                      url: onlineURL
                    }
                  }) }))];
                case 1:
                  response = _c.sent();
                  if (!response.ok) {
                    throw Error(response.statusText);
                  }
                  return [3, 3];
                case 2:
                  e_2 = _c.sent();
                  (_a = this.logger) === null || _a === void 0 ? void 0 : _a.error("Failed to advertise close", e_2);
                  return [3, 3];
                case 3:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        return DevSession2;
      })()
    );
    exports.default = DevSession;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/FileUploader.js
var require_FileUploader = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/FileUploader.js"(exports) {
    "use strict";
    init_define_process_env();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var FileUploader = (
      /** @class */
      (function() {
        function FileUploader2(options) {
          this.status = {};
          this.apiURL = options.apiURL;
          this.callback = options.callback;
          this.logger = options.logger;
        }
        FileUploader2.prototype.add = function(path, file) {
          var status = this.status[path];
          if (status && status.file === file) {
            return status.promise;
          }
          this.status[path] = {
            file,
            promise: this.upload(path, file)
          };
          return this.status[path].promise;
        };
        FileUploader2.prototype.remove = function(path, file) {
          var _a;
          if (!file || ((_a = this.status[path]) === null || _a === void 0 ? void 0 : _a.file) === file) {
            delete this.status[path];
          }
        };
        FileUploader2.prototype.waitForCompletion = function() {
          return __awaiter(this, void 0, void 0, function() {
            var promises;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  promises = Object.values(this.status).map(function(status) {
                    return status.promise;
                  });
                  _a.label = 1;
                case 1:
                  if (!promises.length) return [3, 3];
                  return [4, Promise.all(promises)];
                case 2:
                  _a.sent();
                  promises = Object.values(this.status).map(function(status) {
                    return status.promise;
                  });
                  return [3, 1];
                case 3:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        FileUploader2.prototype.upload = function(path, file) {
          var _a, _b, _c, _d, _e, _f, _g;
          return __awaiter(this, void 0, void 0, function() {
            var url, input, formData, response, text, result, resultURL, e_1, error;
            return __generator(this, function(_h) {
              switch (_h.label) {
                case 0:
                  _h.trys.push([0, 5, , 6]);
                  (_a = this.logger) === null || _a === void 0 ? void 0 : _a.module("Uploading file", path, "...");
                  url = void 0;
                  input = void 0;
                  switch (file.type) {
                    case "CODE":
                      url = "".concat(this.apiURL, "/--/api/v2/snack/uploadCode");
                      input = {
                        method: "POST",
                        body: JSON.stringify({ code: file.contents }),
                        headers: { "Content-Type": "application/json" }
                      };
                      break;
                    case "ASSET":
                      url = "".concat(this.apiURL, "/--/api/v2/snack/uploadAsset");
                      if (typeof FormData !== "undefined" && file.contents instanceof FormData || typeof file.contents === "object" && ((_b = file.contents.constructor) === null || _b === void 0 ? void 0 : _b.name) === "FormData") {
                        input = {
                          method: "POST",
                          body: file.contents
                        };
                      } else if (typeof FormData !== "undefined") {
                        formData = new FormData();
                        formData.append("asset", file.contents, ((_c = file.contents) === null || _c === void 0 ? void 0 : _c.name) || path);
                        input = {
                          method: "POST",
                          body: formData
                        };
                      } else {
                        throw new Error("Uploading assets is not supported in this environment. Make sure FormData is polyfilled or provide the data as a FormData object");
                      }
                      break;
                    default:
                      throw new Error("Invalid file type ".concat(file.type));
                  }
                  return [4, (0, utils_1.fetch)(url, input)];
                case 1:
                  response = _h.sent();
                  if (!!response.ok) return [3, 3];
                  return [4, response.text()];
                case 2:
                  text = _h.sent();
                  throw new Error(text);
                case 3:
                  return [4, response.json()];
                case 4:
                  result = _h.sent();
                  resultURL = result.url;
                  if (((_d = this.status[path]) === null || _d === void 0 ? void 0 : _d.file) === file) {
                    (_e = this.logger) === null || _e === void 0 ? void 0 : _e.module("Uploaded file", path, resultURL);
                    delete this.status[path];
                    try {
                      this.callback({ path, file }, resultURL);
                    } catch (e) {
                      return [2, Promise.reject(e)];
                    }
                  }
                  return [3, 6];
                case 5:
                  e_1 = _h.sent();
                  error = (0, utils_1.createError)({
                    message: "Failed to upload file ".concat(path, " (").concat(e_1.message, ")"),
                    fileName: path
                  });
                  (_f = this.logger) === null || _f === void 0 ? void 0 : _f.error(error);
                  if (((_g = this.status[path]) === null || _g === void 0 ? void 0 : _g.file) === file) {
                    delete this.status[path];
                    this.callback({ path, file }, void 0, error);
                  }
                  return [3, 6];
                case 6:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        return FileUploader2;
      })()
    );
    exports.default = FileUploader;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/Logger.js
var require_Logger = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/Logger.js"(exports) {
    "use strict";
    init_define_process_env();
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createLogger = void 0;
    function logFn(isEnabled, type, color, textColor) {
      return function() {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          messages[_i] = arguments[_i];
        }
        if (isEnabled) {
          console.log.apply(console, __spreadArray(["%c ".concat(type.toUpperCase(), " "), "background: ".concat(color, "; color: ").concat(textColor !== null && textColor !== void 0 ? textColor : "#fff")], messages, false));
        }
      };
    }
    function createLogger(isEnabled) {
      return {
        info: logFn(isEnabled, "info", "#2196f3"),
        warn: logFn(isEnabled, "warn", "#FF9800"),
        error: logFn(isEnabled, "error", "#f44336"),
        comm: logFn(isEnabled, "comm", "#DBD64E"),
        comm_recv: logFn(isEnabled, "comm", "#DBD64E", "#000"),
        module: logFn(isEnabled, "module", "#DB14C7")
      };
    }
    exports.createLogger = createLogger;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isEqual.js"(exports, module) {
    init_define_process_env();
    var baseIsEqual = require_baseIsEqual();
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/State.js
var require_State = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/State.js"(exports) {
    "use strict";
    init_define_process_env();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUnsaved = exports.isCodeChanged = exports.isBusy = exports.updateObjects = exports.removeObject = exports.removeObjects = exports.addObject = exports.addObjects = void 0;
    var isEqual_1 = __importDefault(require_isEqual());
    var snack_content_1 = require_build();
    function addObjects(state, content, filter) {
      var newState = null;
      for (var key in content) {
        if (filter ? filter(content[key], state[key]) : !(0, isEqual_1.default)(content[key], state[key])) {
          newState = newState !== null && newState !== void 0 ? newState : __assign({}, state);
          newState[key] = content[key];
        }
      }
      return newState !== null && newState !== void 0 ? newState : state;
    }
    exports.addObjects = addObjects;
    function addObject(state, key, content, filter) {
      var _a;
      return addObjects(state, (_a = {}, _a[key] = content, _a), filter);
    }
    exports.addObject = addObject;
    function removeObjects(state, keys) {
      if (!keys.length)
        return state;
      var newState = null;
      keys.forEach(function(key) {
        if (state[key]) {
          newState = newState !== null && newState !== void 0 ? newState : __assign({}, state);
          delete newState[key];
        }
      });
      return newState !== null && newState !== void 0 ? newState : state;
    }
    exports.removeObjects = removeObjects;
    function removeObject(state, key) {
      return removeObjects(state, [key]);
    }
    exports.removeObject = removeObject;
    function updateObjects(state, content, compareFn) {
      if (compareFn === void 0) {
        compareFn = isEqual_1.default;
      }
      var newState = null;
      for (var key in content) {
        var val = content[key];
        if (val === null) {
          if (state[key]) {
            newState = newState !== null && newState !== void 0 ? newState : __assign({}, state);
            delete newState[key];
          }
        } else if (!compareFn(val, state[key])) {
          newState = newState !== null && newState !== void 0 ? newState : __assign({}, state);
          newState[key] = val;
        }
      }
      return newState !== null && newState !== void 0 ? newState : state;
    }
    exports.updateObjects = updateObjects;
    function isBusy(state) {
      return !!Object.keys(state.dependencies).find(function(name) {
        return !state.dependencies[name].handle && !(0, snack_content_1.isModulePreloaded)(name, state.sdkVersion);
      }) || !!Object.values(state.files).find(function(file) {
        return file.type === "ASSET" && typeof file.contents !== "string";
      });
    }
    exports.isBusy = isBusy;
    function isCodeChanged(state, prevState) {
      return state.dependencies !== prevState.dependencies || state.files !== prevState.files || state.sdkVersion !== prevState.sdkVersion;
    }
    exports.isCodeChanged = isCodeChanged;
    function isUnsaved(state, prevState) {
      return state.dependencies !== prevState.dependencies || state.files !== prevState.files || state.sdkVersion !== prevState.sdkVersion || state.name !== prevState.name || state.description !== prevState.description;
    }
    exports.isUnsaved = isUnsaved;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/WantedVersions.js
var require_WantedVersions = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/WantedVersions.js"(exports) {
    "use strict";
    init_define_process_env();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WantedDependencyVersions = void 0;
    var snack_content_1 = require_build();
    var utils_1 = require_utils();
    var WantedDependencyVersions = (
      /** @class */
      (function() {
        function WantedDependencyVersions2(options) {
          this.apiUrl = options.apiUrl;
          this.logger = options.logger;
          this.callback = options.callback;
          this.promise = Promise.resolve();
        }
        WantedDependencyVersions2.prototype.setSDKVersion = function(sdkVersion) {
          if (this.sdkVersion !== sdkVersion) {
            this.sdkVersion = sdkVersion;
            this.promise = this.fetchModules(sdkVersion);
          }
        };
        WantedDependencyVersions2.prototype.waitForCompletion = function() {
          return this.promise;
        };
        WantedDependencyVersions2.prototype.fetchModules = function(sdkVersion) {
          var _a, _b, _c, _d;
          return __awaiter(this, void 0, void 0, function() {
            var sdkVersionString, _e, remoteVersions, bundledVersions, versions, error_1;
            return __generator(this, function(_f) {
              switch (_f.label) {
                case 0:
                  if (this.sdkVersion !== sdkVersion) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                  _f.label = 1;
                case 1:
                  _f.trys.push([1, 3, , 4]);
                  (_a = this.logger) === null || _a === void 0 ? void 0 : _a.module("fetching versioned modules for SDK", sdkVersion, "...");
                  sdkVersionString = ((_b = snack_content_1.sdks[sdkVersion]) === null || _b === void 0 ? void 0 : _b.version) || sdkVersion;
                  return [4, Promise.all([
                    this.fetchRemoteVersionedModules(sdkVersionString).catch(function() {
                    }),
                    this.fetchBundledNativeModules(sdkVersionString)
                  ])];
                case 2:
                  _e = _f.sent(), remoteVersions = _e[0], bundledVersions = _e[1];
                  versions = __assign(__assign({}, remoteVersions), bundledVersions);
                  if (this.sdkVersion === sdkVersion) {
                    (_c = this.logger) === null || _c === void 0 ? void 0 : _c.module("fetched versioned modules for SDK", sdkVersion, versions);
                    this.callback(sdkVersion, versions);
                  }
                  return [3, 4];
                case 3:
                  error_1 = _f.sent();
                  if (this.sdkVersion === sdkVersion) {
                    (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error(error_1);
                    this.callback(sdkVersion, void 0, error_1);
                  }
                  return [3, 4];
                case 4:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        WantedDependencyVersions2.prototype.fetchBundledNativeModules = function(sdkVersion) {
          var urlVersion = encodeURIComponent(sdkVersion);
          return (0, utils_1.fetch)("https://cdn.jsdelivr.net/npm/expo@".concat(urlVersion, "/bundledNativeModules.json")).then(function(response) {
            return response.json();
          }).then(function(data) {
            return data || {};
          });
        };
        WantedDependencyVersions2.prototype.fetchRemoteVersionedModules = function(sdkVersion) {
          var _this = this;
          return (0, utils_1.fetch)("".concat(this.apiUrl, "/--/api/v2/versions/latest")).then(function(response) {
            return response.json();
          }).then(function(data) {
            return _this.normalizeRemoteVersionResponse(sdkVersion, data);
          });
        };
        WantedDependencyVersions2.prototype.normalizeRemoteVersionResponse = function(sdkVersion, response) {
          var _a, _b;
          if (response === void 0) {
            response = {};
          }
          var sdkVersionSettings = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.sdkVersions) === null || _b === void 0 ? void 0 : _b[sdkVersion];
          if (!sdkVersionSettings) {
            return {};
          }
          var relatedPackages = sdkVersionSettings.relatedPackages, facebookReactVersion = sdkVersionSettings.facebookReactVersion, facebookReactNativeVersion = sdkVersionSettings.facebookReactNativeVersion;
          var reactVersion = facebookReactVersion ? {
            react: facebookReactVersion,
            "react-dom": facebookReactVersion
          } : void 0;
          return __assign(__assign(__assign({}, relatedPackages), reactVersion), { "react-native": facebookReactNativeVersion });
        };
        return WantedDependencyVersions2;
      })()
    );
    exports.WantedDependencyVersions = WantedDependencyVersions;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/defaultConfig.js
var require_defaultConfig = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/defaultConfig.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SnackIdentityState = exports.webPlayerURL = exports.snackpubURL = exports.snackagerURL = exports.apiURL = void 0;
    var snack_content_1 = require_build();
    exports.apiURL = "https://exp.host";
    exports.snackagerURL = "https://snackager.eascdn.net";
    exports.snackpubURL = "https://snackpub.expo.dev";
    exports.webPlayerURL = "https://snack-runtime.eascdn.net/v2/%%SDK_VERSION%%";
    exports.SnackIdentityState = {
      sdkVersion: snack_content_1.defaultSdkVersion,
      name: "",
      description: "",
      dependencies: {},
      missingDependencies: {},
      files: {},
      connectedClients: {},
      transports: {},
      disabled: false,
      unsaved: false,
      online: false,
      url: "",
      channel: ""
    };
    var defaultConfig = {
      apiURL: exports.apiURL,
      snackagerURL: exports.snackagerURL,
      snackpubURL: exports.snackpubURL,
      sdkVersion: snack_content_1.defaultSdkVersion,
      webPlayerURL: exports.webPlayerURL
    };
    exports.default = defaultConfig;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/commons.js
var require_commons = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/commons.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERROR_PACKET = exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = void 0;
    var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
    exports.PACKET_TYPES = PACKET_TYPES;
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
    exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
    Object.keys(PACKET_TYPES).forEach((key) => {
      PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    var ERROR_PACKET = { type: "error", data: "parser error" };
    exports.ERROR_PACKET = ERROR_PACKET;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/encodePacket.browser.js
var require_encodePacket_browser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    var commons_js_1 = require_commons();
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var isView = (obj) => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
    };
    var encodePacket = ({ type, data }, supportsBinary, callback) => {
      if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(data, callback);
        }
      } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(new Blob([data]), callback);
        }
      }
      return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
    };
    var encodeBlobAsBase64 = (data, callback) => {
      const fileReader = new FileReader();
      fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
      };
      return fileReader.readAsDataURL(data);
    };
    exports.default = encodePacket;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js
var require_base64_arraybuffer = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decode = exports.encode = void 0;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for (let i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }
    var encode = (arraybuffer) => {
      let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
      for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
      }
      if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }
      return base64;
    };
    exports.encode = encode;
    var decode = (base64) => {
      let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }
      const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
      for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
      }
      return arraybuffer;
    };
    exports.decode = decode;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/decodePacket.browser.js
var require_decodePacket_browser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    var commons_js_1 = require_commons();
    var base64_arraybuffer_js_1 = require_base64_arraybuffer();
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var decodePacket = (encodedPacket, binaryType) => {
      if (typeof encodedPacket !== "string") {
        return {
          type: "message",
          data: mapBinary(encodedPacket, binaryType)
        };
      }
      const type = encodedPacket.charAt(0);
      if (type === "b") {
        return {
          type: "message",
          data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
      }
      const packetType = commons_js_1.PACKET_TYPES_REVERSE[type];
      if (!packetType) {
        return commons_js_1.ERROR_PACKET;
      }
      return encodedPacket.length > 1 ? {
        type: commons_js_1.PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
      } : {
        type: commons_js_1.PACKET_TYPES_REVERSE[type]
      };
    };
    var decodeBase64Packet = (data, binaryType) => {
      if (withNativeArrayBuffer) {
        const decoded = (0, base64_arraybuffer_js_1.decode)(data);
        return mapBinary(decoded, binaryType);
      } else {
        return { base64: true, data };
      }
    };
    var mapBinary = (data, binaryType) => {
      switch (binaryType) {
        case "blob":
          return data instanceof ArrayBuffer ? new Blob([data]) : data;
        case "arraybuffer":
        default:
          return data;
      }
    };
    exports.default = decodePacket;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/index.js
var require_cjs = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-parser@5.0.7/node_modules/engine.io-parser/build/cjs/index.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodePayload = exports.decodePacket = exports.encodePayload = exports.encodePacket = exports.protocol = void 0;
    var encodePacket_js_1 = require_encodePacket_browser();
    exports.encodePacket = encodePacket_js_1.default;
    var decodePacket_js_1 = require_decodePacket_browser();
    exports.decodePacket = decodePacket_js_1.default;
    var SEPARATOR = String.fromCharCode(30);
    var encodePayload = (packets, callback) => {
      const length = packets.length;
      const encodedPackets = new Array(length);
      let count = 0;
      packets.forEach((packet, i) => {
        (0, encodePacket_js_1.default)(packet, false, (encodedPacket) => {
          encodedPackets[i] = encodedPacket;
          if (++count === length) {
            callback(encodedPackets.join(SEPARATOR));
          }
        });
      });
    };
    exports.encodePayload = encodePayload;
    var decodePayload = (encodedPayload, binaryType) => {
      const encodedPackets = encodedPayload.split(SEPARATOR);
      const packets = [];
      for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0, decodePacket_js_1.default)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
          break;
        }
      }
      return packets;
    };
    exports.decodePayload = decodePayload;
    exports.protocol = 4;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/@socket.io+component-emitter@3.1.2/node_modules/@socket.io/component-emitter/lib/cjs/index.js
var require_cjs2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/@socket.io+component-emitter@3.1.2/node_modules/@socket.io/component-emitter/lib/cjs/index.js"(exports) {
    init_define_process_env();
    exports.Emitter = Emitter;
    function Emitter(obj) {
      if (obj) return mixin(obj);
    }
    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }
      return obj;
    }
    Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
      return this;
    };
    Emitter.prototype.once = function(event, fn) {
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }
      on.fn = fn;
      this.on(event, on);
      return this;
    };
    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      }
      var callbacks = this._callbacks["$" + event];
      if (!callbacks) return this;
      if (1 == arguments.length) {
        delete this._callbacks["$" + event];
        return this;
      }
      var cb;
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      if (callbacks.length === 0) {
        delete this._callbacks["$" + event];
      }
      return this;
    };
    Emitter.prototype.emit = function(event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }
      return this;
    };
    Emitter.prototype.emitReserved = Emitter.prototype.emit;
    Emitter.prototype.listeners = function(event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + event] || [];
    };
    Emitter.prototype.hasListeners = function(event) {
      return !!this.listeners(event).length;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/globalThis.browser.js
var require_globalThis_browser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/globalThis.browser.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globalThisShim = void 0;
    exports.globalThisShim = (() => {
      if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    })();
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/util.js
var require_util = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/util.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.byteLength = exports.installTimerFunctions = exports.pick = void 0;
    var globalThis_js_1 = require_globalThis_browser();
    function pick(obj, ...attr) {
      return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
          acc[k] = obj[k];
        }
        return acc;
      }, {});
    }
    exports.pick = pick;
    var NATIVE_SET_TIMEOUT = setTimeout;
    var NATIVE_CLEAR_TIMEOUT = clearTimeout;
    function installTimerFunctions(obj, opts) {
      if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis_js_1.globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis_js_1.globalThisShim);
      } else {
        obj.setTimeoutFn = setTimeout.bind(globalThis_js_1.globalThisShim);
        obj.clearTimeoutFn = clearTimeout.bind(globalThis_js_1.globalThisShim);
      }
    }
    exports.installTimerFunctions = installTimerFunctions;
    var BASE64_OVERHEAD = 1.33;
    function byteLength(obj) {
      if (typeof obj === "string") {
        return utf8Length(obj);
      }
      return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
    }
    exports.byteLength = byteLength;
    function utf8Length(str) {
      let c = 0, length = 0;
      for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 128) {
          length += 1;
        } else if (c < 2048) {
          length += 2;
        } else if (c < 55296 || c >= 57344) {
          length += 3;
        } else {
          i++;
          length += 4;
        }
      }
      return length;
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js
var require_ms = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"(exports, module) {
    init_define_process_env();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/debug@4.3.7/node_modules/debug/src/common.js
var require_common = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/debug@4.3.7/node_modules/debug/src/common.js"(exports, module) {
    init_define_process_env();
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/debug@4.3.7/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/debug@4.3.7/node_modules/debug/src/browser.js"(exports, module) {
    init_define_process_env();
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = define_process_env_default.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transport.js
var require_transport = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transport.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transport = void 0;
    var engine_io_parser_1 = require_cjs();
    var component_emitter_1 = require_cjs2();
    var util_js_1 = require_util();
    var debug_1 = __importDefault(require_browser());
    var debug = (0, debug_1.default)("engine.io-client:transport");
    var TransportError = class extends Error {
      constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
      }
    };
    var Transport = class extends component_emitter_1.Emitter {
      /**
       * Transport abstract constructor.
       *
       * @param {Object} options.
       * @api private
       */
      constructor(opts) {
        super();
        this.writable = false;
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
      }
      /**
       * Emits an error.
       *
       * @param {String} reason
       * @param description
       * @param context - the error context
       * @return {Transport} for chaining
       * @api protected
       */
      onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
      }
      /**
       * Opens the transport.
       *
       * @api public
       */
      open() {
        if ("closed" === this.readyState || "" === this.readyState) {
          this.readyState = "opening";
          this.doOpen();
        }
        return this;
      }
      /**
       * Closes the transport.
       *
       * @api public
       */
      close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.doClose();
          this.onClose();
        }
        return this;
      }
      /**
       * Sends multiple packets.
       *
       * @param {Array} packets
       * @api public
       */
      send(packets) {
        if ("open" === this.readyState) {
          this.write(packets);
        } else {
          debug("transport is not open, discarding packets");
        }
      }
      /**
       * Called upon open
       *
       * @api protected
       */
      onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
      }
      /**
       * Called with data.
       *
       * @param {String} data
       * @api protected
       */
      onData(data) {
        const packet = (0, engine_io_parser_1.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
      }
      /**
       * Called with a decoded packet.
       *
       * @api protected
       */
      onPacket(packet) {
        super.emitReserved("packet", packet);
      }
      /**
       * Called upon close.
       *
       * @api protected
       */
      onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
      }
    };
    exports.Transport = Transport;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/contrib/yeast.js
var require_yeast = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/contrib/yeast.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.yeast = exports.decode = exports.encode = void 0;
    var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
    var length = 64;
    var map = {};
    var seed = 0;
    var i = 0;
    var prev;
    function encode(num) {
      let encoded = "";
      do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
      } while (num > 0);
      return encoded;
    }
    exports.encode = encode;
    function decode(str) {
      let decoded = 0;
      for (i = 0; i < str.length; i++) {
        decoded = decoded * length + map[str.charAt(i)];
      }
      return decoded;
    }
    exports.decode = decode;
    function yeast() {
      const now = encode(+/* @__PURE__ */ new Date());
      if (now !== prev)
        return seed = 0, prev = now;
      return now + "." + encode(seed++);
    }
    exports.yeast = yeast;
    for (; i < length; i++)
      map[alphabet[i]] = i;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/contrib/parseqs.js
var require_parseqs = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/contrib/parseqs.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decode = exports.encode = void 0;
    function encode(obj) {
      let str = "";
      for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (str.length)
            str += "&";
          str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
        }
      }
      return str;
    }
    exports.encode = encode;
    function decode(qs) {
      let qry = {};
      let pairs = qs.split("&");
      for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split("=");
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
      return qry;
    }
    exports.decode = decode;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/contrib/has-cors.js
var require_has_cors = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/contrib/has-cors.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasCORS = void 0;
    var value = false;
    try {
      value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
    } catch (err) {
    }
    exports.hasCORS = value;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js
var require_xmlhttprequest_browser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XHR = void 0;
    var has_cors_js_1 = require_has_cors();
    var globalThis_js_1 = require_globalThis_browser();
    function XHR(opts) {
      const xdomain = opts.xdomain;
      try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || has_cors_js_1.hasCORS)) {
          return new XMLHttpRequest();
        }
      } catch (e) {
      }
      if (!xdomain) {
        try {
          return new globalThis_js_1.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e) {
        }
      }
    }
    exports.XHR = XHR;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/polling.js
var require_polling = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/polling.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Request = exports.Polling = void 0;
    var transport_js_1 = require_transport();
    var debug_1 = __importDefault(require_browser());
    var yeast_js_1 = require_yeast();
    var parseqs_js_1 = require_parseqs();
    var engine_io_parser_1 = require_cjs();
    var xmlhttprequest_js_1 = require_xmlhttprequest_browser();
    var component_emitter_1 = require_cjs2();
    var util_js_1 = require_util();
    var globalThis_js_1 = require_globalThis_browser();
    var debug = (0, debug_1.default)("engine.io-client:polling");
    function empty() {
    }
    var hasXHR2 = (function() {
      const xhr = new xmlhttprequest_js_1.XHR({
        xdomain: false
      });
      return null != xhr.responseType;
    })();
    var Polling = class extends transport_js_1.Transport {
      /**
       * XHR Polling constructor.
       *
       * @param {Object} opts
       * @api public
       */
      constructor(opts) {
        super(opts);
        this.polling = false;
        if (typeof location !== "undefined") {
          const isSSL = "https:" === location.protocol;
          let port = location.port;
          if (!port) {
            port = isSSL ? "443" : "80";
          }
          this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
          this.xs = opts.secure !== isSSL;
        }
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
      }
      /**
       * Transport name.
       */
      get name() {
        return "polling";
      }
      /**
       * Opens the socket (triggers polling). We write a PING message to determine
       * when the transport is open.
       *
       * @api private
       */
      doOpen() {
        this.poll();
      }
      /**
       * Pauses polling.
       *
       * @param {Function} callback upon buffers are flushed and transport is paused
       * @api private
       */
      pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
          debug("paused");
          this.readyState = "paused";
          onPause();
        };
        if (this.polling || !this.writable) {
          let total = 0;
          if (this.polling) {
            debug("we are currently polling - waiting to pause");
            total++;
            this.once("pollComplete", function() {
              debug("pre-pause polling complete");
              --total || pause();
            });
          }
          if (!this.writable) {
            debug("we are currently writing - waiting to pause");
            total++;
            this.once("drain", function() {
              debug("pre-pause writing complete");
              --total || pause();
            });
          }
        } else {
          pause();
        }
      }
      /**
       * Starts polling cycle.
       *
       * @api public
       */
      poll() {
        debug("polling");
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
      }
      /**
       * Overloads onData to detect payloads.
       *
       * @api private
       */
      onData(data) {
        debug("polling got data %s", data);
        const callback = (packet) => {
          if ("opening" === this.readyState && packet.type === "open") {
            this.onOpen();
          }
          if ("close" === packet.type) {
            this.onClose({ description: "transport closed by the server" });
            return false;
          }
          this.onPacket(packet);
        };
        (0, engine_io_parser_1.decodePayload)(data, this.socket.binaryType).forEach(callback);
        if ("closed" !== this.readyState) {
          this.polling = false;
          this.emitReserved("pollComplete");
          if ("open" === this.readyState) {
            this.poll();
          } else {
            debug('ignoring poll - transport state "%s"', this.readyState);
          }
        }
      }
      /**
       * For polling, send a close packet.
       *
       * @api private
       */
      doClose() {
        const close = () => {
          debug("writing close packet");
          this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
          debug("transport open - closing");
          close();
        } else {
          debug("transport not open - deferring close");
          this.once("open", close);
        }
      }
      /**
       * Writes a packets payload.
       *
       * @param {Array} data packets
       * @param {Function} drain callback
       * @api private
       */
      write(packets) {
        this.writable = false;
        (0, engine_io_parser_1.encodePayload)(packets, (data) => {
          this.doWrite(data, () => {
            this.writable = true;
            this.emitReserved("drain");
          });
        });
      }
      /**
       * Generates uri for connection.
       *
       * @api private
       */
      uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        if (false !== this.opts.timestampRequests) {
          query[this.opts.timestampParam] = (0, yeast_js_1.yeast)();
        }
        if (!this.supportsBinary && !query.sid) {
          query.b64 = 1;
        }
        if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
          port = ":" + this.opts.port;
        }
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
      }
      /**
       * Creates a request.
       *
       * @param {String} method
       * @api private
       */
      request(opts = {}) {
        Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
        return new Request(this.uri(), opts);
      }
      /**
       * Sends data.
       *
       * @param {String} data to send.
       * @param {Function} called upon flush.
       * @api private
       */
      doWrite(data, fn) {
        const req = this.request({
          method: "POST",
          data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
          this.onError("xhr post error", xhrStatus, context);
        });
      }
      /**
       * Starts a poll cycle.
       *
       * @api private
       */
      doPoll() {
        debug("xhr poll");
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
          this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
      }
    };
    exports.Polling = Polling;
    var Request = class _Request extends component_emitter_1.Emitter {
      /**
       * Request constructor
       *
       * @param {Object} options
       * @api public
       */
      constructor(uri, opts) {
        super();
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = void 0 !== opts.data ? opts.data : null;
        this.create();
      }
      /**
       * Creates the XHR object and sends the request.
       *
       * @api private
       */
      create() {
        const opts = (0, util_js_1.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = this.xhr = new xmlhttprequest_js_1.XHR(opts);
        try {
          debug("xhr open %s: %s", this.method, this.uri);
          xhr.open(this.method, this.uri, this.async);
          try {
            if (this.opts.extraHeaders) {
              xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
              for (let i in this.opts.extraHeaders) {
                if (this.opts.extraHeaders.hasOwnProperty(i)) {
                  xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
              }
            }
          } catch (e) {
          }
          if ("POST" === this.method) {
            try {
              xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e) {
            }
          }
          try {
            xhr.setRequestHeader("Accept", "*/*");
          } catch (e) {
          }
          if ("withCredentials" in xhr) {
            xhr.withCredentials = this.opts.withCredentials;
          }
          if (this.opts.requestTimeout) {
            xhr.timeout = this.opts.requestTimeout;
          }
          xhr.onreadystatechange = () => {
            if (4 !== xhr.readyState)
              return;
            if (200 === xhr.status || 1223 === xhr.status) {
              this.onLoad();
            } else {
              this.setTimeoutFn(() => {
                this.onError(typeof xhr.status === "number" ? xhr.status : 0);
              }, 0);
            }
          };
          debug("xhr data %s", this.data);
          xhr.send(this.data);
        } catch (e) {
          this.setTimeoutFn(() => {
            this.onError(e);
          }, 0);
          return;
        }
        if (typeof document !== "undefined") {
          this.index = _Request.requestsCount++;
          _Request.requests[this.index] = this;
        }
      }
      /**
       * Called upon error.
       *
       * @api private
       */
      onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
      }
      /**
       * Cleans up house.
       *
       * @api private
       */
      cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
          return;
        }
        this.xhr.onreadystatechange = empty;
        if (fromError) {
          try {
            this.xhr.abort();
          } catch (e) {
          }
        }
        if (typeof document !== "undefined") {
          delete _Request.requests[this.index];
        }
        this.xhr = null;
      }
      /**
       * Called upon load.
       *
       * @api private
       */
      onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
          this.emitReserved("data", data);
          this.emitReserved("success");
          this.cleanup();
        }
      }
      /**
       * Aborts the request.
       *
       * @api public
       */
      abort() {
        this.cleanup();
      }
    };
    exports.Request = Request;
    Request.requestsCount = 0;
    Request.requests = {};
    if (typeof document !== "undefined") {
      if (typeof attachEvent === "function") {
        attachEvent("onunload", unloadHandler);
      } else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThis_js_1.globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
      }
    }
    function unloadHandler() {
      for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
          Request.requests[i].abort();
        }
      }
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js
var require_websocket_constructor_browser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultBinaryType = exports.usingBrowserWebSocket = exports.WebSocket = exports.nextTick = void 0;
    var globalThis_js_1 = require_globalThis_browser();
    exports.nextTick = (() => {
      const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
      if (isPromiseAvailable) {
        return (cb) => Promise.resolve().then(cb);
      } else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
      }
    })();
    exports.WebSocket = globalThis_js_1.globalThisShim.WebSocket || globalThis_js_1.globalThisShim.MozWebSocket;
    exports.usingBrowserWebSocket = true;
    exports.defaultBinaryType = "arraybuffer";
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/websocket.js
var require_websocket = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/websocket.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WS = void 0;
    var transport_js_1 = require_transport();
    var parseqs_js_1 = require_parseqs();
    var yeast_js_1 = require_yeast();
    var util_js_1 = require_util();
    var websocket_constructor_js_1 = require_websocket_constructor_browser();
    var debug_1 = __importDefault(require_browser());
    var engine_io_parser_1 = require_cjs();
    var debug = (0, debug_1.default)("engine.io-client:websocket");
    var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
    var WS = class extends transport_js_1.Transport {
      /**
       * WebSocket transport constructor.
       *
       * @api {Object} connection options
       * @api public
       */
      constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
      }
      /**
       * Transport name.
       *
       * @api public
       */
      get name() {
        return "websocket";
      }
      /**
       * Opens socket.
       *
       * @api private
       */
      doOpen() {
        if (!this.check()) {
          return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        const opts = isReactNative ? {} : (0, util_js_1.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
          opts.headers = this.opts.extraHeaders;
        }
        try {
          this.ws = websocket_constructor_js_1.usingBrowserWebSocket && !isReactNative ? protocols ? new websocket_constructor_js_1.WebSocket(uri, protocols) : new websocket_constructor_js_1.WebSocket(uri) : new websocket_constructor_js_1.WebSocket(uri, protocols, opts);
        } catch (err) {
          return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || websocket_constructor_js_1.defaultBinaryType;
        this.addEventListeners();
      }
      /**
       * Adds event listeners to the socket
       *
       * @api private
       */
      addEventListeners() {
        this.ws.onopen = () => {
          if (this.opts.autoUnref) {
            this.ws._socket.unref();
          }
          this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
          description: "websocket connection closed",
          context: closeEvent
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e) => this.onError("websocket error", e);
      }
      /**
       * Writes data to socket.
       *
       * @param {Array} array of packets.
       * @api private
       */
      write(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
          const packet = packets[i];
          const lastPacket = i === packets.length - 1;
          (0, engine_io_parser_1.encodePacket)(packet, this.supportsBinary, (data) => {
            const opts = {};
            if (!websocket_constructor_js_1.usingBrowserWebSocket) {
              if (packet.options) {
                opts.compress = packet.options.compress;
              }
              if (this.opts.perMessageDeflate) {
                const len = (
                  // @ts-ignore
                  "string" === typeof data ? Buffer.byteLength(data) : data.length
                );
                if (len < this.opts.perMessageDeflate.threshold) {
                  opts.compress = false;
                }
              }
            }
            try {
              if (websocket_constructor_js_1.usingBrowserWebSocket) {
                this.ws.send(data);
              } else {
                this.ws.send(data, opts);
              }
            } catch (e) {
              debug("websocket closed before onclose event");
            }
            if (lastPacket) {
              (0, websocket_constructor_js_1.nextTick)(() => {
                this.writable = true;
                this.emitReserved("drain");
              }, this.setTimeoutFn);
            }
          });
        }
      }
      /**
       * Closes socket.
       *
       * @api private
       */
      doClose() {
        if (typeof this.ws !== "undefined") {
          this.ws.close();
          this.ws = null;
        }
      }
      /**
       * Generates uri for connection.
       *
       * @api private
       */
      uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
          port = ":" + this.opts.port;
        }
        if (this.opts.timestampRequests) {
          query[this.opts.timestampParam] = (0, yeast_js_1.yeast)();
        }
        if (!this.supportsBinary) {
          query.b64 = 1;
        }
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
      }
      /**
       * Feature detection for WebSocket.
       *
       * @return {Boolean} whether this transport is available.
       * @api public
       */
      check() {
        return !!websocket_constructor_js_1.WebSocket;
      }
    };
    exports.WS = WS;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/index.js
var require_transports = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/transports/index.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transports = void 0;
    var polling_js_1 = require_polling();
    var websocket_js_1 = require_websocket();
    exports.transports = {
      websocket: websocket_js_1.WS,
      polling: polling_js_1.Polling
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/contrib/parseuri.js
var require_parseuri = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/contrib/parseuri.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = void 0;
    var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor"
    ];
    function parse(str) {
      const src = str, b = str.indexOf("["), e = str.indexOf("]");
      if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
      }
      let m = re.exec(str || ""), uri = {}, i = 14;
      while (i--) {
        uri[parts[i]] = m[i] || "";
      }
      if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
        uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        uri.ipv6uri = true;
      }
      uri.pathNames = pathNames(uri, uri["path"]);
      uri.queryKey = queryKey(uri, uri["query"]);
      return uri;
    }
    exports.parse = parse;
    function pathNames(obj, path) {
      const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
      if (path.slice(0, 1) == "/" || path.length === 0) {
        names.splice(0, 1);
      }
      if (path.slice(-1) == "/") {
        names.splice(names.length - 1, 1);
      }
      return names;
    }
    function queryKey(uri, query) {
      const data = {};
      query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) {
          data[$1] = $2;
        }
      });
      return data;
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/socket.js
var require_socket = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/socket.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Socket = void 0;
    var index_js_1 = require_transports();
    var util_js_1 = require_util();
    var parseqs_js_1 = require_parseqs();
    var parseuri_js_1 = require_parseuri();
    var debug_1 = __importDefault(require_browser());
    var component_emitter_1 = require_cjs2();
    var engine_io_parser_1 = require_cjs();
    var debug = (0, debug_1.default)("engine.io-client:socket");
    var Socket = class _Socket extends component_emitter_1.Emitter {
      /**
       * Socket constructor.
       *
       * @param {String|Object} uri or options
       * @param {Object} opts - options
       * @api public
       */
      constructor(uri, opts = {}) {
        super();
        if (uri && "object" === typeof uri) {
          opts = uri;
          uri = null;
        }
        if (uri) {
          uri = (0, parseuri_js_1.parse)(uri);
          opts.hostname = uri.host;
          opts.secure = uri.protocol === "https" || uri.protocol === "wss";
          opts.port = uri.port;
          if (uri.query)
            opts.query = uri.query;
        } else if (opts.host) {
          opts.hostname = (0, parseuri_js_1.parse)(opts.host).host;
        }
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
          opts.port = this.secure ? "443" : "80";
        }
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = opts.transports || ["polling", "websocket"];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
          path: "/engine.io",
          agent: false,
          withCredentials: false,
          upgrade: true,
          timestampParam: "t",
          rememberUpgrade: false,
          rejectUnauthorized: true,
          perMessageDeflate: {
            threshold: 1024
          },
          transportOptions: {},
          closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") {
          this.opts.query = (0, parseqs_js_1.decode)(this.opts.query);
        }
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
          if (this.opts.closeOnBeforeunload) {
            this.beforeunloadEventListener = () => {
              if (this.transport) {
                this.transport.removeAllListeners();
                this.transport.close();
              }
            };
            addEventListener("beforeunload", this.beforeunloadEventListener, false);
          }
          if (this.hostname !== "localhost") {
            this.offlineEventListener = () => {
              this.onClose("transport close", {
                description: "network connection lost"
              });
            };
            addEventListener("offline", this.offlineEventListener, false);
          }
        }
        this.open();
      }
      /**
       * Creates transport of the given type.
       *
       * @param {String} transport name
       * @return {Transport}
       * @api private
       */
      createTransport(name) {
        debug('creating transport "%s"', name);
        const query = Object.assign({}, this.opts.query);
        query.EIO = engine_io_parser_1.protocol;
        query.transport = name;
        if (this.id)
          query.sid = this.id;
        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
          query,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port
        });
        debug("options: %j", opts);
        return new index_js_1.transports[name](opts);
      }
      /**
       * Initializes transport to use and starts probe.
       *
       * @api private
       */
      open() {
        let transport;
        if (this.opts.rememberUpgrade && _Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
          transport = "websocket";
        } else if (0 === this.transports.length) {
          this.setTimeoutFn(() => {
            this.emitReserved("error", "No transports available");
          }, 0);
          return;
        } else {
          transport = this.transports[0];
        }
        this.readyState = "opening";
        try {
          transport = this.createTransport(transport);
        } catch (e) {
          debug("error while creating transport: %s", e);
          this.transports.shift();
          this.open();
          return;
        }
        transport.open();
        this.setTransport(transport);
      }
      /**
       * Sets the current transport. Disables the existing one (if any).
       *
       * @api private
       */
      setTransport(transport) {
        debug("setting transport %s", transport.name);
        if (this.transport) {
          debug("clearing existing transport %s", this.transport.name);
          this.transport.removeAllListeners();
        }
        this.transport = transport;
        transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
      }
      /**
       * Probes a transport.
       *
       * @param {String} transport name
       * @api private
       */
      probe(name) {
        debug('probing transport "%s"', name);
        let transport = this.createTransport(name);
        let failed = false;
        _Socket.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
          if (failed)
            return;
          debug('probe transport "%s" opened', name);
          transport.send([{ type: "ping", data: "probe" }]);
          transport.once("packet", (msg) => {
            if (failed)
              return;
            if ("pong" === msg.type && "probe" === msg.data) {
              debug('probe transport "%s" pong', name);
              this.upgrading = true;
              this.emitReserved("upgrading", transport);
              if (!transport)
                return;
              _Socket.priorWebsocketSuccess = "websocket" === transport.name;
              debug('pausing current transport "%s"', this.transport.name);
              this.transport.pause(() => {
                if (failed)
                  return;
                if ("closed" === this.readyState)
                  return;
                debug("changing transport and sending upgrade packet");
                cleanup();
                this.setTransport(transport);
                transport.send([{ type: "upgrade" }]);
                this.emitReserved("upgrade", transport);
                transport = null;
                this.upgrading = false;
                this.flush();
              });
            } else {
              debug('probe transport "%s" failed', name);
              const err = new Error("probe error");
              err.transport = transport.name;
              this.emitReserved("upgradeError", err);
            }
          });
        };
        function freezeTransport() {
          if (failed)
            return;
          failed = true;
          cleanup();
          transport.close();
          transport = null;
        }
        const onerror = (err) => {
          const error = new Error("probe error: " + err);
          error.transport = transport.name;
          freezeTransport();
          debug('probe transport "%s" failed because of error: %s', name, err);
          this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
          onerror("transport closed");
        }
        function onclose() {
          onerror("socket closed");
        }
        function onupgrade(to) {
          if (transport && to.name !== transport.name) {
            debug('"%s" works - aborting "%s"', to.name, transport.name);
            freezeTransport();
          }
        }
        const cleanup = () => {
          transport.removeListener("open", onTransportOpen);
          transport.removeListener("error", onerror);
          transport.removeListener("close", onTransportClose);
          this.off("close", onclose);
          this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
      }
      /**
       * Called when connection is deemed open.
       *
       * @api private
       */
      onOpen() {
        debug("socket open");
        this.readyState = "open";
        _Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
          debug("starting upgrade probes");
          let i = 0;
          const l = this.upgrades.length;
          for (; i < l; i++) {
            this.probe(this.upgrades[i]);
          }
        }
      }
      /**
       * Handles a packet.
       *
       * @api private
       */
      onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
          this.emitReserved("packet", packet);
          this.emitReserved("heartbeat");
          switch (packet.type) {
            case "open":
              this.onHandshake(JSON.parse(packet.data));
              break;
            case "ping":
              this.resetPingTimeout();
              this.sendPacket("pong");
              this.emitReserved("ping");
              this.emitReserved("pong");
              break;
            case "error":
              const err = new Error("server error");
              err.code = packet.data;
              this.onError(err);
              break;
            case "message":
              this.emitReserved("data", packet.data);
              this.emitReserved("message", packet.data);
              break;
          }
        } else {
          debug('packet received with socket readyState "%s"', this.readyState);
        }
      }
      /**
       * Called upon handshake completion.
       *
       * @param {Object} data - handshake obj
       * @api private
       */
      onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        if ("closed" === this.readyState)
          return;
        this.resetPingTimeout();
      }
      /**
       * Sets and resets ping timeout timer based on server pings.
       *
       * @api private
       */
      resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
          this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
          this.pingTimeoutTimer.unref();
        }
      }
      /**
       * Called on `drain` event
       *
       * @api private
       */
      onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
          this.emitReserved("drain");
        } else {
          this.flush();
        }
      }
      /**
       * Flush write buffers.
       *
       * @api private
       */
      flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
          const packets = this.getWritablePackets();
          debug("flushing %d packets in socket", packets.length);
          this.transport.send(packets);
          this.prevBufferLen = packets.length;
          this.emitReserved("flush");
        }
      }
      /**
       * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
       * long-polling)
       *
       * @private
       */
      getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
          return this.writeBuffer;
        }
        let payloadSize = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
          const data = this.writeBuffer[i].data;
          if (data) {
            payloadSize += (0, util_js_1.byteLength)(data);
          }
          if (i > 0 && payloadSize > this.maxPayload) {
            debug("only send %d out of %d packets", i, this.writeBuffer.length);
            return this.writeBuffer.slice(0, i);
          }
          payloadSize += 2;
        }
        debug("payload size is %d (max: %d)", payloadSize, this.maxPayload);
        return this.writeBuffer;
      }
      /**
       * Sends a message.
       *
       * @param {String} message.
       * @param {Function} callback function.
       * @param {Object} options.
       * @return {Socket} for chaining.
       * @api public
       */
      write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
      send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
      /**
       * Sends a packet.
       *
       * @param {String} packet type.
       * @param {String} data.
       * @param {Object} options.
       * @param {Function} callback function.
       * @api private
       */
      sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
          fn = data;
          data = void 0;
        }
        if ("function" === typeof options) {
          fn = options;
          options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
          return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
          type,
          data,
          options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
          this.once("flush", fn);
        this.flush();
      }
      /**
       * Closes the connection.
       *
       * @api public
       */
      close() {
        const close = () => {
          this.onClose("forced close");
          debug("socket closing - telling transport to close");
          this.transport.close();
        };
        const cleanupAndClose = () => {
          this.off("upgrade", cleanupAndClose);
          this.off("upgradeError", cleanupAndClose);
          close();
        };
        const waitForUpgrade = () => {
          this.once("upgrade", cleanupAndClose);
          this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";
          if (this.writeBuffer.length) {
            this.once("drain", () => {
              if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            });
          } else if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        }
        return this;
      }
      /**
       * Called upon transport error
       *
       * @api private
       */
      onError(err) {
        debug("socket error %j", err);
        _Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
      }
      /**
       * Called upon transport close.
       *
       * @api private
       */
      onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          debug('socket close with reason: "%s"', reason);
          this.clearTimeoutFn(this.pingTimeoutTimer);
          this.transport.removeAllListeners("close");
          this.transport.close();
          this.transport.removeAllListeners();
          if (typeof removeEventListener === "function") {
            removeEventListener("beforeunload", this.beforeunloadEventListener, false);
            removeEventListener("offline", this.offlineEventListener, false);
          }
          this.readyState = "closed";
          this.id = null;
          this.emitReserved("close", reason, description);
          this.writeBuffer = [];
          this.prevBufferLen = 0;
        }
      }
      /**
       * Filters upgrades, returning only those matching client transports.
       *
       * @param {Array} server upgrades
       * @api private
       *
       */
      filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
          if (~this.transports.indexOf(upgrades[i]))
            filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
      }
    };
    exports.Socket = Socket;
    Socket.protocol = engine_io_parser_1.protocol;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/index.js
var require_cjs3 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/engine.io-client@6.2.3/node_modules/engine.io-client/build/cjs/index.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nextTick = exports.parse = exports.installTimerFunctions = exports.transports = exports.Transport = exports.protocol = exports.Socket = void 0;
    var socket_js_1 = require_socket();
    Object.defineProperty(exports, "Socket", { enumerable: true, get: function() {
      return socket_js_1.Socket;
    } });
    exports.protocol = socket_js_1.Socket.protocol;
    var transport_js_1 = require_transport();
    Object.defineProperty(exports, "Transport", { enumerable: true, get: function() {
      return transport_js_1.Transport;
    } });
    var index_js_1 = require_transports();
    Object.defineProperty(exports, "transports", { enumerable: true, get: function() {
      return index_js_1.transports;
    } });
    var util_js_1 = require_util();
    Object.defineProperty(exports, "installTimerFunctions", { enumerable: true, get: function() {
      return util_js_1.installTimerFunctions;
    } });
    var parseuri_js_1 = require_parseuri();
    Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
      return parseuri_js_1.parse;
    } });
    var websocket_constructor_js_1 = require_websocket_constructor_browser();
    Object.defineProperty(exports, "nextTick", { enumerable: true, get: function() {
      return websocket_constructor_js_1.nextTick;
    } });
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/url.js
var require_url = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/url.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.url = void 0;
    var engine_io_client_1 = require_cjs3();
    var debug_1 = __importDefault(require_browser());
    var debug = debug_1.default("socket.io-client:url");
    function url(uri, path = "", loc) {
      let obj = uri;
      loc = loc || typeof location !== "undefined" && location;
      if (null == uri)
        uri = loc.protocol + "//" + loc.host;
      if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
          if ("/" === uri.charAt(1)) {
            uri = loc.protocol + uri;
          } else {
            uri = loc.host + uri;
          }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
          debug("protocol-less url %s", uri);
          if ("undefined" !== typeof loc) {
            uri = loc.protocol + "//" + uri;
          } else {
            uri = "https://" + uri;
          }
        }
        debug("parse %s", uri);
        obj = engine_io_client_1.parse(uri);
      }
      if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
          obj.port = "80";
        } else if (/^(http|ws)s$/.test(obj.protocol)) {
          obj.port = "443";
        }
      }
      obj.path = obj.path || "/";
      const ipv6 = obj.host.indexOf(":") !== -1;
      const host = ipv6 ? "[" + obj.host + "]" : obj.host;
      obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
      obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
      return obj;
    }
    exports.url = url;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-parser@4.2.7/node_modules/socket.io-parser/build/cjs/is-binary.js
var require_is_binary = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-parser@4.2.7/node_modules/socket.io-parser/build/cjs/is-binary.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBinary = isBinary;
    exports.hasBinary = hasBinary;
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var isView = (obj) => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    };
    var toString = Object.prototype.toString;
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
    var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
    function isBinary(obj) {
      return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }
    function hasBinary(obj, toJSON) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
          if (hasBinary(obj[i])) {
            return true;
          }
        }
        return false;
      }
      if (isBinary(obj)) {
        return true;
      }
      if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
      }
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
          return true;
        }
      }
      return false;
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-parser@4.2.7/node_modules/socket.io-parser/build/cjs/binary.js
var require_binary = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-parser@4.2.7/node_modules/socket.io-parser/build/cjs/binary.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deconstructPacket = deconstructPacket;
    exports.reconstructPacket = reconstructPacket;
    var is_binary_js_1 = require_is_binary();
    function deconstructPacket(packet) {
      const buffers = [];
      const packetData = packet.data;
      const pack = packet;
      pack.data = _deconstructPacket(packetData, buffers);
      pack.attachments = buffers.length;
      return { packet: pack, buffers };
    }
    function _deconstructPacket(data, buffers, toJSON) {
      if (!data)
        return data;
      if ((0, is_binary_js_1.isBinary)(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
      } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
          newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
      } else if (typeof data === "object" && !(data instanceof Date)) {
        if (data.toJSON && typeof data.toJSON === "function" && !toJSON) {
          return _deconstructPacket(data.toJSON(), buffers, true);
        }
        const newData = {};
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            newData[key] = _deconstructPacket(data[key], buffers);
          }
        }
        return newData;
      }
      return data;
    }
    function reconstructPacket(packet, buffers) {
      packet.data = _reconstructPacket(packet.data, buffers);
      delete packet.attachments;
      return packet;
    }
    function _reconstructPacket(data, buffers) {
      if (!data)
        return data;
      if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) {
          return buffers[data.num];
        } else {
          throw new Error("illegal attachments");
        }
      } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          data[i] = _reconstructPacket(data[i], buffers);
        }
      } else if (typeof data === "object") {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            data[key] = _reconstructPacket(data[key], buffers);
          }
        }
      }
      return data;
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js
var require_common2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js"(exports, module) {
    init_define_process_env();
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js"(exports, module) {
    init_define_process_env();
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = define_process_env_default.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common2()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-parser@4.2.7/node_modules/socket.io-parser/build/cjs/index.js
var require_cjs4 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-parser@4.2.7/node_modules/socket.io-parser/build/cjs/index.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
    exports.isPacketValid = isPacketValid;
    var component_emitter_1 = require_cjs2();
    var binary_js_1 = require_binary();
    var is_binary_js_1 = require_is_binary();
    var debug_1 = __importDefault(require_browser2());
    var debug = (0, debug_1.default)("socket.io-parser");
    var RESERVED_EVENTS = [
      "connect",
      // used on the client side
      "connect_error",
      // used on the client side
      "disconnect",
      // used on both sides
      "disconnecting",
      // used on the server side
      "newListener",
      // used by the Node.js EventEmitter
      "removeListener"
      // used by the Node.js EventEmitter
    ];
    exports.protocol = 5;
    var PacketType;
    (function(PacketType2) {
      PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
      PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
      PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
      PacketType2[PacketType2["ACK"] = 3] = "ACK";
      PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
      PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
      PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType || (exports.PacketType = PacketType = {}));
    var Encoder = class {
      /**
       * Encoder constructor
       *
       * @param {function} replacer - custom replacer to pass down to JSON.parse
       */
      constructor(replacer) {
        this.replacer = replacer;
      }
      /**
       * Encode a packet as a single string if non-binary, or as a
       * buffer sequence, depending on packet type.
       *
       * @param {Object} obj - packet object
       */
      encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
          if ((0, is_binary_js_1.hasBinary)(obj)) {
            return this.encodeAsBinary({
              type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
              nsp: obj.nsp,
              data: obj.data,
              id: obj.id
            });
          }
        }
        return [this.encodeAsString(obj)];
      }
      /**
       * Encode packet as string.
       */
      encodeAsString(obj) {
        let str = "" + obj.type;
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
          str += obj.attachments + "-";
        }
        if (obj.nsp && "/" !== obj.nsp) {
          str += obj.nsp + ",";
        }
        if (null != obj.id) {
          str += obj.id;
        }
        if (null != obj.data) {
          str += JSON.stringify(obj.data, this.replacer);
        }
        debug("encoded %j as %s", obj, str);
        return str;
      }
      /**
       * Encode packet as 'buffer sequence' by removing blobs, and
       * deconstructing packet into object with placeholders and
       * a list of buffers.
       */
      encodeAsBinary(obj) {
        const deconstruction = (0, binary_js_1.deconstructPacket)(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack);
        return buffers;
      }
    };
    exports.Encoder = Encoder;
    var Decoder = class _Decoder extends component_emitter_1.Emitter {
      /**
       * Decoder constructor
       */
      constructor(opts) {
        super();
        this.opts = Object.assign({
          reviver: void 0,
          maxAttachments: 10
        }, typeof opts === "function" ? { reviver: opts } : opts);
      }
      /**
       * Decodes an encoded packet string into packet JSON.
       *
       * @param {String} obj - encoded packet
       */
      add(obj) {
        let packet;
        if (typeof obj === "string") {
          if (this.reconstructor) {
            throw new Error("got plaintext data when reconstructing a packet");
          }
          packet = this.decodeString(obj);
          const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
          if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
            packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
            this.reconstructor = new BinaryReconstructor(packet);
          } else {
            super.emitReserved("decoded", packet);
          }
        } else if ((0, is_binary_js_1.isBinary)(obj) || obj.base64) {
          if (!this.reconstructor) {
            throw new Error("got binary data when not reconstructing a packet");
          } else {
            packet = this.reconstructor.takeBinaryData(obj);
            if (packet) {
              this.reconstructor = null;
              super.emitReserved("decoded", packet);
            }
          }
        } else {
          throw new Error("Unknown type: " + obj);
        }
      }
      /**
       * Decode a packet String (JSON data)
       *
       * @param {String} str
       * @return {Object} packet
       */
      decodeString(str) {
        let i = 0;
        const p = {
          type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === void 0) {
          throw new Error("unknown packet type " + p.type);
        }
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
          const start = i + 1;
          while (str.charAt(++i) !== "-" && i != str.length) {
          }
          const buf = str.substring(start, i);
          if (buf != Number(buf) || str.charAt(i) !== "-") {
            throw new Error("Illegal attachments");
          }
          const n = Number(buf);
          if (!isInteger(n) || n < 1) {
            throw new Error("Illegal attachments");
          } else if (n > this.opts.maxAttachments) {
            throw new Error("too many attachments");
          }
          p.attachments = n;
        }
        if ("/" === str.charAt(i + 1)) {
          const start = i + 1;
          while (++i) {
            const c = str.charAt(i);
            if ("," === c)
              break;
            if (i === str.length)
              break;
          }
          p.nsp = str.substring(start, i);
        } else {
          p.nsp = "/";
        }
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
          const start = i + 1;
          while (++i) {
            const c = str.charAt(i);
            if (null == c || Number(c) != c) {
              --i;
              break;
            }
            if (i === str.length)
              break;
          }
          p.id = Number(str.substring(start, i + 1));
        }
        if (str.charAt(++i)) {
          const payload = this.tryParse(str.substr(i));
          if (_Decoder.isPayloadValid(p.type, payload)) {
            p.data = payload;
          } else {
            throw new Error("invalid payload");
          }
        }
        debug("decoded %s as %j", str, p);
        return p;
      }
      tryParse(str) {
        try {
          return JSON.parse(str, this.opts.reviver);
        } catch (e) {
          return false;
        }
      }
      static isPayloadValid(type, payload) {
        switch (type) {
          case PacketType.CONNECT:
            return isObject(payload);
          case PacketType.DISCONNECT:
            return payload === void 0;
          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || isObject(payload);
          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            return Array.isArray(payload);
        }
      }
      /**
       * Deallocates a parser's resources
       */
      destroy() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
          this.reconstructor = null;
        }
      }
    };
    exports.Decoder = Decoder;
    var BinaryReconstructor = class {
      constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
      }
      /**
       * Method to be called when binary data received from connection
       * after a BINARY_EVENT packet.
       *
       * @param {Buffer | ArrayBuffer} binData - the raw binary data received
       * @return {null | Object} returns null if more binary data is expected or
       *   a reconstructed packet object if all buffers have been received.
       */
      takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
          const packet = (0, binary_js_1.reconstructPacket)(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      }
      /**
       * Cleans up binary packet reconstruction variables.
       */
      finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
      }
    };
    function isNamespaceValid(nsp) {
      return typeof nsp === "string";
    }
    var isInteger = Number.isInteger || function(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    function isAckIdValid(id) {
      return id === void 0 || isInteger(id);
    }
    function isObject(value) {
      return Object.prototype.toString.call(value) === "[object Object]";
    }
    function isDataValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return payload === void 0 || isObject(payload);
        case PacketType.DISCONNECT:
          return payload === void 0;
        case PacketType.EVENT:
          return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
        case PacketType.ACK:
          return Array.isArray(payload);
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || isObject(payload);
        default:
          return false;
      }
    }
    function isPacketValid(packet) {
      return isNamespaceValid(packet.nsp) && isAckIdValid(packet.id) && isDataValid(packet.type, packet.data);
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/on.js
var require_on = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/on.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.on = void 0;
    function on(obj, ev, fn) {
      obj.on(ev, fn);
      return function subDestroy() {
        obj.off(ev, fn);
      };
    }
    exports.on = on;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/socket.js
var require_socket2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/socket.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Socket = void 0;
    var socket_io_parser_1 = require_cjs4();
    var on_js_1 = require_on();
    var component_emitter_1 = require_cjs2();
    var debug_1 = __importDefault(require_browser());
    var debug = debug_1.default("socket.io-client:socket");
    var RESERVED_EVENTS = Object.freeze({
      connect: 1,
      connect_error: 1,
      disconnect: 1,
      disconnecting: 1,
      // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
      newListener: 1,
      removeListener: 1
    });
    var Socket = class extends component_emitter_1.Emitter {
      /**
       * `Socket` constructor.
       */
      constructor(io, nsp, opts) {
        super();
        this.connected = false;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
          this.auth = opts.auth;
        }
        if (this.io._autoConnect)
          this.open();
      }
      /**
       * Whether the socket is currently disconnected
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log(socket.disconnected); // false
       * });
       *
       * socket.on("disconnect", () => {
       *   console.log(socket.disconnected); // true
       * });
       */
      get disconnected() {
        return !this.connected;
      }
      /**
       * Subscribe to open, close and packet events
       *
       * @private
       */
      subEvents() {
        if (this.subs)
          return;
        const io = this.io;
        this.subs = [
          on_js_1.on(io, "open", this.onopen.bind(this)),
          on_js_1.on(io, "packet", this.onpacket.bind(this)),
          on_js_1.on(io, "error", this.onerror.bind(this)),
          on_js_1.on(io, "close", this.onclose.bind(this))
        ];
      }
      /**
       * Whether the Socket will try to reconnect when its Manager connects or reconnects.
       *
       * @example
       * const socket = io();
       *
       * console.log(socket.active); // true
       *
       * socket.on("disconnect", (reason) => {
       *   if (reason === "io server disconnect") {
       *     // the disconnection was initiated by the server, you need to manually reconnect
       *     console.log(socket.active); // false
       *   }
       *   // else the socket will automatically try to reconnect
       *   console.log(socket.active); // true
       * });
       */
      get active() {
        return !!this.subs;
      }
      /**
       * "Opens" the socket.
       *
       * @example
       * const socket = io({
       *   autoConnect: false
       * });
       *
       * socket.connect();
       */
      connect() {
        if (this.connected)
          return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
          this.io.open();
        if ("open" === this.io._readyState)
          this.onopen();
        return this;
      }
      /**
       * Alias for {@link connect()}.
       */
      open() {
        return this.connect();
      }
      /**
       * Sends a `message` event.
       *
       * This method mimics the WebSocket.send() method.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
       *
       * @example
       * socket.send("hello");
       *
       * // this is equivalent to
       * socket.emit("message", "hello");
       *
       * @return self
       */
      send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
      }
      /**
       * Override `emit`.
       * If the event is in `events`, it's emitted normally.
       *
       * @example
       * socket.emit("hello", "world");
       *
       * // all serializable datastructures are supported (no need to call JSON.stringify)
       * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
       *
       * // with an acknowledgement from the server
       * socket.emit("hello", "world", (val) => {
       *   // ...
       * });
       *
       * @return self
       */
      emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
          throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        const packet = {
          type: socket_io_parser_1.PacketType.EVENT,
          data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        if ("function" === typeof args[args.length - 1]) {
          const id = this.ids++;
          debug("emitting packet with ack id %d", id);
          const ack = args.pop();
          this._registerAckCallback(id, ack);
          packet.id = id;
        }
        const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
          debug("discard packet as the transport is not currently writable");
        } else if (this.connected) {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
      }
      /**
       * @private
       */
      _registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (timeout === void 0) {
          this.acks[id] = ack;
          return;
        }
        const timer = this.io.setTimeoutFn(() => {
          delete this.acks[id];
          for (let i = 0; i < this.sendBuffer.length; i++) {
            if (this.sendBuffer[i].id === id) {
              debug("removing packet with ack id %d from the buffer", id);
              this.sendBuffer.splice(i, 1);
            }
          }
          debug("event with ack id %d has timed out after %d ms", id, timeout);
          ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args) => {
          this.io.clearTimeoutFn(timer);
          ack.apply(this, [null, ...args]);
        };
      }
      /**
       * Sends a packet.
       *
       * @param packet
       * @private
       */
      packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
      }
      /**
       * Called upon engine `open`.
       *
       * @private
       */
      onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") {
          this.auth((data) => {
            this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data });
          });
        } else {
          this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data: this.auth });
        }
      }
      /**
       * Called upon engine or manager `error`.
       *
       * @param err
       * @private
       */
      onerror(err) {
        if (!this.connected) {
          this.emitReserved("connect_error", err);
        }
      }
      /**
       * Called upon engine `close`.
       *
       * @param reason
       * @param description
       * @private
       */
      onclose(reason, description) {
        debug("close (%s)", reason);
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
      }
      /**
       * Called with socket packet.
       *
       * @param packet
       * @private
       */
      onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
          return;
        switch (packet.type) {
          case socket_io_parser_1.PacketType.CONNECT:
            if (packet.data && packet.data.sid) {
              const id = packet.data.sid;
              this.onconnect(id);
            } else {
              this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            }
            break;
          case socket_io_parser_1.PacketType.EVENT:
          case socket_io_parser_1.PacketType.BINARY_EVENT:
            this.onevent(packet);
            break;
          case socket_io_parser_1.PacketType.ACK:
          case socket_io_parser_1.PacketType.BINARY_ACK:
            this.onack(packet);
            break;
          case socket_io_parser_1.PacketType.DISCONNECT:
            this.ondisconnect();
            break;
          case socket_io_parser_1.PacketType.CONNECT_ERROR:
            this.destroy();
            const err = new Error(packet.data.message);
            err.data = packet.data.data;
            this.emitReserved("connect_error", err);
            break;
        }
      }
      /**
       * Called upon a server event.
       *
       * @param packet
       * @private
       */
      onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
          debug("attaching ack callback to event");
          args.push(this.ack(packet.id));
        }
        if (this.connected) {
          this.emitEvent(args);
        } else {
          this.receiveBuffer.push(Object.freeze(args));
        }
      }
      emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
          const listeners = this._anyListeners.slice();
          for (const listener of listeners) {
            listener.apply(this, args);
          }
        }
        super.emit.apply(this, args);
      }
      /**
       * Produces an ack callback to emit with an event.
       *
       * @private
       */
      ack(id) {
        const self2 = this;
        let sent = false;
        return function(...args) {
          if (sent)
            return;
          sent = true;
          debug("sending ack %j", args);
          self2.packet({
            type: socket_io_parser_1.PacketType.ACK,
            id,
            data: args
          });
        };
      }
      /**
       * Called upon a server acknowlegement.
       *
       * @param packet
       * @private
       */
      onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
          debug("calling ack %s with %j", packet.id, packet.data);
          ack.apply(this, packet.data);
          delete this.acks[packet.id];
        } else {
          debug("bad ack %s", packet.id);
        }
      }
      /**
       * Called upon server connect.
       *
       * @private
       */
      onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
      }
      /**
       * Emit buffered events (received and emitted).
       *
       * @private
       */
      emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        });
        this.sendBuffer = [];
      }
      /**
       * Called upon server disconnect.
       *
       * @private
       */
      ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
      }
      /**
       * Called upon forced client/server side disconnections,
       * this method ensures the manager stops tracking us and
       * that reconnections don't get triggered for this.
       *
       * @private
       */
      destroy() {
        if (this.subs) {
          this.subs.forEach((subDestroy) => subDestroy());
          this.subs = void 0;
        }
        this.io["_destroy"](this);
      }
      /**
       * Disconnects the socket manually. In that case, the socket will not try to reconnect.
       *
       * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
       *
       * @example
       * const socket = io();
       *
       * socket.on("disconnect", (reason) => {
       *   // console.log(reason); prints "io client disconnect"
       * });
       *
       * socket.disconnect();
       *
       * @return self
       */
      disconnect() {
        if (this.connected) {
          debug("performing disconnect (%s)", this.nsp);
          this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
        }
        this.destroy();
        if (this.connected) {
          this.onclose("io client disconnect");
        }
        return this;
      }
      /**
       * Alias for {@link disconnect()}.
       *
       * @return self
       */
      close() {
        return this.disconnect();
      }
      /**
       * Sets the compress flag.
       *
       * @example
       * socket.compress(false).emit("hello");
       *
       * @param compress - if `true`, compresses the sending data
       * @return self
       */
      compress(compress) {
        this.flags.compress = compress;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
       * ready to send messages.
       *
       * @example
       * socket.volatile.emit("hello"); // the server may or may not receive it
       *
       * @returns self
       */
      get volatile() {
        this.flags.volatile = true;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
       * given number of milliseconds have elapsed without an acknowledgement from the server:
       *
       * @example
       * socket.timeout(5000).emit("my-event", (err) => {
       *   if (err) {
       *     // the server did not acknowledge the event in the given delay
       *   }
       * });
       *
       * @returns self
       */
      timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * @example
       * socket.onAny((event, ...args) => {
       *   console.log(`got ${event}`);
       * });
       *
       * @param listener
       */
      onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * @example
       * socket.prependAny((event, ...args) => {
       *   console.log(`got event ${event}`);
       * });
       *
       * @param listener
       */
      prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @example
       * const catchAllListener = (event, ...args) => {
       *   console.log(`got event ${event}`);
       * }
       *
       * socket.onAny(catchAllListener);
       *
       * // remove a specific listener
       * socket.offAny(catchAllListener);
       *
       * // or remove all listeners
       * socket.offAny();
       *
       * @param listener
       */
      offAny(listener) {
        if (!this._anyListeners) {
          return this;
        }
        if (listener) {
          const listeners = this._anyListeners;
          for (let i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyListeners = [];
        }
        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       */
      listenersAny() {
        return this._anyListeners || [];
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * Note: acknowledgements sent to the server are not included.
       *
       * @example
       * socket.onAnyOutgoing((event, ...args) => {
       *   console.log(`sent event ${event}`);
       * });
       *
       * @param listener
       */
      onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * Note: acknowledgements sent to the server are not included.
       *
       * @example
       * socket.prependAnyOutgoing((event, ...args) => {
       *   console.log(`sent event ${event}`);
       * });
       *
       * @param listener
       */
      prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @example
       * const catchAllListener = (event, ...args) => {
       *   console.log(`sent event ${event}`);
       * }
       *
       * socket.onAnyOutgoing(catchAllListener);
       *
       * // remove a specific listener
       * socket.offAnyOutgoing(catchAllListener);
       *
       * // or remove all listeners
       * socket.offAnyOutgoing();
       *
       * @param [listener] - the catch-all listener (optional)
       */
      offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
          return this;
        }
        if (listener) {
          const listeners = this._anyOutgoingListeners;
          for (let i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyOutgoingListeners = [];
        }
        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       */
      listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
      }
      /**
       * Notify the listeners for each packet sent
       *
       * @param packet
       *
       * @private
       */
      notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
          const listeners = this._anyOutgoingListeners.slice();
          for (const listener of listeners) {
            listener.apply(this, packet.data);
          }
        }
      }
    };
    exports.Socket = Socket;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/contrib/backo2.js
var require_backo2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/contrib/backo2.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Backoff = void 0;
    function Backoff(opts) {
      opts = opts || {};
      this.ms = opts.min || 100;
      this.max = opts.max || 1e4;
      this.factor = opts.factor || 2;
      this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
      this.attempts = 0;
    }
    exports.Backoff = Backoff;
    Backoff.prototype.duration = function() {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
      }
      return Math.min(ms, this.max) | 0;
    };
    Backoff.prototype.reset = function() {
      this.attempts = 0;
    };
    Backoff.prototype.setMin = function(min) {
      this.ms = min;
    };
    Backoff.prototype.setMax = function(max) {
      this.max = max;
    };
    Backoff.prototype.setJitter = function(jitter) {
      this.jitter = jitter;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/manager.js
var require_manager = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/manager.js"(exports) {
    "use strict";
    init_define_process_env();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Manager = void 0;
    var engine_io_client_1 = require_cjs3();
    var socket_js_1 = require_socket2();
    var parser = __importStar(require_cjs4());
    var on_js_1 = require_on();
    var backo2_js_1 = require_backo2();
    var component_emitter_1 = require_cjs2();
    var debug_1 = __importDefault(require_browser());
    var debug = debug_1.default("socket.io-client:manager");
    var Manager = class extends component_emitter_1.Emitter {
      constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
          opts = uri;
          uri = void 0;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        engine_io_client_1.installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1e3);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new backo2_js_1.Backoff({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
          this.open();
      }
      reconnection(v) {
        if (!arguments.length)
          return this._reconnection;
        this._reconnection = !!v;
        return this;
      }
      reconnectionAttempts(v) {
        if (v === void 0)
          return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      }
      reconnectionDelay(v) {
        var _a;
        if (v === void 0)
          return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
      }
      randomizationFactor(v) {
        var _a;
        if (v === void 0)
          return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
      }
      reconnectionDelayMax(v) {
        var _a;
        if (v === void 0)
          return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
      }
      timeout(v) {
        if (!arguments.length)
          return this._timeout;
        this._timeout = v;
        return this;
      }
      /**
       * Starts trying to reconnect if reconnection is enabled and we have not
       * started reconnecting yet
       *
       * @private
       */
      maybeReconnectOnOpen() {
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
          this.reconnect();
        }
      }
      /**
       * Sets the current transport `socket`.
       *
       * @param {Function} fn - optional, callback
       * @return self
       * @public
       */
      open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
          return this;
        debug("opening %s", this.uri);
        this.engine = new engine_io_client_1.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self2 = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        const openSubDestroy = on_js_1.on(socket, "open", function() {
          self2.onopen();
          fn && fn();
        });
        const errorSub = on_js_1.on(socket, "error", (err) => {
          debug("error");
          self2.cleanup();
          self2._readyState = "closed";
          this.emitReserved("error", err);
          if (fn) {
            fn(err);
          } else {
            self2.maybeReconnectOnOpen();
          }
        });
        if (false !== this._timeout) {
          const timeout = this._timeout;
          debug("connect attempt will timeout after %d", timeout);
          if (timeout === 0) {
            openSubDestroy();
          }
          const timer = this.setTimeoutFn(() => {
            debug("connect attempt timed out after %d", timeout);
            openSubDestroy();
            socket.close();
            socket.emit("error", new Error("timeout"));
          }, timeout);
          if (this.opts.autoUnref) {
            timer.unref();
          }
          this.subs.push(function subDestroy() {
            clearTimeout(timer);
          });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
      }
      /**
       * Alias for open()
       *
       * @return self
       * @public
       */
      connect(fn) {
        return this.open(fn);
      }
      /**
       * Called upon transport open.
       *
       * @private
       */
      onopen() {
        debug("open");
        this.cleanup();
        this._readyState = "open";
        this.emitReserved("open");
        const socket = this.engine;
        this.subs.push(on_js_1.on(socket, "ping", this.onping.bind(this)), on_js_1.on(socket, "data", this.ondata.bind(this)), on_js_1.on(socket, "error", this.onerror.bind(this)), on_js_1.on(socket, "close", this.onclose.bind(this)), on_js_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
      }
      /**
       * Called upon a ping.
       *
       * @private
       */
      onping() {
        this.emitReserved("ping");
      }
      /**
       * Called with data.
       *
       * @private
       */
      ondata(data) {
        try {
          this.decoder.add(data);
        } catch (e) {
          this.onclose("parse error", e);
        }
      }
      /**
       * Called when parser fully decodes a packet.
       *
       * @private
       */
      ondecoded(packet) {
        engine_io_client_1.nextTick(() => {
          this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
      }
      /**
       * Called upon socket error.
       *
       * @private
       */
      onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
      }
      /**
       * Creates a new socket for the given `nsp`.
       *
       * @return {Socket}
       * @public
       */
      socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
          socket = new socket_js_1.Socket(this, nsp, opts);
          this.nsps[nsp] = socket;
        }
        return socket;
      }
      /**
       * Called upon a socket close.
       *
       * @param socket
       * @private
       */
      _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
          const socket2 = this.nsps[nsp];
          if (socket2.active) {
            debug("socket %s is still active, skipping close", nsp);
            return;
          }
        }
        this._close();
      }
      /**
       * Writes a packet.
       *
       * @param packet
       * @private
       */
      _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
          this.engine.write(encodedPackets[i], packet.options);
        }
      }
      /**
       * Clean up transport subscriptions and packet buffer.
       *
       * @private
       */
      cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
      }
      /**
       * Close the current socket.
       *
       * @private
       */
      _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine)
          this.engine.close();
      }
      /**
       * Alias for close()
       *
       * @private
       */
      disconnect() {
        return this._close();
      }
      /**
       * Called upon engine close.
       *
       * @private
       */
      onclose(reason, description) {
        debug("closed due to %s", reason);
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      }
      /**
       * Attempt a reconnection.
       *
       * @private
       */
      reconnect() {
        if (this._reconnecting || this.skipReconnect)
          return this;
        const self2 = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          debug("reconnect failed");
          this.backoff.reset();
          this.emitReserved("reconnect_failed");
          this._reconnecting = false;
        } else {
          const delay = this.backoff.duration();
          debug("will wait %dms before reconnect attempt", delay);
          this._reconnecting = true;
          const timer = this.setTimeoutFn(() => {
            if (self2.skipReconnect)
              return;
            debug("attempting reconnect");
            this.emitReserved("reconnect_attempt", self2.backoff.attempts);
            if (self2.skipReconnect)
              return;
            self2.open((err) => {
              if (err) {
                debug("reconnect attempt error");
                self2._reconnecting = false;
                self2.reconnect();
                this.emitReserved("reconnect_error", err);
              } else {
                debug("reconnect success");
                self2.onreconnect();
              }
            });
          }, delay);
          if (this.opts.autoUnref) {
            timer.unref();
          }
          this.subs.push(function subDestroy() {
            clearTimeout(timer);
          });
        }
      }
      /**
       * Called upon successful reconnect.
       *
       * @private
       */
      onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
      }
    };
    exports.Manager = Manager;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/index.js
var require_cjs5 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/socket.io-client@4.5.4/node_modules/socket.io-client/build/cjs/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports.connect = exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;
    var url_js_1 = require_url();
    var manager_js_1 = require_manager();
    Object.defineProperty(exports, "Manager", { enumerable: true, get: function() {
      return manager_js_1.Manager;
    } });
    var socket_js_1 = require_socket2();
    Object.defineProperty(exports, "Socket", { enumerable: true, get: function() {
      return socket_js_1.Socket;
    } });
    var debug_1 = __importDefault(require_browser());
    var debug = debug_1.default("socket.io-client");
    var cache = {};
    function lookup(uri, opts) {
      if (typeof uri === "object") {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      const parsed = url_js_1.url(uri, opts.path || "/socket.io");
      const source = parsed.source;
      const id = parsed.id;
      const path = parsed.path;
      const sameNamespace = cache[id] && path in cache[id]["nsps"];
      const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
      let io;
      if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_js_1.Manager(source, opts);
      } else {
        if (!cache[id]) {
          debug("new io instance for %s", source);
          cache[id] = new manager_js_1.Manager(source, opts);
        }
        io = cache[id];
      }
      if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
      }
      return io.socket(parsed.path, opts);
    }
    exports.io = lookup;
    exports.connect = lookup;
    exports.default = lookup;
    Object.assign(lookup, {
      Manager: manager_js_1.Manager,
      Socket: socket_js_1.Socket,
      io: lookup,
      connect: lookup
    });
    var socket_io_parser_1 = require_cjs4();
    Object.defineProperty(exports, "protocol", { enumerable: true, get: function() {
      return socket_io_parser_1.protocol;
    } });
    module.exports = lookup;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/ConnectionMetricsEmitter.js
var require_ConnectionMetricsEmitter = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/ConnectionMetricsEmitter.js"(exports) {
    "use strict";
    init_define_process_env();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var METRICS_FAILED_FOR_RECONNECT_ATTEMPTS = 5;
    var ConnectionMetricsEmitter = (
      /** @class */
      (function() {
        function ConnectionMetricsEmitter2() {
          this.listener = null;
        }
        ConnectionMetricsEmitter2.prototype.emitSuccessed = function(payload) {
          if (this.lastEmitState === void 0 || this.lastEmitState === "TRANSPORT_CONNECTION_FAILED") {
            this.emit(__assign({ name: "TRANSPORT_CONNECTION_SUCCEEDED" }, payload));
            this.lastEmitState = "TRANSPORT_CONNECTION_SUCCEEDED";
          }
        };
        ConnectionMetricsEmitter2.prototype.emitFailed = function(payload) {
          if (this.lastEmitState === void 0 && payload.attempts >= METRICS_FAILED_FOR_RECONNECT_ATTEMPTS) {
            this.emit(__assign({ name: "TRANSPORT_CONNECTION_FAILED" }, payload));
            this.lastEmitState = "TRANSPORT_CONNECTION_FAILED";
          }
        };
        ConnectionMetricsEmitter2.prototype.resetState = function() {
          this.lastEmitState = void 0;
        };
        ConnectionMetricsEmitter2.prototype.setUpdateListener = function(listener) {
          this.listener = listener;
        };
        ConnectionMetricsEmitter2.prototype.emit = function(event) {
          var _a;
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.call(this, event);
        };
        return ConnectionMetricsEmitter2;
      })()
    );
    exports.default = new ConnectionMetricsEmitter();
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/diff@4.0.4/node_modules/diff/dist/diff.js
var require_diff2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/diff@4.0.4/node_modules/diff/dist/diff.js"(exports, module) {
    init_define_process_env();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = global2 || self, factory(global2.Diff = {}));
    })(exports, function(exports2) {
      "use strict";
      function Diff() {
      }
      Diff.prototype = {
        diff: function diff(oldString, newString) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var callback = options.callback;
          if (typeof options === "function") {
            callback = options;
            options = {};
          }
          this.options = options;
          var self2 = this;
          function done(value) {
            if (callback) {
              setTimeout(function() {
                callback(void 0, value);
              }, 0);
              return true;
            } else {
              return value;
            }
          }
          oldString = this.castInput(oldString);
          newString = this.castInput(newString);
          oldString = this.removeEmpty(this.tokenize(oldString));
          newString = this.removeEmpty(this.tokenize(newString));
          var newLen = newString.length, oldLen = oldString.length;
          var editLength = 1;
          var maxEditLength = newLen + oldLen;
          var bestPath = [{
            newPos: -1,
            components: []
          }];
          var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
          if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
            return done([{
              value: this.join(newString),
              count: newString.length
            }]);
          }
          function execEditLength() {
            for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
              var basePath = void 0;
              var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
              if (addPath) {
                bestPath[diagonalPath - 1] = void 0;
              }
              var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
              if (!canAdd && !canRemove) {
                bestPath[diagonalPath] = void 0;
                continue;
              }
              if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
                basePath = clonePath(removePath);
                self2.pushComponent(basePath.components, void 0, true);
              } else {
                basePath = addPath;
                basePath.newPos++;
                self2.pushComponent(basePath.components, true, void 0);
              }
              _oldPos = self2.extractCommon(basePath, newString, oldString, diagonalPath);
              if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
                return done(buildValues(self2, basePath.components, newString, oldString, self2.useLongestToken));
              } else {
                bestPath[diagonalPath] = basePath;
              }
            }
            editLength++;
          }
          if (callback) {
            (function exec() {
              setTimeout(function() {
                if (editLength > maxEditLength) {
                  return callback();
                }
                if (!execEditLength()) {
                  exec();
                }
              }, 0);
            })();
          } else {
            while (editLength <= maxEditLength) {
              var ret = execEditLength();
              if (ret) {
                return ret;
              }
            }
          }
        },
        pushComponent: function pushComponent(components, added, removed) {
          var last = components[components.length - 1];
          if (last && last.added === added && last.removed === removed) {
            components[components.length - 1] = {
              count: last.count + 1,
              added,
              removed
            };
          } else {
            components.push({
              count: 1,
              added,
              removed
            });
          }
        },
        extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
          var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
          while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
            newPos++;
            oldPos++;
            commonCount++;
          }
          if (commonCount) {
            basePath.components.push({
              count: commonCount
            });
          }
          basePath.newPos = newPos;
          return oldPos;
        },
        equals: function equals(left, right) {
          if (this.options.comparator) {
            return this.options.comparator(left, right);
          } else {
            return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
          }
        },
        removeEmpty: function removeEmpty(array) {
          var ret = [];
          for (var i = 0; i < array.length; i++) {
            if (array[i]) {
              ret.push(array[i]);
            }
          }
          return ret;
        },
        castInput: function castInput(value) {
          return value;
        },
        tokenize: function tokenize(value) {
          return value.split("");
        },
        join: function join(chars) {
          return chars.join("");
        }
      };
      function buildValues(diff, components, newString, oldString, useLongestToken) {
        var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
        for (; componentPos < componentLen; componentPos++) {
          var component = components[componentPos];
          if (!component.removed) {
            if (!component.added && useLongestToken) {
              var value = newString.slice(newPos, newPos + component.count);
              value = value.map(function(value2, i) {
                var oldValue = oldString[oldPos + i];
                return oldValue.length > value2.length ? oldValue : value2;
              });
              component.value = diff.join(value);
            } else {
              component.value = diff.join(newString.slice(newPos, newPos + component.count));
            }
            newPos += component.count;
            if (!component.added) {
              oldPos += component.count;
            }
          } else {
            component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
            oldPos += component.count;
            if (componentPos && components[componentPos - 1].added) {
              var tmp = components[componentPos - 1];
              components[componentPos - 1] = components[componentPos];
              components[componentPos] = tmp;
            }
          }
        }
        var lastComponent = components[componentLen - 1];
        if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff.equals("", lastComponent.value)) {
          components[componentLen - 2].value += lastComponent.value;
          components.pop();
        }
        return components;
      }
      function clonePath(path) {
        return {
          newPos: path.newPos,
          components: path.components.slice(0)
        };
      }
      var characterDiff = new Diff();
      function diffChars(oldStr, newStr, options) {
        return characterDiff.diff(oldStr, newStr, options);
      }
      function generateOptions(options, defaults) {
        if (typeof options === "function") {
          defaults.callback = options;
        } else if (options) {
          for (var name in options) {
            if (options.hasOwnProperty(name)) {
              defaults[name] = options[name];
            }
          }
        }
        return defaults;
      }
      var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
      var reWhitespace = /\S/;
      var wordDiff = new Diff();
      wordDiff.equals = function(left, right) {
        if (this.options.ignoreCase) {
          left = left.toLowerCase();
          right = right.toLowerCase();
        }
        return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
      };
      wordDiff.tokenize = function(value) {
        var tokens = value.split(/(\s+|[()[\]{}'"]|\b)/);
        for (var i = 0; i < tokens.length - 1; i++) {
          if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
            tokens[i] += tokens[i + 2];
            tokens.splice(i + 1, 2);
            i--;
          }
        }
        return tokens;
      };
      function diffWords(oldStr, newStr, options) {
        options = generateOptions(options, {
          ignoreWhitespace: true
        });
        return wordDiff.diff(oldStr, newStr, options);
      }
      function diffWordsWithSpace(oldStr, newStr, options) {
        return wordDiff.diff(oldStr, newStr, options);
      }
      var lineDiff = new Diff();
      lineDiff.tokenize = function(value) {
        var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
        if (!linesAndNewlines[linesAndNewlines.length - 1]) {
          linesAndNewlines.pop();
        }
        for (var i = 0; i < linesAndNewlines.length; i++) {
          var line = linesAndNewlines[i];
          if (i % 2 && !this.options.newlineIsToken) {
            retLines[retLines.length - 1] += line;
          } else {
            if (this.options.ignoreWhitespace) {
              line = line.trim();
            }
            retLines.push(line);
          }
        }
        return retLines;
      };
      function diffLines(oldStr, newStr, callback) {
        return lineDiff.diff(oldStr, newStr, callback);
      }
      function diffTrimmedLines(oldStr, newStr, callback) {
        var options = generateOptions(callback, {
          ignoreWhitespace: true
        });
        return lineDiff.diff(oldStr, newStr, options);
      }
      var sentenceDiff = new Diff();
      sentenceDiff.tokenize = function(value) {
        return value.split(/(\S.+?[.!?])(?=\s+|$)/);
      };
      function diffSentences(oldStr, newStr, callback) {
        return sentenceDiff.diff(oldStr, newStr, callback);
      }
      var cssDiff = new Diff();
      cssDiff.tokenize = function(value) {
        return value.split(/([{}:;,]|\s+)/);
      };
      function diffCss(oldStr, newStr, callback) {
        return cssDiff.diff(oldStr, newStr, callback);
      }
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
          return arr2;
        }
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      var objectPrototypeToString = Object.prototype.toString;
      var jsonDiff = new Diff();
      jsonDiff.useLongestToken = true;
      jsonDiff.tokenize = lineDiff.tokenize;
      jsonDiff.castInput = function(value) {
        var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v) {
          return typeof v === "undefined" ? undefinedReplacement : v;
        } : _this$options$stringi;
        return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
      };
      jsonDiff.equals = function(left, right) {
        return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
      };
      function diffJson(oldObj, newObj, options) {
        return jsonDiff.diff(oldObj, newObj, options);
      }
      function canonicalize(obj, stack, replacementStack, replacer, key) {
        stack = stack || [];
        replacementStack = replacementStack || [];
        if (replacer) {
          obj = replacer(key, obj);
        }
        var i;
        for (i = 0; i < stack.length; i += 1) {
          if (stack[i] === obj) {
            return replacementStack[i];
          }
        }
        var canonicalizedObj;
        if ("[object Array]" === objectPrototypeToString.call(obj)) {
          stack.push(obj);
          canonicalizedObj = new Array(obj.length);
          replacementStack.push(canonicalizedObj);
          for (i = 0; i < obj.length; i += 1) {
            canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
          }
          stack.pop();
          replacementStack.pop();
          return canonicalizedObj;
        }
        if (obj && obj.toJSON) {
          obj = obj.toJSON();
        }
        if (_typeof(obj) === "object" && obj !== null) {
          stack.push(obj);
          canonicalizedObj = {};
          replacementStack.push(canonicalizedObj);
          var sortedKeys = [], _key;
          for (_key in obj) {
            if (obj.hasOwnProperty(_key)) {
              sortedKeys.push(_key);
            }
          }
          sortedKeys.sort();
          for (i = 0; i < sortedKeys.length; i += 1) {
            _key = sortedKeys[i];
            canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
          }
          stack.pop();
          replacementStack.pop();
        } else {
          canonicalizedObj = obj;
        }
        return canonicalizedObj;
      }
      var arrayDiff = new Diff();
      arrayDiff.tokenize = function(value) {
        return value.slice();
      };
      arrayDiff.join = arrayDiff.removeEmpty = function(value) {
        return value;
      };
      function diffArrays(oldArr, newArr, callback) {
        return arrayDiff.diff(oldArr, newArr, callback);
      }
      function parsePatch(uniDiff) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/), delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [], list = [], i = 0;
        function parseIndex() {
          var index = {};
          list.push(index);
          while (i < diffstr.length) {
            var line = diffstr[i];
            if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
              break;
            }
            var headerMatch = /^(?:Index:|diff(?: -r \w+)+)\s+/.exec(line);
            if (headerMatch) {
              index.index = line.substring(headerMatch[0].length).trim();
            }
            i++;
          }
          parseFileHeader(index);
          parseFileHeader(index);
          index.hunks = [];
          while (i < diffstr.length) {
            var _line = diffstr[i];
            if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
              break;
            } else if (/^@@/.test(_line)) {
              index.hunks.push(parseHunk());
            } else if (_line && options.strict) {
              throw new Error("Unknown line " + (i + 1) + " " + JSON.stringify(_line));
            } else {
              i++;
            }
          }
        }
        function parseFileHeader(index) {
          var fileHeaderMatch = /^(---|\+\+\+)\s+/.exec(diffstr[i]);
          if (fileHeaderMatch) {
            var keyPrefix = fileHeaderMatch[1] === "---" ? "old" : "new";
            var data = diffstr[i].substring(3).trim().split("	", 2);
            var fileName = data[0].replace(/\\\\/g, "\\");
            if (fileName.startsWith('"') && fileName.endsWith('"')) {
              fileName = fileName.substr(1, fileName.length - 2);
            }
            index[keyPrefix + "FileName"] = fileName;
            index[keyPrefix + "Header"] = (data[1] || "").trim();
            i++;
          }
        }
        function parseHunk() {
          var chunkHeaderIndex = i, chunkHeaderLine = diffstr[i++], chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
          var hunk = {
            oldStart: +chunkHeader[1],
            oldLines: +chunkHeader[2] || 1,
            newStart: +chunkHeader[3],
            newLines: +chunkHeader[4] || 1,
            lines: [],
            linedelimiters: []
          };
          var addCount = 0, removeCount = 0;
          for (; i < diffstr.length; i++) {
            if (diffstr[i].indexOf("--- ") === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf("+++ ") === 0 && diffstr[i + 2].indexOf("@@") === 0) {
              break;
            }
            var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? " " : diffstr[i][0];
            if (operation === "+" || operation === "-" || operation === " " || operation === "\\") {
              hunk.lines.push(diffstr[i]);
              hunk.linedelimiters.push(delimiters[i] || "\n");
              if (operation === "+") {
                addCount++;
              } else if (operation === "-") {
                removeCount++;
              } else if (operation === " ") {
                addCount++;
                removeCount++;
              }
            } else {
              break;
            }
          }
          if (!addCount && hunk.newLines === 1) {
            hunk.newLines = 0;
          }
          if (!removeCount && hunk.oldLines === 1) {
            hunk.oldLines = 0;
          }
          if (options.strict) {
            if (addCount !== hunk.newLines) {
              throw new Error("Added line count did not match for hunk at line " + (chunkHeaderIndex + 1));
            }
            if (removeCount !== hunk.oldLines) {
              throw new Error("Removed line count did not match for hunk at line " + (chunkHeaderIndex + 1));
            }
          }
          return hunk;
        }
        while (i < diffstr.length) {
          parseIndex();
        }
        return list;
      }
      function distanceIterator(start, minLine, maxLine) {
        var wantForward = true, backwardExhausted = false, forwardExhausted = false, localOffset = 1;
        return function iterator() {
          if (wantForward && !forwardExhausted) {
            if (backwardExhausted) {
              localOffset++;
            } else {
              wantForward = false;
            }
            if (start + localOffset <= maxLine) {
              return localOffset;
            }
            forwardExhausted = true;
          }
          if (!backwardExhausted) {
            if (!forwardExhausted) {
              wantForward = true;
            }
            if (minLine <= start - localOffset) {
              return -localOffset++;
            }
            backwardExhausted = true;
            return iterator();
          }
        };
      }
      function applyPatch(source, uniDiff) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (typeof uniDiff === "string") {
          uniDiff = parsePatch(uniDiff);
        }
        if (Array.isArray(uniDiff)) {
          if (uniDiff.length > 1) {
            throw new Error("applyPatch only works with a single input.");
          }
          uniDiff = uniDiff[0];
        }
        var lines = source.split(/\r\n|[\n\v\f\r\x85]/), delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [], hunks = uniDiff.hunks, compareLine = options.compareLine || function(lineNumber, line2, operation2, patchContent) {
          return line2 === patchContent;
        }, errorCount = 0, fuzzFactor = options.fuzzFactor || 0, minLine = 0, offset = 0, removeEOFNL, addEOFNL;
        function hunkFits(hunk2, toPos2) {
          for (var j2 = 0; j2 < hunk2.lines.length; j2++) {
            var line2 = hunk2.lines[j2], operation2 = line2.length > 0 ? line2[0] : " ", content2 = line2.length > 0 ? line2.substr(1) : line2;
            if (operation2 === " " || operation2 === "-") {
              if (!compareLine(toPos2 + 1, lines[toPos2], operation2, content2)) {
                errorCount++;
                if (errorCount > fuzzFactor) {
                  return false;
                }
              }
              toPos2++;
            }
          }
          return true;
        }
        for (var i = 0; i < hunks.length; i++) {
          var hunk = hunks[i], maxLine = lines.length - hunk.oldLines, localOffset = 0, toPos = offset + hunk.oldStart - 1;
          var iterator = distanceIterator(toPos, minLine, maxLine);
          for (; localOffset !== void 0; localOffset = iterator()) {
            if (hunkFits(hunk, toPos + localOffset)) {
              hunk.offset = offset += localOffset;
              break;
            }
          }
          if (localOffset === void 0) {
            return false;
          }
          minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
        }
        var diffOffset = 0;
        for (var _i = 0; _i < hunks.length; _i++) {
          var _hunk = hunks[_i], _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
          diffOffset += _hunk.newLines - _hunk.oldLines;
          if (_toPos < 0) {
            _toPos = 0;
          }
          for (var j = 0; j < _hunk.lines.length; j++) {
            var line = _hunk.lines[j], operation = line.length > 0 ? line[0] : " ", content = line.length > 0 ? line.substr(1) : line, delimiter = _hunk.linedelimiters[j];
            if (operation === " ") {
              _toPos++;
            } else if (operation === "-") {
              lines.splice(_toPos, 1);
              delimiters.splice(_toPos, 1);
            } else if (operation === "+") {
              lines.splice(_toPos, 0, content);
              delimiters.splice(_toPos, 0, delimiter);
              _toPos++;
            } else if (operation === "\\") {
              var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
              if (previousOperation === "+") {
                removeEOFNL = true;
              } else if (previousOperation === "-") {
                addEOFNL = true;
              }
            }
          }
        }
        if (removeEOFNL) {
          while (!lines[lines.length - 1]) {
            lines.pop();
            delimiters.pop();
          }
        } else if (addEOFNL) {
          lines.push("");
          delimiters.push("\n");
        }
        for (var _k = 0; _k < lines.length - 1; _k++) {
          lines[_k] = lines[_k] + delimiters[_k];
        }
        return lines.join("");
      }
      function applyPatches(uniDiff, options) {
        if (typeof uniDiff === "string") {
          uniDiff = parsePatch(uniDiff);
        }
        var currentIndex = 0;
        function processIndex() {
          var index = uniDiff[currentIndex++];
          if (!index) {
            return options.complete();
          }
          options.loadFile(index, function(err, data) {
            if (err) {
              return options.complete(err);
            }
            var updatedContent = applyPatch(data, index, options);
            options.patched(index, updatedContent, function(err2) {
              if (err2) {
                return options.complete(err2);
              }
              processIndex();
            });
          });
        }
        processIndex();
      }
      function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
        if (!options) {
          options = {};
        }
        if (typeof options.context === "undefined") {
          options.context = 4;
        }
        var diff = diffLines(oldStr, newStr, options);
        diff.push({
          value: "",
          lines: []
        });
        function contextLines(lines) {
          return lines.map(function(entry) {
            return " " + entry;
          });
        }
        var hunks = [];
        var oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
        var _loop = function _loop2(i2) {
          var current = diff[i2], lines = current.lines || current.value.replace(/\n$/, "").split("\n");
          current.lines = lines;
          if (current.added || current.removed) {
            var _curRange;
            if (!oldRangeStart) {
              var prev = diff[i2 - 1];
              oldRangeStart = oldLine;
              newRangeStart = newLine;
              if (prev) {
                curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
                oldRangeStart -= curRange.length;
                newRangeStart -= curRange.length;
              }
            }
            (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function(entry) {
              return (current.added ? "+" : "-") + entry;
            })));
            if (current.added) {
              newLine += lines.length;
            } else {
              oldLine += lines.length;
            }
          } else {
            if (oldRangeStart) {
              if (lines.length <= options.context * 2 && i2 < diff.length - 2) {
                var _curRange2;
                (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
              } else {
                var _curRange3;
                var contextSize = Math.min(lines.length, options.context);
                (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));
                var hunk = {
                  oldStart: oldRangeStart,
                  oldLines: oldLine - oldRangeStart + contextSize,
                  newStart: newRangeStart,
                  newLines: newLine - newRangeStart + contextSize,
                  lines: curRange
                };
                if (i2 >= diff.length - 2 && lines.length <= options.context) {
                  var oldEOFNewline = /\n$/.test(oldStr);
                  var newEOFNewline = /\n$/.test(newStr);
                  var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;
                  if (!oldEOFNewline && noNlBeforeAdds) {
                    curRange.splice(hunk.oldLines, 0, "\\ No newline at end of file");
                  }
                  if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                    curRange.push("\\ No newline at end of file");
                  }
                }
                hunks.push(hunk);
                oldRangeStart = 0;
                newRangeStart = 0;
                curRange = [];
              }
            }
            oldLine += lines.length;
            newLine += lines.length;
          }
        };
        for (var i = 0; i < diff.length; i++) {
          _loop(i);
        }
        return {
          oldFileName,
          newFileName,
          oldHeader,
          newHeader,
          hunks
        };
      }
      function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
        var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
        var ret = [];
        if (oldFileName == newFileName) {
          ret.push("Index: " + oldFileName);
        }
        ret.push("===================================================================");
        ret.push("--- " + diff.oldFileName + (typeof diff.oldHeader === "undefined" ? "" : "	" + diff.oldHeader));
        ret.push("+++ " + diff.newFileName + (typeof diff.newHeader === "undefined" ? "" : "	" + diff.newHeader));
        for (var i = 0; i < diff.hunks.length; i++) {
          var hunk = diff.hunks[i];
          ret.push("@@ -" + hunk.oldStart + "," + hunk.oldLines + " +" + hunk.newStart + "," + hunk.newLines + " @@");
          ret.push.apply(ret, hunk.lines);
        }
        return ret.join("\n") + "\n";
      }
      function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
        return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
      }
      function arrayEqual(a, b) {
        if (a.length !== b.length) {
          return false;
        }
        return arrayStartsWith(a, b);
      }
      function arrayStartsWith(array, start) {
        if (start.length > array.length) {
          return false;
        }
        for (var i = 0; i < start.length; i++) {
          if (start[i] !== array[i]) {
            return false;
          }
        }
        return true;
      }
      function calcLineCount(hunk) {
        var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines), oldLines = _calcOldNewLineCount.oldLines, newLines = _calcOldNewLineCount.newLines;
        if (oldLines !== void 0) {
          hunk.oldLines = oldLines;
        } else {
          delete hunk.oldLines;
        }
        if (newLines !== void 0) {
          hunk.newLines = newLines;
        } else {
          delete hunk.newLines;
        }
      }
      function merge(mine, theirs, base) {
        mine = loadPatch(mine, base);
        theirs = loadPatch(theirs, base);
        var ret = {};
        if (mine.index || theirs.index) {
          ret.index = mine.index || theirs.index;
        }
        if (mine.newFileName || theirs.newFileName) {
          if (!fileNameChanged(mine)) {
            ret.oldFileName = theirs.oldFileName || mine.oldFileName;
            ret.newFileName = theirs.newFileName || mine.newFileName;
            ret.oldHeader = theirs.oldHeader || mine.oldHeader;
            ret.newHeader = theirs.newHeader || mine.newHeader;
          } else if (!fileNameChanged(theirs)) {
            ret.oldFileName = mine.oldFileName;
            ret.newFileName = mine.newFileName;
            ret.oldHeader = mine.oldHeader;
            ret.newHeader = mine.newHeader;
          } else {
            ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
            ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
            ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
            ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
          }
        }
        ret.hunks = [];
        var mineIndex = 0, theirsIndex = 0, mineOffset = 0, theirsOffset = 0;
        while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
          var mineCurrent = mine.hunks[mineIndex] || {
            oldStart: Infinity
          }, theirsCurrent = theirs.hunks[theirsIndex] || {
            oldStart: Infinity
          };
          if (hunkBefore(mineCurrent, theirsCurrent)) {
            ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
            mineIndex++;
            theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
          } else if (hunkBefore(theirsCurrent, mineCurrent)) {
            ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
            theirsIndex++;
            mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
          } else {
            var mergedHunk = {
              oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
              oldLines: 0,
              newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
              newLines: 0,
              lines: []
            };
            mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
            theirsIndex++;
            mineIndex++;
            ret.hunks.push(mergedHunk);
          }
        }
        return ret;
      }
      function loadPatch(param, base) {
        if (typeof param === "string") {
          if (/^@@/m.test(param) || /^Index:/m.test(param)) {
            return parsePatch(param)[0];
          }
          if (!base) {
            throw new Error("Must provide a base reference or pass in a patch");
          }
          return structuredPatch(void 0, void 0, base, param);
        }
        return param;
      }
      function fileNameChanged(patch) {
        return patch.newFileName && patch.newFileName !== patch.oldFileName;
      }
      function selectField(index, mine, theirs) {
        if (mine === theirs) {
          return mine;
        } else {
          index.conflict = true;
          return {
            mine,
            theirs
          };
        }
      }
      function hunkBefore(test, check) {
        return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
      }
      function cloneHunk(hunk, offset) {
        return {
          oldStart: hunk.oldStart,
          oldLines: hunk.oldLines,
          newStart: hunk.newStart + offset,
          newLines: hunk.newLines,
          lines: hunk.lines
        };
      }
      function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
        var mine = {
          offset: mineOffset,
          lines: mineLines,
          index: 0
        }, their = {
          offset: theirOffset,
          lines: theirLines,
          index: 0
        };
        insertLeading(hunk, mine, their);
        insertLeading(hunk, their, mine);
        while (mine.index < mine.lines.length && their.index < their.lines.length) {
          var mineCurrent = mine.lines[mine.index], theirCurrent = their.lines[their.index];
          if ((mineCurrent[0] === "-" || mineCurrent[0] === "+") && (theirCurrent[0] === "-" || theirCurrent[0] === "+")) {
            mutualChange(hunk, mine, their);
          } else if (mineCurrent[0] === "+" && theirCurrent[0] === " ") {
            var _hunk$lines;
            (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
          } else if (theirCurrent[0] === "+" && mineCurrent[0] === " ") {
            var _hunk$lines2;
            (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
          } else if (mineCurrent[0] === "-" && theirCurrent[0] === " ") {
            removal(hunk, mine, their);
          } else if (theirCurrent[0] === "-" && mineCurrent[0] === " ") {
            removal(hunk, their, mine, true);
          } else if (mineCurrent === theirCurrent) {
            hunk.lines.push(mineCurrent);
            mine.index++;
            their.index++;
          } else {
            conflict(hunk, collectChange(mine), collectChange(their));
          }
        }
        insertTrailing(hunk, mine);
        insertTrailing(hunk, their);
        calcLineCount(hunk);
      }
      function mutualChange(hunk, mine, their) {
        var myChanges = collectChange(mine), theirChanges = collectChange(their);
        if (allRemoves(myChanges) && allRemoves(theirChanges)) {
          if (arrayStartsWith(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
            var _hunk$lines3;
            (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));
            return;
          } else if (arrayStartsWith(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
            var _hunk$lines4;
            (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));
            return;
          }
        } else if (arrayEqual(myChanges, theirChanges)) {
          var _hunk$lines5;
          (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));
          return;
        }
        conflict(hunk, myChanges, theirChanges);
      }
      function removal(hunk, mine, their, swap) {
        var myChanges = collectChange(mine), theirChanges = collectContext(their, myChanges);
        if (theirChanges.merged) {
          var _hunk$lines6;
          (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
        } else {
          conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
        }
      }
      function conflict(hunk, mine, their) {
        hunk.conflict = true;
        hunk.lines.push({
          conflict: true,
          mine,
          theirs: their
        });
      }
      function insertLeading(hunk, insert, their) {
        while (insert.offset < their.offset && insert.index < insert.lines.length) {
          var line = insert.lines[insert.index++];
          hunk.lines.push(line);
          insert.offset++;
        }
      }
      function insertTrailing(hunk, insert) {
        while (insert.index < insert.lines.length) {
          var line = insert.lines[insert.index++];
          hunk.lines.push(line);
        }
      }
      function collectChange(state) {
        var ret = [], operation = state.lines[state.index][0];
        while (state.index < state.lines.length) {
          var line = state.lines[state.index];
          if (operation === "-" && line[0] === "+") {
            operation = "+";
          }
          if (operation === line[0]) {
            ret.push(line);
            state.index++;
          } else {
            break;
          }
        }
        return ret;
      }
      function collectContext(state, matchChanges) {
        var changes = [], merged = [], matchIndex = 0, contextChanges = false, conflicted = false;
        while (matchIndex < matchChanges.length && state.index < state.lines.length) {
          var change = state.lines[state.index], match = matchChanges[matchIndex];
          if (match[0] === "+") {
            break;
          }
          contextChanges = contextChanges || change[0] !== " ";
          merged.push(match);
          matchIndex++;
          if (change[0] === "+") {
            conflicted = true;
            while (change[0] === "+") {
              changes.push(change);
              change = state.lines[++state.index];
            }
          }
          if (match.substr(1) === change.substr(1)) {
            changes.push(change);
            state.index++;
          } else {
            conflicted = true;
          }
        }
        if ((matchChanges[matchIndex] || "")[0] === "+" && contextChanges) {
          conflicted = true;
        }
        if (conflicted) {
          return changes;
        }
        while (matchIndex < matchChanges.length) {
          merged.push(matchChanges[matchIndex++]);
        }
        return {
          merged,
          changes
        };
      }
      function allRemoves(changes) {
        return changes.reduce(function(prev, change) {
          return prev && change[0] === "-";
        }, true);
      }
      function skipRemoveSuperset(state, removeChanges, delta) {
        for (var i = 0; i < delta; i++) {
          var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
          if (state.lines[state.index + i] !== " " + changeContent) {
            return false;
          }
        }
        state.index += delta;
        return true;
      }
      function calcOldNewLineCount(lines) {
        var oldLines = 0;
        var newLines = 0;
        lines.forEach(function(line) {
          if (typeof line !== "string") {
            var myCount = calcOldNewLineCount(line.mine);
            var theirCount = calcOldNewLineCount(line.theirs);
            if (oldLines !== void 0) {
              if (myCount.oldLines === theirCount.oldLines) {
                oldLines += myCount.oldLines;
              } else {
                oldLines = void 0;
              }
            }
            if (newLines !== void 0) {
              if (myCount.newLines === theirCount.newLines) {
                newLines += myCount.newLines;
              } else {
                newLines = void 0;
              }
            }
          } else {
            if (newLines !== void 0 && (line[0] === "+" || line[0] === " ")) {
              newLines++;
            }
            if (oldLines !== void 0 && (line[0] === "-" || line[0] === " ")) {
              oldLines++;
            }
          }
        });
        return {
          oldLines,
          newLines
        };
      }
      function convertChangesToDMP(changes) {
        var ret = [], change, operation;
        for (var i = 0; i < changes.length; i++) {
          change = changes[i];
          if (change.added) {
            operation = 1;
          } else if (change.removed) {
            operation = -1;
          } else {
            operation = 0;
          }
          ret.push([operation, change.value]);
        }
        return ret;
      }
      function convertChangesToXML(changes) {
        var ret = [];
        for (var i = 0; i < changes.length; i++) {
          var change = changes[i];
          if (change.added) {
            ret.push("<ins>");
          } else if (change.removed) {
            ret.push("<del>");
          }
          ret.push(escapeHTML(change.value));
          if (change.added) {
            ret.push("</ins>");
          } else if (change.removed) {
            ret.push("</del>");
          }
        }
        return ret.join("");
      }
      function escapeHTML(s) {
        var n = s;
        n = n.replace(/&/g, "&amp;");
        n = n.replace(/</g, "&lt;");
        n = n.replace(/>/g, "&gt;");
        n = n.replace(/"/g, "&quot;");
        return n;
      }
      exports2.Diff = Diff;
      exports2.diffChars = diffChars;
      exports2.diffWords = diffWords;
      exports2.diffWordsWithSpace = diffWordsWithSpace;
      exports2.diffLines = diffLines;
      exports2.diffTrimmedLines = diffTrimmedLines;
      exports2.diffSentences = diffSentences;
      exports2.diffCss = diffCss;
      exports2.diffJson = diffJson;
      exports2.diffArrays = diffArrays;
      exports2.structuredPatch = structuredPatch;
      exports2.createTwoFilesPatch = createTwoFilesPatch;
      exports2.createPatch = createPatch;
      exports2.applyPatch = applyPatch;
      exports2.applyPatches = applyPatches;
      exports2.parsePatch = parsePatch;
      exports2.merge = merge;
      exports2.convertChangesToDMP = convertChangesToDMP;
      exports2.convertChangesToXML = convertChangesToXML;
      exports2.canonicalize = canonicalize;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/ua-parser-js@0.7.41/node_modules/ua-parser-js/src/ua-parser.js
var require_ua_parser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/ua-parser-js@0.7.41/node_modules/ua-parser-js/src/ua-parser.js"(exports, module) {
    init_define_process_env();
    (function(window2, undefined2) {
      "use strict";
      var LIBVERSION = "0.7.41", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HONOR = "Honor", HUAWEI = "Huawei", LENOVO = "Lenovo", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", NVIDIA = "Nvidia", ONEPLUS = "OnePlus", OPERA = "Opera", OPPO = "OPPO", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS", SUFFIX_BROWSER = " Browser";
      var extend = function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i in regexes2) {
          if (extensions[i] && extensions[i].length % 2 === 0) {
            mergedRegexes[i] = extensions[i].concat(regexes2[i]);
          } else {
            mergedRegexes[i] = regexes2[i];
          }
        }
        return mergedRegexes;
      }, enumerize = function(arr) {
        var enums = {};
        for (var i = 0; i < arr.length; i++) {
          enums[arr[i].toUpperCase()] = arr[i];
        }
        return enums;
      }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, lowerize = function(str) {
        return str.toLowerCase();
      }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined2;
      }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      };
      var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        while (i < arrays.length && !matches) {
          var regex = arrays[i], props = arrays[i + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            if (!regex[j]) {
              break;
            }
            matches = regex[j++].exec(ua);
            if (!!matches) {
              for (p = 0; p < props.length; p++) {
                match = matches[++k];
                q = props[p];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length === 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length === 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined2;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined2;
                    }
                  } else if (q.length === 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined2;
                  }
                } else {
                  this[q] = match ? match : undefined2;
                }
              }
            }
          }
          i += 2;
        }
      }, strMapper = function(str, map) {
        for (var i in map) {
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) {
              if (has(map[i][j], str)) {
                return i === UNKNOWN ? undefined2 : i;
              }
            }
          } else if (has(map[i], str)) {
            return i === UNKNOWN ? undefined2 : i;
          }
        }
        return map.hasOwnProperty("*") ? map["*"] : str;
      };
      var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": ["NT 5.1", "NT 5.2"],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": ["NT 6.4", "NT 10.0"],
        "RT": "ARM"
      };
      var regexes = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [VERSION, [NAME, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [VERSION, [NAME, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [NAME, VERSION],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [VERSION, [NAME, OPERA + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [VERSION, [NAME, OPERA + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [VERSION, [NAME, OPERA]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [VERSION, [NAME, "Baidu"]],
          [
            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
            // Maxthon
          ],
          [VERSION, [NAME, "Maxthon"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
            // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
            /(heytap|ovi|115)browser\/([\d\.]+)/i,
            // HeyTap/Ovi/115
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [NAME, VERSION],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [VERSION, [NAME, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [VERSION, [NAME, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [VERSION, [NAME, "UC" + BROWSER]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [VERSION, [NAME, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [VERSION, [NAME, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [VERSION, [NAME, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [VERSION, [NAME, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [VERSION, [NAME, "Smart Lenovo " + BROWSER]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [VERSION, [NAME, FIREFOX + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [VERSION, [NAME, OPERA + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [VERSION, [NAME, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [VERSION, [NAME, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [VERSION, [NAME, OPERA + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
          [
            /fxios\/([\w\.-]+)/i
            // Firefox for iOS
          ],
          [VERSION, [NAME, FIREFOX]],
          [
            /\bqihoobrowser\/?([\w\.]*)/i
            // 360
          ],
          [VERSION, [NAME, "360"]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[NAME, /(.+)/, "$1Browser"], VERSION],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [VERSION, [NAME, SAMSUNG + " Internet"]],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [VERSION, [NAME, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[NAME, "Sogou Mobile"], VERSION],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
            // QQ/2345
          ],
          [NAME, VERSION],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [NAME],
          [
            /ome\/([\w\.]+) \w* ?(iron) saf/i,
            // Iron
            /ome\/([\w\.]+).+qihu (360)[es]e/i
            // 360
          ],
          [VERSION, NAME],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[NAME, FACEBOOK], VERSION],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /(daum)apps[\/ ]([\w\.]+)/i,
            // Daum App
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [NAME, VERSION],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [VERSION, [NAME, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [VERSION, [NAME, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [VERSION, [NAME, CHROME + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[NAME, CHROME + " WebView"], VERSION],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [VERSION, [NAME, "Android " + BROWSER]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [NAME, VERSION],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [VERSION, [NAME, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [VERSION, NAME],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [NAME, [VERSION, strMapper, oldSafariMap]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [NAME, VERSION],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[NAME, "Netscape"], VERSION],
          [
            /(wolvic|librewolf)\/([\w\.]+)/i
            // Wolvic/LibreWolf
          ],
          [NAME, VERSION],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [VERSION, [NAME, FIREFOX + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
            /\b(links) \(([\w\.]+)/i
            // Links
          ],
          [NAME, [VERSION, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [NAME, [VERSION, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /\b((amd|x|x86[-_]?|wow|win)64)\b/i
            // AMD64 (x64)
          ],
          [[ARCHITECTURE, "amd64"]],
          [
            /(ia32(?=;))/i,
            // IA32 (quicktime)
            /\b((i[346]|x)86)(pc)?\b/i
            // IA32 (x86)
          ],
          [[ARCHITECTURE, "ia32"]],
          [
            /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
            // ARM64
          ],
          [[ARCHITECTURE, "arm64"]],
          [
            /\b(arm(v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[ARCHITECTURE, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
          ],
          [[ARCHITECTURE, "arm"]],
          [
            /((ppc|powerpc)(64)?)( mac|;|\))/i
            // PowerPC
          ],
          [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
          [
            / sun4\w[;\)]/i
            // SPARC
          ],
          [[ARCHITECTURE, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[ARCHITECTURE, lowerize]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
          [
            /(macintosh);/i
          ],
          [MODEL, [VENDOR, APPLE]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
          [
            // Honor
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
          ],
          [MODEL, [VENDOR, HONOR], [TYPE, TABLET]],
          [
            /honor([-\w ]+)[;\)]/i
          ],
          [MODEL, [VENDOR, HONOR], [TYPE, MOBILE]],
          [
            // Huawei
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
          [
            /(?:huawei)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
          [
            // Xiaomi
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
          [
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
            // Xiaomi Mi
            / ([\w ]+) miui\/v?\d/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [MODEL, [VENDOR, OPPO], [TYPE, MOBILE]],
          [
            /\b(opd2(\d{3}a?))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, strMapper, { "OnePlus": ["304", "403", "203"], "*": OPPO }], [TYPE, TABLET]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, TABLET]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
          [
            // Lenovo
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
          ],
          [MODEL, [VENDOR, LENOVO], [TYPE, TABLET]],
          [
            // Nokia
            /(nokia) (t[12][01])/i
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*))/i
          ],
          [[MODEL, /_/g, " "], [TYPE, MOBILE], [VENDOR, "Nokia"]],
          [
            // Google
            /(pixel (c|tablet))\b/i
            // Google Pixel C/Tablet
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
          [
            // Sony
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [MODEL, [VENDOR, ONEPLUS], [TYPE, MOBILE]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [MODEL, VENDOR, [TYPE, TABLET]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
          [
            // Energizer
            /; (energy ?\w+)(?: bui|\))/i,
            /; energizer ([\w ]+)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
          [
            // Cat
            /; cat (b35);/i,
            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
          [
            // Smartfren
            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
          [
            // Archos
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
          ],
          [MODEL, [VENDOR, "Archos"], [TYPE, TABLET]],
          [
            /archos ([\w ]+)( b|\))/i,
            /; (ac[3-6]\d\w{2,8})( b|\))/i
          ],
          [MODEL, [VENDOR, "Archos"], [TYPE, MOBILE]],
          [
            // MIXED
            /(imo) (tab \w+)/i,
            // IMO
            /(infinix) (x1101b?)/i
            // Infinix XPad
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
            /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
            // HMD/IMO
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
            // Lenovo
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
          [
            /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
            // Nvidia Tablets
          ],
          [MODEL, [VENDOR, NVIDIA], [TYPE, TABLET]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [VENDOR, [TYPE, SMARTTV]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[VENDOR, LG], [TYPE, SMARTTV]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
          [
            /(shield \w+ tv)/i
            // Nvidia Shield TV
          ],
          [MODEL, [VENDOR, NVIDIA], [TYPE, SMARTTV]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
          [
            /(mi(tv|box)-?\w+) bui/i
            // Xiaomi
          ],
          [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [VENDOR, MODEL, [TYPE, SMARTTV]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
          [
            // SmartTV from Unidentified Vendors
            /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
          ],
          [MODEL, [TYPE, SMARTTV]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          ],
          [[TYPE, SMARTTV]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [VENDOR, MODEL, [TYPE, CONSOLE]],
          [
            /droid.+; (shield)( bui|\))/i
            // Nvidia Portable
          ],
          [MODEL, [VENDOR, NVIDIA], [TYPE, CONSOLE]],
          [
            /(playstation \w+)/i
            // Playstation
          ],
          [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
            // Samsung Galaxy Watch
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
          [
            /((pebble))app/i,
            // Pebble
            /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
            // Asus ZenWatch / LG Watch / Pixel Watch
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /(ow(?:19|20)?we?[1-3]{1,3})/i
            // Oppo Watch
          ],
          [MODEL, [VENDOR, OPPO], [TYPE, WEARABLE]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
          [
            /(opwwe\d{3})/i
            // OnePlus Watch
          ],
          [MODEL, [VENDOR, ONEPLUS], [TYPE, WEARABLE]],
          [
            /(moto 360)/i
            // Motorola 360
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, WEARABLE]],
          [
            /(smartwatch 3)/i
            // Sony SmartWatch
          ],
          [MODEL, [VENDOR, SONY], [TYPE, WEARABLE]],
          [
            /(g watch r)/i
            // LG G Watch R
          ],
          [MODEL, [VENDOR, LG], [TYPE, WEARABLE]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
          [
            ///////////////////
            // XR
            ///////////////////
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /(pico) (4|neo3(?: link|pro)?)/i
            // Pico
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /; (quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [VENDOR, [TYPE, EMBEDDED]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
          [
            /(homepod).+mac os/i
            // Apple HomePod
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, EMBEDDED]],
          [
            /windows iot/i
          ],
          [[TYPE, EMBEDDED]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [MODEL, [TYPE, MOBILE]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [MODEL, [TYPE, TABLET]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[TYPE, TABLET]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[TYPE, MOBILE]],
          [
            /droid .+?; ([\w\. -]+)( bui|\))/i
            // Generic Android Device
          ],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [VERSION, [NAME, EDGE + "HTML"]],
          [
            /(arkweb)\/([\w\.]+)/i
            // ArkWeb
          ],
          [NAME, VERSION],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [VERSION, [NAME, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
            // LibWeb
          ],
          [NAME, VERSION],
          [
            /ladybird\//i
          ],
          [[NAME, "LibWeb"]],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [VERSION, NAME]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [NAME, VERSION],
          [
            /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [NAME, [VERSION, strMapper, windowsVersionMap]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]],
          [
            // iOS/macOS
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[VERSION, /_/g, "."], [NAME, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[NAME, MAC_OS], [VERSION, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [VERSION, NAME],
          [
            /(ubuntu) ([\w\.]+) like android/i
            // Ubuntu Touch
          ],
          [[NAME, /(.+)/, "$1 Touch"], VERSION],
          [
            // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i
          ],
          [NAME, VERSION],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [VERSION, [NAME, BLACKBERRY]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [VERSION, [NAME, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [VERSION, [NAME, FIREFOX + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [VERSION, [NAME, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [VERSION, [NAME, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [VERSION, [NAME, CHROME + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[NAME, CHROMIUM_OS], VERSION],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [NAME, VERSION],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[NAME, "Solaris"], VERSION],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [NAME, VERSION]
        ]
      };
      var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
          extensions = ua;
          ua = undefined2;
        }
        if (!(this instanceof UAParser)) {
          return new UAParser(ua, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined2;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined2;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME] = undefined2;
          _browser[VERSION] = undefined2;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined2;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined2;
          _device[MODEL] = undefined2;
          _device[TYPE] = undefined2;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME] = undefined2;
          _engine[VERSION] = undefined2;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME] = undefined2;
          _os[VERSION] = undefined2;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua2) {
          _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser.VERSION = LIBVERSION;
      UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR]);
      UAParser.CPU = enumerize([ARCHITECTURE]);
      UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
      if (typeof exports !== UNDEF_TYPE) {
        if (typeof module !== UNDEF_TYPE && module.exports) {
          exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
      } else {
        if (typeof define === FUNC_TYPE && define.amd) {
          define(function() {
            return UAParser;
          });
        } else if (typeof window2 !== UNDEF_TYPE) {
          window2.UAParser = UAParser;
        }
      }
      var $2 = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($2 && !$2.ua) {
        var parser = new UAParser();
        $2.ua = parser.getResult();
        $2.ua.get = function() {
          return parser.getUA();
        };
        $2.ua.set = function(ua) {
          parser.setUA(ua);
          var result = parser.getResult();
          for (var prop in result) {
            $2.ua[prop] = result[prop];
          }
        };
      }
    })(typeof window === "object" ? window : exports);
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/CodeMessageBuilder.js
var require_CodeMessageBuilder = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/CodeMessageBuilder.js"(exports) {
    "use strict";
    init_define_process_env();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFileDiff = void 0;
    var diff_1 = require_diff2();
    var snack_content_1 = require_build();
    var ua_parser_js_1 = require_ua_parser();
    var FileUploader_1 = __importDefault(require_FileUploader());
    var defaultConfig_1 = require_defaultConfig();
    var SnackIdentityCode = {
      files: defaultConfig_1.SnackIdentityState.files,
      dependencies: defaultConfig_1.SnackIdentityState.dependencies,
      sdkVersion: defaultConfig_1.SnackIdentityState.sdkVersion
    };
    function getFileDiff(oldCode, newCode) {
      var patch = (0, diff_1.createPatch)("code", oldCode, newCode, "", "", {
        context: 0
      });
      if (patch) {
        return patch;
      } else {
        throw new Error("Error creating a file diff");
      }
    }
    exports.getFileDiff = getFileDiff;
    var PLACEHOLDER_URL = "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    var CodeMessageBuilder = (
      /** @class */
      (function() {
        function CodeMessageBuilder2(options) {
          var _this = this;
          this.code = SnackIdentityCode;
          this.placeholderURLs = {};
          this.uploadedURLs = {};
          this.onFileUploaded = function(request, resultURL, _error) {
            var path = request.path;
            delete _this.placeholderURLs[path];
            if (resultURL) {
              _this.uploadedURLs[path] = resultURL;
              if (!Object.keys(_this.placeholderURLs).length) {
                var codeMessage = _this.createCodeMessage(_this.code, _this.codeMessage, _this.code);
                if (_this.verifyCodeMessageSize(codeMessage)) {
                  _this.callback(codeMessage, _this.code);
                }
              }
            }
          };
          this.logger = options.logger;
          this.callback = options.callback;
          this.verifyCodeMessageSize = options.verifyCodeMessageSize;
          this.maxDiffPlaceholder = options.maxDiffPlaceholder;
          this.codeUploader = options.apiURL ? new FileUploader_1.default({
            apiURL: options.apiURL,
            logger: options.logger,
            callback: this.onFileUploaded
          }) : void 0;
        }
        CodeMessageBuilder2.prototype.setCode = function(code) {
          var _a, _b, _c;
          if (code === this.code) {
            return;
          }
          var prevCode = this.code;
          var files = code.files;
          this.code = code;
          for (var path in prevCode.files) {
            if (prevCode.files[path].contents !== ((_a = files[path]) === null || _a === void 0 ? void 0 : _a.contents)) {
              delete this.placeholderURLs[path];
              delete this.uploadedURLs[path];
              (_b = this.codeUploader) === null || _b === void 0 ? void 0 : _b.remove(path, prevCode.files[path]);
            }
          }
          var codeMessage = this.createCodeMessage(code, this.codeMessage, prevCode);
          this.codeMessage = codeMessage;
          if (this.verifyCodeMessageSize(codeMessage)) {
            if (!Object.keys(this.placeholderURLs).length) {
              this.callback(codeMessage, code);
            }
            return;
          }
          if (this.codeUploader) {
            var paths = Object.keys(files).filter(function(path2) {
              return files[path2].type === "CODE";
            }).sort(function(a, b) {
              return files[b].contents.length - files[a].contents.length;
            });
            for (var i = 0; i < paths.length; i++) {
              var path = paths[i];
              if (!this.uploadedURLs[path] && !this.placeholderURLs[path]) {
                var file = files[path];
                this.placeholderURLs[path] = PLACEHOLDER_URL;
                this.codeUploader.add(path, file);
                codeMessage.diff[path] = "";
                codeMessage.s3url[path] = this.placeholderURLs[path];
                if (this.verifyCodeMessageSize(codeMessage)) {
                  return;
                }
              }
            }
          }
          (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("Message size is too large");
        };
        CodeMessageBuilder2.prototype.createCodeMessage = function(code, prevCodeMessage, prevCode) {
          var files = code.files, dependencies = code.dependencies, sdkVersion = code.sdkVersion;
          var diff = __assign({}, files);
          var s3url = {};
          for (var path in files) {
            var file = files[path];
            if (this.uploadedURLs[path] || this.placeholderURLs[path]) {
              diff[path] = "";
              s3url[path] = this.uploadedURLs[path] || this.placeholderURLs[path];
            } else {
              if (file.type === "CODE") {
                if ((prevCodeMessage === null || prevCodeMessage === void 0 ? void 0 : prevCodeMessage.diff[path]) && (prevCode === null || prevCode === void 0 ? void 0 : prevCode.files[path].contents) === code.files[path].contents) {
                  diff[path] = prevCodeMessage.diff[path];
                } else {
                  if (this.maxDiffPlaceholder && file.contents.length >= this.maxDiffPlaceholder.length) {
                    diff[path] = this.maxDiffPlaceholder;
                  } else {
                    diff[path] = getFileDiff("", file.contents);
                  }
                }
              } else {
                diff[path] = "";
              }
              if (file.type === "ASSET" && typeof file.contents === "string") {
                s3url[path] = file.contents;
              }
            }
          }
          var deps = {};
          for (var name_1 in dependencies) {
            var dep = dependencies[name_1];
            if (dep.handle && !(0, snack_content_1.isModulePreloaded)(name_1, sdkVersion)) {
              deps[name_1] = {
                version: dep.version,
                handle: dep.handle,
                // Resolved has been replaced by handle. It is still needed for pre SDK 37 runtimes
                resolved: dep.handle.substring(dep.handle.lastIndexOf("@") + 1)
              };
            }
          }
          var metadata = {
            expoSDKVersion: code.sdkVersion
            // TODO: restore sdk version field
            // webSnackSDKVersion: require('../../package.json').version,
          };
          if (typeof navigator !== "undefined" && navigator.userAgent) {
            var ua = new ua_parser_js_1.UAParser(navigator.userAgent).getResult();
            metadata.webHostName = typeof window !== "undefined" ? window.location.hostname : void 0;
            metadata.webOSArchitecture = ua.cpu.architecture;
            metadata.webOSFamily = ua.os.name;
            metadata.webOSVersion = ua.os.version;
            metadata.webLayoutEngine = ua.engine.name;
            metadata.webDeviceType = ua.device.type;
            metadata.webBrowser = ua.browser.name;
            metadata.webBrowserVersion = ua.browser.version;
          }
          return {
            type: "CODE",
            diff,
            s3url,
            dependencies: deps,
            metadata
          };
        };
        return CodeMessageBuilder2;
      })()
    );
    exports.default = CodeMessageBuilder;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/TransportImplBase.js
var require_TransportImplBase = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/TransportImplBase.js"(exports) {
    "use strict";
    init_define_process_env();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var CodeMessageBuilder_1 = __importDefault(require_CodeMessageBuilder());
    var Logger_1 = require_Logger();
    var TransportImplBase = (
      /** @class */
      (function() {
        function TransportImplBase2(options) {
          var _this = this;
          this.connectionsCount = 0;
          this.onCodeMessageReady = function(codeMessage) {
            var _a;
            _this.codeMessage = codeMessage;
            (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.comm("Sending code...", _this.logSuffix);
            _this.publish(codeMessage);
          };
          var apiURL = options.apiURL, channel = options.channel, verbose = options.verbose;
          this.channel = channel !== null && channel !== void 0 ? channel : "";
          this.logger = verbose ? (0, Logger_1.createLogger)(true) : void 0;
          this.logSuffix = options.name ? " (".concat(options.name, ")") : "";
          if (channel) {
            this.codeMessageBuilder = new CodeMessageBuilder_1.default({
              verifyCodeMessageSize: this.onVerifyCodeMessageSize,
              callback: this.onCodeMessageReady,
              apiURL,
              logger: this.logger,
              maxDiffPlaceholder: "X".repeat(TransportImplBase2.CODE_SIZE_LIMIT_FOR_DIFF)
            });
          } else {
            this.codeMessageBuilder = new CodeMessageBuilder_1.default({
              verifyCodeMessageSize: function() {
                return true;
              },
              callback: this.onCodeMessageReady,
              logger: this.logger
            });
          }
        }
        TransportImplBase2.prototype.addEventListener = function(_type, callback) {
          this.callback = callback;
        };
        TransportImplBase2.prototype.removeEventListener = function(_type, _callback) {
          this.callback = void 0;
        };
        TransportImplBase2.prototype.postMessage = function(message) {
          switch (message.type) {
            case "start":
              this.start();
              break;
            case "stop":
              this.stop();
              break;
            case "update_code":
              this.codeMessageBuilder.setCode(message.data);
              break;
            case "protocol_message":
              this.publish(message.data);
              break;
            case "synthetic_event":
              this.onSyntheticEvent(message.data);
              break;
          }
        };
        TransportImplBase2.prototype.handleMessage = function(senderConnectionId, message) {
          this.onProtocolMessage(senderConnectionId, message);
        };
        TransportImplBase2.prototype.handleChannelEvent = function(event, connectionId) {
          var _a, _b, _c;
          if (event === "join") {
            try {
              var device = JSON.parse(connectionId);
              this.connectionsCount++;
              (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, {
                type: "connect",
                connectionId,
                data: device
              });
              if (this.codeMessage) {
                (_b = this.logger) === null || _b === void 0 ? void 0 : _b.comm("Sending code...", this.logSuffix);
                this.publish(this.codeMessage);
              }
            } catch (_d) {
            }
          } else {
            this.connectionsCount = Math.max(this.connectionsCount - 1, 0);
            (_c = this.callback) === null || _c === void 0 ? void 0 : _c.call(this, {
              type: "disconnect",
              connectionId,
              data: {}
            });
          }
        };
        TransportImplBase2.prototype.onProtocolMessage = function(connectionId, message) {
          var _a, _b;
          if (message.type === "RESEND_CODE") {
            if (this.codeMessage) {
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.comm("Resending code...", this.logSuffix);
              this.publish(this.codeMessage);
            }
          } else {
            (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, {
              type: "protocol_message",
              connectionId,
              data: message
            });
          }
        };
        TransportImplBase2.prototype.publish = function(message) {
          var _a, _b, _c;
          return __awaiter(this, void 0, void 0, function() {
            var e_1;
            return __generator(this, function(_d) {
              switch (_d.label) {
                case 0:
                  if (!this.connectionsCount) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                  if (!this.isStarted()) return [3, 5];
                  _d.label = 1;
                case 1:
                  _d.trys.push([1, 3, , 4]);
                  return [4, this.sendAsync(this.channel, message)];
                case 2:
                  _d.sent();
                  return [3, 4];
                case 3:
                  e_1 = _d.sent();
                  (_a = this.logger) === null || _a === void 0 ? void 0 : _a.error("Failed to publish message", message.type, e_1, this.logSuffix);
                  return [3, 4];
                case 4:
                  return [3, 6];
                case 5:
                  (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, {
                    type: "synthetic_event",
                    data: message
                  });
                  _d.label = 6;
                case 6:
                  (_c = this.callback) === null || _c === void 0 ? void 0 : _c.call(this, {
                    type: "send_message",
                    data: message
                  });
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        TransportImplBase2.prototype.onSyntheticEvent = function(data) {
          var _a, _b, _c;
          if (typeof data !== "string") {
            return;
          }
          try {
            var message = JSON.parse(data);
            switch (message.type) {
              case "CONNECT":
                this.connectionsCount++;
                (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, {
                  type: "connect",
                  connectionId: JSON.stringify(message.device),
                  data: message.device
                });
                break;
              case "DISCONNECT":
                this.connectionsCount = Math.max(this.connectionsCount - 1, 0);
                (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, {
                  type: "disconnect",
                  connectionId: JSON.stringify(message.device),
                  data: {}
                });
                break;
              case "MESSAGE":
                this.onProtocolMessage(JSON.stringify(message.message.device), message.message);
                break;
            }
          } catch (e) {
            (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("Failed to parse postMessage", e, data, this.logSuffix);
          }
        };
        TransportImplBase2.CODE_SIZE_LIMIT_FOR_DIFF = 32768;
        return TransportImplBase2;
      })()
    );
    exports.default = TransportImplBase;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/TransportImplSocketIO.js
var require_TransportImplSocketIO = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/TransportImplSocketIO.js"(exports) {
    "use strict";
    init_define_process_env();
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var socket_io_client_1 = require_cjs5();
    var ConnectionMetricsEmitter_1 = __importDefault(require_ConnectionMetricsEmitter());
    var TransportImplBase_1 = __importDefault(require_TransportImplBase());
    var TransportImplSocketIO = (
      /** @class */
      (function(_super) {
        __extends(TransportImplSocketIO2, _super);
        function TransportImplSocketIO2(options) {
          var _this = _super.call(this, options) || this;
          _this.socket = null;
          _this.onMessage = function(data) {
            var sender = data.sender, message = data.message;
            _this.handleMessage(sender, message);
          };
          _this.onJoinChannel = function(data) {
            var _a;
            var sender = data.sender;
            if (sender !== "" && sender !== ((_a = _this.socket) === null || _a === void 0 ? void 0 : _a.id)) {
              _this.handleChannelEvent("join", sender);
            }
          };
          _this.onLeaveChannel = function(data) {
            var _a;
            var sender = data.sender;
            if (sender !== "" && sender !== ((_a = _this.socket) === null || _a === void 0 ? void 0 : _a.id)) {
              _this.handleChannelEvent("leave", sender);
            }
          };
          var snackpubURL = options.snackpubURL;
          if (!snackpubURL) {
            throw new Error("The `snackpubURL` option is unspecified.");
          }
          _this.snackpubURL = snackpubURL;
          _this.connectionAttempts = 0;
          return _this;
        }
        TransportImplSocketIO2.prototype.start = function() {
          var _this = this;
          this.stop();
          this.startTime = Date.now();
          this.socket = (0, socket_io_client_1.io)(this.snackpubURL, { transports: ["websocket"] });
          this.socket.on("connect", function() {
            var _a, _b;
            (_a = _this.socket) === null || _a === void 0 ? void 0 : _a.emit("subscribeChannel", { channel: _this.channel, sender: (_b = _this.socket) === null || _b === void 0 ? void 0 : _b.id });
            if (_this.startTime) {
              ConnectionMetricsEmitter_1.default.emitSuccessed({
                timeMs: Date.now() - _this.startTime,
                attempts: _this.connectionAttempts
              });
            }
          });
          this.socket.io.on("reconnect_attempt", function(attempts) {
            _this.connectionAttempts = attempts;
            if (_this.startTime) {
              ConnectionMetricsEmitter_1.default.emitFailed({
                timeMs: Date.now() - _this.startTime,
                attempts
              });
            }
          });
          this.socket.on("message", this.onMessage);
          this.socket.on("joinChannel", this.onJoinChannel);
          this.socket.on("leaveChannel", this.onLeaveChannel);
          this.socket.on("terminate", function(reason) {
            var _a, _b;
            (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.comm("Terminating connection: ".concat(reason));
            (_b = _this.socket) === null || _b === void 0 ? void 0 : _b.disconnect();
          });
        };
        TransportImplSocketIO2.prototype.stop = function() {
          var _a;
          if (this.socket != null) {
            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.comm("Stopping...", this.logSuffix);
            this.socket.offAny();
            this.socket.close();
            this.socket = null;
          }
          this.startTime = void 0;
        };
        TransportImplSocketIO2.prototype.isStarted = function() {
          return this.socket != null;
        };
        TransportImplSocketIO2.prototype.sendAsync = function(channel, message) {
          var _a;
          (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit("message", {
            channel,
            message,
            sender: this.socket.id
          });
          return Promise.resolve();
        };
        TransportImplSocketIO2.prototype.onVerifyCodeMessageSize = function(codeMessage) {
          var approxSize = 0;
          for (var path in codeMessage.diff) {
            approxSize += path.length + codeMessage.diff[path].length;
          }
          return approxSize < TransportImplBase_1.default.CODE_SIZE_LIMIT_FOR_DIFF;
        };
        return TransportImplSocketIO2;
      })(TransportImplBase_1.default)
    );
    exports.default = TransportImplSocketIO;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/types.js
var require_types2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/types.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/index.js
var require_transports2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/index.js"(exports) {
    "use strict";
    init_define_process_env();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTransport = exports.ConnectionMetricsEmitter = void 0;
    var TransportImplSocketIO_1 = __importDefault(require_TransportImplSocketIO());
    __exportStar(require_types2(), exports);
    __exportStar(require_ConnectionMetricsEmitter(), exports);
    var ConnectionMetricsEmitter_1 = require_ConnectionMetricsEmitter();
    Object.defineProperty(exports, "ConnectionMetricsEmitter", { enumerable: true, get: function() {
      return __importDefault(ConnectionMetricsEmitter_1).default;
    } });
    function createTransport(options) {
      return new TransportImplSocketIO_1.default(options);
    }
    exports.createTransport = createTransport;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-object-atoms@1.1.2/node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-object-atoms@1.1.2/node_modules/es-object-atoms/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Object;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Error;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = EvalError;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js
var require_range2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = RangeError;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = ReferenceError;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = SyntaxError;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js
var require_type = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = TypeError;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = URIError;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Math.abs;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Math.floor;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Math.max;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Math.min;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Math.pow;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Math.round;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var $isNaN = require_isNaN();
    module.exports = function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Object.getOwnPropertyDescriptor;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js
var require_gopd = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var $Object = require_es_object_atoms();
    module.exports = $Object.getPrototypeOf || null;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Function.prototype.call;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = Function.prototype.apply;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module.exports = $reflectApply || bind.call($call, $apply);
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js
var require_get2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
    ) : false;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get2();
    module.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js
var require_hasown = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range2();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? (function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    })() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void undefined2;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-arguments@1.2.0/node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-arguments@1.2.0/node_modules/is-arguments/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var hasToStringTag = require_shams2()();
    var callBound = require_call_bound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && "length" in value && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && "callee" in value && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = (function() {
      return isStandardArguments(arguments);
    })();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var callBound = require_call_bound();
    var hasToStringTag = require_shams2()();
    var hasOwn = require_hasown();
    var gOPD = require_gopd();
    var fn;
    if (hasToStringTag) {
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
      fn = function isRegex(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        var descriptor = (
          /** @type {NonNullable<typeof gOPD>} */
          gOPD(
            /** @type {{ lastIndex?: unknown }} */
            value,
            "lastIndex"
          )
        );
        var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, "value");
        if (!hasLastIndexDataProperty) {
          return false;
        }
        try {
          $exec(
            value,
            /** @type {string} */
            /** @type {unknown} */
            badStringifier
          );
        } catch (e) {
          return e === isRegexMarker;
        }
      };
    } else {
      $toString = callBound("Object.prototype.toString");
      regexClass = "[object RegExp]";
      fn = function isRegex(value) {
        if (!value || typeof value !== "object" && typeof value !== "function") {
          return false;
        }
        return $toString(value) === regexClass;
      };
    }
    var $exec;
    var isRegexMarker;
    var throwRegexMarker;
    var badStringifier;
    var $toString;
    var regexClass;
    module.exports = fn;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/safe-regex-test@1.1.0/node_modules/safe-regex-test/index.js
var require_safe_regex_test = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/safe-regex-test@1.1.0/node_modules/safe-regex-test/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var callBound = require_call_bound();
    var isRegex = require_is_regex();
    var $exec = callBound("RegExp.prototype.exec");
    var $TypeError = require_type();
    module.exports = function regexTester(regex) {
      if (!isRegex(regex)) {
        throw new $TypeError("`regex` must be a RegExp");
      }
      return function test(s) {
        return $exec(regex, s) !== null;
      };
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/generator-function@2.0.1/node_modules/generator-function/index.js
var require_generator_function = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/generator-function@2.0.1/node_modules/generator-function/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var cached = (
      /** @type {GeneratorFunctionConstructor} */
      function* () {
      }.constructor
    );
    module.exports = () => cached;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-generator-function@1.1.2/node_modules/is-generator-function/index.js
var require_is_generator_function = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-generator-function@1.1.2/node_modules/is-generator-function/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var callBound = require_call_bound();
    var safeRegexTest = require_safe_regex_test();
    var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
    var hasToStringTag = require_shams2()();
    var getProto = require_get_proto();
    var toStr = callBound("Object.prototype.toString");
    var fnToStr = callBound("Function.prototype.toString");
    var getGeneratorFunction = require_generator_function();
    module.exports = function isGeneratorFunction(fn) {
      if (typeof fn !== "function") {
        return false;
      }
      if (isFnRegex(fnToStr(fn))) {
        return true;
      }
      if (!hasToStringTag) {
        var str = toStr(fn);
        return str === "[object GeneratorFunction]";
      }
      if (!getProto) {
        return false;
      }
      var GeneratorFunction = getGeneratorFunction();
      return GeneratorFunction && getProto(fn) === GeneratorFunction.prototype;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module.exports = reflectApply ? function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/for-each@0.3.5/node_modules/for-each/index.js
var require_for_each = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/for-each@0.3.5/node_modules/for-each/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var isCallable = require_is_callable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object, iterator, receiver) {
      for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
          if (receiver == null) {
            iterator(object[k], k, object);
          } else {
            iterator.call(receiver, object[k], k, object);
          }
        }
      }
    };
    function isArray(x) {
      return toStr.call(x) === "[object Array]";
    }
    module.exports = function forEach(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (isArray(list)) {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/possible-typed-array-names@1.1.0/node_modules/possible-typed-array-names/index.js
var require_possible_typed_array_names = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/possible-typed-array-names@1.1.0/node_modules/possible-typed-array-names/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = [
      "Float16Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array"
    ];
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/available-typed-arrays@1.0.7/node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/available-typed-arrays@1.0.7/node_modules/available-typed-arrays/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var possibleNames = require_possible_typed_array_names();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    module.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var GetIntrinsic = require_get_intrinsic();
    var define2 = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define2(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define2(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/applyBind.js
var require_applyBind = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/applyBind.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var actualApply = require_actualApply();
    module.exports = function applyBind() {
      return actualApply(bind, $apply, arguments);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var setFunctionLength = require_set_function_length();
    var $defineProperty = require_es_define_property();
    var callBindBasic = require_call_bind_apply_helpers();
    var applyBind = require_applyBind();
    module.exports = function callBind(originalFunction) {
      var func = callBindBasic(arguments);
      var adjustedLength = 1 + originalFunction.length - (arguments.length - 1);
      return setFunctionLength(
        func,
        adjustedLength > 0 ? adjustedLength : 0,
        true
      );
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/which-typed-array@1.1.22/node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/which-typed-array@1.1.22/node_modules/which-typed-array/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var forEach = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBind = require_call_bind();
    var callBound = require_call_bound();
    var gOPD = require_gopd();
    var getProto = require_get_proto();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var cache = { __proto__: null };
    if (hasToStringTag && gOPD && getProto) {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr && getProto) {
          var proto = getProto(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor && proto) {
            var superProto = getProto(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          if (descriptor && descriptor.get) {
            var bound = callBind(descriptor.get);
            cache[
              /** @type {`$${TypedArrayName}`} */
              "$" + typedArray
            ] = bound;
          }
        }
      });
    } else {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        var fn = arr.slice || arr.set;
        if (fn) {
          var bound = (
            /** @type {BoundSlice | BoundSet} */
            // @ts-expect-error TODO FIXME
            callBind(fn)
          );
          cache[
            /** @type {`$${TypedArrayName}`} */
            "$" + typedArray
          ] = bound;
        }
      });
    }
    function tryTypedArrays(value) {
      var found = false;
      forEach(
        /** @type {Record<`$${TypedArrayName}`, Getter>} */
        cache,
        /** @param {Getter} getter @param {`$${TypedArrayName}`} typedArray */
        function(getter, typedArray) {
          if (!found) {
            try {
              if ("$" + getter(value) === typedArray) {
                found = /** @type {TypedArrayName} */
                $slice(typedArray, 1);
              }
            } catch (e) {
            }
          }
        }
      );
      return found;
    }
    function trySlices(value) {
      var found = false;
      forEach(
        /** @type {Record<`$${TypedArrayName}`, Getter>} */
        cache,
        /** @param {Getter} getter @param {`$${TypedArrayName}`} name */
        function(getter, name) {
          if (!found) {
            try {
              getter(value);
              found = /** @type {TypedArrayName} */
              $slice(name, 1);
            } catch (e) {
            }
          }
        }
      );
      return found;
    }
    function isTATag(tag) {
      return $indexOf(typedArrays, tag) > -1;
    }
    module.exports = function whichTypedArray(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag) {
        var tag = $slice($toString(value), 8, -1);
        if (isTATag(tag)) {
          return tag;
        }
        if (tag !== "Object") {
          return false;
        }
        return trySlices(value);
      }
      if (!gOPD) {
        return null;
      }
      return tryTypedArrays(value);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-typed-array@1.1.15/node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-typed-array@1.1.15/node_modules/is-typed-array/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var whichTypedArray = require_which_typed_array();
    module.exports = function isTypedArray(value) {
      return !!whichTypedArray(value);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/util@0.12.5/node_modules/util/support/types.js
var require_types3 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/util@0.12.5/node_modules/util/support/types.js"(exports) {
    "use strict";
    init_define_process_env();
    var isArgumentsObject = require_is_arguments();
    var isGeneratorFunction = require_is_generator_function();
    var whichTypedArray = require_which_typed_array();
    var isTypedArray = require_is_typed_array();
    function uncurryThis(f) {
      return f.call.bind(f);
    }
    var BigIntSupported = typeof BigInt !== "undefined";
    var SymbolSupported = typeof Symbol !== "undefined";
    var ObjectToString = uncurryThis(Object.prototype.toString);
    var numberValue = uncurryThis(Number.prototype.valueOf);
    var stringValue = uncurryThis(String.prototype.valueOf);
    var booleanValue = uncurryThis(Boolean.prototype.valueOf);
    if (BigIntSupported) {
      bigIntValue = uncurryThis(BigInt.prototype.valueOf);
    }
    var bigIntValue;
    if (SymbolSupported) {
      symbolValue = uncurryThis(Symbol.prototype.valueOf);
    }
    var symbolValue;
    function checkBoxedPrimitive(value, prototypeValueOf) {
      if (typeof value !== "object") {
        return false;
      }
      try {
        prototypeValueOf(value);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports.isArgumentsObject = isArgumentsObject;
    exports.isGeneratorFunction = isGeneratorFunction;
    exports.isTypedArray = isTypedArray;
    function isPromise(input) {
      return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
    }
    exports.isPromise = isPromise;
    function isArrayBufferView(value) {
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(value);
      }
      return isTypedArray(value) || isDataView(value);
    }
    exports.isArrayBufferView = isArrayBufferView;
    function isUint8Array(value) {
      return whichTypedArray(value) === "Uint8Array";
    }
    exports.isUint8Array = isUint8Array;
    function isUint8ClampedArray(value) {
      return whichTypedArray(value) === "Uint8ClampedArray";
    }
    exports.isUint8ClampedArray = isUint8ClampedArray;
    function isUint16Array(value) {
      return whichTypedArray(value) === "Uint16Array";
    }
    exports.isUint16Array = isUint16Array;
    function isUint32Array(value) {
      return whichTypedArray(value) === "Uint32Array";
    }
    exports.isUint32Array = isUint32Array;
    function isInt8Array(value) {
      return whichTypedArray(value) === "Int8Array";
    }
    exports.isInt8Array = isInt8Array;
    function isInt16Array(value) {
      return whichTypedArray(value) === "Int16Array";
    }
    exports.isInt16Array = isInt16Array;
    function isInt32Array(value) {
      return whichTypedArray(value) === "Int32Array";
    }
    exports.isInt32Array = isInt32Array;
    function isFloat32Array(value) {
      return whichTypedArray(value) === "Float32Array";
    }
    exports.isFloat32Array = isFloat32Array;
    function isFloat64Array(value) {
      return whichTypedArray(value) === "Float64Array";
    }
    exports.isFloat64Array = isFloat64Array;
    function isBigInt64Array(value) {
      return whichTypedArray(value) === "BigInt64Array";
    }
    exports.isBigInt64Array = isBigInt64Array;
    function isBigUint64Array(value) {
      return whichTypedArray(value) === "BigUint64Array";
    }
    exports.isBigUint64Array = isBigUint64Array;
    function isMapToString(value) {
      return ObjectToString(value) === "[object Map]";
    }
    isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
    function isMap(value) {
      if (typeof Map === "undefined") {
        return false;
      }
      return isMapToString.working ? isMapToString(value) : value instanceof Map;
    }
    exports.isMap = isMap;
    function isSetToString(value) {
      return ObjectToString(value) === "[object Set]";
    }
    isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
    function isSet(value) {
      if (typeof Set === "undefined") {
        return false;
      }
      return isSetToString.working ? isSetToString(value) : value instanceof Set;
    }
    exports.isSet = isSet;
    function isWeakMapToString(value) {
      return ObjectToString(value) === "[object WeakMap]";
    }
    isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
    function isWeakMap(value) {
      if (typeof WeakMap === "undefined") {
        return false;
      }
      return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
    }
    exports.isWeakMap = isWeakMap;
    function isWeakSetToString(value) {
      return ObjectToString(value) === "[object WeakSet]";
    }
    isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
    function isWeakSet(value) {
      return isWeakSetToString(value);
    }
    exports.isWeakSet = isWeakSet;
    function isArrayBufferToString(value) {
      return ObjectToString(value) === "[object ArrayBuffer]";
    }
    isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
    function isArrayBuffer(value) {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      }
      return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
    }
    exports.isArrayBuffer = isArrayBuffer;
    function isDataViewToString(value) {
      return ObjectToString(value) === "[object DataView]";
    }
    isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
    function isDataView(value) {
      if (typeof DataView === "undefined") {
        return false;
      }
      return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
    }
    exports.isDataView = isDataView;
    var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
    function isSharedArrayBufferToString(value) {
      return ObjectToString(value) === "[object SharedArrayBuffer]";
    }
    function isSharedArrayBuffer(value) {
      if (typeof SharedArrayBufferCopy === "undefined") {
        return false;
      }
      if (typeof isSharedArrayBufferToString.working === "undefined") {
        isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
      }
      return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
    }
    exports.isSharedArrayBuffer = isSharedArrayBuffer;
    function isAsyncFunction(value) {
      return ObjectToString(value) === "[object AsyncFunction]";
    }
    exports.isAsyncFunction = isAsyncFunction;
    function isMapIterator(value) {
      return ObjectToString(value) === "[object Map Iterator]";
    }
    exports.isMapIterator = isMapIterator;
    function isSetIterator(value) {
      return ObjectToString(value) === "[object Set Iterator]";
    }
    exports.isSetIterator = isSetIterator;
    function isGeneratorObject(value) {
      return ObjectToString(value) === "[object Generator]";
    }
    exports.isGeneratorObject = isGeneratorObject;
    function isWebAssemblyCompiledModule(value) {
      return ObjectToString(value) === "[object WebAssembly.Module]";
    }
    exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
    function isNumberObject(value) {
      return checkBoxedPrimitive(value, numberValue);
    }
    exports.isNumberObject = isNumberObject;
    function isStringObject(value) {
      return checkBoxedPrimitive(value, stringValue);
    }
    exports.isStringObject = isStringObject;
    function isBooleanObject(value) {
      return checkBoxedPrimitive(value, booleanValue);
    }
    exports.isBooleanObject = isBooleanObject;
    function isBigIntObject(value) {
      return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
    }
    exports.isBigIntObject = isBigIntObject;
    function isSymbolObject(value) {
      return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
    }
    exports.isSymbolObject = isSymbolObject;
    function isBoxedPrimitive(value) {
      return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
    }
    exports.isBoxedPrimitive = isBoxedPrimitive;
    function isAnyArrayBuffer(value) {
      return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
    }
    exports.isAnyArrayBuffer = isAnyArrayBuffer;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
      Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
          throw new Error(method + " is not supported in userland");
        }
      });
    });
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/util@0.12.5/node_modules/util/support/isBufferBrowser.js
var require_isBufferBrowser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/util@0.12.5/node_modules/util/support/isBufferBrowser.js"(exports, module) {
    init_define_process_env();
    module.exports = function isBuffer(arg) {
      return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js"(exports, module) {
    init_define_process_env();
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/util@0.12.5/node_modules/util/util.js
var require_util2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/util@0.12.5/node_modules/util/util.js"(exports) {
    init_define_process_env();
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
      var keys = Object.keys(obj);
      var descriptors = {};
      for (var i = 0; i < keys.length; i++) {
        descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      }
      return descriptors;
    };
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(" ");
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x2) {
        if (x2 === "%%") return "%";
        if (i >= len) return x2;
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += " " + x;
        } else {
          str += " " + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (typeof process !== "undefined" && process.noDeprecation === true) {
        return fn;
      }
      if (typeof process === "undefined") {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnvRegex = /^$/;
    if (define_process_env_default.NODE_DEBUG) {
      debugEnv = define_process_env_default.NODE_DEBUG;
      debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
      debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
    }
    var debugEnv;
    exports.debuglog = function(set) {
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      // "name": intentionally not styling
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), "date");
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = "", array = false, braces = ["{", "}"];
      if (isArray(value)) {
        array = true;
        braces = ["[", "]"];
      }
      if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
      }
      if (isRegExp(value)) {
        base = " " + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = " " + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = " " + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize("undefined", "undefined");
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value))
        return ctx.stylize("" + value, "number");
      if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
      if (isNull(value))
        return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            String(i),
            true
          ));
        } else {
          output.push("");
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            key,
            true
          ));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = "[" + key + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").slice(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.slice(1, -1);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base + " " + output.join(", ") + " " + braces[1];
    }
    exports.types = require_types3();
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    exports.types.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    exports.types.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
    }
    exports.isError = isError;
    exports.types.isNativeError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
      typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = require_isBufferBrowser();
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d = /* @__PURE__ */ new Date();
      var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
      ].join(":");
      return [d.getDate(), months[d.getMonth()], time].join(" ");
    }
    exports.log = function() {
      console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = require_inherits_browser();
    exports._extend = function(origin, add) {
      if (!add || !isObject(add)) return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
    exports.promisify = function promisify(original) {
      if (typeof original !== "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }
      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        });
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        args.push(function(err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return Object.defineProperties(
        fn,
        getOwnPropertyDescriptors(original)
      );
    };
    exports.promisify.custom = kCustomPromisifiedSymbol;
    function callbackifyOnRejected(reason, cb) {
      if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
      }
      return cb(reason);
    }
    function callbackify(original) {
      if (typeof original !== "function") {
        throw new TypeError('The "original" argument must be of type Function');
      }
      function callbackified() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") {
          throw new TypeError("The last argument must be of type Function");
        }
        var self2 = this;
        var cb = function() {
          return maybeCb.apply(self2, arguments);
        };
        original.apply(this, args).then(
          function(ret) {
            process.nextTick(cb.bind(null, null, ret));
          },
          function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
          }
        );
      }
      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(
        callbackified,
        getOwnPropertyDescriptors(original)
      );
      return callbackified;
    }
    exports.callbackify = callbackify;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/assert@2.1.0/node_modules/assert/build/internal/errors.js
var require_errors = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/assert@2.1.0/node_modules/assert/build/internal/errors.js"(exports, module) {
    "use strict";
    init_define_process_env();
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var codes = {};
    var assert;
    var util;
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      var NodeError = /* @__PURE__ */ (function(_Base) {
        _inherits(NodeError2, _Base);
        var _super = _createSuper(NodeError2);
        function NodeError2(arg1, arg2, arg3) {
          var _this;
          _classCallCheck(this, NodeError2);
          _this = _super.call(this, getMessage(arg1, arg2, arg3));
          _this.code = code;
          return _this;
        }
        return _createClass(NodeError2);
      })(Base);
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
          return String(i);
        });
        if (len > 2) {
          return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        } else if (len === 2) {
          return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        } else {
          return "of ".concat(thing, " ").concat(expected[0]);
        }
      } else {
        return "of ".concat(thing, " ").concat(String(expected));
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      if (assert === void 0) assert = require_assert();
      assert(typeof name === "string", "'name' must be a string");
      var determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      var msg;
      if (endsWith(name, " argument")) {
        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      } else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      }
      msg += ". Received type ".concat(_typeof(actual));
      return msg;
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
      var reason = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
      if (util === void 0) util = require_util2();
      var inspected = util.inspect(value);
      if (inspected.length > 128) {
        inspected = "".concat(inspected.slice(0, 128), "...");
      }
      return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
    }, TypeError, RangeError);
    createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
      var type;
      if (value && value.constructor && value.constructor.name) {
        type = "instance of ".concat(value.constructor.name);
      } else {
        type = "type ".concat(_typeof(value));
      }
      return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
    }, TypeError);
    createErrorType("ERR_MISSING_ARGS", function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (assert === void 0) assert = require_assert();
      assert(args.length > 0, "At least one arg needs to be specified");
      var msg = "The ";
      var len = args.length;
      args = args.map(function(a) {
        return '"'.concat(a, '"');
      });
      switch (len) {
        case 1:
          msg += "".concat(args[0], " argument");
          break;
        case 2:
          msg += "".concat(args[0], " and ").concat(args[1], " arguments");
          break;
        default:
          msg += args.slice(0, len - 1).join(", ");
          msg += ", and ".concat(args[len - 1], " arguments");
          break;
      }
      return "".concat(msg, " must be specified");
    }, TypeError);
    module.exports.codes = codes;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/assert@2.1.0/node_modules/assert/build/internal/assert/assertion_error.js
var require_assertion_error = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/assert@2.1.0/node_modules/assert/build/internal/assert/assertion_error.js"(exports, module) {
    "use strict";
    init_define_process_env();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          _defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2)) return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct.bind();
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [null];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2) _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    var _require = require_util2();
    var inspect = _require.inspect;
    var _require2 = require_errors();
    var ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function repeat(str, count) {
      count = Math.floor(count);
      if (str.length == 0 || count == 0) return "";
      var maxCount = str.length * count;
      count = Math.floor(Math.log(count) / Math.log(2));
      while (count) {
        str += str;
        count--;
      }
      str += str.substring(0, maxCount - str.length);
      return str;
    }
    var blue = "";
    var green = "";
    var red = "";
    var white = "";
    var kReadableOperator = {
      deepStrictEqual: "Expected values to be strictly deep-equal:",
      strictEqual: "Expected values to be strictly equal:",
      strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
      deepEqual: "Expected values to be loosely deep-equal:",
      equal: "Expected values to be loosely equal:",
      notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
      notStrictEqual: 'Expected "actual" to be strictly unequal to:',
      notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
      notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
      notEqual: 'Expected "actual" to be loosely unequal to:',
      notIdentical: "Values identical but not reference-equal:"
    };
    var kMaxShortLength = 10;
    function copyError(source) {
      var keys = Object.keys(source);
      var target = Object.create(Object.getPrototypeOf(source));
      keys.forEach(function(key) {
        target[key] = source[key];
      });
      Object.defineProperty(target, "message", {
        value: source.message
      });
      return target;
    }
    function inspectValue(val) {
      return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1e3,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
      });
    }
    function createErrDiff(actual, expected, operator) {
      var other = "";
      var res = "";
      var lastPos = 0;
      var end = "";
      var skipped = false;
      var actualInspected = inspectValue(actual);
      var actualLines = actualInspected.split("\n");
      var expectedLines = inspectValue(expected).split("\n");
      var i = 0;
      var indicator = "";
      if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) {
        operator = "strictEqualObject";
      }
      if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length;
        if (inputLength <= kMaxShortLength) {
          if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) {
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
          }
        } else if (operator !== "strictEqualObject") {
          var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
          if (inputLength < maxLength) {
            while (actualLines[0][i] === expectedLines[0][i]) {
              i++;
            }
            if (i > 2) {
              indicator = "\n  ".concat(repeat(" ", i), "^");
              i = 0;
            }
          }
        }
      }
      var a = actualLines[actualLines.length - 1];
      var b = expectedLines[expectedLines.length - 1];
      while (a === b) {
        if (i++ < 2) {
          end = "\n  ".concat(a).concat(end);
        } else {
          other = a;
        }
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
      }
      var maxLines = Math.max(actualLines.length, expectedLines.length);
      if (maxLines === 0) {
        var _actualLines = actualInspected.split("\n");
        if (_actualLines.length > 30) {
          _actualLines[26] = "".concat(blue, "...").concat(white);
          while (_actualLines.length > 27) {
            _actualLines.pop();
          }
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
      }
      if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
      }
      if (other !== "") {
        end = "\n  ".concat(other).concat(end);
        other = "";
      }
      var printedLines = 0;
      var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
      var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
      for (i = 0; i < maxLines; i++) {
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
          if (cur > 1 && i > 2) {
            if (cur > 4) {
              res += "\n".concat(blue, "...").concat(white);
              skipped = true;
            } else if (cur > 3) {
              res += "\n  ".concat(expectedLines[i - 2]);
              printedLines++;
            }
            res += "\n  ".concat(expectedLines[i - 1]);
            printedLines++;
          }
          lastPos = i;
          other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
          printedLines++;
        } else if (expectedLines.length < i + 1) {
          if (cur > 1 && i > 2) {
            if (cur > 4) {
              res += "\n".concat(blue, "...").concat(white);
              skipped = true;
            } else if (cur > 3) {
              res += "\n  ".concat(actualLines[i - 2]);
              printedLines++;
            }
            res += "\n  ".concat(actualLines[i - 1]);
            printedLines++;
          }
          lastPos = i;
          res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
          printedLines++;
        } else {
          var expectedLine = expectedLines[i];
          var actualLine = actualLines[i];
          var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
          if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
            divergingLines = false;
            actualLine += ",";
          }
          if (divergingLines) {
            if (cur > 1 && i > 2) {
              if (cur > 4) {
                res += "\n".concat(blue, "...").concat(white);
                skipped = true;
              } else if (cur > 3) {
                res += "\n  ".concat(actualLines[i - 2]);
                printedLines++;
              }
              res += "\n  ".concat(actualLines[i - 1]);
              printedLines++;
            }
            lastPos = i;
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
            printedLines += 2;
          } else {
            res += other;
            other = "";
            if (cur === 1 || i === 0) {
              res += "\n  ".concat(actualLine);
              printedLines++;
            }
          }
        }
        if (printedLines > 20 && i < maxLines - 2) {
          return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
        }
      }
      return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
    }
    var AssertionError = /* @__PURE__ */ (function(_Error, _inspect$custom) {
      _inherits(AssertionError2, _Error);
      var _super = _createSuper(AssertionError2);
      function AssertionError2(options) {
        var _this;
        _classCallCheck(this, AssertionError2);
        if (_typeof(options) !== "object" || options === null) {
          throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
        }
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) {
          _this = _super.call(this, String(message));
        } else {
          if (process.stderr && process.stderr.isTTY) {
            if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
              blue = "\x1B[34m";
              green = "\x1B[32m";
              white = "\x1B[39m";
              red = "\x1B[31m";
            } else {
              blue = "";
              green = "";
              white = "";
              red = "";
            }
          }
          if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
            actual = copyError(actual);
            expected = copyError(expected);
          }
          if (operator === "deepStrictEqual" || operator === "strictEqual") {
            _this = _super.call(this, createErrDiff(actual, expected, operator));
          } else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
            var base = kReadableOperator[operator];
            var res = inspectValue(actual).split("\n");
            if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) {
              base = kReadableOperator.notStrictEqualObject;
            }
            if (res.length > 30) {
              res[26] = "".concat(blue, "...").concat(white);
              while (res.length > 27) {
                res.pop();
              }
            }
            if (res.length === 1) {
              _this = _super.call(this, "".concat(base, " ").concat(res[0]));
            } else {
              _this = _super.call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n"));
            }
          } else {
            var _res = inspectValue(actual);
            var other = "";
            var knownOperators = kReadableOperator[operator];
            if (operator === "notDeepEqual" || operator === "notEqual") {
              _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
              if (_res.length > 1024) {
                _res = "".concat(_res.slice(0, 1021), "...");
              }
            } else {
              other = "".concat(inspectValue(expected));
              if (_res.length > 512) {
                _res = "".concat(_res.slice(0, 509), "...");
              }
              if (other.length > 512) {
                other = "".concat(other.slice(0, 509), "...");
              }
              if (operator === "deepEqual" || operator === "equal") {
                _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
              } else {
                other = " ".concat(operator, " ").concat(other);
              }
            }
            _this = _super.call(this, "".concat(_res).concat(other));
          }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), "name", {
          value: "AssertionError [ERR_ASSERTION]",
          enumerable: false,
          writable: true,
          configurable: true
        });
        _this.code = "ERR_ASSERTION";
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) {
          Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
        }
        _this.stack;
        _this.name = "AssertionError";
        return _possibleConstructorReturn(_this);
      }
      _createClass(AssertionError2, [{
        key: "toString",
        value: function toString() {
          return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
        }
      }, {
        key: _inspect$custom,
        value: function value(recurseTimes, ctx) {
          return inspect(this, _objectSpread(_objectSpread({}, ctx), {}, {
            customInspect: false,
            depth: 0
          }));
        }
      }]);
      return AssertionError2;
    })(/* @__PURE__ */ _wrapNativeSuper(Error), inspect.custom);
    module.exports = AssertionError;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js
var require_isArguments2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var toStr = Object.prototype.toString;
    module.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js
var require_implementation2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments2();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = (function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      })();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module.exports = keysShim;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var slice = Array.prototype.slice;
    var isArgs = require_isArguments2();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : require_implementation2();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = (function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        })(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module.exports = keysShim;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object.assign@4.1.7/node_modules/object.assign/implementation.js
var require_implementation3 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object.assign@4.1.7/node_modules/object.assign/implementation.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var objectKeys = require_object_keys();
    var hasSymbols = require_shams()();
    var callBound = require_call_bound();
    var $Object = require_es_object_atoms();
    var $push = callBound("Array.prototype.push");
    var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
    var originalGetSymbols = hasSymbols ? $Object.getOwnPropertySymbols : null;
    module.exports = function assign(target, source1) {
      if (target == null) {
        throw new TypeError("target must be an object");
      }
      var to = $Object(target);
      if (arguments.length === 1) {
        return to;
      }
      for (var s = 1; s < arguments.length; ++s) {
        var from = $Object(arguments[s]);
        var keys = objectKeys(from);
        var getSymbols = hasSymbols && ($Object.getOwnPropertySymbols || originalGetSymbols);
        if (getSymbols) {
          var syms = getSymbols(from);
          for (var j = 0; j < syms.length; ++j) {
            var key = syms[j];
            if ($propIsEnumerable(from, key)) {
              $push(keys, key);
            }
          }
        }
        for (var i = 0; i < keys.length; ++i) {
          var nextKey = keys[i];
          if ($propIsEnumerable(from, nextKey)) {
            var propValue = from[nextKey];
            to[nextKey] = propValue;
          }
        }
      }
      return to;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object.assign@4.1.7/node_modules/object.assign/polyfill.js
var require_polyfill = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object.assign@4.1.7/node_modules/object.assign/polyfill.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var implementation = require_implementation3();
    var lacksProperEnumerationOrder = function() {
      if (!Object.assign) {
        return false;
      }
      var str = "abcdefghijklmnopqrst";
      var letters = str.split("");
      var map = {};
      for (var i = 0; i < letters.length; ++i) {
        map[letters[i]] = letters[i];
      }
      var obj = Object.assign({}, map);
      var actual = "";
      for (var k in obj) {
        actual += k;
      }
      return str !== actual;
    };
    var assignHasPendingExceptions = function() {
      if (!Object.assign || !Object.preventExtensions) {
        return false;
      }
      var thrower = Object.preventExtensions({ 1: 2 });
      try {
        Object.assign(thrower, "xy");
      } catch (e) {
        return thrower[1] === "y";
      }
      return false;
    };
    module.exports = function getPolyfill() {
      if (!Object.assign) {
        return implementation;
      }
      if (lacksProperEnumerationOrder()) {
        return implementation;
      }
      if (assignHasPendingExceptions()) {
        return implementation;
      }
      return Object.assign;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/implementation.js
var require_implementation4 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/implementation.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var numberIsNaN = function(value) {
      return value !== value;
    };
    module.exports = function is(a, b) {
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      if (a === b) {
        return true;
      }
      if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/polyfill.js
var require_polyfill2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/polyfill.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var implementation = require_implementation4();
    module.exports = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/call-bind@1.0.9/node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var defineDataProperty = require_define_data_property();
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var supportsDescriptors = require_has_property_descriptors()();
    var defineProperty = function(object, name, value, predicate) {
      if (name in object) {
        if (predicate === true) {
          if (object[name] === value) {
            return;
          }
        } else if (!isFunction(predicate) || !predicate()) {
          return;
        }
      }
      if (supportsDescriptors) {
        defineDataProperty(object, name, value, true);
      } else {
        defineDataProperty(object, name, value);
      }
    };
    var defineProperties = function(object, map) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module.exports = defineProperties;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/shim.js
var require_shim = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/shim.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var getPolyfill = require_polyfill2();
    var define2 = require_define_properties();
    module.exports = function shimObjectIs() {
      var polyfill = getPolyfill();
      define2(Object, { is: polyfill }, {
        is: function testObjectIs() {
          return Object.is !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/index.js
var require_object_is = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/object-is@1.1.6/node_modules/object-is/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill2();
    var shim = require_shim();
    var polyfill = callBind(getPolyfill(), Object);
    define2(polyfill, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = polyfill;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-nan@1.3.2/node_modules/is-nan/implementation.js
var require_implementation5 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-nan@1.3.2/node_modules/is-nan/implementation.js"(exports, module) {
    "use strict";
    init_define_process_env();
    module.exports = function isNaN2(value) {
      return value !== value;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-nan@1.3.2/node_modules/is-nan/polyfill.js
var require_polyfill3 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-nan@1.3.2/node_modules/is-nan/polyfill.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var implementation = require_implementation5();
    module.exports = function getPolyfill() {
      if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) {
        return Number.isNaN;
      }
      return implementation;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-nan@1.3.2/node_modules/is-nan/shim.js
var require_shim2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-nan@1.3.2/node_modules/is-nan/shim.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var define2 = require_define_properties();
    var getPolyfill = require_polyfill3();
    module.exports = function shimNumberIsNaN() {
      var polyfill = getPolyfill();
      define2(Number, { isNaN: polyfill }, {
        isNaN: function testIsNaN() {
          return Number.isNaN !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-nan@1.3.2/node_modules/is-nan/index.js
var require_is_nan = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/is-nan@1.3.2/node_modules/is-nan/index.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var callBind = require_call_bind();
    var define2 = require_define_properties();
    var implementation = require_implementation5();
    var getPolyfill = require_polyfill3();
    var shim = require_shim2();
    var polyfill = callBind(getPolyfill(), Number);
    define2(polyfill, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = polyfill;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/assert@2.1.0/node_modules/assert/build/internal/util/comparisons.js
var require_comparisons = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/assert@2.1.0/node_modules/assert/build/internal/util/comparisons.js"(exports, module) {
    "use strict";
    init_define_process_env();
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = false;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    var regexFlagsSupported = /a/g.flags !== void 0;
    var arrayFromSet = function arrayFromSet2(set) {
      var array = [];
      set.forEach(function(value) {
        return array.push(value);
      });
      return array;
    };
    var arrayFromMap = function arrayFromMap2(map) {
      var array = [];
      map.forEach(function(value, key) {
        return array.push([key, value]);
      });
      return array;
    };
    var objectIs = Object.is ? Object.is : require_object_is();
    var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
      return [];
    };
    var numberIsNaN = Number.isNaN ? Number.isNaN : require_is_nan();
    function uncurryThis(f) {
      return f.call.bind(f);
    }
    var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
    var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
    var objectToString = uncurryThis(Object.prototype.toString);
    var _require$types = require_util2().types;
    var isAnyArrayBuffer = _require$types.isAnyArrayBuffer;
    var isArrayBufferView = _require$types.isArrayBufferView;
    var isDate = _require$types.isDate;
    var isMap = _require$types.isMap;
    var isRegExp = _require$types.isRegExp;
    var isSet = _require$types.isSet;
    var isNativeError = _require$types.isNativeError;
    var isBoxedPrimitive = _require$types.isBoxedPrimitive;
    var isNumberObject = _require$types.isNumberObject;
    var isStringObject = _require$types.isStringObject;
    var isBooleanObject = _require$types.isBooleanObject;
    var isBigIntObject = _require$types.isBigIntObject;
    var isSymbolObject = _require$types.isSymbolObject;
    var isFloat32Array = _require$types.isFloat32Array;
    var isFloat64Array = _require$types.isFloat64Array;
    function isNonIndex(key) {
      if (key.length === 0 || key.length > 10) return true;
      for (var i = 0; i < key.length; i++) {
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
      }
      return key.length === 10 && key >= Math.pow(2, 32);
    }
    function getOwnNonIndexProperties(value) {
      return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
    }
    function compare(a, b) {
      if (a === b) {
        return 0;
      }
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    }
    var ONLY_ENUMERABLE = void 0;
    var kStrict = true;
    var kLoose = false;
    var kNoIterator = 0;
    var kIsArray = 1;
    var kIsSet = 2;
    var kIsMap = 3;
    function areSimilarRegExps(a, b) {
      return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
    }
    function areSimilarFloatArrays(a, b) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (var offset = 0; offset < a.byteLength; offset++) {
        if (a[offset] !== b[offset]) {
          return false;
        }
      }
      return true;
    }
    function areSimilarTypedArrays(a, b) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
    }
    function areEqualArrayBuffers(buf1, buf2) {
      return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
    }
    function isEqualBoxedPrimitive(val1, val2) {
      if (isNumberObject(val1)) {
        return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
      }
      if (isStringObject(val1)) {
        return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
      }
      if (isBooleanObject(val1)) {
        return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
      }
      if (isBigIntObject(val1)) {
        return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
      }
      return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
    }
    function innerDeepEqual(val1, val2, strict, memos) {
      if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs(val1, val2) : true;
      }
      if (strict) {
        if (_typeof(val1) !== "object") {
          return typeof val1 === "number" && numberIsNaN(val1) && numberIsNaN(val2);
        }
        if (_typeof(val2) !== "object" || val1 === null || val2 === null) {
          return false;
        }
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
          return false;
        }
      } else {
        if (val1 === null || _typeof(val1) !== "object") {
          if (val2 === null || _typeof(val2) !== "object") {
            return val1 == val2;
          }
          return false;
        }
        if (val2 === null || _typeof(val2) !== "object") {
          return false;
        }
      }
      var val1Tag = objectToString(val1);
      var val2Tag = objectToString(val2);
      if (val1Tag !== val2Tag) {
        return false;
      }
      if (Array.isArray(val1)) {
        if (val1.length !== val2.length) {
          return false;
        }
        var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) {
          return false;
        }
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
      }
      if (val1Tag === "[object Object]") {
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
          return false;
        }
      }
      if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
          return false;
        }
      } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
          return false;
        }
      } else if (isNativeError(val1) || val1 instanceof Error) {
        if (val1.message !== val2.message || val1.name !== val2.name) {
          return false;
        }
      } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
          if (!areSimilarFloatArrays(val1, val2)) {
            return false;
          }
        } else if (!areSimilarTypedArrays(val1, val2)) {
          return false;
        }
        var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) {
          return false;
        }
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
      } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) {
          return false;
        }
        return keyCheck(val1, val2, strict, memos, kIsSet);
      } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) {
          return false;
        }
        return keyCheck(val1, val2, strict, memos, kIsMap);
      } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) {
          return false;
        }
      } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kNoIterator);
    }
    function getEnumerables(val, keys) {
      return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
      });
    }
    function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
      if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2);
        if (aKeys.length !== bKeys.length) {
          return false;
        }
      }
      var i = 0;
      for (; i < aKeys.length; i++) {
        if (!hasOwnProperty(val2, aKeys[i])) {
          return false;
        }
      }
      if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
          var count = 0;
          for (i = 0; i < symbolKeysA.length; i++) {
            var key = symbolKeysA[i];
            if (propertyIsEnumerable(val1, key)) {
              if (!propertyIsEnumerable(val2, key)) {
                return false;
              }
              aKeys.push(key);
              count++;
            } else if (propertyIsEnumerable(val2, key)) {
              return false;
            }
          }
          var symbolKeysB = objectGetOwnPropertySymbols(val2);
          if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
            return false;
          }
        } else {
          var _symbolKeysB = objectGetOwnPropertySymbols(val2);
          if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
            return false;
          }
        }
      }
      if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
        return true;
      }
      if (memos === void 0) {
        memos = {
          val1: /* @__PURE__ */ new Map(),
          val2: /* @__PURE__ */ new Map(),
          position: 0
        };
      } else {
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== void 0) {
          var val2MemoB = memos.val2.get(val2);
          if (val2MemoB !== void 0) {
            return val2MemoA === val2MemoB;
          }
        }
        memos.position++;
      }
      memos.val1.set(val1, memos.position);
      memos.val2.set(val2, memos.position);
      var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
      memos.val1.delete(val1);
      memos.val2.delete(val2);
      return areEq;
    }
    function setHasEqualElement(set, val1, strict, memo) {
      var setValues = arrayFromSet(set);
      for (var i = 0; i < setValues.length; i++) {
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
          set.delete(val2);
          return true;
        }
      }
      return false;
    }
    function findLooseMatchingPrimitives(prim) {
      switch (_typeof(prim)) {
        case "undefined":
          return null;
        case "object":
          return void 0;
        case "symbol":
          return false;
        case "string":
          prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case "number":
          if (numberIsNaN(prim)) {
            return false;
          }
      }
      return true;
    }
    function setMightHaveLoosePrim(a, b, prim) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) return altValue;
      return b.has(altValue) && !a.has(altValue);
    }
    function mapMightHaveLoosePrim(a, b, prim, item, memo) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) {
        return altValue;
      }
      var curB = b.get(altValue);
      if (curB === void 0 && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
        return false;
      }
      return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
    }
    function setEquiv(a, b, strict, memo) {
      var set = null;
      var aValues = arrayFromSet(a);
      for (var i = 0; i < aValues.length; i++) {
        var val = aValues[i];
        if (_typeof(val) === "object" && val !== null) {
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(val);
        } else if (!b.has(val)) {
          if (strict) return false;
          if (!setMightHaveLoosePrim(a, b, val)) {
            return false;
          }
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(val);
        }
      }
      if (set !== null) {
        var bValues = arrayFromSet(b);
        for (var _i = 0; _i < bValues.length; _i++) {
          var _val = bValues[_i];
          if (_typeof(_val) === "object" && _val !== null) {
            if (!setHasEqualElement(set, _val, strict, memo)) return false;
          } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
            return false;
          }
        }
        return set.size === 0;
      }
      return true;
    }
    function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
      var setValues = arrayFromSet(set);
      for (var i = 0; i < setValues.length; i++) {
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
          set.delete(key2);
          return true;
        }
      }
      return false;
    }
    function mapEquiv(a, b, strict, memo) {
      var set = null;
      var aEntries = arrayFromMap(a);
      for (var i = 0; i < aEntries.length; i++) {
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === "object" && key !== null) {
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(key);
        } else {
          var item2 = b.get(key);
          if (item2 === void 0 && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
            if (strict) return false;
            if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
            if (set === null) {
              set = /* @__PURE__ */ new Set();
            }
            set.add(key);
          }
        }
      }
      if (set !== null) {
        var bEntries = arrayFromMap(b);
        for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
          var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), _key = _bEntries$_i[0], item = _bEntries$_i[1];
          if (_typeof(_key) === "object" && _key !== null) {
            if (!mapHasEqualEntry(set, a, _key, item, strict, memo)) return false;
          } else if (!strict && (!a.has(_key) || !innerDeepEqual(a.get(_key), item, false, memo)) && !mapHasEqualEntry(set, a, _key, item, false, memo)) {
            return false;
          }
        }
        return set.size === 0;
      }
      return true;
    }
    function objEquiv(a, b, strict, keys, memos, iterationType) {
      var i = 0;
      if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) {
          return false;
        }
      } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) {
          return false;
        }
      } else if (iterationType === kIsArray) {
        for (; i < a.length; i++) {
          if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
              return false;
            }
          } else if (hasOwnProperty(b, i)) {
            return false;
          } else {
            var keysA = Object.keys(a);
            for (; i < keysA.length; i++) {
              var key = keysA[i];
              if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
                return false;
              }
            }
            if (keysA.length !== Object.keys(b).length) {
              return false;
            }
            return true;
          }
        }
      }
      for (i = 0; i < keys.length; i++) {
        var _key2 = keys[i];
        if (!innerDeepEqual(a[_key2], b[_key2], strict, memos)) {
          return false;
        }
      }
      return true;
    }
    function isDeepEqual(val1, val2) {
      return innerDeepEqual(val1, val2, kLoose);
    }
    function isDeepStrictEqual(val1, val2) {
      return innerDeepEqual(val1, val2, kStrict);
    }
    module.exports = {
      isDeepEqual,
      isDeepStrictEqual
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/assert@2.1.0/node_modules/assert/build/assert.js
var require_assert = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/assert@2.1.0/node_modules/assert/build/assert.js"(exports, module) {
    "use strict";
    init_define_process_env();
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var _require = require_errors();
    var _require$codes = _require.codes;
    var ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE;
    var ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var AssertionError = require_assertion_error();
    var _require2 = require_util2();
    var inspect = _require2.inspect;
    var _require$types = require_util2().types;
    var isPromise = _require$types.isPromise;
    var isRegExp = _require$types.isRegExp;
    var objectAssign = require_polyfill()();
    var objectIs = require_polyfill2()();
    var RegExpPrototypeTest = require_callBound()("RegExp.prototype.test");
    var isDeepEqual;
    var isDeepStrictEqual;
    function lazyLoadComparison() {
      var comparison = require_comparisons();
      isDeepEqual = comparison.isDeepEqual;
      isDeepStrictEqual = comparison.isDeepStrictEqual;
    }
    var warned = false;
    var assert = module.exports = ok;
    var NO_EXCEPTION_SENTINEL = {};
    function innerFail(obj) {
      if (obj.message instanceof Error) throw obj.message;
      throw new AssertionError(obj);
    }
    function fail(actual, expected, message, operator, stackStartFn) {
      var argsLen = arguments.length;
      var internalMessage;
      if (argsLen === 0) {
        internalMessage = "Failed";
      } else if (argsLen === 1) {
        message = actual;
        actual = void 0;
      } else {
        if (warned === false) {
          warned = true;
          var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
          warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
        }
        if (argsLen === 2) operator = "!=";
      }
      if (message instanceof Error) throw message;
      var errArgs = {
        actual,
        expected,
        operator: operator === void 0 ? "fail" : operator,
        stackStartFn: stackStartFn || fail
      };
      if (message !== void 0) {
        errArgs.message = message;
      }
      var err = new AssertionError(errArgs);
      if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
      }
      throw err;
    }
    assert.fail = fail;
    assert.AssertionError = AssertionError;
    function innerOk(fn, argLen, value, message) {
      if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
          generatedMessage = true;
          message = "No value argument passed to `assert.ok()`";
        } else if (message instanceof Error) {
          throw message;
        }
        var err = new AssertionError({
          actual: value,
          expected: true,
          message,
          operator: "==",
          stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
      }
    }
    function ok() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      innerOk.apply(void 0, [ok, args.length].concat(args));
    }
    assert.ok = ok;
    assert.equal = function equal(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (actual != expected) {
        innerFail({
          actual,
          expected,
          message,
          operator: "==",
          stackStartFn: equal
        });
      }
    };
    assert.notEqual = function notEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (actual == expected) {
        innerFail({
          actual,
          expected,
          message,
          operator: "!=",
          stackStartFn: notEqual
        });
      }
    };
    assert.deepEqual = function deepEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      if (!isDeepEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "deepEqual",
          stackStartFn: deepEqual
        });
      }
    };
    assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      if (isDeepEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notDeepEqual",
          stackStartFn: notDeepEqual
        });
      }
    };
    assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      if (!isDeepStrictEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "deepStrictEqual",
          stackStartFn: deepStrictEqual
        });
      }
    };
    assert.notDeepStrictEqual = notDeepStrictEqual;
    function notDeepStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      if (isDeepStrictEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notDeepStrictEqual",
          stackStartFn: notDeepStrictEqual
        });
      }
    }
    assert.strictEqual = function strictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (!objectIs(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "strictEqual",
          stackStartFn: strictEqual
        });
      }
    };
    assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (objectIs(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notStrictEqual",
          stackStartFn: notStrictEqual
        });
      }
    };
    var Comparison = /* @__PURE__ */ _createClass(function Comparison2(obj, keys, actual) {
      var _this = this;
      _classCallCheck(this, Comparison2);
      keys.forEach(function(key) {
        if (key in obj) {
          if (actual !== void 0 && typeof actual[key] === "string" && isRegExp(obj[key]) && RegExpPrototypeTest(obj[key], actual[key])) {
            _this[key] = actual[key];
          } else {
            _this[key] = obj[key];
          }
        }
      });
    });
    function compareExceptionKey(actual, expected, key, message, keys, fn) {
      if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
          var a = new Comparison(actual, keys);
          var b = new Comparison(expected, keys, actual);
          var err = new AssertionError({
            actual: a,
            expected: b,
            operator: "deepStrictEqual",
            stackStartFn: fn
          });
          err.actual = actual;
          err.expected = expected;
          err.operator = fn.name;
          throw err;
        }
        innerFail({
          actual,
          expected,
          message,
          operator: fn.name,
          stackStartFn: fn
        });
      }
    }
    function expectedException(actual, expected, msg, fn) {
      if (typeof expected !== "function") {
        if (isRegExp(expected)) return RegExpPrototypeTest(expected, actual);
        if (arguments.length === 2) {
          throw new ERR_INVALID_ARG_TYPE("expected", ["Function", "RegExp"], expected);
        }
        if (_typeof(actual) !== "object" || actual === null) {
          var err = new AssertionError({
            actual,
            expected,
            message: msg,
            operator: "deepStrictEqual",
            stackStartFn: fn
          });
          err.operator = fn.name;
          throw err;
        }
        var keys = Object.keys(expected);
        if (expected instanceof Error) {
          keys.push("name", "message");
        } else if (keys.length === 0) {
          throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
        }
        if (isDeepEqual === void 0) lazyLoadComparison();
        keys.forEach(function(key) {
          if (typeof actual[key] === "string" && isRegExp(expected[key]) && RegExpPrototypeTest(expected[key], actual[key])) {
            return;
          }
          compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
      }
      if (expected.prototype !== void 0 && actual instanceof expected) {
        return true;
      }
      if (Error.isPrototypeOf(expected)) {
        return false;
      }
      return expected.call({}, actual) === true;
    }
    function getActual(fn) {
      if (typeof fn !== "function") {
        throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
      }
      try {
        fn();
      } catch (e) {
        return e;
      }
      return NO_EXCEPTION_SENTINEL;
    }
    function checkIsPromise(obj) {
      return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
    }
    function waitForActual(promiseFn) {
      return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === "function") {
          resultPromise = promiseFn();
          if (!checkIsPromise(resultPromise)) {
            throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
          }
        } else if (checkIsPromise(promiseFn)) {
          resultPromise = promiseFn;
        } else {
          throw new ERR_INVALID_ARG_TYPE("promiseFn", ["Function", "Promise"], promiseFn);
        }
        return Promise.resolve().then(function() {
          return resultPromise;
        }).then(function() {
          return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
          return e;
        });
      });
    }
    function expectsError(stackStartFn, actual, error, message) {
      if (typeof error === "string") {
        if (arguments.length === 4) {
          throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
        }
        if (_typeof(actual) === "object" && actual !== null) {
          if (actual.message === error) {
            throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
          }
        } else if (actual === error) {
          throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
        }
        message = error;
        error = void 0;
      } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") {
        throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
      }
      if (actual === NO_EXCEPTION_SENTINEL) {
        var details = "";
        if (error && error.name) {
          details += " (".concat(error.name, ")");
        }
        details += message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
        innerFail({
          actual: void 0,
          expected: error,
          operator: stackStartFn.name,
          message: "Missing expected ".concat(fnType).concat(details),
          stackStartFn
        });
      }
      if (error && !expectedException(actual, error, message, stackStartFn)) {
        throw actual;
      }
    }
    function expectsNoError(stackStartFn, actual, error, message) {
      if (actual === NO_EXCEPTION_SENTINEL) return;
      if (typeof error === "string") {
        message = error;
        error = void 0;
      }
      if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
        innerFail({
          actual,
          expected: error,
          operator: stackStartFn.name,
          message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
          stackStartFn
        });
      }
      throw actual;
    }
    assert.throws = function throws(promiseFn) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      expectsError.apply(void 0, [throws, getActual(promiseFn)].concat(args));
    };
    assert.rejects = function rejects(promiseFn) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return waitForActual(promiseFn).then(function(result) {
        return expectsError.apply(void 0, [rejects, result].concat(args));
      });
    };
    assert.doesNotThrow = function doesNotThrow(fn) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      expectsNoError.apply(void 0, [doesNotThrow, getActual(fn)].concat(args));
    };
    assert.doesNotReject = function doesNotReject(fn) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      return waitForActual(fn).then(function(result) {
        return expectsNoError.apply(void 0, [doesNotReject, result].concat(args));
      });
    };
    assert.ifError = function ifError(err) {
      if (err !== null && err !== void 0) {
        var message = "ifError got unwanted exception: ";
        if (_typeof(err) === "object" && typeof err.message === "string") {
          if (err.message.length === 0 && err.constructor) {
            message += err.constructor.name;
          } else {
            message += err.message;
          }
        } else {
          message += inspect(err);
        }
        var newErr = new AssertionError({
          actual: err,
          expected: null,
          operator: "ifError",
          message,
          stackStartFn: ifError
        });
        var origStack = err.stack;
        if (typeof origStack === "string") {
          var tmp2 = origStack.split("\n");
          tmp2.shift();
          var tmp1 = newErr.stack.split("\n");
          for (var i = 0; i < tmp2.length; i++) {
            var pos = tmp1.indexOf(tmp2[i]);
            if (pos !== -1) {
              tmp1 = tmp1.slice(0, pos);
              break;
            }
          }
          newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
        }
        throw newErr;
      }
    };
    function internalMatch(string, regexp, message, fn, fnName) {
      if (!isRegExp(regexp)) {
        throw new ERR_INVALID_ARG_TYPE("regexp", "RegExp", regexp);
      }
      var match = fnName === "match";
      if (typeof string !== "string" || RegExpPrototypeTest(regexp, string) !== match) {
        if (message instanceof Error) {
          throw message;
        }
        var generatedMessage = !message;
        message = message || (typeof string !== "string" ? 'The "string" argument must be of type string. Received type ' + "".concat(_typeof(string), " (").concat(inspect(string), ")") : (match ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(inspect(regexp), ". Input:\n\n").concat(inspect(string), "\n"));
        var err = new AssertionError({
          actual: string,
          expected: regexp,
          message,
          operator: fnName,
          stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
      }
    }
    assert.match = function match(string, regexp, message) {
      internalMatch(string, regexp, message, match, "match");
    };
    assert.doesNotMatch = function doesNotMatch(string, regexp, message) {
      internalMatch(string, regexp, message, doesNotMatch, "doesNotMatch");
    };
    function strict() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      innerOk.apply(void 0, [strict, args.length].concat(args));
    }
    assert.strict = objectAssign(strict, assert, {
      equal: assert.strictEqual,
      deepEqual: assert.deepStrictEqual,
      notEqual: assert.notStrictEqual,
      notDeepEqual: assert.notDeepStrictEqual
    });
    assert.strict.strict = assert.strict;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/TransportImplWebPlayer.js
var require_TransportImplWebPlayer = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/TransportImplWebPlayer.js"(exports) {
    "use strict";
    init_define_process_env();
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var assert_1 = __importDefault(require_assert());
    var TransportImplBase_1 = __importDefault(require_TransportImplBase());
    var TransportImplWebPlayer = (
      /** @class */
      (function(_super) {
        __extends(TransportImplWebPlayer2, _super);
        function TransportImplWebPlayer2(config) {
          var _this = _super.call(this, { name: config.name, verbose: config.verbose }) || this;
          _this.status = "stopped";
          _this.handleDomWindowMessage = function(event) {
            var _a;
            if (event.origin === _this.origin) {
              try {
                var message = JSON.parse(event.data);
                var type = message.type;
                if (type === "CONNECT") {
                  var connectionId = JSON.stringify(message.device);
                  _this.handleChannelEvent("join", connectionId);
                } else if (type === "DISCONNECT") {
                  var connectionId = JSON.stringify(message.device);
                  _this.handleChannelEvent("leave", connectionId);
                } else if (type === "MESSAGE") {
                  var connectionId = JSON.stringify(message.message.device);
                  _this.handleMessage(connectionId, message.message);
                }
              } catch (_b) {
                (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.warn("Invalid message", event.data);
              }
            }
          };
          var origin = new URL(config.webPlayerURL).origin;
          _this.currentWindow = config.window;
          _this.targetWindowRef = config.ref;
          _this.status = "stopped";
          _this.origin = origin;
          return _this;
        }
        TransportImplWebPlayer2.prototype.start = function() {
          var _a;
          (0, assert_1.default)(this.currentWindow);
          (_a = this.currentWindow) === null || _a === void 0 ? void 0 : _a.addEventListener("message", this.handleDomWindowMessage, false);
          this.status = "started";
        };
        TransportImplWebPlayer2.prototype.stop = function() {
          (0, assert_1.default)(this.currentWindow);
          this.currentWindow.removeEventListener("message", this.handleDomWindowMessage, false);
          this.currentWindow = void 0;
          this.targetWindowRef = void 0;
          this.status = "stopped";
        };
        TransportImplWebPlayer2.prototype.isStarted = function() {
          return this.status === "started" && this.currentWindow != null;
        };
        TransportImplWebPlayer2.prototype.sendAsync = function(channel, message) {
          var _a;
          return __awaiter(this, void 0, void 0, function() {
            var targetWindow;
            return __generator(this, function(_b) {
              (0, assert_1.default)(this.isStarted);
              targetWindow = (_a = this.targetWindowRef) === null || _a === void 0 ? void 0 : _a.current;
              (0, assert_1.default)(targetWindow);
              targetWindow.postMessage(JSON.stringify(message), this.origin);
              return [
                2
                /*return*/
              ];
            });
          });
        };
        TransportImplWebPlayer2.prototype.onVerifyCodeMessageSize = function(codeMessage) {
          return true;
        };
        return TransportImplWebPlayer2;
      })(TransportImplBase_1.default)
    );
    exports.default = TransportImplWebPlayer;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/webPlayer.js
var require_webPlayer = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/transports/webPlayer.js"(exports) {
    "use strict";
    init_define_process_env();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWebPlayerIFrameURL = exports.createWebPlayerTransport = void 0;
    var TransportImplWebPlayer_1 = __importDefault(require_TransportImplWebPlayer());
    function createWebPlayerTransport(config) {
      return new TransportImplWebPlayer_1.default(config);
    }
    exports.createWebPlayerTransport = createWebPlayerTransport;
    function getWebPlayerIFrameURL(webPlayerURL, sdkVersion, initialURL, verbose) {
      if (sdkVersion < "40.0.0" || typeof window === "undefined") {
        return void 0;
      }
      return "".concat(webPlayerURL.replace("%%SDK_VERSION%%", sdkVersion.split(".")[0]), "/index.html?initialUrl=").concat(encodeURIComponent(initialURL), "&origin=").concat(encodeURIComponent(window.location.origin), "&verbose=").concat(verbose);
    }
    exports.getWebPlayerIFrameURL = getWebPlayerIFrameURL;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/Session.js
var require_Session = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/Session.js"(exports) {
    "use strict";
    init_define_process_env();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var mapValues_1 = __importDefault(require_mapValues());
    var nullthrows_1 = __importDefault(require_nullthrows());
    var snack_content_1 = require_build();
    var DependencyResolver_1 = __importStar(require_DependencyResolver());
    var DevSession_1 = __importDefault(require_DevSession());
    var FileUploader_1 = __importDefault(require_FileUploader());
    var Logger_1 = require_Logger();
    var State = __importStar(require_State());
    var WantedVersions_1 = require_WantedVersions();
    var defaultConfig_1 = __importStar(require_defaultConfig());
    var transports_1 = require_transports2();
    var webPlayer_1 = require_webPlayer();
    var utils_1 = require_utils();
    var Snack2 = (
      /** @class */
      (function() {
        function Snack3(options) {
          var _this = this;
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
          this.stateListeners = /* @__PURE__ */ new Set();
          this.logListeners = /* @__PURE__ */ new Set();
          this.transportListeners = {};
          this.uploadAssetAsync = function(contents) {
            return __awaiter(_this, void 0, void 0, function() {
              var url, fileUploader;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    url = "";
                    fileUploader = new FileUploader_1.default({
                      apiURL: this.apiURL,
                      logger: this.logger,
                      callback: function(_request, resultURL, error) {
                        if (error) {
                          throw error;
                        } else if (resultURL) {
                          url = resultURL;
                        }
                      }
                    });
                    fileUploader.add("asset", {
                      type: "ASSET",
                      contents
                    });
                    return [4, fileUploader.waitForCompletion()];
                  case 1:
                    _a2.sent();
                    return [2, url];
                }
              });
            });
          };
          this.onFileUploaded = function(request, resultURL, error) {
            _this.setState(function(_a2) {
              var files = _a2.files;
              return {
                files: State.addObject(files, request.path, __assign(__assign(__assign({}, request.file), resultURL ? { contents: resultURL } : {}), error ? { error } : {}))
              };
            });
          };
          this.onWantedDependencyVersions = function(_sdkVersion, result, error) {
            var wantedDependencyVersions = error ? {} : result;
            _this.setState(function(_a2) {
              var dependencies2 = _a2.dependencies, sdkVersion2 = _a2.sdkVersion;
              return {
                wantedDependencyVersions,
                missingDependencies: (0, DependencyResolver_1.getMissingDependencies)(dependencies2, sdkVersion2, wantedDependencyVersions)
              };
            });
          };
          this.onDependencyResolved = function(request, result, error) {
            _this.setState(function(_a2) {
              var dependencies2 = _a2.dependencies, sdkVersion2 = _a2.sdkVersion, wantedDependencyVersions = _a2.wantedDependencyVersions;
              var newDependencies = State.addObject(dependencies2, request.name, __assign(__assign(__assign(__assign({}, dependencies2[request.name]), { version: request.version }), result ? {
                handle: result.handle,
                peerDependencies: result.dependencies
              } : {}), error ? { error } : {}));
              return newDependencies !== dependencies2 ? {
                dependencies: newDependencies,
                missingDependencies: (0, DependencyResolver_1.getMissingDependencies)(newDependencies, sdkVersion2, wantedDependencyVersions)
              } : null;
            });
          };
          this.onDevSessionSendBeaconCloseRequest = function(sendBeaconCloseRequest) {
            _this.setState(function(_state) {
              return {
                sendBeaconCloseRequest
              };
            });
          };
          this.onTransportEvent = function(transport, event) {
            var _a2, _b2, _c2;
            var type = event.type, data = event.data;
            var connectionId = event.connectionId;
            switch (type) {
              case "connect":
                (_a2 = _this.logger) === null || _a2 === void 0 ? void 0 : _a2.comm("Client connected (".concat(transport, ")"), connectionId);
                _this.onClientConnected(transport, connectionId, data);
                break;
              case "disconnect":
                (_b2 = _this.logger) === null || _b2 === void 0 ? void 0 : _b2.comm("Client disconnected (".concat(transport, ")"), connectionId, data);
                _this.onClientDisconnected(transport, connectionId, data);
                break;
              case "protocol_message":
                (_c2 = _this.logger) === null || _c2 === void 0 ? void 0 : _c2.comm_recv("Message received (".concat(transport, ")"), connectionId, data);
                _this.onProtocolMessageReceived(transport, connectionId, event.data);
                break;
              case "send_message":
                _this.onProtocolMessageSent(transport, event.data);
                break;
            }
          };
          var channel = (0, utils_1.createChannel)(options.channel);
          var sdkVersion = (0, snack_content_1.validateSDKVersion)((_a = options.sdkVersion) !== null && _a !== void 0 ? _a : defaultConfig_1.default.sdkVersion);
          var dependencies = options.dependencies ? __assign({}, options.dependencies) : {};
          this.options = options;
          this.apiURL = (_b = options.apiURL) !== null && _b !== void 0 ? _b : defaultConfig_1.default.apiURL;
          this.snackpubURL = (_c = options.snackpubURL) !== null && _c !== void 0 ? _c : defaultConfig_1.default.snackpubURL;
          this.runtimeEndpoint = (_d = options.runtimeEndpoint) !== null && _d !== void 0 ? _d : snack_content_1.SNACK_RUNTIME_URL_ENDPOINT;
          this.logger = options.verbose ? (0, Logger_1.createLogger)(true) : void 0;
          this.codeChangesDelay = (_e = options.codeChangesDelay) !== null && _e !== void 0 ? _e : 0;
          this.reloadTimeout = (_f = options.reloadTimeout) !== null && _f !== void 0 ? _f : 0;
          this.previewTimeout = (_g = options.previewTimeout) !== null && _g !== void 0 ? _g : 1e4;
          this.createTransport = (_h = options.createTransport) !== null && _h !== void 0 ? _h : transports_1.createTransport;
          var webPlayerURL = (_j = options.webPlayerURL) !== null && _j !== void 0 ? _j : defaultConfig_1.default.webPlayerURL;
          var transports = (_k = options.transports) !== null && _k !== void 0 ? _k : {};
          if (options.online) {
            transports = State.addObject(transports, "pubsub", this.createTransport({
              name: "pubsub",
              channel,
              verbose: options.verbose,
              apiURL: this.apiURL,
              snackpubURL: this.snackpubURL
            }));
          }
          if (options.webPreviewRef) {
            transports = State.addObject(transports, "webplayer", (0, webPlayer_1.createWebPlayerTransport)({
              ref: options.webPreviewRef,
              verbose: options.verbose,
              window: (0, nullthrows_1.default)(typeof window !== "undefined" ? window : global),
              webPlayerURL
            }));
          }
          this.state = this.updateDerivedState({
            disabled: !!options.disabled,
            unsaved: false,
            name: (_l = options.name) !== null && _l !== void 0 ? _l : "",
            description: (_m = options.description) !== null && _m !== void 0 ? _m : "",
            sdkVersion,
            files: (_o = options.files) !== null && _o !== void 0 ? _o : {},
            dependencies,
            missingDependencies: (0, DependencyResolver_1.getMissingDependencies)(dependencies, sdkVersion),
            connectedClients: {},
            transports,
            user: options.user,
            id: options.id,
            saveURL: options.id ? (0, utils_1.createURL)(this.runtimeEndpoint, sdkVersion, void 0, options.id) : void 0,
            savedSDKVersion: options.id ? sdkVersion : void 0,
            online: false,
            url: (0, utils_1.createURL)(this.runtimeEndpoint, sdkVersion, channel, options.id),
            channel,
            deviceId: options.deviceId,
            snackId: options.snackId,
            accountSnackId: options.accountSnackId,
            webPlayerURL
          }, defaultConfig_1.SnackIdentityState);
          this.state.unsaved = false;
          this.wantedDependencyVersions = new WantedVersions_1.WantedDependencyVersions({
            apiUrl: this.apiURL,
            logger: this.logger,
            callback: this.onWantedDependencyVersions
          });
          this.dependencyResolver = new DependencyResolver_1.default({
            snackagerURL: (_p = options.snackagerURL) !== null && _p !== void 0 ? _p : defaultConfig_1.default.snackagerURL,
            logger: this.logger,
            callback: this.onDependencyResolved
          });
          this.fileUploader = new FileUploader_1.default({
            apiURL: this.apiURL,
            logger: this.logger,
            callback: this.onFileUploaded
          });
          this.DevSession = new DevSession_1.default({
            apiURL: this.apiURL,
            logger: this.logger,
            onSendBeaconCloseRequest: this.onDevSessionSendBeaconCloseRequest
          });
          (_q = this.logger) === null || _q === void 0 ? void 0 : _q.info("Snack created", this.getState());
          this.onStateChanged(this.state, defaultConfig_1.SnackIdentityState);
        }
        Snack3.prototype.setSDKVersion = function(sdkVersion) {
          (0, snack_content_1.validateSDKVersion)(sdkVersion);
          return this.setState(function(state) {
            return state.sdkVersion !== sdkVersion ? {
              sdkVersion,
              missingDependencies: (0, DependencyResolver_1.getMissingDependencies)(state.dependencies, sdkVersion, state.wantedDependencyVersions)
            } : null;
          });
        };
        Snack3.prototype.setName = function(name) {
          return this.setState(function(state) {
            return state.name !== name ? { name } : null;
          });
        };
        Snack3.prototype.setDescription = function(description) {
          return this.setState(function(state) {
            return state.description !== description ? { description } : null;
          });
        };
        Snack3.prototype.setUser = function(user) {
          return this.setState(function(state) {
            return state.user !== user ? { user } : null;
          });
        };
        Snack3.prototype.setDeviceId = function(deviceId) {
          return this.setState(function(state) {
            return state.deviceId !== deviceId ? { deviceId } : null;
          });
        };
        Snack3.prototype.setFocus = function() {
          this.DevSession.setFocus(this.state);
        };
        Snack3.prototype.setCodeChangesDelay = function(delay) {
          if (this.codeChangesDelay !== delay) {
            this.codeChangesDelay = delay;
            this._sendCodeChangesDebounced(this.state);
          }
        };
        Snack3.prototype.setWebPlayerURL = function(webPlayerURL) {
          var _this = this;
          this.setState(function(state) {
            var newWebPlayerURL = webPlayerURL !== null && webPlayerURL !== void 0 ? webPlayerURL : defaultConfig_1.default.webPlayerURL;
            if (state.webPlayerURL !== newWebPlayerURL && _this.options.webPreviewRef) {
              var transports = state.transports;
              transports = State.addObject(transports, "webplayer", (0, webPlayer_1.createWebPlayerTransport)({
                ref: _this.options.webPreviewRef,
                verbose: _this.options.verbose,
                window: (0, nullthrows_1.default)(typeof window !== "undefined" ? window : global),
                webPlayerURL: newWebPlayerURL
              }));
              return { webPlayerURL: newWebPlayerURL, transports };
            }
            return null;
          });
        };
        Snack3.prototype.sendCodeChanges = function() {
          this._sendCodeChangesDebounced(this.state, true);
        };
        Snack3.prototype._sendCodeChangesDebounced = function(state, immediate) {
          var _this = this;
          if (this.codeChangesTimer) {
            clearTimeout(this.codeChangesTimer);
            this.codeChangesTimer = void 0;
          }
          if (!immediate && this.codeChangesDelay > 0) {
            this.codeChangesTimer = setTimeout(function() {
              return _this._sendCodeChangesDebounced(state, true);
            }, this.codeChangesDelay);
            return;
          } else if (!immediate && this.codeChangesDelay < 0) {
            return;
          }
          var transports = state.transports, files = state.files, dependencies = state.dependencies, sdkVersion = state.sdkVersion;
          for (var key in transports) {
            transports[key].postMessage({
              type: "update_code",
              data: {
                files,
                dependencies,
                sdkVersion
              }
            });
          }
        };
        Snack3.prototype.saveAsync = function(options) {
          var _a, _b, _c, _d, _e, _f;
          return __awaiter(this, void 0, void 0, function() {
            var prevState, _g, name, description, sdkVersion, files, dependencies, user, payload, previewPromise, url, response, data, id_1, saveURL_1, hashId, accountSnackId_1, snackId_1, e_1;
            var _this = this;
            return __generator(this, function(_h) {
              switch (_h.label) {
                case 0:
                  prevState = this.state;
                  return [4, this.fileUploader.waitForCompletion()];
                case 1:
                  _h.sent();
                  _g = this.state, name = _g.name, description = _g.description, sdkVersion = _g.sdkVersion, files = _g.files, dependencies = _g.dependencies, user = _g.user;
                  _h.label = 2;
                case 2:
                  _h.trys.push([2, 5, , 6]);
                  payload = {
                    manifest: {
                      sdkVersion,
                      name,
                      description,
                      dependencies: (0, mapValues_1.default)(dependencies, function(dep) {
                        return dep.version;
                      })
                    },
                    code: (0, mapValues_1.default)(files, function(file) {
                      file = __assign({}, file);
                      delete file.error;
                      return file;
                    }),
                    dependencies: (0, mapValues_1.default)(dependencies, function(dep) {
                      dep = __assign({}, dep);
                      delete dep.error;
                      return dep;
                    }),
                    isDraft: (_a = options === null || options === void 0 ? void 0 : options.isDraft) !== null && _a !== void 0 ? _a : false
                  };
                  (_b = this.logger) === null || _b === void 0 ? void 0 : _b.info("Saving...", payload);
                  previewPromise = this.getPreviewAsync();
                  url = "".concat(this.apiURL, "/--/api/v2/snack/save");
                  return [4, (0, utils_1.fetch)(url, {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: __assign({ "Content-Type": "application/json" }, (options === null || options === void 0 ? void 0 : options.ignoreUser) ? {} : (0, utils_1.createUserHeader)(user))
                  })];
                case 3:
                  response = _h.sent();
                  return [4, response.json()];
                case 4:
                  data = _h.sent();
                  if (!(data === null || data === void 0 ? void 0 : data.id)) {
                    throw new Error(((_d = (_c = data.errors) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.message) || "Failed to save");
                  }
                  (_e = this.logger) === null || _e === void 0 ? void 0 : _e.info("Saved", data);
                  id_1 = data.id;
                  saveURL_1 = (0, utils_1.createURL)(this.runtimeEndpoint, sdkVersion, void 0, id_1);
                  hashId = data.hashId;
                  accountSnackId_1 = data.accountSnackId;
                  snackId_1 = data.snackId;
                  this.setState(function(state) {
                    return {
                      id: id_1,
                      saveURL: saveURL_1,
                      unsaved: State.isUnsaved(state, prevState),
                      savedSDKVersion: (options === null || options === void 0 ? void 0 : options.isDraft) && state.savedSDKVersion ? state.savedSDKVersion : sdkVersion,
                      accountSnackId: accountSnackId_1,
                      snackId: snackId_1
                    };
                  });
                  previewPromise.then(function(connectedClients) {
                    var conns = Object.values(connectedClients).filter(function(c) {
                      return c.previewURL;
                    }).sort(function(a, b) {
                      var _a2, _b2;
                      return ((_a2 = a.previewTimestamp) !== null && _a2 !== void 0 ? _a2 : 0) - ((_b2 = b.previewTimestamp) !== null && _b2 !== void 0 ? _b2 : 0);
                    });
                    if (conns.length) {
                      _this.uploadPreview(id_1, conns[0].previewURL, conns[0].status !== "error");
                    }
                  });
                  return [2, {
                    id: id_1,
                    url: saveURL_1,
                    hashId,
                    accountSnackId: accountSnackId_1,
                    snackId: snackId_1
                  }];
                case 5:
                  e_1 = _h.sent();
                  (_f = this.logger) === null || _f === void 0 ? void 0 : _f.error(e_1);
                  throw e_1;
                case 6:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        Snack3.prototype.getDownloadURLAsync = function(saveOptions) {
          return __awaiter(this, void 0, void 0, function() {
            var state;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.fileUploader.waitForCompletion()];
                case 1:
                  _a.sent();
                  state = this.getState();
                  if (!(!state.id || state.unsaved)) return [3, 3];
                  return [4, this.saveAsync(saveOptions)];
                case 2:
                  _a.sent();
                  state = this.getState();
                  _a.label = 3;
                case 3:
                  return [2, "".concat(this.apiURL, "/--/api/v2/snack/download/").concat(state.id)];
              }
            });
          });
        };
        Snack3.prototype.uploadPreview = function(id, previewURL, status) {
          var _a, _b, _c, _d, _e, _f;
          return __awaiter(this, void 0, void 0, function() {
            var url, payload, response, data, e_2;
            return __generator(this, function(_g) {
              switch (_g.label) {
                case 0:
                  url = "".concat(this.apiURL, "/--/api/v2/snack/updateMetadata");
                  payload = {
                    id,
                    previewLocation: previewURL,
                    status: status ? "SUCCESS" : "FAILURE"
                  };
                  (_a = this.logger) === null || _a === void 0 ? void 0 : _a.info("Uploading preview...", payload);
                  _g.label = 1;
                case 1:
                  _g.trys.push([1, 4, , 5]);
                  return [4, (0, utils_1.fetch)(url, {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  })];
                case 2:
                  response = _g.sent();
                  return [4, response.json()];
                case 3:
                  data = _g.sent();
                  if (data.id) {
                    (_b = this.logger) === null || _b === void 0 ? void 0 : _b.info("Uploaded preview", data);
                  } else {
                    throw new Error((_e = (_d = (_c = data.errors) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.message) !== null && _e !== void 0 ? _e : "Unknown error");
                  }
                  return [3, 5];
                case 4:
                  e_2 = _g.sent();
                  (_f = this.logger) === null || _f === void 0 ? void 0 : _f.error("Failed to upload preview", e_2);
                  return [3, 5];
                case 5:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        Snack3.prototype.getState = function() {
          return this.state;
        };
        Snack3.prototype.getStateAsync = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.wantedDependencyVersions.waitForCompletion()];
                case 1:
                  _a.sent();
                  return [4, this.dependencyResolver.waitForCompletion()];
                case 2:
                  _a.sent();
                  return [4, this.fileUploader.waitForCompletion()];
                case 3:
                  _a.sent();
                  return [2, this.getState()];
              }
            });
          });
        };
        Snack3.prototype.addStateListener = function(listener) {
          var _this = this;
          this.stateListeners.add(listener);
          return function() {
            return _this.stateListeners.delete(listener);
          };
        };
        Snack3.prototype.setState = function(stateFn) {
          var update = stateFn(this.state);
          if (update) {
            var oldState_1 = this.state;
            var newState_1 = __assign(__assign({}, oldState_1), update);
            this.state = this.updateDerivedState(newState_1, oldState_1);
            this.onStateChanged(newState_1, oldState_1);
            this.stateListeners.forEach(function(listener) {
              return listener(newState_1, oldState_1);
            });
          }
        };
        Snack3.prototype.updateDerivedState = function(state, prevState) {
          state.unsaved = state.unsaved || State.isUnsaved(state, prevState);
          this.updateDerivedOnlineState(state, prevState);
          this.updateDerivedDependenciesState(state, prevState);
          this.updateDerivedWebPreviewState(state, prevState);
          return state;
        };
        Snack3.prototype.onStateChanged = function(state, prevState) {
          this.updateWantedDependencyVersions(state, prevState);
          this.updateDependencyResolver(state, prevState);
          this.updateFileUploader(state, prevState);
          this.updateTransports(state, prevState);
          this.DevSession.setState(state, prevState);
        };
        Snack3.prototype.updateFiles = function(files) {
          return this.setState(function(state) {
            var newFiles = State.updateObjects(state.files, files);
            return newFiles !== state.files ? { files: newFiles } : null;
          });
        };
        Snack3.prototype.updateFileUploader = function(state, prevState) {
          var _a;
          var files = state.files;
          var prevFiles = prevState.files;
          if (!prevState.disabled && (!state.disabled && files !== prevFiles || state.disabled)) {
            for (var path in prevFiles) {
              if (!files[path] || files[path].contents !== prevFiles[path].contents || state.disabled) {
                this.fileUploader.remove(path, prevFiles[path]);
              }
            }
          }
          if (!state.disabled && (files !== prevFiles || prevState.disabled)) {
            for (var path in files) {
              var file = files[path];
              if (file.type === "ASSET" && typeof file.contents === "object" && !file.error && (((_a = prevFiles[path]) === null || _a === void 0 ? void 0 : _a.contents) !== file.contents || prevState.disabled)) {
                this.fileUploader.add(path, file);
              }
            }
          }
        };
        Snack3.prototype.updateDependencies = function(dependencies) {
          return this.setState(function(state) {
            var newDependencies = State.updateObjects(state.dependencies, dependencies);
            return newDependencies !== state.dependencies ? {
              dependencies: newDependencies,
              missingDependencies: (0, DependencyResolver_1.getMissingDependencies)(newDependencies, state.sdkVersion, state.wantedDependencyVersions)
            } : null;
          });
        };
        Snack3.prototype.updateDerivedDependenciesState = function(state, prevState) {
          var _a, _b, _c, _d;
          if (state.wantedDependencyVersions !== prevState.wantedDependencyVersions || state.dependencies !== prevState.dependencies) {
            for (var name_1 in state.dependencies) {
              var dep = state.dependencies[name_1];
              var wantedVersion = (_d = (_b = (_a = state.wantedDependencyVersions) === null || _a === void 0 ? void 0 : _a[name_1]) !== null && _b !== void 0 ? _b : (_c = state.wantedDependencyVersions) === null || _c === void 0 ? void 0 : _c[(0, DependencyResolver_1.getPackageName)(name_1)]) !== null && _d !== void 0 ? _d : void 0;
              if (dep.wantedVersion !== wantedVersion) {
                state.dependencies = state.dependencies === prevState.dependencies ? __assign({}, state.dependencies) : state.dependencies;
                var version = (dep.version === "*" || dep.wantedVersion && dep.version === dep.wantedVersion) && wantedVersion ? wantedVersion : dep.version;
                state.dependencies[name_1] = __assign(__assign({}, dep), { version, wantedVersion });
                if (dep.handle && dep.version !== version) {
                  delete state.dependencies[name_1].handle;
                }
              }
            }
          }
          if (state.dependencies !== prevState.dependencies) {
            for (var name_2 in state.dependencies) {
              var dep = state.dependencies[name_2];
              if (dep !== prevState.dependencies[name_2]) {
                var error = (0, DependencyResolver_1.verifyDependency)(name_2, dep.version);
                if (error) {
                  state.dependencies[name_2] = __assign(__assign({}, dep), { error });
                }
              }
            }
          }
        };
        Snack3.prototype.updateWantedDependencyVersions = function(state, _prevState) {
          if (!state.disabled && Object.keys(state.dependencies).length) {
            this.wantedDependencyVersions.setSDKVersion(state.sdkVersion);
          }
        };
        Snack3.prototype.updateDependencyResolver = function(state, prevState) {
          var _a, _b, _c;
          var dependencies = state.dependencies;
          var prevDependencies = prevState.dependencies;
          if (!prevState.disabled && (dependencies !== prevDependencies || state.disabled || state.sdkVersion !== prevState.sdkVersion)) {
            for (var name_3 in prevDependencies) {
              if (!dependencies[name_3] || dependencies[name_3].version !== prevDependencies[name_3].version || state.disabled || (0, snack_content_1.isModulePreloaded)(name_3, state.sdkVersion) && !(0, snack_content_1.isModulePreloaded)(name_3, prevState.sdkVersion)) {
                this.dependencyResolver.remove(name_3, prevDependencies[name_3].version, prevState.sdkVersion);
              }
            }
          }
          if (!state.disabled && (dependencies !== prevDependencies || prevState.disabled || state.sdkVersion !== prevState.sdkVersion || state.wantedDependencyVersions !== prevState.wantedDependencyVersions)) {
            for (var name_4 in dependencies) {
              var dependency = dependencies[name_4];
              if (!dependency.handle && !dependency.error && !(0, snack_content_1.isModulePreloaded)(name_4, state.sdkVersion) && !(dependency.version === "*" && !state.wantedDependencyVersions) && (((_a = prevDependencies[name_4]) === null || _a === void 0 ? void 0 : _a.version) !== dependency.version || dependency.version === "*" && !prevState.wantedDependencyVersions || ((_b = prevDependencies[name_4]) === null || _b === void 0 ? void 0 : _b.handle) || ((_c = prevDependencies[name_4]) === null || _c === void 0 ? void 0 : _c.error) || prevState.disabled)) {
                this.dependencyResolver.add(name_4, dependency.version, state.sdkVersion);
              }
            }
          }
        };
        Snack3.prototype.setDisabled = function(disabled) {
          return this.setState(function(state) {
            return disabled !== state.disabled ? { disabled } : null;
          });
        };
        Snack3.prototype.setOnline = function(enabled) {
          var _this = this;
          return this.setState(function(state) {
            if (enabled && !state.transports["pubsub"]) {
              return {
                transports: State.addObject(state.transports, "pubsub", _this.createTransport({
                  name: "pubsub",
                  apiURL: _this.apiURL,
                  snackpubURL: _this.snackpubURL,
                  channel: state.channel,
                  verbose: !!_this.logger
                }))
              };
            } else if (!enabled && state.transports["pubsub"]) {
              var connectedClients = state.connectedClients;
              for (var key in state.connectedClients) {
                if (state.connectedClients[key].transport === "pubsub") {
                  connectedClients = State.removeObject(connectedClients, key);
                }
              }
              return {
                transports: State.removeObject(state.transports, "pubsub"),
                connectedClients
              };
            } else {
              return null;
            }
          });
        };
        Snack3.prototype.updateDerivedOnlineState = function(state, prevState) {
          var transports = state.transports, sdkVersion = state.sdkVersion, channel = state.channel, id = state.id, name = state.name, disabled = state.disabled, savedSDKVersion = state.savedSDKVersion;
          if (transports !== prevState.transports || sdkVersion !== prevState.sdkVersion || channel !== prevState.channel || id !== prevState.id || name !== prevState.name || savedSDKVersion !== prevState.savedSDKVersion) {
            state.online = !!transports["pubsub"] && !disabled;
            state.url = (0, utils_1.createURL)(this.runtimeEndpoint, sdkVersion, channel, savedSDKVersion && savedSDKVersion !== sdkVersion ? void 0 : id);
            state.onlineName = "".concat(name || "Unnamed Snack");
          }
        };
        Snack3.prototype.updateDerivedWebPreviewState = function(state, prevState) {
          var transports = state.transports, sdkVersion = state.sdkVersion, url = state.url, webPlayerURL = state.webPlayerURL;
          if (url && !prevState.url || sdkVersion !== prevState.sdkVersion || webPlayerURL !== prevState.webPlayerURL) {
            state.webPreviewURL = transports["webplayer"] && webPlayerURL ? (0, webPlayer_1.getWebPlayerIFrameURL)(webPlayerURL, sdkVersion, url, !!this.logger) : void 0;
          }
        };
        Snack3.prototype.reloadConnectedClients = function() {
          var _a;
          var connectedTransports = /* @__PURE__ */ new Set();
          this.setState(function(state) {
            var connectedClients = state.connectedClients;
            for (var key in state.connectedClients) {
              var connectedClient = state.connectedClients[key];
              connectedTransports.add(state.transports[connectedClient.transport]);
              connectedClients = State.addObject(connectedClients, key, __assign(__assign({}, connectedClient), { status: "reloading" }));
            }
            return connectedClients !== state.connectedClients ? { connectedClients } : null;
          });
          var reloadMessage = {
            type: "RELOAD_SNACK"
          };
          if (connectedTransports.size) {
            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.comm("Reloading...");
            connectedTransports.forEach(function(transport) {
              transport.postMessage({
                type: "protocol_message",
                data: reloadMessage
              });
            });
          }
        };
        Snack3.prototype.getPreviewAsync = function() {
          var _this = this;
          var _a;
          var _b = this.state, connectedClients = _b.connectedClients, transports = _b.transports;
          var connectedTransports = /* @__PURE__ */ new Set();
          Object.values(connectedClients).forEach(function(_a2) {
            var transport = _a2.transport;
            return connectedTransports.add(transports[transport]);
          });
          if (!connectedTransports.size) {
            return Promise.resolve(connectedClients);
          }
          var requestStatusMessage = {
            type: "REQUEST_STATUS"
          };
          if (connectedTransports.size) {
            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.comm("Requesting preview...");
            connectedTransports.forEach(function(transport) {
              transport.postMessage({
                type: "protocol_message",
                data: requestStatusMessage
              });
            });
          }
          return new Promise(function(resolve, reject) {
            var timeoutTimer;
            var completedConnections = /* @__PURE__ */ new Set();
            var unsubscribe = _this.addStateListener(function(state, prevState) {
              var _a2;
              if (state.connectedClients !== prevState.connectedClients) {
                for (var key in connectedClients) {
                  if (connectedClients[key].previewTimestamp !== ((_a2 = state.connectedClients[key]) === null || _a2 === void 0 ? void 0 : _a2.previewTimestamp) || !state.connectedClients[key]) {
                    completedConnections.add(key);
                    if (completedConnections.size === Object.values(connectedClients).length) {
                      unsubscribe();
                      clearTimeout(timeoutTimer);
                      resolve(state.connectedClients);
                      return;
                    }
                  }
                }
              }
            });
            timeoutTimer = setTimeout(function() {
              unsubscribe();
              reject(new Error("Operation timed out"));
            }, _this.previewTimeout);
          });
        };
        Snack3.prototype.updateTransports = function(state, prevState) {
          var _this = this;
          var transports = state.transports;
          var prevTransports = prevState.transports;
          if (!prevState.disabled && (transports !== prevTransports || state.disabled)) {
            for (var id in prevTransports) {
              if (this.transportListeners[id] && (transports[id] !== prevTransports[id] || state.disabled)) {
                prevTransports[id].removeEventListener("message", this.transportListeners[id]);
                delete this.transportListeners[id];
                prevTransports[id].postMessage({ type: "stop" });
              }
            }
          }
          if (!state.disabled && (transports !== prevTransports || prevState.disabled)) {
            var _loop_1 = function(id2) {
              if (!this_1.transportListeners[id2] && (transports[id2] !== prevTransports[id2] || prevState.disabled)) {
                this_1.transportListeners[id2] = function(event) {
                  return _this.onTransportEvent(id2, event);
                };
                transports[id2].addEventListener("message", this_1.transportListeners[id2]);
                transports[id2].postMessage({ type: "start" });
              }
            };
            var this_1 = this;
            for (var id in transports) {
              _loop_1(id);
            }
          }
          if (!state.disabled && !State.isBusy(state) && (transports !== prevTransports || State.isCodeChanged(state, prevState) || prevState.disabled)) {
            this._sendCodeChangesDebounced(state, prevTransports !== transports || !State.isBusy(state) && State.isBusy(prevState));
          }
        };
        Snack3.prototype.onClientConnected = function(transport, connectedClientId, data) {
          this.setState(function(state) {
            return {
              connectedClients: State.addObject(state.connectedClients, connectedClientId, {
                transport,
                id: data.id,
                name: data.name,
                platform: data.platform,
                status: "ok"
              })
            };
          });
        };
        Snack3.prototype.onClientDisconnected = function(_transport, connectedClientId, _data) {
          var _this = this;
          this.setState(function(state) {
            var connectedClient = state.connectedClients[connectedClientId];
            if ((connectedClient === null || connectedClient === void 0 ? void 0 : connectedClient.status) === "reloading" && _this.reloadTimeout >= 0) {
              if (_this.pruneConnectionsTimer) {
                clearTimeout(_this.pruneConnectionsTimer);
                _this.pruneConnectionsTimer = void 0;
              }
              _this.pruneConnectionsTimer = setTimeout(function() {
                _this.pruneConnectionsTimer = void 0;
                _this.setState(function(state2) {
                  var connectedClients2 = state2.connectedClients;
                  for (var key in state2.connectedClients) {
                    if (state2.connectedClients[key].status === "reloading") {
                      connectedClients2 = State.removeObject(connectedClients2, key);
                    }
                  }
                  return connectedClients2 !== state2.connectedClients ? { connectedClients: connectedClients2 } : null;
                });
              }, _this.reloadTimeout);
              return null;
            } else {
              var connectedClients = State.removeObject(state.connectedClients, connectedClientId);
              return connectedClients !== state.connectedClients ? { connectedClients } : null;
            }
          });
        };
        Snack3.prototype.addLogListener = function(listener) {
          var _this = this;
          this.logListeners.add(listener);
          return function() {
            return _this.logListeners.delete(listener);
          };
        };
        Snack3.prototype.onProtocolMessageReceived = function(transport, connectedClientId, message) {
          var _a;
          if (!this.state.connectedClients[connectedClientId]) {
            return;
          }
          switch (message.type) {
            case "CONSOLE":
              this.onConsoleMessageReceived(connectedClientId, message);
              break;
            case "ERROR":
              this.onErrorMessageReceived(connectedClientId, message);
              break;
            case "STATUS_REPORT":
              this.onStatusReportMessageReceived(connectedClientId, message);
              break;
            // @ts-ignore: CODE is echoed by pubsub, we ignore it
            case "CODE":
              break;
            // @ts-ignore: RELOAD_SNACK is echoed by pubsub, we ignore it
            case "RELOAD_SNACK":
              break;
            // @ts-ignore: REQUEST_STATUS is echoed by pubsub, we ignore it
            case "REQUEST_STATUS":
              break;
            default:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.error("Invalid message received", transport, message);
              break;
          }
        };
        Snack3.prototype.onProtocolMessageSent = function(transport, message) {
          switch (message.type) {
            case "CODE":
              this.setState(function(state) {
                var connectedClients = state.connectedClients;
                for (var connectedClientId in connectedClients) {
                  var connectedClient = connectedClients[connectedClientId];
                  if (connectedClient.transport === transport) {
                    connectedClients = State.addObject(connectedClients, connectedClientId, __assign(__assign({}, connectedClient), { error: void 0, status: connectedClient.status === "error" ? "ok" : connectedClient.status }));
                  }
                }
                return connectedClients !== state.connectedClients ? { connectedClients } : null;
              });
              break;
          }
        };
        Snack3.prototype.onConsoleMessageReceived = function(connectedClientId, message) {
          var payload = message.payload || [];
          var event = {
            type: message.method,
            connectedClient: this.state.connectedClients[connectedClientId],
            message: payload.join(" ")
            // error?
            // arguments: payload,
          };
          this.logListeners.forEach(function(listener) {
            return listener(event);
          });
        };
        Snack3.prototype.onErrorMessageReceived = function(connectedClientId, message) {
          var _a, _b, _c;
          try {
            var json = JSON.parse(message.error);
            var error_1 = (0, utils_1.createError)({
              name: json.name || "Error",
              message: json.message || "",
              fileName: json.fileName,
              lineNumber: json.lineNumber || ((_a = json.loc) === null || _a === void 0 ? void 0 : _a.line) || json.line,
              columnNumber: json.columnNumber || ((_b = json.loc) === null || _b === void 0 ? void 0 : _b.column) || json.column,
              stack: json.stack
            });
            this.setState(function(state) {
              return {
                connectedClients: State.addObject(state.connectedClients, connectedClientId, __assign(__assign({}, state.connectedClients[connectedClientId]), { error: error_1, status: "error" }))
              };
            });
          } catch (_d) {
            (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("Failed to parse received error message", message);
          }
        };
        Snack3.prototype.onStatusReportMessageReceived = function(connectedClientId, message) {
          var previewLocation = message.previewLocation;
          this.setState(function(state) {
            return {
              connectedClients: State.addObject(state.connectedClients, connectedClientId, __assign(__assign({}, state.connectedClients[connectedClientId]), { previewURL: previewLocation, previewTimestamp: Date.now() }))
            };
          });
        };
        return Snack3;
      })()
    );
    exports.default = Snack2;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/types.js
var require_types4 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/types.js"(exports) {
    "use strict";
    init_define_process_env();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/index.js
var require_build2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/snack-sdk@6.6.2/node_modules/snack-sdk/build/index.js"(exports) {
    "use strict";
    init_define_process_env();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setSnackSDKFetch = exports.parseRuntimeUrl = exports.createRuntimeUrl = exports.Snack = exports.defaultConfig = exports.getDeprecatedModule = exports.standardizeDependencies = exports.isFeatureSupported = exports.getSupportedSDKVersions = exports.isValidSemver = exports.getPreloadedModules = exports.isModulePreloaded = void 0;
    var snack_content_1 = require_build();
    Object.defineProperty(exports, "isModulePreloaded", { enumerable: true, get: function() {
      return snack_content_1.isModulePreloaded;
    } });
    Object.defineProperty(exports, "getPreloadedModules", { enumerable: true, get: function() {
      return snack_content_1.getPreloadedModules;
    } });
    Object.defineProperty(exports, "isValidSemver", { enumerable: true, get: function() {
      return snack_content_1.isValidSemver;
    } });
    Object.defineProperty(exports, "getSupportedSDKVersions", { enumerable: true, get: function() {
      return snack_content_1.getSupportedSDKVersions;
    } });
    Object.defineProperty(exports, "isFeatureSupported", { enumerable: true, get: function() {
      return snack_content_1.isFeatureSupported;
    } });
    Object.defineProperty(exports, "standardizeDependencies", { enumerable: true, get: function() {
      return snack_content_1.standardizeDependencies;
    } });
    Object.defineProperty(exports, "getDeprecatedModule", { enumerable: true, get: function() {
      return snack_content_1.getDeprecatedModule;
    } });
    Object.defineProperty(exports, "createRuntimeUrl", { enumerable: true, get: function() {
      return snack_content_1.createRuntimeUrl;
    } });
    Object.defineProperty(exports, "parseRuntimeUrl", { enumerable: true, get: function() {
      return snack_content_1.parseRuntimeUrl;
    } });
    var Session_1 = __importDefault(require_Session());
    exports.Snack = Session_1.default;
    var defaultConfig_1 = __importDefault(require_defaultConfig());
    exports.defaultConfig = defaultConfig_1.default;
    var utils_1 = require_utils();
    Object.defineProperty(exports, "setSnackSDKFetch", { enumerable: true, get: function() {
      return utils_1.setSnackSDKFetch;
    } });
    __exportStar(require_transports2(), exports);
    __exportStar(require_types4(), exports);
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/can-promise.js"(exports, module) {
    init_define_process_env();
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/utils.js
var require_utils2 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/utils.js"(exports) {
    init_define_process_env();
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    init_define_process_env();
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    init_define_process_env();
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    init_define_process_env();
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    init_define_process_env();
    var getSymbolSize = require_utils2().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    init_define_process_env();
    var getSymbolSize = require_utils2().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    init_define_process_env();
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    init_define_process_env();
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/galois-field.js"(exports) {
    init_define_process_env();
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/polynomial.js"(exports) {
    init_define_process_env();
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    init_define_process_env();
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version-check.js"(exports) {
    init_define_process_env();
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/regex.js"(exports) {
    init_define_process_env();
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mode.js"(exports) {
    init_define_process_env();
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version.js"(exports) {
    init_define_process_env();
    var Utils = require_utils2();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/format-info.js"(exports) {
    init_define_process_env();
    var Utils = require_utils2();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    init_define_process_env();
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    init_define_process_env();
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    init_define_process_env();
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    init_define_process_env();
    var Mode = require_mode();
    var Utils = require_utils2();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/dijkstrajs@1.0.3/node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/dijkstrajs@1.0.3/node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    init_define_process_env();
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t[key] = T[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T.default_sorter;
          return t;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/segments.js"(exports) {
    init_define_process_env();
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils2();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/qrcode.js"(exports) {
    init_define_process_env();
    var Utils = require_utils2();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/utils.js
var require_utils3 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/utils.js"(exports) {
    init_define_process_env();
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    init_define_process_env();
    var Utils = require_utils3();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    init_define_process_env();
    var Utils = require_utils3();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// ../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/browser.js
var require_browser3 = __commonJS({
  "../remote-snack-mcp/plugins/snack-local/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/browser.js"(exports) {
    init_define_process_env();
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// src/browser.js
init_define_process_env();
var import_snack_sdk = __toESM(require_build2(), 1);
var import_qrcode = __toESM(require_browser3(), 1);
var $ = (id) => document.getElementById(id);
var snack;
var revision = "";
var currentName = "";
var errors = [];
var pending = false;
var ref = { current: $("preview").contentWindow };
function report() {
  if (!snack) return;
  const s = snack.getState();
  if (s.webPreviewURL && $("preview").getAttribute("src") !== s.webPreviewURL) $("preview").src = s.webPreviewURL;
  if (s.url && $("native").getAttribute("href") !== s.url) {
    $("native").href = s.url;
    $("native").textContent = s.url;
    import_qrcode.default.toCanvas($("qr"), s.url).catch(() => {
    });
  }
  const clients = Object.values(s.connectedClients).map((c) => ({ name: c.name, platform: c.platform, status: c.status, error: c.error?.message }));
  $("state").textContent = JSON.stringify({ revision, clients }, null, 2);
  $("errors").textContent = errors.join("\n");
  fetch("report", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ revision, nativeUrl: s.url, clients, errors }) }).catch(() => {
  });
}
async function poll() {
  if (pending) return;
  pending = true;
  try {
    const { batch, saved } = await fetch("batch").then((r) => r.json());
    if (!batch) {
      $("status").textContent = "\u0E43\u0E2B\u0E49 Codex \u0E40\u0E1B\u0E34\u0E14\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E01\u0E48\u0E2D\u0E19";
      return;
    }
    if (!snack || batch.name !== currentName) {
      snack?.setOnline(false);
      snack = new import_snack_sdk.Snack({ ...batch, online: true, codeChangesDelay: -1, webPreviewRef: ref, verbose: false });
      currentName = batch.name;
      revision = batch.revision;
      errors = [];
      snack.addStateListener(report);
      snack.addLogListener((e) => {
        if (e.type === "error") {
          errors.push(String(e.message ?? e.error?.message ?? "Runtime error").slice(0, 1e3));
          errors = errors.slice(-5);
          report();
        }
      });
    } else if (batch.revision !== revision) {
      const files = { ...batch.files };
      for (const name of Object.keys(snack.getState().files)) if (!files[name]) files[name] = null;
      const dependencies = { ...batch.dependencies };
      for (const name of Object.keys(snack.getState().dependencies)) if (!dependencies[name]) dependencies[name] = null;
      revision = batch.revision;
      errors = [];
      snack.setSDKVersion(batch.sdkVersion);
      snack.updateDependencies(dependencies);
      snack.updateFiles(files);
      snack.sendCodeChanges();
    }
    $("status").textContent = "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E41\u0E2A\u0E14\u0E07\u0E42\u0E04\u0E49\u0E14\u0E0A\u0E38\u0E14 " + revision;
    if (saved) {
      $("saved").href = saved.url;
      $("saved").textContent = "\u0E40\u0E1B\u0E34\u0E14 Snack \u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49" + (saved.revision === revision ? "" : " (\u0E21\u0E35\u0E42\u0E04\u0E49\u0E14\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E35\u0E48\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01)");
    }
    report();
  } catch {
    $("status").textContent = "\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E02\u0E32\u0E14\u0E2B\u0E32\u0E22 \u0E43\u0E2B\u0E49 Codex \u0E40\u0E1B\u0E34\u0E14\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E25\u0E34\u0E07\u0E01\u0E4C preview \u0E43\u0E2B\u0E21\u0E48";
  } finally {
    pending = false;
  }
}
$("save").onclick = async () => {
  try {
    const r = await fetch("save", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" }).then((r2) => r2.json());
    if (r.needsSetup) {
      location.href = r.setupUrl;
      return;
    }
    if (r.error) throw Error();
    await poll();
  } catch {
    $("status").textContent = "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E15\u0E23\u0E27\u0E08\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E1A\u0E31\u0E0D\u0E0A\u0E35 Expo";
  }
};
setInterval(poll, 1500);
poll();
/*! Bundled license information:

assert/build/internal/util/comparisons.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)
*/
