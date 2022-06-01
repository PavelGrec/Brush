import {useState} from 'react'

function Nav(props){
    // const data=[{id:1,name:'O nás'},{id:2,name:'Pánské sestřihy'},{id:3,name:'Dámské sestřihy'}]
    // const [shownav,setShowNav] = useState(false)

    function turnOnIntro(){
        let nav = document.getElementById('width')
        props.turnOff()
        props.setIntro()
        nav.classList.remove('active');
    }
    function turnOnMan(){
        let nav = document.getElementById('width')
        props.turnOff()
        props.setMan()
        nav.classList.remove('active')
    }
    function showmenu(){
        let nav = document.getElementById('width')
        let navblocks = [...document.querySelectorAll('.botnavBlock, .midnavBlock, .topnavBlock')]
        navblocks.map(x=>x.classList.toggle('active'))
        nav.classList.toggle('active')
    }

    function turnOnWoman(){
        let nav = document.getElementById('width')
        props.turnOff()
        props.setWoman()
        nav.classList.remove('active')
    }
    


    return(
        <nav>
            <div className="burgermenu" onClick={()=>showmenu()}>
                <div className="block topnavBlock"></div>
                <div className="block botnavBlock"></div>
                <div className="block midnavBlock"></div>
            </div>

            <div className="width" id='width'>
                <ul>
                    <li key="1" onClick={()=>turnOnIntro()}><h3>O nás</h3></li>
                    <li key="2" onClick={()=>turnOnMan()}  ><h3>Pánské sestřihy</h3></li>
                    <li key="3" onClick={()=>turnOnWoman()}><h3>Dámské sestřihy</h3></li>
                </ul>
                <a className="tel" href="tel:+720642623"><h3>+420 720642623</h3></a>
            </div>

        </nav>
    )

}
export default Nav