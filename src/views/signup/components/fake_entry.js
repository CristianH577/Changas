import locationList from '../../../json/location.json';
import occList from '../../../json/occsList.json';
import { name, surname, username, loremIpsum } from 'react-lorem-ipsum';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import FilesImg from '../../../components/files_img';

function FakeEntry() {
    const [newEntry, setNewEntry] = useState({
        accType: "",
        email: "",
        password: "0",
        profileImg: "",
    
        cognomen: "",
        surname: "",
        department: "",
        ngb: "",
        prefix: "381",
        phone: "",
    
        occs: "",
        jobsExamples: "",
        jobs: []
    })

    const fakeEntry = async() => {
      var k = ""
      getN(2) === 0 ? k = "work" : k = "employ"
      k = "employ"
      newEntry.accType = k
  
      newEntry.email = "fake"+getN(1000)+"@entry.com"
  
      newEntry.cognomen = name()
      newEntry.surname = surname()
  
      const d = getN(16) 
      locationList.forEach((item, idx) => {
        if(idx === d){
          newEntry.department = item.department
  
          const n = getN(item.municipalities.length)
          item.municipalities.forEach((subitem, subidx) => {
            if(subidx === n){
              newEntry.ngb = subitem
            }
          })
        }
      })

      var phone = ""
      for (let i = 0; i < 7; i++) {
        phone = phone + getN(10).toString()
      }
      newEntry.phone = phone
  
      const numO = occList.length
      var occsIdx = ["", "", ""]      
      for (let i = 0; i < 3; i++) {
        switch (i) {
          case 0:
            occsIdx[0] = getN(numO)
            break;
          case 1:
            occsIdx[1] = getN(numO)
            while (occsIdx[1] === occsIdx[0]) {
              occsIdx[1] = getN(numO)
            }
            break;
          case 2:
            occsIdx[2] = getN(numO)
            while (occsIdx[2] === occsIdx[0] || occsIdx[2] === occsIdx[1]) {
              occsIdx[2] = getN(numO)
            }
            break;
        
          default:
            break;
        }
      }

      var occs = ["", "", ""] 
      for (let i = 0; i < 3; i++) {
        // eslint-disable-next-line
        occList.map((item, idx) => {
          if (idx === occsIdx[i]) {
            occs[i] = item
          }
        })
      }

      var jobs = []
      for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
          const lorem = loremIpsum()
          const job = {
            occ: occs[i],
            category: "", 
            name: username(), 
            price: getN(100000), 
            description: lorem[0], 
            imgs: ""
          }
          jobs.push(job)
        }
      }
      if(k === "work"){
        const exp = ["-1", "+1", "+5", "+10"]
        var addOccs = []
        for (let i = 0; i < 3; i++) {
            addOccs[i] = []
            addOccs[i][0] = occs[i]
            var n = getN(exp.length)
            // eslint-disable-next-line
            exp.map((item, idx) => {
                if (idx === n) {
                    addOccs[i][1] = item
                }
            })
        }
        //newEntry.occs = addOccs
        newEntry.occs = JSON.stringify(addOccs)
        
        var cat
        for (let i = 0; i < jobs.length; i++) {
          i < 3 ? cat = 0 : cat = 1
          jobs[i].category = cat
        }
      }
  
      if(k === "employ"){
        newEntry.occs = ""
        newEntry.jobsExamples = ""
        for (let i = 0; i < jobs.length; i++) {
          jobs[i].category = 2
        }
      }
      //newEntry.jobs = jobs
      newEntry.jobs = JSON.stringify(jobs)
  
      //console.log(newEntry)
      submitFakeEntry()
    }
  
    const getN = (max) => {
      return Math.floor(Math.random() * max)
    }

    const submitFakeEntry = async() => {
      const formData = new FormData()

      Object.entries(newEntry).forEach((item) => {
        switch (item[0]) {
          case "jobsExamples":
            var files = item[1]
            var addName 
            var addValue 
            for (let i = 0; i < files.length; i++) {
              addName = "jobsExamples_" + i
              addValue = files[i]
              formData.append(addName, addValue);
            }
            break;
          case "jobs_0":
            var files = item[1]
            var addName 
            var addValue 
            for (let i = 0; i < files.length; i++) {
              addName = item[0] + "-" + i
              addValue = files[i]
              formData.append(addName, addValue);
            }
            break;
          case "jobs_1":
            var files = item[1]
            var addName 
            var addValue 
            for (let i = 0; i < files.length; i++) {
              addName = item[0] + "-" + i
              addValue = files[i]
              formData.append(addName, addValue);
            }
            break;
        
          default:
            formData.append(item[0], item[1]);
            break;
        }
      })
      console.log(newEntry)

      // const answer = await axios.post('http://localhost:50/ChangasAPI/signup/registerUser', formData)
      // console.log(answer)
    }

    return(
      <>
      <Form.Control type="file" accept="image/*" name="profileImg" onChange={(e) => {
        const addName = e.target.name
        const addValue = e.target.files[0]
        
        setNewEntry({ ...newEntry, [addName]: addValue })
        console.log(newEntry)
      }} />

      
      <FilesImg 
        label={"Imagenes de muestra"}
        name={"jobsExamples"}
        onChange={(e) => {
          const addName = e.target.name
          const addValue = e.target.files
          
          setNewEntry({ ...newEntry, [addName]: addValue })
          console.log(newEntry)
        }}
      />
      <FilesImg 
        label={"Imagenes de job 0"}
        name={"jobs_0"}
        onChange={(e) => {
          const addName = e.target.name
          const addValue = e.target.files
          
          setNewEntry({ ...newEntry, [addName]: addValue })
          console.log(newEntry)
        }}
      />
      <FilesImg 
        label={"Imagenes de job 1"}
        name={"jobs_1"}
        onChange={(e) => {
          const addName = e.target.name
          const addValue = e.target.files
          
          setNewEntry({ ...newEntry, [addName]: addValue })
          console.log(newEntry)
        }}
      />

      <Button variant="danger" type="button" onClick={() => fakeEntry()}>
        ENTRY
      </Button>
      </>
    )
}

export default FakeEntry;