// import styles from '@/app/UI/home.css';
import { Button } from '@/app/UI/button';

export default function Page() {
  return (
    <main className=" min-h-screen p-6 bg-gray-200 flex flex-col items-center justify-center">
      <h1>Home page</h1>
      <div className=" mx-autorelative flex flex-row items-center justify-around" id='lvlbar'>
        <Button className=""> Class: classname </Button>
        <Button className=""> Level: classlevel </Button>
      </div>
    </main>
  );
}