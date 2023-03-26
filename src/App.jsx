import { useState } from "react"

function App() {
    const [inputlar, inputlariGuncelle] = useState({})

    function formGuncelle(olay) {
        const name = olay.target.name;
        const value = olay.target.value;
        inputlariGuncelle(oncekiObje => ({ ...oncekiObje, [name]: value }))
    }

    function formGonder(olay) {
        olay.preventDefault()

        if (inputlar.yas < 18) {
            alert("Yaşınız uygun değil")
        } else {
            olay.target.submit()
        }

    }

    return (
        <form onSubmit={formGonder}>
            <label>Adınızı girin:
                <input
                    type="text"
                    name="ad"
                    value={inputlar.ad || ""}
                    onChange={formGuncelle}
                />
            </label>

            <label>Yaşınız:
                <input
                    type="number"
                    name="yas"
                    value={inputlar.yas || ""}
                    onChange={formGuncelle}
                />
            </label>

            <label>Telefon:
                <input
                    type="number"
                    name="tel"
                    value={inputlar.tel || ""}
                    onChange={formGuncelle}
                />
            </label>

            <input type="submit" />
        </form>
    )
}

export default App