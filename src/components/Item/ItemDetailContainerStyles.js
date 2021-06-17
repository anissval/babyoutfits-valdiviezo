export const itemDetailCointainerStyle = theme => {
    return ({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '100%',
            margin :'3%',
            padding: '3%',
        },
        loading: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
    })
}
