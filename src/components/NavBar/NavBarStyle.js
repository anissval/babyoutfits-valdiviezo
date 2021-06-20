export const navBarStyle = theme => {
    return ({
        container: {
            backgroundColor: '#4FD6D2',
            alignItems: 'start',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            fontSize: 'calc(10px + 2vmin)',
            color: 'white',
            width: '100%',
            listStyle: 'none',
            padding: '2%',
            margin: '0',
            '& > li > a': {
                color: 'white',
                textDecoration: 'none',
            }
        },
        home: {
            fontFamily: 'Sofia, sans-serif',
        }
    })
}

