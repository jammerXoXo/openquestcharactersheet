import { useContext, useState } from "react"
import { Image, Input, Popup } from "semantic-ui-react"
import { SheetContext } from "../../state/SheetContext"
import { selectInfo, updateDetail } from "../../state/CharacterContext"
import { useDispatch, useSelector } from "react-redux"
import { appState } from "../../types/types"


const Portrait = () => {
    const info = useSelector((state: { state: appState }) => selectInfo(state))
    const dispatch = useDispatch()
    const {editingMode} = useContext(SheetContext)
    const [imageUrl, setImageUrl] = useState('')


    return (
        <Popup disabled={!editingMode} hoverable trigger={<Image className='portrait' src={info.image} ></Image>}>
            <Input 
                size='mini' 
                action={{content:'set url', onClick: () => dispatch(updateDetail({ target: 'image', newValue: imageUrl}))}} 
                style={{marginRight: '18px'}} 
                onChange={(_, {value}) => setImageUrl(value)}
                value={imageUrl}/>
        </Popup>
    )
}

export default Portrait