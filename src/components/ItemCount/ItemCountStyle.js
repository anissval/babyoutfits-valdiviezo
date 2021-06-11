export const itemCountStyle = theme => {
    return({
        counterContainer: {
            '& > label': {
                margin : '25px'
            }
        },
        divExternalStyle: {
            width: '150px',
            backgroundColor: '#4FD6D2',
            alignItems : 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            margin : '10px'
        }
    })
}
