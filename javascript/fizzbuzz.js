function removeAllChildren(element) {
    var element = document.getElementById("viewResult");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function addElementToHdd(htmlElement, element, text) {
    var node;
    var nodeText;
    node = document.createElement(htmlElement);
    nodeText = document.createTextNode(text);
    node.appendChild(nodeText);
    element.appendChild(node);
}

function composeText(i) {
    if (i % 3 == 0 && i % 5 == 0) {
        text = i + " FizzBuzz";
    } else if (i % 3 == 0) {
        text = i + " Fizz";
    } else if (i % 5 == 0) {
        text = i + " Buzz";
    } else {
        text = i;
    }
    return text;
}

function loopMessage(lMessage, element) {
    var tag = 'h3';
    var node = document.createElement(tag);
    var nodeText = document.createTextNode(lMessage);
    node.appendChild(nodeText);
    element.appendChild(node);
}

function loopType() {
    var loop;
    if (document.getElementById('forR').checked) {
        loop = 'for';
    }
    else if (document.getElementById('whileR').checked) {
        loop = 'while';
    }
    else if (document.getElementById('doR').checked) {
        loop = 'do';
    }
    return loop;
}

function fizzBuzz(n1, n2, loop) {
    var divElement = document.getElementById("viewResult");
    removeAllChildren(divElement);
    var text = '';
    switch (loop) {
        case "for":
            loopMessage('LOOP FOR', divElement)
            for (i = n1; i <= n2; i++) {
                addElementToHdd('p', divElement, composeText(i));
            }
            break;
        case 'while':
            loopMessage('LOOP WHILE', divElement)
            while (n1 <= n2) {
                addElementToHdd('p', divElement, composeText(n1));
                n1++;
            }
            break;
        case 'do':
            loopMessage('LOOP DO...WHILE', divElement);
            do {
                addElementToHdd('p', divElement, composeText(n1));
                n1++;
            } while (n1 <= n2);
            break;
        default:
            loopMessage('YOU DIDN\'t SELECT LOOP', divElement);
    }
}
