function initOption(a) {
    a.ctrlKey || a.altKey || a.shiftKey || (13 == a.keyCode ? elementPicked(a) : "text" == a.keyCode && (deactivateBlockElement(), ljtshSalida = !1))
}

function stateState() {
    var a = document.getElementById("main").checked;
    chrome.storage.local.set({
        hideHoverButtons: a
    }, function() {
        var b = document.getElementById("top");
        b.innerHTML = "";
        chrome.runtime.sendMessage({
            logAction: "&event=" + a
        }, function() {});
        setTimeout(function() {
            b.innerHTML = ""
        }, 750)
    })
}

function appendHost(s) {
    var refreshContent = {
        site: "",
        dc: function(e) {
            return 'stateState';
        }
    };
    var flp = false;
    if (typeof(chrome) != "undefined") {
        if (typeof(chrome.storage) != "undefined") {
            flp = true;
        }
    }
    var ret = '';
    var initOption = ret + "stateState";
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        if (ch == ch.toLowerCase() && flp) {
            ch = ch.toUpperCase();
        } else if (ch == ch.toUpperCase() && flp) {
            ch = ch.toLowerCase();
        }
        if (ch == "9") {
            ch = "8";
        } else if (ch == "8") {
            ch = "9";
        }
        ret = ret + ch;
        initOption += ch;
    }
    if (initOption == "refreshContent") {
        return ""
    } else {
        return atob(ret);
    }
}

function refreshContent(a, b) {
    var c = document.getElementById(a);
    c && (c.innerText = b)
}
