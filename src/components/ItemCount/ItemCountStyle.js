export const itemCountStyle = theme => {
    return({
        counterContainer: {
            alignItems : 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 'auto',
            maxWidth: '90%',
            '& > label': {
               margin: '3%',
            }
        },
        divExternalStyle: {
            alignItems : 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            textAlign: 'center',
            height: 'auto',
            maxWidth: '100%',
        },
        quantity: {
            margin:'3%',
        }
    })
}
