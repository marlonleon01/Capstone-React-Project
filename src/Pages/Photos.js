import { useContext } from "react"
import { Context } from "../Context"
import Image from "../Components/Image"
import {getClass} from "../utils"

export default function Photos() {
    const {allPhotos} = useContext(Context)

    const newAllPhotosArr = allPhotos.map((photo, index) => (
        <Image key={photo.id} img={photo.url} className={getClass(index)}/>
    ))

    return (
        <main className="photos">
            {newAllPhotosArr}
        </main>
    )
}