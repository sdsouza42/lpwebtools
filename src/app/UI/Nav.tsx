import Equip from '@/app/Equip/page';
import Skills from '@/app/Skills/page';
import Passives from '@/app/Passive/page';
import Idols from '@/app/Idols/page';
import Blessing from '@/app/Blessing/page';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="w-3/4 min-h-screen mx-auto mt-0 bg-white shadow-xl border-2 border-blue-500 rounded-md mx-autorelative flex" id='outterframe'>
            <div className=" flex flex-col mx-autorelative items-center justify-around" id='sidebar'>
                <Link href='./Skills'>
                    <Button className=""> Skills </Button>
                </Link>
                <Link href='./Passives'>
                    <Button className=""> Passives </Button>
                </Link>
                <Link href="./Equip">
                    <Button className=""> Equipment </Button>
                </Link>
                <Link href="./Idols">
                    <Button className=""> Idols </Button>
                </Link>
                <Link href="./Blessing">
                    <Button className=""> Blessing </Button>
                </Link>
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
    );
}