class Ajax {
    get(url){
        return new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr);
                }
                else {
                    reject(xhr);
                }
            };
            xhr.send();
        });        
    }
}

let ajax = new Ajax();

export default ajax;