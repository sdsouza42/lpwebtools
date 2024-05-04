// import styles from '@/app/UI/home.css';
import Stats from '@/app/Stats/page';
export default function Page() {
    return (
        <div id="equipLayout" className="flex flex-row">
            <div id="equipBar" className="flex flex-col">
                <button>Weapon</button>
                <button>Armor</button>
                <button>Accessory</button>
                <button>Consumable</button>
            </div>
            <div className="flex-grow">
                <Stats />
            </div>
        </div>
    );
}
