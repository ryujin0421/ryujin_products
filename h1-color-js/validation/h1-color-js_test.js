(function validate(editorContentMap, $, util) {
  var rows = editorContentMap["h1-color-js_editor.js"].split("\n");
  return /  h1tag.innerHTML = "おつかれさま";/.test(rows[2])
})
