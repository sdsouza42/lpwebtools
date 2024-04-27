// import styles from '@/app/UI/home.css';
import { Button } from '@/app/UI/button';
import Equip from '@/app/Equip/page';
import Link from 'next/link';


export default function Page() {
  return (
    <main className=" min-h-screen p-6 bg-gray-200 flex flex-col items-center justify-center">
      <h1>Home page</h1>
      <div className=" mx-autorelative flex flex-row items-center justify-around" id='lvlbar'>
        <Button className=""> Class: classname </Button>
        <Button className=""> Level: classlevel </Button>
      </div>
      <div className="min-w-screen min-h-screen mx-auto mt-0 bg-white shadow-xl border-2 border-blue-500 rounded-md mx-autorelative flex" id='outterframe'>
        <div className=" flex flex-col mx-autorelative items-center justify-around" id='sidebar'>
          <Button className=""> Skills </Button>
          <Button className=""> Passives </Button>
          <Link href="./Equip">
            <Button className=""> Equipment </Button>
          </Link>
          <Button className=""> Idols </Button>
          <Button className=""> Blessing </Button>
        </div>
        <div className="mx-autorelative flex flex-col justify-end flex-grow content-center" id='innerframe'>
          <div className="flex-grow" id='dcontent'>
            <div>
              <Equip />
            </div>
          </div>
          <div className=" mx-autorelative flex flex-row justify-around flex-wrap" id='skillbar'>
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