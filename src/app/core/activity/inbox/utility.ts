declare const InstallTrigger: any;
export function getDateWithLocaleTimeZone(date) {

    if (!date || !date.length || date.length == 0) {
        return "";
    }

    //Check if browser is IE
    if (false || !!window.document['documentMode']) {
        return new Date(date);
    }

    //Check if browser is Edge
    else if (!(false || !!window.document['documentMode']) && !!window['StyleMedia']) {
        return new Date(date);
    }

    //Check if browser is Chrome
    else if (!!window['chrome'] && !!window['chrome'].webstore) {
        return new Date(date);
    }

    //Check if browser is Firefox
    else if (typeof InstallTrigger !== 'undefined') {
        var dtObj = new Date(date);
        dtObj.setMinutes(dtObj.getMinutes() - dtObj.getTimezoneOffset());
        return dtObj;
    }

    //Check if browser is Safari
    else if (/constructor/i.test(window['HTMLElement']) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'])) {
        return new Date(date);
    }

    //Check if browser is opera
    else if ((!!window['opr']) || !!window['opera'] || navigator.userAgent.indexOf(' OPR/') >= 0) {
        return new Date(date);
    }

    //Check if any other browser
    else {
        return new Date(date);
    }
}