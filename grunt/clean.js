// Empties folders to start fresh
module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '.tmp',
        '<%= config.dist %>/*',
        '!<%= config.dist %>/.git*',
        '!<%= config.dist %>/Procfile',
        '!<%= config.dist %>/package.json',
        '!<%= config.dist %>/web.js',
        '!<%= config.dist %>/node_modules'
      ]
    }]
  },
  server: '.tmp'
};
