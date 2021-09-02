import React, { useState } from 'react'
import './Table.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
export default function Table(props) {
    const { headers, rows,
        setRows,
        handleEdit,
        HandleDelete,
        handleSave,
        editedRow,
        template,
        add,
        handleAdd,
        // setTemplate,
        categories } = props;
    const [value, setValue] = useState('');
    const [sort, setSort] = useState('Name');
    const [direction, setDirection] = useState(true);
    const [tableTemplate, setTemplate] = useState(template);
    function handleChange(e, header) {
        debugger
        setRows(
            rows.map((item, index) =>
                index === editedRow
                    ? { ...item, [header]: e.target.value }
                    : item
            )
        )
    }
    const handleNewRow = (e, name) => {
        setTemplate(prevState => ({
            ...prevState,
            [name]: e.target.value
        }));

    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} onClick={() => { setSort(header) }}>{header}</th>
                    ))}
                </tr>
            </thead>
            {rows && rows.sort((a, b) => (a[sort] > b[sort]) ? 1 : -1).map((row, index) => (
                editedRow !== index ?
                    <tr key={index}>
                        <td>{row.Name}</td>
                        <td>{row.Address}</td>
                        <td>{row.Coordinates}</td>
                        <td>{row.Category}</td>
                        <td className='opration'>
                            <button className="button" onClick={() => HandleDelete(index)}>Delete</button>
                            <button className="button" onClick={() => handleEdit(index)}>Edit</button>
                            <LocationOnIcon className="location" style={{ color: "lightblue" }} />
                        </td>
                    </tr>
                    :
                    <tr key={index}>
                        <td ><input type='text' value={row.Name} onChange={(e) => handleChange(e, 'Name')} /></td>
                        <td ><input type='text' value={row.Address} onChange={(e) => handleChange(e, 'Address')} /></td>
                        <td ><input type='text' value={row.Coordinates} onChange={(e) => handleChange(e, 'Coordinates')} /></td>
                        <td><select name="categories" id="categories" onChange={(e) => handleChange(e, 'Category')}>
                            {categories && categories.map((Category, index) => (
                                <option value={Category} key={index}>{Category}</option>
                            ))}

                        </select>
                        </td>
                        <td className='opration'>
                            <button className="button" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="button" onClick={() => handleSave()}>Save</button>
                        </td>
                    </tr>

            ))}
            {add && <tr >
                <td ><input type='text' value={tableTemplate.Name} onChange={(e) => handleNewRow(e, 'Name')} /></td>
                <td ><input type='text' value={tableTemplate.Address} onChange={(e) => handleNewRow(e, 'Address')} /></td>
                <td ><input type='text' value={tableTemplate.Coordinates} onChange={(e) => handleNewRow(e, 'Coordinates')} /></td>
                <td ><input type='text' value={tableTemplate.Category} onChange={(e) => handleNewRow(e, 'Category')} /></td>

                <td className='opration'>
                    <button className="button" onClick={() => handleAdd(tableTemplate)}>Save</button>

                </td>
            </tr>
            }
        </table>
    )
}
