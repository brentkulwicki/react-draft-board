import * as React from "react";

import { useTable } from "react-table";
import { StyledTable } from "./StyledTable";

export const DraftTable = ({ draftData }: { draftData: any }) => {

  const data = React.useMemo(() => draftData, [draftData]);

  const columns = React.useMemo(
    () => [
      {
        Header: "👇Rnd",
        accessor: "rnd",
      },
      {
        Header: "Brent",
        accessor: "brent",
      },
      {
        Header: "Kori",
        accessor: "kori",
      },
      {
        Header: "Eric",
        accessor: "eric",
      },
      {
        Header: "BJ",
        accessor: "bj",
      },
      {
        Header: "Keith",
        accessor: "keith",
      },
      {
        Header: "Kyle B",
        accessor: "kyleb",
      },
      {
        Header: "Bruce",
        accessor: "bruce",
      },
      {
        Header: "Kyle H",
        accessor: "kyleh",
      },
      {
        Header: "Jamie",
        accessor: "jamie",
      },
      {
        Header: "Alan",
        accessor: "alan",
      },
    ],
    []
  );

  // @ts-ignore
  const tableInstance = useTable({ data, columns });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
    console.log("tableRender")
  return (
    // apply the table props
    <StyledTable {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </StyledTable>
  );
};
