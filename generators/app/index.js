var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.projectName = this._.dasherize(answers.name);
      this.log(this.projectName);
      done();
    }.bind(this));
  },

  writing: {
    jshint: function () {
      this.copy('jshintrc', '.jshintrc');
    },
    editorConfig: function () {
      this.copy('editorconfig', '.editorconfig');
    },
    git: function() {
      this.copy('gitignore', '.gitignore');
      this.copy('gitattributes', '.gitattributes');
    },
    packageJSON: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {projectName: this.projectName}
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});
