import React, {Component} from 'react';
import Title1 from '../components/Title1';
import {Link} from 'react-router-dom';
import styles from '../styles/components/BottomMenu.css';

import {inject, observer} from 'mobx-react';
@inject('viewerStore', 'threadStore', 'themeStore')

class BottomMenu extends Component {
    showMenu(){
        return this.props.themeStore.ThemesList.map(item =>
            <li key={item.id}>
                <Link className="btn13" to={"/"+item.slug}>{item.name} </Link>
            </li>
        );
    }
    render() {
        return (
            <div className="bottom-banner">
                <div className="container bottom-menu mob-hide">
                    <h3>Aprende cómo curar otras enfermedades</h3>
                    <ul className="c-menu">
                        {this.showMenu()}
                        {/*<li><Link to="#" className="btn13">Anemia</Link></li>
                        <li><Link to="#" className="btn13">Artritis Reumatoide</Link></li>
                        <li><Link to="#" className="btn13">Bajar de Peso</Link></li>
                        <li><Link to="#" className="btn13">Colesterol Alto</Link></li>
                        <li><Link to="#" className="btn13">Diabetes & Prediabetes</Link></li>
                        <li><Link to="#" className="btn13">Fibromialgia</Link></li>*/}
                    </ul>
                </div>

                <div className="container bottom-menu-mob desk-hide">
                    <Title1>Aprende cómo curar otras enfermedades</Title1>
                    <ul className="cat-menu2">
                        {this.showMenu()}
                 {/*       <li className=""><Link to="#">Anemia</Link></li>
                        <li className=""><Link to="#">Artritis Reumatoide</Link></li>
                        <li className=""><Link to="#">Bajar de Peso</Link></li>
                        <li className=""><Link to="#">Colesterol Alto</Link></li>
                        <li className=""><Link to="#">Diabetes & Prediabetes</Link></li>
                        <li className=""><Link to="#">Fibromialgia</Link></li>*/}

                    </ul>
                </div>
            </div>
        );
    }
}

export default BottomMenu;

