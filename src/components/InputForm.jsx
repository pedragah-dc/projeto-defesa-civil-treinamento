import { Box, FormControl, Input, InputLabel } from '@mui/material'
import React from 'react'

const InputForm = ({ children, label, handleNameInputChange }) => {
    return (
        <Box sx={{ padding: '8px', borderRadius:'32px' }}>
            <FormControl>
                <InputLabel>{label}</InputLabel>
                {children}
                <Input onChange={(e) => {
                    handleNameInputChange(e.target.value)
                }} />
            </FormControl>
        </Box>
    )
}

export default InputForm