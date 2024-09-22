
import './App.css'
import { Provider } from 'react-redux'
import { SheetProvider } from './state/SheetContext'
import { ModalProvider } from './state/ModalContext'
import CharacterSheet from './components/characterSheet/CharacterSheet'
import { store } from './state/CharacterContext'


function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <SheetProvider>
          <ModalProvider>
            <CharacterSheet/>
          </ModalProvider>
        </SheetProvider>
      </Provider>
    </div>
  )
}

export default App
