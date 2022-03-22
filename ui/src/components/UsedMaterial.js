import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";


const columns = [
    { field: 'title', headerName: 'Ordertitle', width: 130 },
    {
        field: 'count',
        headerName: 'Menge',
        type: 'number',
        width: 90,
    }, 
    {
        field: 'batchNumber',
        headerName: 'batchNumber',
        type: 'text',
        width: 150,
    },
   
];

export default function UsedMaterial({ dataRows = [] }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={dataRows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
