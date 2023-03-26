import { useState } from "react"

function App() {
    const [arama, aramaGuncelle] = useState("")

    const urunler = [
        "Kalem",
        "Silgi",
        "Defter",
        "Uç"
    ]

    function aramaYap(olay) {
        aramaGuncelle(olay.target.value)
    }

    const filtreliUrunler = urunler.filter( (eleman) => eleman.includes(arama))

    return(
        <>
            <input value={arama} type="text" onChange={aramaYap} />
            <div>
                {filtreliUrunler.map( (eleman) => {return <p>{eleman}</p>} )}

            </div>
        </>
    )
}

export default App