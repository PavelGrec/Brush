

const Man = () => {
    const price = [
        {id:1,name:'základní ostříhání',price:'250'},
        {id:2,name:'Základní ostříhání s vousy',price:'350'},
        {id:3,name:'Ostrříhání s obarvením',price:'650'},
        {id:4,name:'Orříhání a vystříhání obrazce',price:'500-720'},
        {id:5,name:'Poradenství',price:'150kč'},
        {id:6,name:'Stříhaní, barvení, poradenství',price:'900'}
    ]

  return (
    <main>
        <div className="width">
            <section>
                <h2>Pánové</h2>
                <h3> Střihu vousů a vlasů i pro muže dnes důležitější než kdy předtím, je to zdroj reprezentace a správné zařazení do společnosti. Muži celkově mají na starost daleko méně péče než li ženy, proto by se na ni měli za měřit. Naši kadeřnici nebo kadeřnice pro vás Budou zároveň i vzhledově mi poradci ohledně vlasů a vousů, proto se nemůže stát, že váš účes nebude korespondovat s tvarem vašeho obličeje a jinými atributy </h3>
            </section>

            <section>
                <h2>Ceník pánských účesů</h2>
                {price.map(x=>
                    <div key={x.id} className="oneprice">
                        <h3 className="textcenter">{x.name}</h3>
                        <p className="textcenter">{x.price+" kč"}</p>
                    </div>
                    )}
            </section>
            
        </div>
    </main>
  )
}

export default Man