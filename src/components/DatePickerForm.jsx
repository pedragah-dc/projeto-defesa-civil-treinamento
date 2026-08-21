import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';
import { Box } from '@mui/material';

export default function DatePickerForm({ date, handleDateInputChange }) {
    return (
        <Box sx={{ padding: '8px', borderRadius: '32px' }}>

            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <DatePicker
                    value={date}
                    onChange={(newValue) => handleDateInputChange(newValue)}
                    slots={{
                        openPickerButton: () => null,
                    }}
                    slotProps={{
                        textField: {
                            variant: 'standard',
                            label: 'Data da Capacitação',
                            placeholder: 'DD/MM/AAAA',
                            InputProps: {
                                disableUnderline: true,
                            },
                            sx: {
                                margin: '8px',
                            },
                        },
                    }}
                />
            </LocalizationProvider>
        </Box>
    );
}