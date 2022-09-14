window.onload = () => {

    sa.click('btnTime', btnClicked);
};

const btnClicked = (event)=> {

    ajax.get( 'time', (data, response)=>{
        console.log( 'response', data, response );
        sa.replace('time', data);
    } );
};