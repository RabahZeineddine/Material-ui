import { Theme, createStyles } from "@material-ui/core/styles";

export default (theme: Theme) =>
    createStyles({
        content: {
            marginTop: theme.spacing(2),
            flexGrow: 1,
            flexBasis: 0,
            overflow: "auto",
            "&::-webkit-scrollbar": {
                width: "0.3em",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.primary.main,
            },
        },
    });
