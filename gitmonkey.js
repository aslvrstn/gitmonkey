function githubMain() {
  var lines = document.getElementsByClassName('line');
  // There should only be one line beginning with 'package'
  packagedef = tokenizeGithubPath(linesStartingWith(lines, 'package')[0]);
  console.log(linesStartingWith(lines, 'import'));
}

function googleCodeMain() {
  var lines = document.getElementsByClassName('source');
  // There should only be one line beginning with 'package'
  packagedef = tokenizeGoogleCodePath(linesStartingWith(lines, 'package')[0]);
  console.log(linesStartingWith(lines, 'import'));
}

function tokenizeGithubPath(line) {
  var toks = Array.prototype.slice.call(line.children, 1, -1);
  return removePeriodsAndTrim(toks);
}

function tokenizeGoogleCodePath(line) {
  var toks = Array.prototype.slice.call(line.children, 1, -2);
  return removePeriodsAndTrim(toks);
}

function linesStartingWith(lines, word) {
  var ret = [];
  for (i=0; i<lines.length; i++) {
    var line = lines[i];
    if (line.children[0].innerHTML == word) {
      ret.push(line);
    }
  }
  return ret;
}

function removePeriodsAndTrim(tokens) {
  var ret = [];
  for (toki=0; toki<tokens.length; toki++) {
    var text = tokens[toki].innerHTML.trim();
    if (text != '.') {
      ret.push(text);
    }
  }

  return ret;
}
