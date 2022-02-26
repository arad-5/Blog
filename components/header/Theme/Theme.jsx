import styles from './theme.module.css'

const Theme = ({ setIsThemeDark, isThemeDark }) => {
    return (
        <button
            className="relative h-[2rem] w-[2rem] overflow-hidden rounded-full"
            onClick={() => setIsThemeDark((curr) => !curr)}
        >
            <div
                className={`h-16 w-16 ${
                    isThemeDark ? styles.dark : styles.light
                } ${styles.circle}`}
            >
                <div className={`h-[2rem] w-[2rem] rounded-full ${styles.sun}`}></div>
                <div
                    className={`h-[2rem] w-[2rem] rounded-full bg-slate-300 ${styles.moon}`}
                ></div>
            </div>
        </button>
    )
}

export default Theme
