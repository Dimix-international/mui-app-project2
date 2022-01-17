import Box from "@mui/material/Box";
import React, {ChangeEvent, useContext, useState} from "react";
import {Button, Divider, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTracker} from "../../../hooks/hooks-tracker";

type ValuesType = {
    text:string
    amount: number | string
}

function checkValue(value:string) {
    let reg = /^-?[0-9]+/;
    //return value.match(reg);//проверяем соответствие
    return reg.test(value)
}

export const AddTransaction = React.memo(props => {
    const {dispatch} = useTracker();

    const [values, setValues] = useState<ValuesType>({
        text: '',
        amount: ''
    })
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(e.currentTarget.id === 'text') setValues({...values, text: e.currentTarget.value})
        else{
            console.log(checkValue(e.currentTarget.value))
            setValues({...values, amount: Number(e.currentTarget.value)})
        }
    }
    const onClickHandler = () => {
        dispatch({
            type: 'add',
            payload: {
                id: Math.random(),
                text: values.text,
                amount: values.amount ? Number(values.amount) : 0
            }
        })
        setValues({text: '', amount: ''})
    }

    return (
        <Box>
            <Typography variant={'subtitle1'} sx={{mb: 1}}>Add new
                transaction</Typography>
            <Divider/>
            <Box paddingTop={2}>
                <form>
                    <Stack direction={'column'} spacing={3} marginBottom={2}>
                        <TextField
                            id={'text'}
                            size={'small'}
                            value={values.text}
                            type="text"
                            placeholder="Enter text..."
                            onChange={onChangeHandler}
                            label={'text'}
                        />
                        <TextField
                            id={'amount'}
                            size={'small'}
                            value={values.amount}
                            type="number"
                            placeholder="Enter amount..."
                            onChange={onChangeHandler}
                            label={'Amount'}
                        />
                    </Stack>
                    <Button
                        sx={{display: 'block', width: '100%'}}
                        variant={'contained'}
                        disabled={!values.text.length}
                        onClick={onClickHandler}
                    >
                        Add transaction
                    </Button>
                </form>
            </Box>
        </Box>
    )
})