// #include "json2.jsx"

// docName();

var doc;
var exist = app.documents.length > 0;

function docName() {
  var data = {
    name: "none",
    path: "none"
  };
  var newData = [];
  if (exist) {
    doc = app.activeDocument;
    // data.name = doc.name;
    // data.path = doc.path;
    newData.push(doc.name);
    newData.push(doc.path);
    // alert(data.path);
    // alert(data.name + " " + data.path)
    return newData;
    // return JSON.stringify(data);
  }
}

function getDoc(){
  if (exist) {
    return app.activeDocument.name;
  }
}

function getPath(){
  if (exist) {
    return app.activeDocument.path;
  }
}

function doesExist() {
  if (app.documents.length > 0) {
    doc = app.activeDocument;
    return true;
  } else {
    return false;
  }
}
