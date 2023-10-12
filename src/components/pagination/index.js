import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'employee_name', headerName: 'NAME', width: 170 },
    { field: 'employee_age', headerName: 'AGE', width: 170 },
    { field: 'employee_salary', headerName: 'SALARY', width: 170 },
];
 

export default function PageSizeCustomOptions() {
    const [rows,setRows] = useState([])

    const getData = async () =>{
        const res = await fetch("https://dummy.restapiexample.com/api/v1/employees")
        const data = await res.json()
        console.log(data.data); 
        setRows([...data.data])
    }

    useEffect(() => {
      getData()
    }, [])
    

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[4, 10, 20]}
      />
    </div>
  );
}
