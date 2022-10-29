import Account from "./components/account";
import Experience from "./components/experience/experience";
import Personal from "./components/personal";

function Signup() {
    return (
      <form>
        <h1>Signup</h1>

        <Account />

        <Personal />

        <Experience />
      </form>
    );
  }
  
  export default Signup;
  