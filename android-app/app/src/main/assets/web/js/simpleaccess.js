// simple access

const sa = new function() {

    return {

        replace( item, data ) {

            console.log('replace', data);

            if ( typeof item != 'string' ) {
                return;
            }

            data = typeof data == 'function' ? data() : data;

            const itemById = document.getElementById(item);

            if ( itemById != null ) {
                itemById.innerHTML = data;
            }

            const elements = document.getElementsByClassName( item );
            for(let i=0; i<elements.length; i++) {
                elements[i].innerHTML = data;
            }

        },

        click( item, handler ) {

            if ( typeof item != 'string' || typeof handler!= 'function' ) {
                return;
            }

            const itemById = document.getElementById(item);
            if ( itemById != null ) {
                itemById.onclick = handler;
            }

            const elements = document.getElementsByClassName( item );
            for(let i=0; i<elements.length; i++) {
                elements[i].onclick = handler;
            }
        }
    };
}();
