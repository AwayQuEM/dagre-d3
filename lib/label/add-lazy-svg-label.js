var util = require("../util");

module.exports = addLazySVGLabel;

function addLazySVGLabel(root, node) {
    var domNode = root;

    node.labelFn(domNode.node(), node.label);

    util.applyStyle(domNode, node.labelStyle);

    return domNode;
}
