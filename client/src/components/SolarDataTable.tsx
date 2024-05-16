import React from 'react';
import { Table, Button } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

export interface SolarData {
  [key: string]: string | number | null;
}

type Props = {
  data: SolarData[];
};

export const SolarDataTable: React.FC<Props> = ({ data }) => {
  // Function to convert data to CSV format
  const convertToCSV = (objArray: SolarData[]) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    const keys = Object.keys(data[0]);

    // Add headers
    str += keys.join(',') + '\r\n';

    // Add rows
    for (const obj of array) {
      let line = '';
      for (const key of keys) {
        if (line !== '') line += ',';
        line += `"${obj[key]}"`;
      }
      str += line + '\r\n';
    }
    return str;
  };

  // Function to trigger download of CSV
  const downloadCSV = () => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'solar-data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Initialize columns array
  const columns: TableColumnsType<SolarData> = [];

  // Check if 'datetime' column exists and set it as the first column
  if (data.length > 0 && 'datetime' in data[0]) {
    columns.push({
      title: 'Datetime',
      dataIndex: 'datetime',
      key: 'datetime-0',
      showSorterTooltip: { target: 'full-header' },
      sorter: (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime(),
      sortDirections: ['ascend', 'descend'],
    });
  }

  // Add the rest of the columns dynamically
  Object.keys(data[0]).forEach((key, index) => {
    if (key !== 'datetime') { // Avoid duplicating the datetime column
      columns.push({
        title: key,
        dataIndex: key,
        key: `${key}-${index}`,
        showSorterTooltip: { target: 'full-header' },
        sorter: typeof data[0][key] === 'number'
          ? (a, b) => (a[key] as number) - (b[key] as number)
          : (a, b) => String(a[key]).localeCompare(String(b[key])),
        sortDirections: ['ascend', 'descend'],
      });
    }
  });

  const getRowKey = (record: SolarData, index: number) => record.id || index;

  const onChange: TableProps<SolarData>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Button type="primary" onClick={downloadCSV} style={{ marginBottom: '10px', background: "green" }}>
        Download CSV
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={getRowKey}
        onChange={onChange}
        scroll={{ x: 3500, y: 500 }}
        style={{ height: '750px', width: '1100px'}}  // Adjust height as needed
      />
    </div>
  );
};

export default SolarDataTable;
