import { useContext } from "react"
import {Container, Grid, Menu, MenuItem, Segment} from "semantic-ui-react"

import "./CharacterSheet.css"

import StatsView from "../views/StatsView"
import MagicView from "../views/MagicView"
import Overview from "../views/Overview"
import InventoryView from "../views/InventoryView"
import NotesView from "../views/NotesView"
import { SheetContext } from "../../state/SheetContext"


const CharacterSheet = () => {
    const {activeSheet, setActiveSheet} = useContext(SheetContext)


    const getView = () => {
        if (activeSheet === 'stats') {
            return <StatsView/>
        } else if (activeSheet === 'magic') {
            return <MagicView/>
        } else if (activeSheet === 'inventory') {
            return <InventoryView/>
        } else if (activeSheet === 'notes') {
            return <NotesView/>
        }
        return null
    }

    return (
        <>
            <Container className="sheetcontainer" >
                <Segment className="charactersheet">
                    <Grid>
                        <Overview/>
                        <Menu attached='bottom' className='mainmenu' tabular>
                            <MenuItem name='Stats'  active={activeSheet === 'stats'} onClick={() => setActiveSheet('stats')}/>
                            <MenuItem name='Magic'  active={activeSheet === 'magic'} onClick={() => setActiveSheet('magic')}/>
                            <MenuItem name='Inventory'  active={activeSheet === 'inventory'} onClick={() => setActiveSheet('inventory')}/>
                            <MenuItem name='Notes'  active={activeSheet === 'notes'} onClick={() => setActiveSheet('notes')}/>
                        </Menu>
                        {getView()}
                    </Grid>
                </Segment>
 
            </Container>
        </>
    )

}

export default CharacterSheet