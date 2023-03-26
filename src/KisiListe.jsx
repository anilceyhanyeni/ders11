import kisiler from './veri.js'
import Kisi from './Kisi.jsx'

function KisiListe() {
    return (
        <>
            <div className='row'>
            {kisiler.map((kisi, index) => { return <Kisi veri={kisi} key={index} /> })}
            </div>
        </>
    )

}

export default KisiListe
