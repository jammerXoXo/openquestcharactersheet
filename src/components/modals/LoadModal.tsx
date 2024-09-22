import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../../state/ModalContext"
import { Button, Form, Modal, ModalContent, Segment, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, TextArea } from "semantic-ui-react"
import { characterStats } from "../../types/types"
import { useDispatch } from "react-redux"
import { loadCharacter } from "../../state/CharacterContext"

const LoadModal = () => {
    const {loadModalState, setLoadModalState} = useContext(ModalContext)
    const [deleting, setDeleting] = useState<boolean>(false)
    const [characters, setCharacters] = useState<characterStats[]>([])
    const [uploading, setUploading] = useState<boolean>(false)
    const [uploadedJSON, setUploadedJSON] = useState<string>('')
    const [failedUpload, setFailedUpload] = useState<boolean>(false)

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
    }, [setCharacters])

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
                dispatch(loadCharacter({newValue: content}))
                setUploading(false)
                setFailedUpload(false)
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
            dispatch(loadCharacter({newValue: selectedCharacter[0]}))
        }
        setSelected({})
        setLoadModalState({open: false})
    }

    const content = uploading? (
        <TextArea rows={29} placeholder='Paste JSON here...' style={{width: '430px', resize: 'none', borderWidth: '1px', borderColor: failedUpload? 'red': 'black'}} onChange={(e, {value}) => setUploadedJSON(String(value))}/>
        ):(
        <Table singleLine selectable basic='very'>
            <TableHeader>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Last Edited</TableHeaderCell>
            </TableHeader>
            <TableBody>
                {characters.sort((a, b) => Number((new Date(a.meta.edited)) < (new Date(b.meta.edited)))).map(stats => {
                    return (
                        <TableRow active={stats?.meta?.id in selected} onClick={() => updateSelected(stats?.meta?.id)}>
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