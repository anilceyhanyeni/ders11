import kisiler from './veri.js'
import Kisi from './Kisi.jsx'

function KisiListe() {
    //let ile başlayan dizelerle method kullanıyoruz

    let arananKisi = kisiler.find(eleman => eleman.name.first === "Kristen")

    let kadinVarmi = kisiler.some(eleman => eleman.gender === "female")

    let dogumKosulu = kisiler.every(
        eleman => {
            let yil = new Date(eleman.dob.date).getFullYear()
            return yil > 1950
        })

    let kadinlar = kisiler.filter(eleman => eleman.gender === "female")
    let erkekler = kisiler.filter(eleman => eleman.gender === "male")




    return (
        <>
            <div className='row'>

                {dogumKosulu ? <p>Tüm üyeler 1950'den büyük</p> : <p> En az bir kişi 1950'den küçük</p>}
                {kadinVarmi ? <p>En az 1 kadın üye var</p> : <p>Hiç kadın üye yok.</p>}
                {kadinlar.map((kisi, index) => { return <Kisi veri={kisi} key={index} /> })}
                {erkekler.map((kisi, index) => { return <Kisi veri={kisi} key={index} /> })}

            </div>
        </>
    )

}

export default KisiListe

//            {kisiler.map((kisi, index) => { return <Kisi veri={kisi} key={index} /> })}



// return div            {<Kisi veri={arananKisi}/>}
// return div            {kadinVarmi ? <p>En az 1 kadın üye var</p> : <p>Hiç kadın üye yok.</p>}
// return div            {kadinlar.map((kisi, index) => { return <Kisi veri={kisi} key={index} /> })}