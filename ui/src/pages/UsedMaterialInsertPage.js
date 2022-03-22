import { Box, Button, FormControl, Grid, Input, InputLabel, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { TextMaskCustom } from "../components/MaskInput";
import MaterialSelector from "../components/MaterialSelector"
import { services } from "../services"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const UsedMAterialInsertPage = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        batchNumber: '(100) 000-0000',
        count: 0,
        materialId: 0
    });
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const AddItem = () => {
        services.usedMaterials.add({
            batchNumber: values.batchNumber,
            count: values.count,
            materialId: values.materialId
        }).then(res => handleOpen())
    }

    return (<>
        <Grid container spacing={{ xs: 2 }} >
            <Grid item xs={12} sm={12} md={4}>
                <MaterialSelector name='materialId' value={values.materialId} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <TextField required label='count' type="number"
                    name='count'
                    value={values.count}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
                    <Input
                        value={values.batchNumber}
                        onChange={handleChange}
                        name="batchNumber"
                        id="formatted-text-mask-input"
                        inputComponent={TextMaskCustom}
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
                <Button variant="contained" fullWidth onClick={AddItem} >Add Order</Button>
            </Grid>
        </Grid>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container spacing={{ xs: 2 }} >
                    <Grid item xs={12} >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Item is Inserted
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Would you like to insert another Item?
                        </Typography>
                    </Grid>
                    <Grid item xs={5} >

                        <Button variant="contained" onClick={handleClose} >Continue</Button>
                    </Grid>

                    <Grid item xs={5} >
                        <Button variant="contained" onClick={() => navigate('/list')} >return to List</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </>
    )
}