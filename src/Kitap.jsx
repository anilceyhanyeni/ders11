import "./Kitap.css"

const Kitap = ({kitap}) => {   //süslü paranteze dikkat
    return(
        <div className="kitap-cerceve">
            <p>{kitap.ad}</p>
            <p>{kitap.yazar}</p>
            <p>{kitap.fiyat}</p>

        </div>
    )
}

export default Kitap