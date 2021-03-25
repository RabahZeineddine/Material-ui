
import { Theme, createStyles } from '@material-ui/core';


export default (theme: Theme) => createStyles({
    appBar: {
        position: "relative",
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    }
})