export const itemDetailStyles = theme => {
    return ({
            container: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                maxWidth: '80%',
                height: '70%',
                fontSize: 'calc(10px + 2vmin)',
                justifyContent: 'space-around',
                margin: '2%',
                padding: '5%',
            },
            image: {
                height: 'auto',
                maxWidth: '100%',
                margin: '2%',
            },
            itemDescription: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2%'
            },
            paper: {
                textAlign: 'center',
                color: theme.palette.text.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '90%',
                maxHeight: '90%',
                margin: '5%',
            },
            groupButtons: {
                '& > Button > Link': {
                    textDecoration: 'none',
                    color : 'black'
                }
            }
        }
    )
}
