import styles from '@/app/UI/home.css'; 
import {Button} from '@/app/UI/button'; 
export default function Page() { 
  return ( 
  <main className="static min-h-screen p-6 bg-gray-200 flex flex-col items-center justify-center">
    <h1>Home page</h1>
    <div className=" mx-autorelative flex flex-row items-center justify-around" id='lvlbar'>
      <Button className=""> Class: classname </Button>
      <Button className=""> Level: classlevel </Button>
    </div>
    <div className="w-3/4 mx-auto mt-0 bg-white shadow-xl border-2 border-blue-500 rounded-md mx-autorelative flex justify-start" id='outterframe'>
      <div className=" mx-autorelative items-center justify-around" id='sidebar'>
        <Button className=""> Skills </Button>
        <Button className=""> Passives </Button>
        <Button className=""> Equipment </Button>
        <Button className=""> Idols </Button>
        <Button className=""> Blessing </Button>
      </div>
      <div className="mx-autorelative flex flex-col justify-end flex-grow content-center" id='innerframe'>
        <div className="flex-grow" id='dcontent'>
          <div>
            <p>content</p>
          </div>
        </div>
        <div className=" mx-autorelative flex flex-row justify-around" id='skillbar'>
          <Button className=""> Skill1 </Button>
          <Button className=""> Skill2 </Button>
          <Button className=""> Skill3 </Button>
          <Button className=""> Skill4 </Button>
          <Button className=""> Skill5 </Button>
        </div>
      </div>
    </div>
  </main> 
  ); 
}