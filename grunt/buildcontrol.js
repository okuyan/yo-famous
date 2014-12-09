module.exports = {
	options: {
	    dir: 'dist',
	    commit: true,
	    push: true,
	    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
	},
	heroku: {
	    options: {
          dir: 'dist',
	        remote: 'https://git.heroku.com/yo-famous.git',
	        branch: 'master'
	    }
	}
};