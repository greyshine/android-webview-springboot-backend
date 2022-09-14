const ajax = function() {

    return {

        enhanceUrl(url) {
            return url;
        },

        opened(xhr) {},

        errorHandler(url, error) {
            console.error( 'error', url, error );
        },

        get(url, handler) {

            console.log('request', url, this.enhanceUrl(url));

            const xhr = new XMLHttpRequest();
            const newUrl = this.enhanceUrl(url);
            xhr.open('get', newUrl != null ? newUrl : url);
            this.opened(xhr);
            xhr.send();
            xhr.onload = (response)=> {

                consoel.log('onload(ed)', response);

                if ( typeof handler === 'function' ) {
                    handler( response.target.response, response );
                } else {
                    console.debug(response);
                    console.error('no handler defined', handler);
                }
            };

            xhr.onerror = (error) => {

                if ( typeof this.errorHandler === 'function' ) {
                    this.errorHandler(url, error);
                } else {
                    console.error( 'error', url, error );
                }
            }
        }
    };
}();