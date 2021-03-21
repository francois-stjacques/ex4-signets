import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Couverture from '../images/couverture.webp';

export default function Dossier({id, nom, couleur, datemodif, couverture}) {

  // export default function MenuSimple() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const gestionClick = (evenement) => {
      setAnchorEl(evenement.currentTarget);
    };
  
    const gestionFermer = () => {
      setAnchorEl(null);
    };

  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={couverture || Couverture} alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small">
        <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={gestionClick}>
        <MoreVertIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={gestionFermer}
      >
        <MenuItem onClick={gestionFermer}>Modifier</MenuItem>
        <MenuItem onClick={gestionFermer}>Supprimer</MenuItem>
      </Menu>
    </div>
      </IconButton>
    </article>
  );

}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}