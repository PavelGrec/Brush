import Iframe from 'react-iframe'

function Intro(){

    const openTime = [
{id:1,name:"Pondělí: 8:00 - 17:00"},
{id:2,name:"Úterý: 8:00 - 17:00"},
{id:3,name:"Středa: 8:00 - 14:00"},
{id:4,name:"Čtvrtek: 8:00 - 17:00"},
{id:5,name:"Pátek: 8:00 - 17:00"},
{id:6,name:"Sobota: 8:00 - 12:00"},
{id:7,name:"Neděle: Zavřeno"},
    ]

    return (
        <main>
            <div className="width">
                <section>
                <h2>Kdo že to jsme?</h2>
                <h3> Kadeřnictví Brush je známé v Anglii od roku 1933. Tuto tradici jsme přenesli do České republiky a stříháme jak muže tak ženy. V roce 2010 s velkým úspěchem stříháme i děti máme nejrůznější trendy ve střihu a naši kadeřnici se školí každého půl roku podle nejnovějších trendů. Proto se prakticky nemůže stát, že by kdokoliv sestřihem neodcházel jinak nežli spokojený.</h3>
                </section>

                <section>
                    <h2>V čem se lišíme?</h2>
                    <h3> Vnímáme náš úkol nejen ostříhat zákazníka, ale zároveň ho naučit jak se o vlasy pečovat a zlepšit jejich růst, U pánů jak pěstovat vousy a jak docílit růstu v chtěných místech</h3>
                </section>

                <section>
                    <h2>Jaký účes</h2>
                    <h3> Ne ke každému obličeji sluší každý účes. Proto jsou naši kadeřnici perfektně připravený se s vámi pobavit o tvaru obličeje, odstátých uších, směru rostoucích vlasů a poradit správný účes popřípadě délku délku vhodnou k těmto atributům.</h3>
                </section>

                <section>
                    <h2>Nebojte se nás kontaktovat</h2>

                    <div className="halfsection halfHeight">
                        <div className="half kontaktAdress">
                            <h3> Nacházíme se na ulici:<br/> Hybešova 2030<br/> Praha<br/>68101</h3>
                        </div>

                        <div className="half">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.614684345393!2d14.457632115609668!3d50.09350062090125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a71b64cd57%3A0xc8ba52c5eb0a5d36!2sHybe%C5%A1ova%2C%20186%2000%20Praha%208!5e0!3m2!1sen!2scz!4v1654001367221!5m2!1sen!2scz"
                        width="100%" 
                        height="200px" 
                        style="border:none;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"/>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Otevírací doba</h2>
                    {openTime.map(x=>
                    <div key={x.id}>
                        <h4 className="textcenter">{x.name}</h4>
                    </div>
                    )}
                </section>

            </div>

        </main>
    )
}
export default Intro