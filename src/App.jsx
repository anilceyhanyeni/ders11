import KisiListe from "./KisiListe"

function App() {

    return (
        <>
            <header className="container">
                <div>LOGO</div>
                <nav>MENÜ</nav>
            </header>
            <section className="container bg-primary-subtle">
                <KisiListe />
            </section>
            <footer className="container">
                <p>Tüm hakları saklıdır. Kodlama: Süper Ajans</p>
            </footer>
        </>

    )
}

export default App