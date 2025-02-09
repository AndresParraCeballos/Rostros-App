// Predefined packages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom packages
import VerDesaparecidos from './VerDesaparecidos';

// Assets
import logoazulv from '../../img/logoazulv.png';
import home from '../../img/home.png';
import usersolid from '../../img/home.png';
import userfriends from '../../img/userfriends.png';
import question from '../../img/question.png';
import bell from '../../img/bell.png';
import language from '../../img/language.png';
import signout from '../../img/signout.png';
import search from '../../img/search.png';
import filter from '../../img/filter.png';
import coinz from '../../img/coinz.png';
import ItemDesaparecido from './ItemDesaparecido';

const PanelUsuario = () => {

    const [menu, setMenu] = useState(1);

    return (
        <div className="grid__desaparecido">
            <aside className="grid__aside">

                <Link to="/">
                    <img className="aside__imagen logo__aside" src={logoazulv} alt="Logo Rostros" />
                </Link>

                <div className="item__aside">
                    <Link to="/">
                        <img className="aside__imagen" src={home} alt="Icono Home" />
                        <h3 className="titulo__aside centrar-texto">Inicio</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={()=>setMenu(1)}>
                        <img className="aside__imagen" src={usersolid} alt="Icono User" />
                        <h3 className="titulo__aside centrar-texto">Reportar Desaparecido</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={()=>setMenu(2)}>
                        <img className="aside__imagen" src={userfriends} alt="Icono Users" />
                        <h3 className="titulo__aside centrar-texto">Ver Desaparecidos</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={()=>setMenu(3)}>
                        <img className="aside__imagen" src={coinz} alt="Icono Coin" />
                        <h3 className="titulo__aside centrar-texto">Donar</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={()=>setMenu(4)}>
                        <img className="aside__imagen" src={question} alt="Icono Question" />
                        <h3 className="titulo__aside centrar-texto">Ayuda</h3>
                    </Link>
                </div>
            </aside>

            <div className="grid__main">
                <nav className="flexbox">
                    <Link className="label__nav" to="/#">
                        <img className="flexbox__navimagen flexbox__navimagen--bell centrar-texto" src={bell} alt="Icono Campana" />
                    </Link>
                    <Link className="label__nav" to="/#">
                        English<img className="flexbox__navimagen" src={language} alt="Icono Lenguaje" />
                    </Link>
                    <Link className="label__nav" to="/">
                        Salir<img className="flexbox__navimagen flexbox__navimagen--sign" src={signout} alt="Icono Sign Out" />
                    </Link>

                </nav>

                <div className="search">
                    <input className="input__search" type="search" placeholder="Consulte por el nombre" />
                    <button className="btn__search"><img className="search__img" src={search} alt="Buscar" /></button>
                </div>

                <div className="filter">
                    <div className="filter__checks">
                        <button><img className="filter__img" src={filter} alt="Filtrar" /></button>
                        <input type="checkbox" name="asc" id="asc" />Más reciente
                        <input type="checkbox" name="des" id="desc" />Más antigua
                    </div>
                </div>

                {/** Secciones */}

                {menu === 2
                ?
                <VerDesaparecidos
                    setMenu={setMenu}
                />
                :
                <ItemDesaparecido/>
                }
                
            </div>
        </div>
    );
}

export default PanelUsuario;