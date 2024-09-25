import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../../state/ModalContext"
import { Button, Form, FormDropdown, FormTextArea, Modal, ModalContent, Segment, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import { appState, characterStats } from "../../types/types"
import { useDispatch } from "react-redux"
import { loadData } from "../../state/CharacterContext"


const dataTypes: Array<{key: string, text: string, value: keyof appState}> = [
    {
        key: 'character',
        text: 'Character',
        value: 'characterStats'
    },
    {
        key: 'customElements',
        text: 'Custom Elements',
        value: 'customElements'
    }
]

const LoadModal = () => {
    const {loadModalState, setLoadModalState} = useContext(ModalContext)
    const [deleting, setDeleting] = useState<boolean>(false)
    const [characters, setCharacters] = useState<characterStats[]>([])
    const [uploading, setUploading] = useState<boolean>(false)
    const [uploadedJSON, setUploadedJSON] = useState<string>('')
    const [failedUpload, setFailedUpload] = useState<boolean>(false)
    const [dataType, setDataType] = useState<keyof appState>('characterStats')

    const dispatch = useDispatch()

    const [selected, setSelected] = useState<{[key: string]: number}>({} as {[key: string]: number})


    const updateSelected = (uuid: string) => {
        const temp = selected
        if (uuid in temp) {
            delete temp[uuid]
        } else {
            temp[uuid] = 0
        }
        setSelected({...temp})
    }

    useEffect(() => {
        setCharacters(Object.keys(localStorage).filter(x => x.includes('characters')).map(x => {
            try {
                return JSON.parse(localStorage.getItem(x) as string)
            } catch (error) {
                console.log(error)
            }
            return null
        }).filter(x => !!x))
    }, [setCharacters, loadModalState])

    const deleteChars = () => {
        if (deleting) {
            setDeleting(false)
            Object.keys(selected).forEach((id) => localStorage.removeItem(`characters/${id}`))
            setCharacters(characters.filter(x => !(x.meta.id in selected)))
            setSelected({})
        } else {
            setDeleting(true)
        }
    }

    useEffect(() => console.log(uploadedJSON), [uploadedJSON])

    const handleUpload = () => {
        if (uploading && uploadedJSON) {
            try {
                const content = JSON.parse(uploadedJSON)
                dispatch(loadData({newValue: content, type: dataType}))
                setUploading(false)
                setFailedUpload(false)
                setLoadModalState({open: false})
            } catch (error) {
                console.log(error)
                setFailedUpload(true)
            }

        } else {
            setUploading(true)
        }
    }

    const loadChar = () => {
        if (Object.keys(selected).length !== 1) {
            return
        }

        const id = Object.keys(selected)[0]
        const selectedCharacter = characters.filter(x => x.meta.id === id)

        if (selectedCharacter.length === 1) {
            dispatch(loadData({newValue: selectedCharacter[0], type: 'characterStats'}))
        }
        setSelected({})
        setLoadModalState({open: false})
    }

    const content = uploading? (
        <Form>
            <FormDropdown selection label='Data Type' options={dataTypes} defaultValue='characterStats'  onChange={(_, {value}) => setDataType(value as keyof appState)} />
            <FormTextArea rows={21} placeholder='Paste JSON here...' style={{width: '430px', resize: 'none', borderWidth: '1px', borderColor: failedUpload? 'red': 'black'}} onChange={(_, {value}) => setUploadedJSON(String(value))}/>
        </Form>
        ):(
        <Table singleLine selectable basic='very'>
            <TableHeader>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Last Edited</TableHeaderCell>
            </TableHeader>
            <TableBody>
                {characters.sort((a, b) => Number((new Date(a.meta.edited)) < (new Date(b.meta.edited)))).map(stats => {
                    return (
                        <TableRow key={stats?.meta?.id} active={stats?.meta?.id in selected} onClick={() => updateSelected(stats?.meta?.id)}>
                            <TableCell>{stats?.info?.name? stats.info.name: 'unnamed'}</TableCell>
                            <TableCell>{stats?.meta?.edited}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>)

    return (
        <Modal
            onClose={() => {
                setLoadModalState({...loadModalState, open: false})
                setUploading(false)
                setFailedUpload(false)
                setSelected({})
            }}
            onOpen={() => setLoadModalState({...loadModalState, open: true})}
            open={loadModalState.open}
            size="mini"
            style={{minWidth: '500px', minHeight: '600px'}}
        >
            <ModalContent>
                <Segment style={{height: '500px'}}>
                    {content}
                </Segment>
                <Form>
                    <div style={{display: 'flex', justifyContent: 'space-between', height: '35px'}}>
                        <Button label={uploading?'submit':'upload'} onClick={() => handleUpload()}/>
                        <Button label='load' disabled={Object.keys(selected).length !== 1 || uploading} onClick={() => loadChar()}/>
                        <Button icon='trash' disabled={Object.keys(selected).length < 1 || uploading} label={{as: 'a', basic: true, content: deleting?'Are you sure?':'Delete selected'}} onClick={() => deleteChars()}/>
                    </div>
                </Form>
            </ModalContent>
        </Modal>
    )
}

export default LoadModal