function Reviews(props) {
    return(
        <section className="mt-4">
            <h2>Valoraciones</h2>
            <ul className="list-unstyled">

            {
            props.reviews.map((review, idx) =>
                <li key={idx}>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item col-4">
                            {review[0]}
                        </li>
                        <li className="list-group-item col-4">
                            {review[1]}
                        </li>
                        <li className="list-group-item col-4">
                            {review[2]}
                        </li>
                    </ul>
                </li>
            )}

            </ul>
        </section>
    );
}

export default Reviews;