// duotone colors
var foregroundColor = "#eff0eb";
var backgroundColor = "#1d262f";
var black = backgroundColor;
var slate = "#495f79";
var lightSlate = "#56708f";
var blue = "#7cb5f9";
var green = "#0acd93";
var lightGreen = "#52ffc8";
var gray = "#8ca59d";
var brightBlack = "#8ca59d";
var white = "#f1f1f0";
var lightBlack = "#686868";
var brightWhite = foregroundColor;

// snazzy colors
// var foregroundColor = "#eff0eb";
// var backgroundColor = "#282a36";
var red = "#ff5c57";
var green = "#5af78e";
var yellow = "#f3f99d";
var blue = "#57c7ff";
var magenta = "#ff6ac1";
var cyan = "#9aedfe";

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 1,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: lightGreen,

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor,

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor,

    // terminal selection color
    selectionColor: cyan,

    // border color (window, tabs)
    borderColor: '#f1f1f0',

    // custom CSS to embed in the main window
    css: '',

    // custom CSS to embed in the terminal window
    termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '2px 14px 18px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '/bin/zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'vertical',

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,

    // for advanced config flags please refer to https://hyper.is/#cfg

    hyperCustomTouchbar: [
      // if you just need a single button then don't add options array
      { label: 'clear', command: 'clear', backgroundColor: '#d13232' },
      { label: 'purge', command: 'sudo purge', backgroundColor: '#43A047' },
      {
        label: 'orthense', command: 'cd && cd DEV/DIGIKARE/ORTHENSE',
        options: [
          {
            label: 'go',
            command: 'cd && cd DEV/DIGIKARE/ORTHENSE'
          }
        ]
      },
      {
        label: 'git',
        options: [
          { label: 'fetch', command: 'git fetch' },
          { label: 'status', command: 'git status' },
          { label: 'to develop', command: 'git checkout develop' },
          { label: 'diff', command: 'git diff' },
          { label: 'log', command: 'git log' },
          { label: 'add .', command: 'git add .', icon: '/tmp/icons8-add-file-44.png', iconPosition: 'right' },
          { label: 'clone', command: 'git clone ', prompt: true },
        ]
      },
      {
        label: 'docker',
        backgroundColor: green,
        options: [
          {
            label: 'list',
            command: 'docker ps'
          },
          {
            label: 'start mongo',
            backgroundColor: cyan,
            command: 'docker start local-mongo'
          }, {
            label: 'stop mongo',
            backgroundColor: magenta,
            command: 'docker stop local-mongo'
          },
        ]
      },
      {
        label: 'tmux',
        options: [
          {
            label: 'start',
            command: 'tmux'
          },
          {
            label: 'split',
            command: 'tmux split-window -v && tmux split-window -h && tmux select-pane -t 0 && tmux split-window -h  && tmux select-pane -t 0'
          }, {
            label: 'kill all',
            command: 'pkill -f tmux',
            backgroundColor: '#D32F2F'
          }
        ]
      },
      {
        label: 'ssh prod',
        backgroundColor: '#0288D1',
        command: 'ssh jpujol@dkg-build.westeurope.cloudapp.azure.com'
      }
    ]

  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    //https://www.npmjs.com/package/hyperline
    'hyperline',
    // https://www.npmjs.com/package/hyperlinks
    'hyperlinks',

    // https://www.npmjs.com/package/hyper-custom-touchbar
    'hyper-custom-touchbar'


  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
