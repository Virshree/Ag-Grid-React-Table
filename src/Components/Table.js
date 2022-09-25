import axios from "axios";
import React, { useEffect, useState } from "react";

import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

function Table() {
  const [tableData, setTableData] = useState([]);

  const [gridApi, setGridApi] = useState();

  const rowData = tableData;

  useEffect(() => {
    fetchUsersRecords();
  }, []);
  const imageFormatter = ({ value }) => {
    return <img src={value} width="50px" height="50px" />;
  };
  const columnDefs = [
    {
      field: "id",
      checkboxSelection: true,
    },
    {
      field: "firstName",
    },
    {
      field: "maidenName",
    },
    {
      field: "lastName",
    },
    {
      field: "email",
    },
    {
      field: "gender",
    },
    {
      field: "address.city",
    },
    {
      field: "phone",
    },
    {
      field: "image",
      headerName: "Avatar",
      cellRendererFramework: imageFormatter,
    },
  ];
  const gridOptions = {
    columnDefs: columnDefs,
    enableSorting: true,
  };

  const fetchUsersRecords = async () => {
    const url = "https://dummyjson.com/users";
    const result = await axios.get(url);
    console.log(result.data.users);
    //const rowData = result;
    const tableData = result;
    console.log(tableData.data.users);
    setTableData(tableData.data.users);
  };

  const defaultColDef = {
    flex: 1,
    resizable: true,
    editable: true,
    sortable: true,

    filter: true,
  };

  const onGridReady = (params) => {
    //console.log(params);
    setGridApi(params);
    params.api.setColumnDefs([
      { field: "id", checkboxSelection: true, headerCheckboxSelection: true },
      { field: "firstName" },
      { field: "maidenName" },
      { field: "lastName" },
      {
        field: "email",
      },
      {
        field: "gender",
      },
      {
        headerName: "City",
        field: "address.city",
      },
      {
        field: "phone",
        width: 100,
      },
      {
        field: "image",
        headerName: "Avatar",
        cellRendererFramework: imageFormatter,
      },
    ]);
    console.log(rowData.push(tableData[0].id));
    console.log(rowData.push(tableData[1].firstName));
    console.log(rowData.push(tableData[2].maidenName));
    console.log(rowData.push(tableData[3].lastName));
    console.log(rowData.push(tableData[4].email));
    console.log(rowData.push(tableData[5].gender));
    console.log(rowData.push(tableData[6].address.city));
    console.log(rowData.push(tableData[7].phone));
    console.log(rowData.push(tableData[8].image));
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 400, width: 1200, margin: "60px", alignItems: "center" }}
    >
      <AgGridReact
        rowData={rowData}
        defaultColDef={defaultColDef}
        // columnApi={tableData}
        onGridReady={onGridReady}
        gridOptions={columnDefs}
        pagination={true}
        paginationPageSize={10}
      ></AgGridReact>
    </div>
  );
}

export default Table;
