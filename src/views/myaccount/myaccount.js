import Cookies from 'universal-cookie';
import CardInfo from './components/card_info';
import Jobs from './components/jobs';
import JobsExamples from './components/jobs_examples';

function MyAccount() {
  const cookies = new Cookies()
  const userData = cookies.get("user")
  console.log(userData)

  return (
    <>
    <h1>MyAccount</h1>

    <CardInfo
      data={userData}
    />

    {userData.acc_type === 'work' &&
      <JobsExamples 
        id={userData.id_user}
        jobsExamples={userData.jobs_examples} 
      />
    }

    <Jobs
      accType={userData.acc_type}
      idUser={userData.id_user}
    />
    </>
  );
}

export default MyAccount;
