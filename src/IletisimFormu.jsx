import { useState } from "react"

function IletisimFormu() {

    const [ad, adGuncelle] = useState("")
    const [soyad, soyadGuncelle] = useState("")
    const [dogumYili, dogumYiliGuncelle] = useState("")
    const [telefon, telefonGuncelle] = useState("")

    function adDegistir(olay) {
        adGuncelle(olay.target.value)
    }

    function soyadDegistir(olay) {
        soyadGuncelle(olay.target.value)
    }

    function dogumYiliDegistir(olay) {
        dogumYiliGuncelle(olay.target.value)
    }

    function telefonDegistir(olay) {
        telefonGuncelle(olay.target.value)
    }

    function formGonder(olay) {
        olay.preventDefault()

        if (dogumYili.length !== 4) {
            alert("Doğum tarihi 4 karakterli olmalıdır")
        } else {
            olay.target.submit()
        }
    }

    return (
        <>
            <form onSubmit={formGonder}>
                <input value={ad} onChange={adDegistir} type="text" placeholder="Adınız" />
                <input type={soyad} onChange={soyadDegistir} placeholder="Soyadınız" />
                <input type={dogumYili} onChange={dogumYiliDegistir} placeholder="Doğum Yılı" />
                <input type={telefon} onChange={telefonDegistir} placeholder="Telefon" />
                <button type="submit">Gönder</button>
            </form>

            <div>
                <p>Ad: {ad}</p>
                <p>Soyad: {soyad}</p>
                <p>Doğum: {dogumYili}</p>
                <p>Telefon: {telefon}</p>
            </div>

        </>


    )
}

export default IletisimFormu
