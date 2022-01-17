import {Header} from "./Header/Header";
import Container from "@mui/material/Container";
import {Balance} from "./Balance/Balance";
import {IncomeExpenses} from "./Income/IncomeExpenses";
import {TransactionList} from "./Transaction/TransactionList";
import {AddTransaction} from "./AddTransaction/AddTransaction";


export const Tracker = () => {
    return (
        <Container maxWidth={'xs'}>
            <Header/>
            <Balance/>
            <IncomeExpenses/>
            <TransactionList />
            <AddTransaction />
        </Container>
    )
}