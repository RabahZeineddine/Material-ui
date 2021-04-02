

export type SubmitButtonProps = {
    label: string
    loading?: boolean
    disabled?: boolean
    color?: "primary" | "secondary"
    variant?: "contained" | "outlined"
    onClick?: () => void
}
