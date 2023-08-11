import ButtonMenu from '@/components/ButtonMenu'
import Footer from '@/components/Footer'
import React from 'react'
import PaidIcon from '@mui/icons-material/Paid';
import AddCardIcon from '@mui/icons-material/AddCard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styles from './HomeScreen.module.scss'

export default function HomeScreen() {
    return (
        <>
            {/* <Header /> */}
            <div className={styles.container}>
                <ButtonMenu
                    titulo='Formas de Pagamentos'
                    icone={<PaidIcon />}
                    caminho='/forma-pgto'
                />
                <ButtonMenu
                    titulo='Pagamento'
                    icone={<AddCardIcon />}
                    caminho='/pagamento'
                />
                <ButtonMenu
                    titulo='Cadastro'
                    icone={<PersonAddIcon />}
                    caminho='/cadastro'
                />
                <ButtonMenu
                    titulo='Dentistas'
                    icone={<PersonSearchIcon />}
                    caminho='/dentistas'
                />
                <ButtonMenu
                    titulo='Salas'
                    icone={<MeetingRoomIcon />}
                    caminho='/salas'
                />
                <ButtonMenu
                    titulo='Orçamentos'
                    icone={<PriceChangeIcon />}
                    caminho='/orcamentos'
                />
                <ButtonMenu
                    titulo='Tratamentos'
                    icone={<ContentPasteIcon />}
                    caminho='/tratamentos'
                />
                <ButtonMenu
                    titulo='Historicos'
                    icone={<LibraryBooksIcon />}
                    caminho='/historicos'
                />
                <ButtonMenu
                    titulo='Consultas'
                    icone={<LocalHospitalIcon />}
                    caminho='/consultas'
                />
                <ButtonMenu
                    titulo='Agenda'
                    icone={<CalendarMonthIcon />}
                    caminho='/agenda'
                />
            </div>
        </>
    )
}
