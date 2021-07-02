export const cartStyles = theme => {
    return ({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            maxWidth: '100%',
            margin: '1%',
            padding: '1%',
        },
        loading: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20%'
        },
        paper: {
            padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            alignItems: 'center',
            justifyContent: 'center',
        },
        items: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            listStyle: 'none',
            textAlign: 'center',
        }
    })
}
