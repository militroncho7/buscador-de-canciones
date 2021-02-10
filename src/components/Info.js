import React from 'react';

const Info = ({info}) => {

    if(Object.keys(info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES, strWebsite } = info;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
            
                { strGenre.length === 0 ? null : <p className="card-text"><b>Género: </b>{strGenre}</p>}

                { strWebsite.length === 0 ? null : <p className="card-text"><b>Página Web: </b>{strWebsite}</p>}
                
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                        {/* <i className="fab fa-facebook-f red lighten-2"></i> */}
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>               
                </p>
                <br/>  
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES}</p>
            </div>
        </div>
    );
}
 
export default Info;