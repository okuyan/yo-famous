module.exports = {
	buildcontrol: {
		options: {
		    dir: '<%= config.dist %>',
		    commit: true,
		    push: true,
		    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
		},
		heroku: {
		    options: {
		        remote: 'https://git.heroku.com/yo-famous.git',
		        branch: 'master'
		    }
		}
	}
};