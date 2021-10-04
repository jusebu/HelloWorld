import { useState } from "react";
import { useTable, useGlobalFilter, useAsyncDebounce } from "react-table";
import useRowsProductos from "./hook2/useRowsProductos";
import useColumnsProductos from "./hook2/useColumnsProductos";


import "./styles.css";


function ProductFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const totalProductAvailable = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onFilterChange = useAsyncDebounce(
    (value) => setGlobalFilter(value || undefined),
    200
  );

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <span className="product-filter">
     NUEVO PRODUCTO &nbsp;{" "}
      <input
        size={40}
        value={value || ""}
        onChange={handleInputChange}
        placeholder={`Busqueda`}
      />
    </span>
  );
}


export default function App() {
  const columns = useColumnsProductos();
  const data = useRowsProductos();
  const table = useTable({ columns, data }, useGlobalFilter);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter }
  } = table;

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          <tr>
            <th colSpan={4}>
              <ProductFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}