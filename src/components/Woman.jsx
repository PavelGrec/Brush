


const Woman = () => {

    const price = [
        {id:1,name:'základní ostříhání',price:'450'},
        {id:2,name:'Ostrříhání s obarvením ',price:'850'},
        {id:3,name:'Slavnostní účes',price:'950'},
        {id:4,name:'Ostříhání 80\' let',price:'500-720'},
        {id:5,name:'Poradenství',price:'150kč'},
        {id:6,name:'Stříhaní, barvení, poradenství',price:'1000'}
    ]
  return (
    <main>
    <div className="width">
        <section>
            <h2>Dámy</h2>
            <h3>
                Vlasy byly vždycky už jednou z hlavních dominantou žen, proto je potřeba je udržovat v pokud možno co nejlepší kondici. Většina žen si barví vlasy a proto je důležité vybrat vhodnou barvu a délku k jejich pleti. Naše kadeřnice jsou na takové aspekty velmi dobře proškoleny.
            </h3>
        </section>

        <section>
            <h2>Ceník dámských účesů</h2>
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

export default Woman