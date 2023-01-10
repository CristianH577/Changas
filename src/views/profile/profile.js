import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import CardInfo from "./components/card_info";
import { configContext } from '../../context/config_context'
import Slider from "../../components/slider";
import TableJobs from "./components/table_jobs";

function Profile() {
  const config = useContext(configContext)
  const style = config.style.value

  const { id } = useParams();

  const [data, setData] = useState({
    user: {
      acc_type: "",
      cognomen: "",
      department: "",
      email: "",
      id_user: "",
      jobs_examples: "",
      ngb: "",
      occs: "",
      phone: "",
      prefix: "",
      profile_img: "",
      surname: "",
      time_stamp: ""
    },
    jobs: []
  })
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const getData = async() => {
    const formData = new FormData()
    formData.append('id', id)

    await axios.post('http://localhost:50/ChangasAPI/search/getUser', formData)
    .then( answer => {
      setTimeout(() => {
        answer.data.jobs.forEach((item) => {
          if(item.imgs_job !== ""){
              item.imgs_job = JSON.parse(item.imgs_job)
          }
        })
        setData(answer.data)
      }, 1000);
    })
    .catch( error => {
      console.log(error)
    })
  }

  return (
    <>
      <h1 className='text-center'>Perfil</h1>

      <CardInfo
        data={data.user}
        style={style}
      />

      { data.user.jobs_examples !== "" &&
        <section className=' w-100 w-md-75 mb-3 center'>
          <Slider 
            directory = {'http://localhost:50/ChangasAPI/assets/imgs/jobsExamples/' + data.user.id_user + "/"}
            imgs={JSON.parse(data.user.jobs_examples)} 
            width='100%' 
            maxWidth='1000px'
            className='border border-4'
          />
        </section>
      }
  
      <TableJobs
        idUser={data.user.id_user}
        accType={data.user.acc_type}
        jobsList={data.jobs}
        style={style}
        class='border border-4 w-100 w-md-75'
      />
    </>
  );
}

export default Profile;
