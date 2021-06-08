export const navBarStyle = theme => {
    return({
        container: {
            backgroundColor: '#4FD6D2',
            alignItems : 'start',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            fontSize: 'calc(10px + 2vmin)',
            color: 'white',
            width: '95%',
            listStyle: 'none',
            padding : '2%',
            fontFamily: 'Sofia, sans-serif',
            '& > li > a': {
                color: 'white',
                textDecoration: 'none',
            }
        }
    })
}

