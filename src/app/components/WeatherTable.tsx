import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { WeatherData } from '../page';

// se necesita hacer funcion para pasar de celcius a grados
// añadir simbolito de cargando
// boton de mostrar en celcius o grados
// validacion de datos en el formulario (si no lo digita o si digita un valor inexistente)
// corregir responsive
// corregir la respuesta de la api cuando el objeto está guardado en redis

function createDataForTable(data : WeatherData){
  return [
    { 
      name: "Temperature",
      data: data.temp
    },
    { 
      name: "Temperature Feels Like",
      data: data.feelslike
    },
    { 
      name: "Humidity",
      data: data.humidity
    },
    { 
      name: "Precipitation Probability",
      data: data.precipprob
    },
    { 
      name: "Conditions",
      data: data.conditions
    }
  ];


}


interface WeatherTableProps {
  data: WeatherData | undefined;
  style?: React.CSSProperties;
}

export default function WeatherTable({ data, style }: WeatherTableProps) {
  return (
    <>
      {data && <TableContainer style={style} component={Paper} sx={{ maxWidth: "50vw" }}>
        <Table aria-label="simple table">
          <TableBody>
            {createDataForTable(data).map((row) => (
              <TableRow
                key={row.name}
              >
                <TableCell size='small' slot='' component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell size='small' align="right">{row.data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}

    </>

  );
}