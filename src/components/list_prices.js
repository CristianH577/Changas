function ListPrices(props) {
    return(
        <section>
            {
            props.jobs.map((item, idx) =>
                <table className="table table-hover caption-top" key={idx}>
                    <caption>Lista de trabajos: {item.occ}</caption>
                    <thead className="">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descripcion</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {item.list.map((job,idx) =>
                            <tr key={idx}>
                                <th scope="row">{job[0]}</th>
                                <td>${job[1]}</td>
                                <td>{job[0]}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </section>
    );
}

export default ListPrices;