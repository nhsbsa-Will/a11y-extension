//Pinched from js fiddle not tested and not sure if it will work
function usingURLConstructor(){

    const isValidUrl = string => {
        try {
            return Boolean(new URL(string));
        }
        catch(e){
            return false;
        }
    }

    var url = "invalidURL";
    console.log("1.URL Constructor:  "+isValidUrl(url));
    var url = "htt//jsowl";
    console.log("2.URL Constructor:  "+isValidUrl(url));
    var url = "www.jsowl.com";
    console.log("3.URL Constructor:  "+isValidUrl(url));
    var url = "tcp://www.jsowl.com";
    console.log("4.URL Constructor:  "+isValidUrl(url));
    var url = "https://www.jsowl.com/remove-an-item-from-an-array-in-javascript/";
    console.log("5.URL Constructor:  "+isValidUrl(url));
    console.log("*******************");
}

function usingCheckProtocol(){
    const isValidUrl = string => {
        let url;
        try {
            url =new URL(string);
        }
        catch(e){
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }

    var url = "invalidURL";
    console.log("1.URL Protocol check:  "+isValidUrl(url));
    var url = "htt//jsowl";
    console.log("2.URL Protocol check:  "+isValidUrl(url));
    var url = "www.jsowl.com";
    console.log("3.URL Protocol check:  "+isValidUrl(url));
    var url = "tcp://www.jsowl.com";
    console.log("4.URL Protocol check:  "+isValidUrl(url));
    var url = "https://www.jsowl.com/remove-an-item-from-an-array-in-javascript/";
    console.log("5.URL Protocol check:  "+isValidUrl(url));
    console.log("*******************");
}

function usingRegex(){

    const isUrl = string => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
            '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator

        return !!urlPattern.test(string);
    }

    var url = "invalidURL";
    console.log("1.RegEx:  "+isUrl(url));
    var url = "htt//jsowl";
    console.log("2.RegEx:  "+isUrl(url));
    var url = "www.jsowl.com";
    console.log("3.RegEx:  "+isUrl(url));
    var url = "https://www.jsowl.com";
    console.log("4.RegEx:  "+isUrl(url));
    var url = "https://www.jsowl.com/remove-an-item-from-an-array-in-javascript/";
    console.log("5.RegEx:  "+isUrl(url));
    console.log("*******************");
}

function usingInputElement(){

    const isValidUrl = string =>{
        var inputElement = document.createElement('input');
        inputElement.type = 'url';
        inputElement.value = string;

        if (!inputElement.checkValidity()) {
            return false;
        } else {
            return true;
        }
    }

    var url = "invalidURL";
    console.log("1.Input Element:  "+isValidUrl(url));
    var url = "htt//jsowl";
    console.log("2.Input Element:  "+isValidUrl(url));
    var url = "www.jsowl.com";
    console.log("3.Input Element:  "+isValidUrl(url));
    var url = "https://www.jsowl.com";
    console.log("4.Input Element:  "+isValidUrl(url));
    var url = "https://www.jsowl.com/remove-an-item-from-an-array-in-javascript/";
    console.log("5.Input Element:  "+isValidUrl(url));
    console.log("*******************");
}

function usingAnchorTag(){

    const isValidUrl = string =>{
        var a  = document.createElement('a');
        a.href = string;
        return (a.host && a.host != window.location.host);
    }

    var url = "invalidURL";
    console.log("1.AnchorTag:  " +isValidUrl(url));
    var url = "htt//jsowl";
    console.log("22.AnchorTag:  "+isValidUrl(url));
    var url = "www.jsowl.com";
    console.log("3.AnchorTag:  " +isValidUrl(url));
    var url = "https://www.jsowl.com";
    console.log("4.AnchorTag:  " +isValidUrl(url));
    var url = "https://www.jsowl.com/remove-an-item-from-an-array-in-javascript/";
    console.log("5.AnchorTag:  " +isValidUrl(url));
    console.log("*******************");
}