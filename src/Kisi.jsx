function Kisi({ veri }) {
    let dogumTarihi = new Date(veri.dob.date).getFullYear()

    return (
        <div className="col-md-3">
            <img src={veri.picture.medium} alt=""></img>
            <p>{veri.name.first} {veri.name.last}</p>
            <p>{dogumTarihi}</p>
        </div>

    )
}

export default Kisi