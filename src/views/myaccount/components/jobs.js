import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Jobs({idUser, accType}) {
    const [jobs, setJobs] = useState([])
    const direc = 'http://localhost:50/ChangasAPI/assets/imgs/jobs/' + idUser + "/"

    const getJobs = async() => {
        const formData = new FormData()
        formData.append('idUser', idUser)

        await axios.post('http://localhost:50/ChangasAPI/account/getJobs', formData)
        .then( answer => {
        //   console.log(answer)
          answer.data.forEach((item) => {
            if(item.imgs_job !== ""){
                item.imgs_job = JSON.parse(item.imgs_job)
            }
          })
        //   console.log(answer.data)
          setJobs(answer.data)
        })
        .catch( error => {
          console.log(error)
        })
    }

    useEffect(() => {
        getJobs()
    // eslint-disable-next-line
    }, [])

    return(
        <Table striped>
            <thead>
                <tr>
                    <th>Ocupacion</th>
                    {accType === 'work' && <th>Nombre</th>}
                    <th>Precio</th>
                    <th>Descripcion</th>
                </tr>
            </thead>

            <tbody>
                {
                jobs.map((job) => 
                    <>
                    <tr key={job.id_job}>
                        <td>{job.occ}</td>
                        {accType === 'work' && <td>{job.name_job}</td>}
                        <td>{job.price}</td>
                        <td>{job.description_job}</td>
                    </tr>
                    {job.imgs_job !== "" && 
                        <tr>
                            {job.imgs_job.map((img) => 
                                <td><img src={direc + job.id_job + "/" + img} alt="" className="w-100" /></td>
                            )}
                        </tr>
                    }
                    </>
                )
                }
            </tbody>
        </Table>
    );
}

export default Jobs;