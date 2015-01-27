'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    glyphIconDataURL: "data:application/font-woff;base64,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",

    clean: ['build/**/*', 'dist/**/*'],

    clean_all: ['build/', 'tmp/', 'dist/**/*'],

    jshint: {
      options: {
        jshintrc: true
      },
      all: {
        src: [
          'Gruntfile.js',
          'common/ui/**/*.js',
          'common/lib/*.js',
          'common/lib/controller/*.js',
          'common/client-API/*.js',
          'chrome/background.js',
          'chrome/lib/*.js',
          'firefox/**/*.js'
        ]
      }
    },

    jscs: {
      options: {
        config: ".jscs.json",
        maxErrors: 5
      },
      files: {
        src: [
          'Gruntfile.js',
          'common/ui/**/*.js',
          'common/lib/*.js',
          'common/lib/controller/*.js',
          'common/client-API/*.js',
          'chrome/background.js',
          'chrome/lib/*.js',
          'firefox/**/*.js'
        ]
      }
    },

    jsdoc : {
        dist : {
            src: ['common/client-API/*.js', "doc/client-api/Readme.md"],
            options: {
                destination: 'build/doc',
                template: "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
                tutorials: "doc/client-api",
                configure: "jsdoc.conf.json"
            }
        }
    },

    concat: {
      content_script: {
        options: {
          footer: '//# sourceURL=cs-mailvelope.js'
        },
        files: [{
          src: [
            'common/ui/mvelo.js',
            'common/ui/inline/main-cs.js',
            'common/ui/inline/extractFrame.js',
            'common/ui/inline/decryptFrame.js',
            'common/ui/inline/verifyFrame.js',
            'common/ui/inline/importFrame.js',
            'common/ui/inline/encryptFrame.js',
            'common/ui/inline/decryptContainer.js',
            'common/ui/inline/editorContainer.js',
            'common/ui/inline/domAPI.js'
          ],
          dest: 'build/common/ui/inline/cs-mailvelope.js'
        }]
      }
    },

    copy: {
      jquery: {
        src: 'bower_components/jquery/index.js',
        dest: 'build/common/dep/jquery.min.js'
      },
      vendor: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/',
            src: [
              'css/bootstrap.css',
              'js/bootstrap.js',
              'fonts/*'
            ],
            dest: 'build/common/dep/bootstrap/'
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap-sortable/Scripts/',
            src: 'bootstrap-sortable.js',
            dest: 'build/common/dep/bootstrap-sortable/'
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap-sortable/Contents/',
            src: 'bootstrap-sortable.css',
            dest: 'build/common/dep/bootstrap-sortable/'
          },
          {
            expand: true,
            cwd: 'bower_components/dompurify/',
            src: 'purify.js',
            dest: 'build/common/dep/'
          },
          {
            expand: true,
            cwd: 'bower_components/css-toggle-switch/dist/',
            src: 'toggle-switch.css',
            dest: 'build/common/dep/toggle-switch/'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'node_modules/',
            src: [
              'mailbuild/src/mailbuild.js',
              'mailbuild/node_modules/mimetypes/src/*.js',
              'mailbuild/node_modules/mimefuncs/src/*.js',
              'mailbuild/node_modules/punycode/punycode.js',
              'mailbuild/node_modules/wo-addressparser/src/addressparser.js'
            ],
            dest: 'build/common/dep/mailbuilder'
          },
          {
            expand: true,
            cwd: 'bower_components/requirejs/',
            src: 'require.js',
            dest: 'build/chrome/'
          }
        ]
      },
      common: {
        files: [{
          src: [
            'common/**/*',
            '!common/ui/inline/*.js',
            'common/ui/mvelo.js',
            '!common/dep/wysihtml5/**/*'
          ],
          dest: 'build/'
        }]
      },
      plugins: {
        files: [{
          src: ['chrome/**/*', 'firefox/**/*'],
          dest: 'build/'
        }]
      },
      common_browser: {
        files: [{
          expand: true,
          src: ['common/**/*', '!common/lib/**/*'],
          cwd: 'build/',
          dest: 'build/chrome/'
        },
        {
          expand: true,
          src: '**/*',
          cwd: 'build/common/lib/',
          dest: 'build/chrome/lib/common/'
        },
        {
          expand: true,
          src: ['common/**/*', '!common/lib/**/*'],
          cwd: 'build/',
          dest: 'build/firefox/data/'
        },
        {
          expand: true,
          src: '**/*',
          cwd: 'build/common/lib/',
          dest: 'build/firefox/lib/common/'
        },
        {
          expand: true,
          src: '**/*',
          cwd: 'locales',
          dest: 'build/chrome/_locales'
        }]
      },
      locale_firefox: {
        expand: true,
        src: '**/*.json',
        cwd: 'locales',
        dest: 'build/firefox/locale/',
        rename: function(dest, src) {
          return dest + src.match(/^[\w-]{2,5}/)[0].replace('_', '-') + '.properties';
        },
        options: {
          process: function(content, srcpath) {
            var locale = JSON.parse(content);
            var result = '';
            for (var key in locale) {
              result += key + '= ' + locale[key].message.replace(/\$(\d)/g, '%$1s') + '\n';
            }
            return result;
          }
        }
      },
      dep: {
        files: [{
          expand: true,
          flatten: true,
          src: ['dep/chrome/openpgpjs/dist/openpgp.js', 'dep/chrome/openpgpjs/dist/openpgp.worker.js'],
          dest: 'build/chrome/dep/'
        },
        {
          expand: true,
          flatten: true,
          cwd: 'node_modules/',
          src: [
            'mailreader/src/mailreader-parser.js',
            'mailreader/node_modules/mimeparser/src/*.js',
            'mailreader/node_modules/mimeparser/node_modules/addressparser/src/*.js',
            'mailreader/node_modules/mimeparser/node_modules/mimefuncs/src/*.js'
          ],
          dest: 'build/chrome/lib/'
        },
        {
          src: 'dep/firefox/openpgpjs/dist/openpgp.preload_dep.min.js',
          dest: 'build/firefox/lib/openpgp.js'
        },
        {
          expand: true,
          flatten: true,
          src: ['dep/firefox/openpgpjs/dist/openpgp.min.js', 'dep/firefox/openpgpjs/dist/openpgp.worker.min.js'],
          dest: 'build/firefox/data/'
        },
        {
          expand: true,
          flatten: true,
          cwd: 'node_modules/',
          src: [
            'mailreader/src/mailreader-parser.js',
            'mailreader/node_modules/mimeparser/src/*.js',
            'mailreader/node_modules/mimeparser/node_modules/addressparser/src/*.js',
            'mailreader/node_modules/mimeparser/node_modules/mimefuncs/src/*.js'
          ],
          dest: 'build/firefox/lib/'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['Gruntfile.js', '{common,dep,chrome,firefox}/**/*.js'],
        tasks: ['default'],
        options: {
          spawn: false
        }
      }
    },

    compress: {
      chrome: {
        options: {
          mode: 'zip',
          archive: 'dist/mailvelope.chrome.zip',
          pretty: true
        },
        files: [{
          expand: true,
          src: ['chrome/**/*', 'chrome/!**/.*'],
          cwd: 'build/'
        }]
      },
      doc: {
        options: {
          mode: 'zip',
          archive: 'dist/mailvelope.client-api-documentation.zip',
          pretty: true
        },
        files: [{
          expand: true,
          src: ['**/*'],
          cwd: 'build/doc/'
        }]
      }
    },

    replace: {
      bootstrap: {
        src: ['bower_components/bootstrap/dist/css/bootstrap.css'],
        dest: ['build/common/dep/bootstrap/css/bootstrap.css'],
        replacements: [{
          from: /@font-face[\.\S\s]+\.glyphicon\ {/g,
          to: "@font-face {\n  font-family:'Glyphicons Halflings';src:url('<%= glyphIconDataURL %>') format('woff')\n}\n.glyphicon {"
        }]
      }
    },

    'mozilla-addon-sdk': {
      '1_17': {
        options: {
          revision: '1.17'
        }
      }
    },
    'mozilla-cfx-xpi': {
      stable: {
        options: {
          'mozilla-addon-sdk': '1_17',
          extension_dir: 'build/firefox',
          dist_dir: 'dist/',
          arguments: '--output-file=mailvelope.firefox.xpi'
        }
      }
    },
    'mozilla-cfx': {
      'run_stable': {
        options: {
          "mozilla-addon-sdk": "1_17",
          extension_dir: "build/firefox",
          command: "run"
        }
      }
    },
    bump: {
      options: {
        commit: true,
        commitFiles: ['-a'],
        createTag: false,
        push: false,
        files: ['package.json', 'bower.json', 'chrome/manifest.json', 'firefox/package.json', 'common/res/defaults.json']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-mozilla-addon-sdk');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-jsdoc');

  //custom tasks
  grunt.registerTask('dist-cr', ['compress:chrome']);
  grunt.registerTask('dist-ff', ['mozilla-addon-sdk', 'mozilla-cfx-xpi']);
  grunt.registerTask('dist-doc', ['jsdoc', 'compress:doc']);
  grunt.registerTask('start-ff-clean', ['mozilla-cfx:run_stable']);

  grunt.registerTask('copy_default', ['copy:vendor', 'copy:common', 'replace:bootstrap', 'copy:plugins', 'copy:common_browser', 'copy:locale_firefox', 'copy:dep']);

  grunt.registerTask('default', ['clean', 'jshint', 'jscs', 'jsdoc', 'copy:jquery', 'concat', 'copy_default']);
};
