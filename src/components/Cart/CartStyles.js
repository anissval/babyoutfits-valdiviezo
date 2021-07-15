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
            }, paper: {
                padding: theme.spacing(1),
                textAlign: 'center',
                color: theme.palette.text.secondary,
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            items: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                listStyle: 'none',
                textAlign: 'center',
            },
            emptyCart: {
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
            },
            loading: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20%'
            },
            margin: {
                margin: theme.spacing(1),
            },
        }
    )
}
