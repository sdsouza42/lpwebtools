// import styles from '@/app/UI/home.css';
import Passive from "./Properties";

const testPassive = new Passive("test", "test", 8);
const testPassive2 = new Passive("test2", "test2", 5, "test");

export default function Page() {
    return (
        <div>
            <h1>Passive</h1>
            <div>
                <h2>Passive 1</h2>
                <p>{testPassive.getName()}</p>
                <p>{testPassive.getDescription()}</p>
                <p>{testPassive.getMaxLevel()}</p>
                <p>{testPassive.getLevel()}</p>
                <p>{testPassive.getUnlock()}</p>
            </div>
            <div>
                <h2>Passive 2</h2>
                <p>{testPassive2.getName()}</p>
                <p>{testPassive2.getDescription()}</p>
                <p>{testPassive2.getMaxLevel()}</p>
                <p>{testPassive2.getLevel()}</p>
                <p>{testPassive2.getUnlock()}</p>
            </div>
        </div>

    );
}
