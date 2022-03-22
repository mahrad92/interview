import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { services } from '../services';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const MaterialSelector = ({ value, onChange, name }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        services.materials.list().then(data => setItems(data))
    }, [])

    return (
        <FormControl fullWidth>
            <InputLabel id="material-label">Material</InputLabel>
            <Select
                name={name}
                labelId="material-label"
                id="material-select"
                value={value}
                label="Material"
                disabled={!items.length}
                onChange={onChange}
            >
                {items.map((m) => (
                    <MenuItem value={m._id}>{m.title}</MenuItem>
                ))}
            </Select>
        </FormControl>

    );

}
export default MaterialSelector