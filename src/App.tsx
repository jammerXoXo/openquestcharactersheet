
import './App.css'
import { Provider } from 'react-redux'
import { SheetProvider } from './state/SheetContext'
import { ModalProvider } from './state/ModalContext'
import { store } from './state/CharacterContext'
import Main from './components/main/Main'


function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <SheetProvider>
          <ModalProvider>
            <Main/>
          </ModalProvider>
        </SheetProvider>
      </Provider>
    </div>
  )
}

export default App
