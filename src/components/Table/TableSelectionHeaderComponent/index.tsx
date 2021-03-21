import { TableSelection } from "@devexpress/dx-react-grid-material-ui";
import { Checkbox } from "@material-ui/core";
import React from "react";

function TableSelectionHeaderComponent(props: TableSelection.HeaderCellProps) {
  return (
    <th colSpan={props.colSpan} rowSpan={props.rowSpan}>
      <td>
        <Checkbox
          color="primary"
          checked={props.allSelected}
          onClick={() => props.onToggle()}
          indeterminate={props.someSelected}
        />
      </td>
    </th>
  );
}

export default TableSelectionHeaderComponent;
