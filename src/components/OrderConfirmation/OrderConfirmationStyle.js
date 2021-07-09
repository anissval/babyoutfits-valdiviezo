export const orderConfirmationStyle = theme => {
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
            centerItems: {
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }
        }
    )
}
