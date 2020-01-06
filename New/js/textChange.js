// replace text elements in type layers;

// 2013, use it at your own risk;

#target photoshop

if (app.documents.length > 0) {

          for (var n = 0; n < app.documents.length; n++) {

                    app.activeDocument = app.documents[n];

                    app.activeDocument.suspendHistory("replace text", "main()")

                    }

          };

// the opertation;

function main () {

          var myDocument = app.activeDocument;

          var theLayers = collectTextLayers(myDocument, []);

          if (theLayers.length > 0) {

                    var theArray1 = ["₹10,000", "Wednesday 23 Dec", "150"];

                    var theArray2 = ["₹7,000", "Tuesday 24 Dec", "100"];

                    for (var a = 0; a < theLayers.length; a++) {

                              for (var b = 0; b < theArray1.length; b++) {

                                        var theString = theLayers[a].textItem.contents;

                                        while (theString.indexOf(theArray1[b]) != -1) {

                                                  theString = theString.replace(theArray1[b], theArray2[b])

                                                  };

                                        theLayers[a].textItem.contents = theString;

                                        }

                              }

                    }

          };

////// function collect all layers //////

function collectTextLayers (theParent, allLayers) {

          if (!allLayers) {var allLayers = new Array};

          else {};

          for (var m = theParent.layers.length - 1; m >= 0;m--) {

                    var theLayer = theParent.layers[m];

// apply the function to layersets;

                    if (theLayer.typename == "ArtLayer") {

                              if (theLayer.kind == LayerKind.TEXT) {allLayers.push(theLayer)};

                              }

                    else {

                              allLayers = (collectTextLayers(theLayer, allLayers))

// this line includes the layer groups;

//                              allLayers.push(theLayer);

                              }

                    };

          return allLayers

          };