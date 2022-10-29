function CardData(props) {
    const subjobs = props.occs.splice(1).map((occ, index) => 
      <li key={index}>
        {occ[0]} - {occ[1]}
      </li>
    );

    return(
        <section>
          <h2>Perfil</h2>

        {/* <!-- Necesito img: original, 150/300  --> */}
          <div className="row mb-2">
              <article className="col-3">
                  <img src={require(`../../assets/imgs/${props.personal.img}`)} alt="alt" className="img-thumbnail" />
              </article>
              <article className="col-9">
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex">
                        Nombre: {props.personal.name} {props.personal.surname}
                      </li>
                      <li className="list-group-item">
                        Localidad: {props.personal.department} - {props.personal.nbh}
                      </li>
                      <li className="list-group-item">
                        Contacto: {props.personal.prefix} - {props.personal.phone}
                      </li>
                      <li className="list-group-item">
                        Ocupacion: {props.occs[0][0]} - {props.occs[0][1]}
                      </li>
                      <li className="list-group-item">
                        Subocupacion: 
                        <ul>
                          { subjobs }
                        </ul>
                      </li>
                  </ul>
                </article>
          </div>
        </section>
    );
}

export default CardData;