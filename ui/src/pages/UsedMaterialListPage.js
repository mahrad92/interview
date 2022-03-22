import { useEffect, useState } from "react"
import UsedMaterial from "../components/UsedMaterial"
import { services } from "../services"


export const UsedMaterialListPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        services.usedMaterials.list().then(rows => {
            setData(rows)
        })
    }, [])

    return (
        <UsedMaterial dataRows={data} />
    )
}