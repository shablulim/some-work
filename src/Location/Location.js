import { PersonalVideoTwoTone } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import Table from '../reuse/Table';
import GoogleMapReact from 'google-map-react';
import './Location.css'

const template =  {
        Name: '',
        Address: '',
        Coordinates: '',
        Category: ''
    }

const headers = ['Name', 'Address', 'Coordinates', 'Category']

export default function Location() {
    const [editedRow, setEditedRow] = useState(null);
    const [add, setAdd] = useState(false);
    const [categories, setCategories] = useState(['Bank', 'Club', 'ATM']);
    const [rows, setRows] =useState(JSON.parse(localStorage.getItem("rows") || "[]"));

    useEffect(() => {
        localStorage.setItem("rows", JSON.stringify(rows));
    }, [rows])

    const handleEdit = (index) => {
        setRows(JSON.parse(localStorage.getItem("rows") || "[]"))
        setEditedRow(index)
    }

    const HandleDelete = (rowIndex) => {
        const newRows = rows.filter((row, index) => {
            return index !== rowIndex
        })
        setRows(newRows)
    }

    const handleSave = () => {
        localStorage.setItem("rows", JSON.stringify(rows));
        setEditedRow('')
    }
    const addNewRow = () => {
        setAdd(!add);
    }

    const handleAdd = (newRow) => {
        if (Object.values(newRow).some(x => x === null || x === '')) {
            return
        }
        const newArr = [...rows, newRow]
        setRows(newArr);
        setEditedRow('');
        addNewRow();
    }

    
    return (
        <>
            <Table
                rows={rows}
                headers={headers}
                setRows={setRows}
                handleEdit={handleEdit}
                HandleDelete={HandleDelete}
                handleSave={handleSave}
                setEditedRow={setEditedRow}
                editedRow={editedRow}
                template={template}
                add={add}
                handleAdd={handleAdd}
                categories={categories}
            />

            <button className="buttonAdd" onClick={addNewRow}>Add</button>


                <div className="map">
                    MAP is not ready yet
                </div>
        </>
            )
}
