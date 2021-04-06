# SubmitButton

<!-- STORY -->

<hr>

[Material-ui](https://material-ui.com/) Submit Button with circular progress on loading

##### Import

```TSX
import { SubmitButton } from '@rabahzeineddine/Material-ui'
```

##### Usage example

```TSX
<SubmitButton label="Submit" loading={loading}>
```

##### Required props

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `label` | `string` |             |

##### Optional props

| Name       | Type                    | Description |
| ---------- | ----------------------- | ----------- |
| `loading`  | `boolean`               |             |
| `disabled` | `boolean`               |             |
| `color`    | `primary \| secondary`  |             |
| `variant`  | `contained \| outlined` |             |
| `onClick`  | `() => void`            |             |
